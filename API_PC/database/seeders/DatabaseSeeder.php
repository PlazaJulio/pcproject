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
                EnderecoSeeder::class,
                MarcaSeeder::class,
                CriminosoSeeder::class,
                AntecedenteSeeder::class,
            ]
        );
    }
}
