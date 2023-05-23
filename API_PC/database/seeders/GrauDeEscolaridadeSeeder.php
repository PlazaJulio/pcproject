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
        $escolaridadeUm->excluido = false;
        $escolaridadeUm->save();

        $escolaridadeDois = new GrauDeEscolaridade;
        $escolaridadeDois->grau = "fundamental completo";
        $escolaridadeDois->excluido = false;
        $escolaridadeDois->save();

        $escolaridadeTres = new GrauDeEscolaridade;
        $escolaridadeTres->grau = "médio incompleto";
        $escolaridadeTres->excluido = false;
        $escolaridadeTres->save();

        $escolaridadeQuatro = new GrauDeEscolaridade;
        $escolaridadeQuatro->grau = "ensino médio completo";
        $escolaridadeQuatro->excluido = false;
        $escolaridadeQuatro->save();

        $escolaridadeCinco = new GrauDeEscolaridade;
        $escolaridadeCinco->grau = "superior incompleto";
        $escolaridadeCinco->excluido = false;
        $escolaridadeCinco->save();

        $escolaridadeSeis = new GrauDeEscolaridade;
        $escolaridadeSeis->grau = "superior completo";
        $escolaridadeSeis->excluido = false;
        $escolaridadeSeis->save();
    }
}
