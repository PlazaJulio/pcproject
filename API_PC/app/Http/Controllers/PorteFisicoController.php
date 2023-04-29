<?php

namespace App\Http\Controllers;

use App\Models\PorteFisico;

class PorteFisicoController extends Controller
{
    public function __construct()
    {
        //
    }
    
    public function mostrarPorId($id)
    {
        return PorteFisico::findOrFail($id);
    }

    public function mostrarTodos()
    {
        return PorteFisico::all();
    }
}
