<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class RodeUmaVezSeeder extends Seeder
{
    public function run()
    {
        $this->call(
            [
                UsuarioSeeder::class,
                AcusacaoSeeder::class, 
                CorDeCabeloSeeder::class, 
                CorDosOlhosSeeder::class,
                PorteFisicoSeeder::class,
                TipoDeCabeloSeeder::class,
                TipoDeTatuagemSeeder::class
            ]
        );
    }
}
