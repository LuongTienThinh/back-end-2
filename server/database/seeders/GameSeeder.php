<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // { id: '1', title: 'Irregular Verb', image: './irregular.jpg' },
        // { id: '2', title: 'Part Of Speech', image: './part-of-speech.jpg' },
        // { id: '3', title: 'Sentence', image: './sentence.jpg' },
        //
        $data = [
            ["title" => "Irregular Verb", "image" => "./irregular.jpg"],
            ["title" => "Part Of Speech", "image" => "./part-of-speech.jpg"],
            ["title" => "Sentence", "image" => "./sentence.jpg"],
        ];

        DB::table('game')->insert($data);
    }
}
