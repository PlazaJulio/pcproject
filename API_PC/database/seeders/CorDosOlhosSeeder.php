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
        $corUm->save();

        $corDois = new CorDosOlhos;
        $corDois->cor = "Azul";
        $corDois->save();

        $corTres = new CorDosOlhos;
        $corTres->cor = "Cinza ";
        $corTres->save();

        $corQuatro = new CorDosOlhos;
        $corQuatro->cor = "Verde ";
        $corQuatro->save();

        $corCinco = new CorDosOlhos;
        $corCinco->cor = "Avelã";
        $corCinco->save();

        $corSeis = new CorDosOlhos;
        $corSeis->cor = "Ambar";
        $corSeis->save();
    }
}
