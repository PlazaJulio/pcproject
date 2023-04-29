<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\EnderecoSeeder;
use Database\Seeders\AparenciaSeeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call(
            [
                AparenciaSeeder::class,
                EnderecoSeeder::class,
                MarcaSeeder::class,
            ]
        );
    }
}
