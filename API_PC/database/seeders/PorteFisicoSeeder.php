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
        $porteFisicoMagro->usuario_id = 1;
        $porteFisicoMagro->save();

        $porteFisicoGordo = new PorteFisico;
        $porteFisicoGordo->porte = "gordo";
        $porteFisicoGordo->usuario_id = 1;
        $porteFisicoGordo->save();

        $porteFisicoPesoNormal = new PorteFisico;
        $porteFisicoPesoNormal->porte = "peso normal";
        $porteFisicoPesoNormal->usuario_id = 1;
        $porteFisicoPesoNormal->save();

        $porteFisicoAcimaDoPeso = new PorteFisico;
        $porteFisicoAcimaDoPeso->porte = "acima do peso";
        $porteFisicoAcimaDoPeso->usuario_id = 1;
        $porteFisicoAcimaDoPeso->save();

        $porteFisicoForte = new PorteFisico;
        $porteFisicoForte->porte = "forte";
        $porteFisicoForte->usuario_id = 1;
        $porteFisicoForte->save();
    }
}
