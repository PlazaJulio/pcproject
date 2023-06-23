<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Marca;
use Exception;

class MarcaController extends Controller
{
    public function mostrarPorId($id)
    {
        return Marca::where('id', $id)->where('excluido', false)->firstOr(
            function() {
                return response("", 404);
        });
    }

    public function mostrarTodos()
    {
        return Marca::all()->where('excluido', false);
    }

    public function mostrarMarcasPorCriminosoId($id)
    {
        try{
            return Marca::where('criminoso_id', $id)->get();
        }catch(Exception){
            return response("Requisição feita de maneira incorreta", 400);
        }
    }

    public function inserir(Request $request)
    {   
        try{
            return Marca::create([
                "cicatriz_ou_tatuagem" => $request->cicatriz_ou_tatuagem,
                "descricao" => $request->descricao,
                "parte_do_corpo" => $request->parte_do_corpo,
                "foto" => $request->foto,
                "tipo_de_tatuagem_id" => $request->tipo_de_tatuagem_id,
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
        try{
            $dadoExcluido = Marca::where('excluido', false)->findOrFail($id);
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
           $dadoASerAlterado = Marca::where('excluido', false)->findOrFail($id); // Alteracao
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
