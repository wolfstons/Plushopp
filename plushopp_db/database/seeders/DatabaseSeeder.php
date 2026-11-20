<?php

namespace Database\Seeders;

use App\Models\Pluss;
use App\Models\PlussTipus;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $macko   = PlussTipus::create(['tipus' => 'Mackó']);
        $nyuszi  = PlussTipus::create(['tipus' => 'Nyuszi']);
        $kutya   = PlussTipus::create(['tipus' => 'Kutya']);
        $unikornis = PlussTipus::create(['tipus' => 'Unikornis']);

        Pluss::create(['nev' => 'Barna Berci',   'szuletesidatum' => '2022-03-14', 'pluss_tipus_id' => $macko->id]);
        Pluss::create(['nev' => 'Mézes Mackó',   'szuletesidatum' => '2023-11-02', 'pluss_tipus_id' => $macko->id]);
        Pluss::create(['nev' => 'Hópihe',        'szuletesidatum' => '2021-12-24', 'pluss_tipus_id' => $nyuszi->id]);
        Pluss::create(['nev' => 'Cuki Füles',    'szuletesidatum' => '2024-04-05', 'pluss_tipus_id' => $nyuszi->id]);
        Pluss::create(['nev' => 'Bodri',         'szuletesidatum' => '2020-06-20', 'pluss_tipus_id' => $kutya->id]);
        Pluss::create(['nev' => 'Szivárvány',    'szuletesidatum' => '2025-01-15', 'pluss_tipus_id' => $unikornis->id]);
    }
}
