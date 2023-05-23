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
        $corUm->usuario_id = 1;
        $corUm->save();

        $corDois = new CorDoCabelo;
        $corDois->cor = 'Castanho';
        $corDois->usuario_id = 1;
        $corDois->save();

        $corTres = new CorDoCabelo;
        $corTres->cor = 'Loiro';
        $corTres->usuario_id = 1;
        $corTres->save();

        $corQuatro = new CorDoCabelo;
        $corQuatro->cor = 'Ruivo';
        $corQuatro->usuario_id = 1;
        $corQuatro->save();

        $corCinco = new CorDoCabelo;
        $corCinco->cor = 'Grisalhos ';
        $corCinco->usuario_id = 1;
        $corCinco->save();

        $corSeis = new CorDoCabelo;
        $corSeis->cor = 'Outros';
        $corSeis->usuario_id = 1;
        $corSeis->save();
    }
}
