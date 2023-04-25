<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CorDoCabelo;

class CorDeCabeloSeeder extends Seeder
{
    public function run(): void
    {
        $corUm = new CorDoCabelo;
        $corUm->cor = 'Preto';
        $corUm->save();

        $corDois = new CorDoCabelo;
        $corDois->cor = 'Castanho';
        $corDois->save();

        $corTres = new CorDoCabelo;
        $corTres->cor = 'Loiro';
        $corTres->save();

        $corQuatro = new CorDoCabelo;
        $corQuatro->cor = 'Ruivo';
        $corQuatro->save();

        $corCinco = new CorDoCabelo;
        $corCinco->cor = 'Grisalhos ';
        $corCinco->save();

        $corSeis = new CorDoCabelo;
        $corSeis->cor = 'Outros';
        $corSeis->save();
    }
}
