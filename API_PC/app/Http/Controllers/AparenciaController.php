<?php

namespace App\Http\Controllers;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use App\Models\Aparencia;
use Exception;

class AparenciaController extends Controller
{
    
    public function __construct()
    {
        //
    }
    public function mostrarPorId($id)
    {
        return Aparencia::where('id', $id)->where('excluido', false)->firstOr(
            function() {
                return response("", 404);
        });
    }

    public function mostrarTodos()
    {
        return Aparencia::all()->where('excluido', false);
    }

    public function inserir(Request $request)
    {   
        try{
            return Aparencia::create([
                "altura" => $request->altura,
                "etnia" => $request->etnia,
                "cor_id" => $request->cor_id,
                "cor_do_cabelo_id" => $request->cor_do_cabelo_id,
                "tipo_de_cabelo_id" => $request->tipo_de_cabelo_id,
                "cor_dos_olhos_id" => $request->cor_dos_olhos_id,
                "porte_fisico_id" => $request->porte_fisico_id,
                "foto_de_perfil_esquerdo" => $request->foto_de_perfil_esquerdo,
                "foto_de_perfil_direito" => $request->foto_de_perfil_direito,
                "foto_de_frente" => $request->foto_de_frente,
                "usuario_id" => auth()->user()->id,
                "excluido" => false
            ]);
        }catch(Exception){
            return response("", 400);
        }
    }

    public function deletar($id)
    {
        $dadoExcluido = Aparencia::findOrFail($id);
        $dadoExcluido->update(["excluido" => true]);
        $dadoExcluido->update(["usuario_id" =>  auth()->user()->id]);
        return $dadoExcluido;
    }

    public function alterar($id, Request $request)
    {
        $dadoASerAlterado = Aparencia::findOrFail($id);
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
