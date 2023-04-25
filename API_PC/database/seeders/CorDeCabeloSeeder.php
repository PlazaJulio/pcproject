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
        $corUm->tipo = 'Preto';
        $corUm->save();

        $corDois = new CorDoCabelo;
        $corDois->tipo = 'Castanho';
        $corDois->save();

        $corTres = new CorDoCabelo;
        $corTres->tipo = 'Loiro';
        $corTres->save();

        $corQuatro = new CorDoCabelo;
        $corQuatro->tipo = 'Ruivo';
        $corQuatro->save();

        $corCinco = new CorDoCabelo;
        $corCinco->tipo = 'Grisalhos ';
        $corCinco->save();

        $corSeis = new CorDoCabelo;
        $corSeis->tipo = 'Outros';
        $corSeis->save();
    }
}
