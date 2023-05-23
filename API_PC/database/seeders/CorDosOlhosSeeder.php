<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\CorDosOlhos;

class CorDosOlhosSeeder extends Seeder
{
    public function run(): void
    {
        $corUm = new CorDosOlhos;
        $corUm->cor = "Castanho";
        $corUm->usuario_id = 1;
        $corUm->save();

        $corDois = new CorDosOlhos;
        $corDois->cor = "Azul";
        $corDois->usuario_id = 1;
        $corDois->save();

        $corTres = new CorDosOlhos;
        $corTres->cor = "Cinza ";
        $corTres->usuario_id = 1;
        $corTres->save();

        $corQuatro = new CorDosOlhos;
        $corQuatro->cor = "Verde ";
        $corQuatro->usuario_id = 1;
        $corQuatro->save();

        $corCinco = new CorDosOlhos;
        $corCinco->cor = "Avelã";
        $corCinco->usuario_id = 1;
        $corCinco->save();

        $corSeis = new CorDosOlhos;
        $corSeis->cor = "Ambar";
        $corSeis->usuario_id = 1;
        $corSeis->save();
    }
}
