<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Marca;
use Exception;

class MarcaController extends Controller
{
    public function mostrarPorId($id)
    {
        return Marca::findOrFail($id);
    }

    public function mostrarTodos()
    {
        return Marca::all();
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
                "aparencia_id" => $request->aparencia_id,
                "usuario_id" => $request->usuario_id
                
            ]);
        }catch(Exception){
            return response("Requisição feita de maneira incorreta", 400);
        }
    }

    public function deletar($id)
    {
        $dadoExcluido = Marca::findOrFail($id);
        $dadoExcluido->delete();
        return $dadoExcluido;
    }

    public function alterar($id, Request $request)
    {
        $dadoASerAlterado = Marca::findOrFail($id);
        foreach ($request->except('_token') as $chave => $valor){
            $dadoASerAlterado->update([$chave => $valor]);
        }
        return $dadoASerAlterado;
    }
    
}
