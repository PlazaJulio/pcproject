<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Exception;
use App\Models\PorteFisico;

class PorteFisicoController extends Controller
{
    public function __construct()
    {
        //
    }
    
    public function mostrarPorId($id)
    {
        return PorteFisico::where('id', $id)->where('excluido', false)->firstOr(
            function() {
                return response("", 404);
        });
    }

    public function mostrarTodos()
    {
        return PorteFisico::all()->where('excluido', false);
    }

    public function inserir(Request $request)
    {   
        try{
            return PorteFisico::create([
                "porte" => $request->porte,
                "usuario_id" => auth()->user()->id,
                "excluido" => false
            ]);
        }catch(Exception){
            return response("Requisição feita de maneira incorreta", 400);
        }
    }

    public function deletar($id)
    {
        $dadoExcluido = PorteFisico::findOrFail($id);
        $dadoExcluido->update(["excluido" => true]);
        return $dadoExcluido;
    }

    public function alterar($id, Request $request)
    {
        $dadoASerAlterado = PorteFisico::findOrFail($id);
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
