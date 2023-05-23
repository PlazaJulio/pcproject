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
        $corAmarela->usuario_id = 1;
        $corAmarela->save();

        $corBranco = new Cor;
        $corBranco->cor = "braco";
        $corBranco->usuario_id = 1;
        $corBranco->save();

        $corPardo = new Cor;
        $corPardo->cor = "pardo";
        $corPardo->usuario_id = 1;
        $corPardo->save();

        $corIndigena = new Cor;
        $corIndigena->cor = "indigena";
        $corIndigena->usuario_id = 1;
        $corIndigena->save();

        $corPreto = new Cor;
        $corPreto->cor = "preto";
        $corPreto->usuario_id = 1;
        $corPreto->save();
    }
}