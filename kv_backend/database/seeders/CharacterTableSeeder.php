<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CharacterTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Character::create([
            'category_id' => 1,
            'name' => 'Polat Alemder',
            'description'=>'KGT nin bir numaralı silahı',
            'picture' => 'polat.jpg',
        ]);

        \App\Models\Character::create([
            'category_id' => 1,
            'name' => 'Abdülhey',
            'description'=>'Polatı korumakla görevli KGT ajanı',
            'picture' => 'abdulhey.jpg',
        ]);

        \App\Models\Character::create([
            'category_id' => 2,
            'name' => 'Mehmet Karahanlı',
            'description'=>'Kurtlar Vadisi konseyinin Baronu',
            'picture' => 'polat.jpg',
        ]);
    }
}
