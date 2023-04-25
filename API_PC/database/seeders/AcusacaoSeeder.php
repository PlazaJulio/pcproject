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
        $roubo->save();

        $furto = new Acusacao;
        $furto->tipo = "furto";
        $furto->save();

        $assasinato = new Acusacao;
        $assasinato->tipo = "assasinato";
        $assasinato->save();

        $sequestro = new Acusacao;
        $sequestro->tipo = "sequestro";
        $sequestro->save();

        $vandalismo = new Acusacao;
        $vandalismo->tipo = "vandalismo";
        $vandalismo->save();
    }
}
