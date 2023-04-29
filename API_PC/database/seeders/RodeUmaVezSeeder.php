<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\AcusacaoSeeder;
use Database\Seeders\CorDeCabeloSeeder;
use Database\Seeders\CorDosOlhosSeeder;
use Database\Seeders\CorSeeder;
use Database\Seeders\GeneroSeeder;
use Database\Seeders\PorteFisicoSeeder;
use Database\Seeders\TipoDeCabeloSeeder;
use Database\Seeders\TipoDeTatuagemSeeder;
use Database\Seeders\EstadoCivilSeeder;
use Database\Seeders\GrauDeEscolaridadeSeeder;

class RodeUmaVezSeeder extends Seeder
{
    public function run()
    {
        $this->call(
            [
                AcusacaoSeeder::class, 
                CorDeCabeloSeeder::class, 
                CorDosOlhosSeeder::class,
                CorSeeder::class,
                GeneroSeeder::class,
                PorteFisicoSeeder::class,
                TipoDeCabeloSeeder::class,
                TipoDeTatuagemSeeder::class,
                EstadoCivilSeeder::class,
                GrauDeEscolaridadeSeeder::class
            ]
        );
    }
}
