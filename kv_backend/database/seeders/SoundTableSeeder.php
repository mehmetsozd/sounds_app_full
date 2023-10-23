<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SoundTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Sound::create([
            'character_id' => 1,
            'name' => 'Ben racon kesmem kafa keserim ',
            'sound'=>'kafakeserim.mp3',
        ]);

        \App\Models\Sound::create([
            'character_id' => 2,
            'name' => 'Dostum olmaz, hasmım yaşamaz',
            'sound'=>'dostumolmaz.mp3',
        ]);

        \App\Models\Sound::create([
            'character_id' => 3,
            'name' => 'Kurtlukta düşeni yemek kanundur',
            'sound'=>'kurtlukta.mp3',
        ]);
    }
}
