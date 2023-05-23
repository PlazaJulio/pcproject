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
        $tatooUm->usuario_id = 1;
        $tatooUm->save();

        $tatooDois = new TipoDeTatuagem;
        $tatooDois->tipo = 'Pokemon';
        $tatooDois->usuario_id = 1;
        $tatooDois->save();

        $tatooTres = new TipoDeTatuagem;
        $tatooTres->tipo = 'Faca';
        $tatooTres->usuario_id = 1;
        $tatooTres->save();

        $tatooQuatro = new TipoDeTatuagem;
        $tatooQuatro->tipo = 'Arma ';
        $tatooQuatro->usuario_id = 1;
        $tatooQuatro->save();

        $tatooCinco = new TipoDeTatuagem;
        $tatooCinco->tipo = 'Palhaco ';
        $tatooCinco->usuario_id = 1;
        $tatooCinco->save();
    }
}
