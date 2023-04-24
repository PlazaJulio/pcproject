<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;
use App\Models\TipoDeTatuagem;

class TipoDeTatuagemSeeder extends Seeder
{
    public function run(): void
    {
        $tatooUm = new TipoDeTatuagem;
        $tatooUm->tipo = 'Dragao';
        $tatooUm->save();

        $tatooDois = new TipoDeTatuagem;
        $tatooDois->tipo = 'Pokemon';
        $tatooDois->save();

        $tatooTres = new TipoDeTatuagem;
        $tatooTres->tipo = 'Faca';
        $tatooTres->save();

        $tatooQuatro = new TipoDeTatuagem;
        $tatooQuatro->tipo = 'Arma ';
        $tatooQuatro->save();

        $tatooCinco = new TipoDeTatuagem;
        $tatooCinco->tipo = 'Palhaco ';
        $tatooCinco->save();
    }
}
