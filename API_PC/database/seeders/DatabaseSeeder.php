<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\EnderecoSeeder;

class DatabaseSeeder extends Seeder
{
    public function run()
    {
        $this->call([EnderecoSeeder::class]);
    }
}
