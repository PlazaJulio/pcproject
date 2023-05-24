<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Usuario;
use Illuminate\Support\Facades\Hash;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $usuario = new Usuario;
        $usuario->nome = "admin";
        $usuario->usuario = "admin";
        $usuario->permissao_de_escrita = true;
        $usuario->password = Hash::make("123");
        $usuario->excluido = false;
        $usuario->save();
    }
}
