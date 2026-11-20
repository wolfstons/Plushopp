<?php

namespace App\Http\Controllers;

use App\Models\PlussTipus;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PlussTipusController extends Controller
{
    // GET /api/pluss-tipus
    public function index(): JsonResponse
    {
        return response()->json(PlussTipus::all());
    }

    // GET /api/pluss-tipus/{id}
    public function show(PlussTipus $plussTipus): JsonResponse
    {
        return response()->json($plussTipus->load('pluss'));
    }

    // POST /api/pluss-tipus
    public function store(Request $request): JsonResponse
    {
        $adatok = $request->validate([
            'tipus' => 'required|string|max:255',
        ]);

        $tipus = PlussTipus::create($adatok);

        return response()->json($tipus, 201);
    }
}
