<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

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
                GrauDeEscolaridadeSeeder::class,
                UsuarioSeeder::class
            ]
        );
    }
}
