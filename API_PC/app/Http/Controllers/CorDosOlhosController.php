<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Exception;
use App\Models\CorDosOlhos;

class CorDosOlhosController extends Controller
{
    public function __construct()
    {
        //
    }
    
    public function mostrarPorId($id)
    {
        return CorDosOlhos::where('id', $id)->where('excluido', false)->firstOr(
            function() {
                return response("", 404);
        });
    }

    public function mostrarTodos()
    {
        return CorDosOlhos::all()->where('excluido', false);
    }
    
    public function inserir(Request $request)
    {   
        try{
            return CorDosOlhos::create([
                "cor" => $request->cor,
                "usuario_id" => auth()->user()->id,
                "excluido" => false
            ]);
        }catch(Exception){
            return response("", 400);
        }
    }

    public function deletar($id)
    {
        $dadoExcluido = CorDosOlhos::findOrFail($id);
        $dadoExcluido->update(["excluido" => true]);
        return $dadoExcluido;
    }

    public function alterar($id, Request $request)
    {
        $dadoASerAlterado = CorDosOlhos::findOrFail($id);
        foreach ($request->except('_token') as $chave => $valor){
            $dadoASerAlterado->update([$chave => $valor]);
        }
        return $dadoASerAlterado;
    }
}
