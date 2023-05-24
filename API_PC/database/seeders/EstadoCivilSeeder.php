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
        $estadoUm->usuario_id = 1;
        $estadoUm->excluido = false;
        $estadoUm->save();

        $estadoDois = new EstadoCivil;
        $estadoDois->estado = "casado";
        $estadoDois->usuario_id = 1;
        $estadoDois->excluido = false;
        $estadoDois->save();

        $estadoTres = new EstadoCivil;
        $estadoTres->estado = "separado";
        $estadoTres->usuario_id = 1;
        $estadoTres->excluido = false;
        $estadoTres->save();

        $estadoQuatro = new EstadoCivil;
        $estadoQuatro->estado = "divorciado";
        $estadoQuatro->usuario_id = 1;
        $estadoQuatro->excluido = false;
        $estadoQuatro->save();

        $estadoCinco = new EstadoCivil;
        $estadoCinco->estado = "viúvo";
        $estadoCinco->usuario_id = 1;
        $estadoCinco->excluido = false;
        $estadoCinco->save();
    }
}
