<?php

namespace App\Http\Controllers;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Models\CorDoCabelo;

use Exception;

class CorDoCabeloController extends Controller
{
    public function __construct()
    {
        //
    }
    
    public function mostrarPorId($id)
    {
        return CorDoCabelo::findOrFail($id);
    }

    public function mostrarTodos()
    {
        return CorDoCabelo::all();
    }

    public function inserir(Request $request)
    {   
        try{
            return CorDoCabelo::create([
                "tipo" => $request->local,
                "usuario_id" => $request->usuario_id,
                "excluido" => false
            ]);
        }catch(Exception){
            return response("Requisição feita de maneira incorreta", 400);
        }
    }

    public function deletar($id)
    {
        $dadoExcluido = CorDoCabelo::findOrFail($id);
        $dadoExcluido->delete();
        return $dadoExcluido;
    }

    public function alterar($id, Request $request)
    {
        $dadoASerAlterado = CorDoCabelo::findOrFail($id);
        foreach ($request->except('_token') as $chave => $valor){
            $dadoASerAlterado->update([$chave => $valor]);
        }
        return $dadoASerAlterado;
    }
}
