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
        $tipoUm->save();

        $tipoDois = new TipoDeCabelo;
        $tipoDois->tipo = 'Curto-cacheado';
        $tipoDois->save(); 

        $tipoTres = new TipoDeCabelo;
        $tipoTres->tipo = 'Curto-crespo';
        $tipoTres->save();
         
        $tipoQuatro = new TipoDeCabelo;
        $tipoQuatro->tipo = 'Longo-liso';
        $tipoQuatro->save();
         
        $tipoCinco = new TipoDeCabelo;
        $tipoCinco->tipo = 'Longo-cacheado';
        $tipoCinco->save();
         
        $tipoSeis = new TipoDeCabelo;
        $tipoSeis->tipo = 'Black-power';
        $tipoSeis->save();
         
        $tipoSete = new TipoDeCabelo;
        $tipoSete->tipo = 'Careca';
        $tipoSete->save();
         
        $tipoOito = new TipoDeCabelo;
        $tipoOito->tipo = 'Calvo';
        $tipoOito->save();
         
        $tipoNove = new TipoDeCabelo;
        $tipoNove->tipo = 'outro';
        $tipoNove->save(); 
    }
}
