<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Laravel\Lumen\Routing\Controller as BaseController;

class AutorizacaoController extends BaseController
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login']]);
    }


    public function login()
    {
        $credentials = request(['usuario', 'password']);
        if (! $token = auth()->attempt($credentials)) {
            return response()->json([
                'error' => 'Unauthorized'
            ], 401);
        }
        if (auth()->user()->excluido){
            return response()->json([
                'error' => 'Unauthorized'
            ], 401);
        }
        return $this->respondWithToken($token);
    }


    public function refresh()
    {
        $token = Auth::refresh();
        return $this->respondWithToken($token);
    }


    public function logout()
    {
        auth()->logout();
        return response()->json([
            'message' => 'Logout with success!'
        ], 401);
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::factory()->getTTL() * 60 
        ]);
    }
}