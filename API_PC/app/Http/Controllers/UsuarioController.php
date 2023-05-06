<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Usuario;
use Illuminate\Support\Facades\Hash;
use Exception;


class UsuarioController extends Controller
{
    
    public function __construct()
    {
        //
    }
    public function mostrarPorId($id)
    {
        return Usuario::findOrFail($id);
    }

    public function mostrarTodos()
    {
        return Usuario::all();
    }

    public function inserir(Request $request)
    {   
        try{
            return  Usuario::create([
                "usuario" => $request->usuario,
                "nome" => $request->nome,
                'permissao_de_escrita' => $request->permissao_de_escrita,
                "password" => Hash::make($request->password)
                
            ]);
        }catch(Exception){
            return response("Requisição feita de maneira incorreta", 400);
        }
    }

    public function deletar($id)
    {
        $dadoExcluido = Usuario::findOrFail($id);
        $dadoExcluido->delete();
        return $dadoExcluido;
    }

    public function alterar($id, Request $request)
    {
        $dadoASerAlterado = Usuario::findOrFail($id);
        foreach ($request->except('_token') as $chave => $valor){
            if($chave == "password"){
                $dadoASerAlterado->update([$chave => Hash::make($valor)]);
            }
            else
            {
                $dadoASerAlterado->update([$chave => $valor]);
            }    
            
        }
        return $dadoASerAlterado;
    }

    public function eu()
    {
        return response()->json(
            auth()->user()
        );
    }

    
}