<?php

use App\Http\Controllers\IrregularController;
use App\Http\Controllers\GameController;
use App\Http\Controllers\UserGameController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/irregular', [IrregularController::class, 'getIrregulars']);
Route::get('/irregular-paginate', [IrregularController::class, 'getIrregularsPaginate']);
Route::get('/list-game', [GameController::class, 'getListGame']);
Route::get('/game-{id}', [GameController::class, 'show']);
Route::get('/user-{id}', [UserController::class, 'show']);
Route::get('/history-{user_id}-{game_id}', [UserGameController::class, 'getScore']);


