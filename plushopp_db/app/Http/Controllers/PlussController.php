<?php

namespace App\Http\Controllers;

use App\Models\Pluss;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PlussController extends Controller
{
   
    public function index(): JsonResponse
    {
        return response()->json(Pluss::with('tipus')->get());
    }

    
    public function show(Pluss $pluss): JsonResponse
    {
        return response()->json($pluss->load('tipus'));
    }

    // POST /api/pluss
    public function store(Request $request): JsonResponse
    {
        $adatok = $request->validate([
            'nev'            => 'required|string|max:255',
            'szuletesidatum' => 'required|date',
            'pluss_tipus_id' => 'required|integer|exists:pluss_tipus,id',
        ]);

        $pluss = Pluss::create($adatok);

        return response()->json($pluss->load('tipus'), 201);
    }
}
