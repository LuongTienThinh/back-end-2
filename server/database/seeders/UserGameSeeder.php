<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserGameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $data = [
            ['user_id' => 1, 'game_id' => 1, 'score' => 5000],
            ['user_id' => 1, 'game_id' => 1, 'score' => 123124],
            ['user_id' => 1, 'game_id' => 1, 'score' => 123213],
            ['user_id' => 1, 'game_id' => 1, 'score' => 345435],
            ['user_id' => 1, 'game_id' => 1, 'score' => 12321],
            ['user_id' => 1, 'game_id' => 1, 'score' => 23423],
            ['user_id' => 1, 'game_id' => 1, 'score' => 4353],
            ['user_id' => 1, 'game_id' => 1, 'score' => 2342],
            ['user_id' => 1, 'game_id' => 1, 'score' => 8769],
            ['user_id' => 1, 'game_id' => 1, 'score' => 21312],
            ['user_id' => 1, 'game_id' => 1, 'score' => 567],
            ['user_id' => 1, 'game_id' => 1, 'score' => 456],
            ['user_id' => 1, 'game_id' => 1, 'score' => 45654],
            ['user_id' => 1, 'game_id' => 2, 'score' => 2000],
            ['user_id' => 1, 'game_id' => 3, 'score' => 7000]
        ];

        DB::table('user_game')->insert($data);
    }
}