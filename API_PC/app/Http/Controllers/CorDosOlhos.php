<?php

namespace App\Http\Controllers;
use App\Models\CorDosOlhos;

class PorteFisicoController extends Controller
{
    public function __construct()
    {
        //
    }
    
    public function mostrarPorId($id)
    {
        return CorDosOlhos::findOrFail($id);
    }

    public function mostrarTodos()
    {
        return CorDosOlhos::all();
    }
}
