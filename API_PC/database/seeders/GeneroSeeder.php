<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Genero;

class GeneroSeeder extends Seeder
{
    public function run(): void
    {
        $masculino = new Genero;
        $masculino->genero = "masculino";
        $masculino->usuario_id = 1;
        $masculino->save();

        $feminino = new Genero;
        $feminino->genero = "feminino";
        $feminino->usuario_id = 1;
        $feminino->save();

        $outros = new Genero;
        $outros->genero = "outros";
        $outros->usuario_id = 1;
        $outros->save();
    }
}
