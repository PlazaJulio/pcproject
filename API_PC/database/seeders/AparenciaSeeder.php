<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Aparencia;


class AparenciaSeeder extends Seeder
{
    public function run(): void
    {
        Aparencia::factory()->count(10)->create();
    }
}
