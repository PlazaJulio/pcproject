<?php

namespace App\Http\Controllers;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Models\TipoDeCabelo;

use Exception;

class TipoDeCabeloController extends Controller
{
    public function __construct()
    {
        //
    }
    
    public function mostrarPorId($id)
    {
        return TipoDeCabelo::findOrFail($id);
    }

    public function mostrarTodos()
    {
        return TipoDeCabelo::all();
    }

    public function inserir(Request $request)
    {   
        try{
            return TipoDeCabelo::create([
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
        $dadoExcluido = TipoDeCabelo::findOrFail($id);
        $dadoExcluido->delete();
        return $dadoExcluido;
    }

    public function alterar($id, Request $request)
    {
        $dadoASerAlterado = TipoDeCabelo::findOrFail($id);
        foreach ($request->except('_token') as $chave => $valor){
            $dadoASerAlterado->update([$chave => $valor]);
        }
        return $dadoASerAlterado;
    }
    
}
