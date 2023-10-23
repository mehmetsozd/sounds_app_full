<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        \App\Models\Category::create([
            'name' => 'Devlet',
            'picture' => 'devlet.png',
        ]);

        \App\Models\Category::create([
            'name' => 'Mafya',
            'picture' => 'mafya.png',
        ]);
    }
}
