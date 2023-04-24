<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Cor;

class CorSeeder extends Seeder
{
    public function run(): void
    {
        $corAmarela = new Cor;
        $corAmarela->cor = "amarelo";
        $corAmarela->save();

        $corBranco = new Cor;
        $corBranco->cor = "braco";
        $corBranco->save();

        $corPardo = new Cor;
        $corPardo->cor = "pardo";
        $corPardo->save();

        $corIndigena = new Cor;
        $corIndigena->cor = "indigena";
        $corIndigena->save();

        $corPreto = new Cor;
        $corPreto->cor = "preto";
        $corPreto->save();
    }
}