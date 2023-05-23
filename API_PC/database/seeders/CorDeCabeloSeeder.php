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
        $corUm->excluido = false;
        $corUm->save();

        $corDois = new CorDoCabelo;
        $corDois->cor = 'Castanho';
        $corDois->usuario_id = 1;
        $corDois->excluido = false;
        $corDois->save();

        $corTres = new CorDoCabelo;
        $corTres->cor = 'Loiro';
        $corTres->usuario_id = 1;
        $corTres->excluido = false;
        $corTres->save();

        $corQuatro = new CorDoCabelo;
        $corQuatro->cor = 'Ruivo';
        $corQuatro->usuario_id = 1;
        $corQuatro->excluido = false;
        $corQuatro->save();

        $corCinco = new CorDoCabelo;
        $corCinco->cor = 'Grisalhos ';
        $corCinco->usuario_id = 1;
        $corCinco->excluido = false;
        $corCinco->save();

        $corSeis = new CorDoCabelo;
        $corSeis->cor = 'Outros';
        $corSeis->usuario_id = 1;
        $corSeis->excluido = false;
        $corSeis->save();
    }
}
