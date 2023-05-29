<?php

namespace App\Http\Controllers;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Models\Antecedente;

use Exception;

class AntecedenteController extends Controller
{
    
    public function __construct()
    {
        //
    }
    public function mostrarPorId($id)
    {
        return Antecedente::where('id', $id)->where('excluido', false)->firstOr(
            function() {
                return response("", 404);
        });
    }

    public function mostrarTodos()
    {
        return Antecedente::all()->where('excluido', false);
    }

    public function inserir(Request $request)
    {   
        try{
            return Antecedente::create([
                "local" => $request->local,
                "data" => $request->data,
                "hora" => $request->hora,
                "descricao" => $request->descricao,
                "acusacao_id" => $request->acusacao_id,
                "criminoso_id" => $request->criminoso_id,
                "usuario_id" => auth()->user()->id,
                "excluido" => false
            ]);
        }catch(Exception){
            return response("Requisição feita de maneira incorreta", 400);
        }
    }

    public function deletar($id)
    {
        $dadoExcluido = Antecedente::findOrFail($id);
        $dadoExcluido->update(["excluido" => true]);
        $dadoExcluido->update(["usuario_id" =>  auth()->user()->id]);
        return $dadoExcluido;
    }

    public function alterar($id, Request $request)
    {
        $dadoASerAlterado = Antecedente::findOrFail($id);
        foreach ($request->except('_token') as $chave => $valor){
           if($chave == "excluido" || $chave == "usuairo_id")
           {
                continue;
           }
            $dadoASerAlterado->update([$chave => $valor]);
        }
        $dadoASerAlterado->update(["usuario_id" => auth()->user()->id]);
        return $dadoASerAlterado;
    }
    
}

