import SoundPlayer from 'react-native-sound';
import React from 'react';

type AudioStatusType = 'loading' | 'success' | 'error' | 'play' | 'pause' | 'next' | 'previous' | 'stop';

interface IUseAudioHelper {
  name?: string;
  sound_path?: string;
}

export function useAudioHelper(request: IUseAudioHelper = {
  name: undefined,
  sound_path: undefined,
}) {
  const [sound, setSound] = React.useState(request.sound_path);
  const [name, setName] = React.useState(request.name);
  const [status, setStatus] = React.useState<AudioStatusType>('loading');
  const [errorMessage, setErrorMessage] = React.useState('');
  const [duration, setDuration] = React.useState(0);
  const [player, setPlayer] = React.useState<SoundPlayer>(null);
  const [currentTime, setCurrentTime] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (player && status === 'play') {
        player.getCurrentTime((seconds: number) => {
          setCurrentTime(seconds);
        })
      }
    }, 100);

    return () => clearInterval(interval);
  });

  function initialize() {
    setStatus('loading');
    if (player) {
      player.release();
    }

    const callback = (error, player: SoundPlayer) => {
      if (error) {
        setStatus('error');
        setErrorMessage(error.message);
      } else {
        setStatus('success');
        setErrorMessage('');
      }
      setDuration(player.getDuration());
    }

    const newPlayer = new SoundPlayer(sound, null, (error) => callback(error, newPlayer));
    setPlayer(newPlayer);
  }

  React.useEffect(() => {
    initialize();
  }, []);

  function playComplete(isEnd: boolean) {
    if (isEnd === true) {
      stop();
    }
  }

  function play(player: SoundPlayer) {
    if (player) {
      player.play(playComplete);
      setStatus('play');
    }
  }

  function pause() {
    if (player) {
      player.pause();
      setStatus('pause');
    }
  }

  function stop() {
    if (player) {
      player.stop();
      setStatus('stop');
    }
  }

  function getCurrentAudioName() {
    return name;
  }

  function seekToTime(seconds: number) {
    if (player) {
      player.setCurrentTime(seconds);
      setCurrentTime(seconds);
    }
  }

  function formatTimeString(value: number) {
    return new Date(value * 1000).toISOString().substr(11, 8)
  }

  function getDurationString() {
    return formatTimeString(duration);
  }

  function getCurrentTimeString() {
    return formatTimeString(currentTime);
  }

  return {
    play: () => play(player),
    pause,
    stop,
    seekToTime,
    status,
    duration,
    currentTime,
    durationString: getDurationString(),
    currentAudioName: getCurrentAudioName(),
    currentTimeString: getCurrentTimeString(),
    errorMessage,
  }
}

