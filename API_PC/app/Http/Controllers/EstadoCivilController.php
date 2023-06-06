<?php

namespace App\Http\Controllers;

use App\Models\EstadoCivil;
use Illuminate\Http\Request;
use Exception;
class EstadoCivilController extends Controller
{
    public function __construct()
    {
        //
    }
    
    public function mostrarPorId($id)
    {
        return EstadoCivil::where('id', $id)->where('excluido', false)->firstOr(
            function() {
                return response("", 404);
        });
    }

    public function mostrarTodos()
    {
        return EstadoCivil::all()->where('excluido', false);
    }

    public function inserir(Request $request)
    {   
        try{
            return EstadoCivil::create([
                "estado" => $request->estado,
                "usuario_id" => auth()->user()->id,
                "excluido" => false
            ]);
        }catch(Exception){
            return response("Requisição feita de maneira incorreta", 400);
        }
    }

    public function deletar($id)
    {
        try{
            $dadoExcluido = EstadoCivil::findOrFail($id);
            $dadoExcluido->update(["excluido" => true]);
            $dadoExcluido->update(["usuario_id" =>  auth()->user()->id]);
            return $dadoExcluido;
        }catch(Exception){
            return response("", 404);
        }
    }

    public function alterar($id, Request $request)
    {   
        try{
            $dadoASerAlterado = EstadoCivil::findOrFail($id);
            foreach ($request->except('_token') as $chave => $valor){
                if($chave == "excluido" || $chave == "usuario_id")
                {
                    continue;
                }
                $dadoASerAlterado->update([$chave => $valor]);
            }
            $dadoASerAlterado->update(["usuario_id" => auth()->user()->id]);
            return $dadoASerAlterado;
        }catch(Exception){
            return response("", 404);
        }
    }
}
