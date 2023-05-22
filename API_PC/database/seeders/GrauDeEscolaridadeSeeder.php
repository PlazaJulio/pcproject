<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\GrauDeEscolaridade;

class GrauDeEscolaridadeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $escolaridadeUm = new GrauDeEscolaridade;
        $escolaridadeUm->grau = "fundamental incompleto";
        $escolaridadeUm->usuario_id = 1;
        $escolaridadeUm->save();

        $escolaridadeDois = new GrauDeEscolaridade;
        $escolaridadeDois->grau = "fundamental completo";
        $escolaridadeDois->usuario_id = 1;
        $escolaridadeDois->save();

        $escolaridadeTres = new GrauDeEscolaridade;
        $escolaridadeTres->grau = "médio incompleto";
        $escolaridadeTres->usuario_id = 1;
        $escolaridadeTres->save();

        $escolaridadeQuatro = new GrauDeEscolaridade;
        $escolaridadeQuatro->grau = "ensino médio completo";
        $escolaridadeQuatro->usuario_id = 1;
        $escolaridadeQuatro->save();

        $escolaridadeCinco = new GrauDeEscolaridade;
        $escolaridadeCinco->grau = "superior incompleto";
        $escolaridadeCinco->usuario_id = 1;
        $escolaridadeCinco->save();

        $escolaridadeSeis = new GrauDeEscolaridade;
        $escolaridadeSeis->grau = "superior completo";
        $escolaridadeSeis->usuario_id = 1;
        $escolaridadeSeis->save();
    }
}
