<?php

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

use App\Http\Controllers\AuthController;

// Inscription
Route::post('/register', [AuthController::class, 'register']);

// Connexion
Route::post('/login', [AuthController::class, 'login']);

// Déconnexion
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

// Récupérer l'utilisateur connecté
Route::get('/user', [AuthController::class, 'getUser'])->middleware('auth:sanctum');
