<?php

use App\Http\Controllers\PlussController;
use App\Http\Controllers\PlussTipusController;
use Illuminate\Support\Facades\Route;


Route::get('/pluss', [PlussController::class, 'index']);
Route::get('/pluss/{pluss}', [PlussController::class, 'show']);
Route::post('/pluss', [PlussController::class, 'store']);

// Plüss típusok
Route::get('/pluss-tipus', [PlussTipusController::class, 'index']);
Route::get('/pluss-tipus/{plussTipus}', [PlussTipusController::class, 'show']);
Route::post('/pluss-tipus', [PlussTipusController::class, 'store']);
