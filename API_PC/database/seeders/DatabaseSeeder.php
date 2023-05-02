<?php

namespace Database\Seeders;

use App\Models\Criminoso;
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
                CriminosoSeeder::class,
                AntecedenteSeeder::class,
            ]
        );
    }
}
