<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Acusacao;

class AcusacaoSeeder extends Seeder
{
    public function run(): void
    {
        $roubo = new Acusacao;
        $roubo->tipo = "roubo";
        $roubo->usuario_id = 1;
        $roubo->excluido = false;
        $roubo->save();

        $furto = new Acusacao;
        $furto->tipo = "furto";
        $furto->usuario_id = 1;
        $furto->excluido = false;
        $furto->save();

        $assasinato = new Acusacao;
        $assasinato->tipo = "assasinato";
        $assasinato->usuario_id = 1;
        $assasinato->excluido = false;
        $assasinato->save();

        $sequestro = new Acusacao;
        $sequestro->tipo = "sequestro";
        $sequestro->usuario_id = 1;
        $sequestro->excluido = false;
        $sequestro->save();

        $vandalismo = new Acusacao;
        $vandalismo->tipo = "vandalismo";
        $vandalismo->usuario_id = 1;
        $vandalismo->excluido = false;
        $vandalismo->save();
    }
}
