<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\TipoDeCabelo;

class TipoDeCabeloSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tipoUm = new TipoDeCabelo;
        $tipoUm->tipo = 'Curto-liso';
        $tipoUm->usuario_id = 1;
        $tipoUm->excluido = false;
        $tipoUm->save();

        $tipoDois = new TipoDeCabelo;
        $tipoDois->tipo = 'Curto-cacheado';
        $tipoDois->usuario_id = 1;
        $tipoDois->excluido = false;
        $tipoDois->save(); 

        $tipoTres = new TipoDeCabelo;
        $tipoTres->tipo = 'Curto-crespo';
        $tipoTres->usuario_id = 1;
        $tipoTres->excluido = false;
        $tipoTres->save();
         
        $tipoQuatro = new TipoDeCabelo;
        $tipoQuatro->tipo = 'Longo-liso';
        $tipoQuatro->usuario_id = 1;
        $tipoQuatro->excluido = false;
        $tipoQuatro->save();
         
        $tipoCinco = new TipoDeCabelo;
        $tipoCinco->tipo = 'Longo-cacheado';
        $tipoCinco->usuario_id = 1;
        $tipoCinco->excluido = false;
        $tipoCinco->save();
         
        $tipoSeis = new TipoDeCabelo;
        $tipoSeis->tipo = 'Black-power';
        $tipoSeis->usuario_id = 1;
        $tipoSeis->excluido = false;
        $tipoSeis->save();
         
        $tipoSete = new TipoDeCabelo;
        $tipoSete->tipo = 'Careca';
        $tipoSete->usuario_id = 1;
        $tipoSete->excluido = false;
        $tipoSete->save();
         
        $tipoOito = new TipoDeCabelo;
        $tipoOito->tipo = 'Calvo';
        $tipoOito->usuario_id = 1;
        $tipoOito->excluido = false;
        $tipoOito->save();
         
        $tipoNove = new TipoDeCabelo;
        $tipoNove->tipo = 'outro';
        $tipoNove->usuario_id = 1;
        $tipoNove->excluido = false;
        $tipoNove->save(); 
    }
}
