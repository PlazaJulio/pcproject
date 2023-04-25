<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\PorteFisico;

class PorteFisicoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $porteFisicoMagro = new PorteFisico;
        $porteFisicoMagro->porte = "magro";
        $porteFisicoMagro->save();

        $porteFisicoGordo = new PorteFisico;
        $porteFisicoGordo->porte = "gordo";
        $porteFisicoGordo->save();

        $porteFisicoPesoNormal = new PorteFisico;
        $porteFisicoPesoNormal->porte = "peso normal";
        $porteFisicoPesoNormal->save();

        $porteFisicoAcimaDoPeso = new PorteFisico;
        $porteFisicoAcimaDoPeso->porte = "acima do peso";
        $porteFisicoAcimaDoPeso->save();

        $porteFisicoForte = new PorteFisico;
        $porteFisicoForte->porte = "forte";
        $porteFisicoForte->save();
    }
}
