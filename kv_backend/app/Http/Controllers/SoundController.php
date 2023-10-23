<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
class SoundController extends Controller
{
    public function index($id)
    {
        $sounds = \App\Models\Sound::where('character_id',$id)->get();
        return response()->json($sounds,200);
    }

    public function store(Request $request)
    {
        $sound = new \App\Models\Sound;
        $sound->name = $request->name;
        $sound->character_id = $request->character_id;

        $soundFile = $request->file('sound');
        $soundName = md5(rand(0, 999) . time() . rand(0, 999)) . '.' . $soundFile->getClientOriginalExtension();
        $originalSoundPath = public_path(env("SOUND_PATH"));
        if(!File::isDirectory($originalSoundPath)){
            File::makeDirectory($originalSoundPath, 0777, true, true);
        }

        $soundFile->move($originalSoundPath, $soundName);
        $sound->sound = $soundName;
    
        $sound->save();
        return response()->json([
            "message" => "Sound created"
        ], 200);
    }

    public function delete($id)
    {
        $sound = \App\Models\Sound::find($id);
        if($sound){
            $sound->delete();
            return response()->json([
                "message" => "Sound deleted"
            ], 202);
        }
        return response()->json([
            "message" => "Sound not found"
        ], 404);
    }
}
