<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\EstadoCivil;

class EstadoCivilSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $estadoUm = new EstadoCivil;
        $estadoUm->estado = "solteiro";
        $estadoUm->save();

        $estadoDois = new EstadoCivil;
        $estadoDois->estado = "casado";
        $estadoDois->save();

        $estadoTres = new EstadoCivil;
        $estadoTres->estado = "separado";
        $estadoTres->save();

        $estadoQuatro = new EstadoCivil;
        $estadoQuatro->estado = "divorciado";
        $estadoQuatro->save();

        $estadoCinco = new EstadoCivil;
        $estadoCinco->estado = "viúvo";
        $estadoCinco->save();
    }
}
