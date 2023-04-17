<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('aparencia', function (Blueprint $table) {
            $table->id();
            $table->float("altura");
            $table->string("etnia");
            $table->string("cor");
            $table->string("cor_do_cabelo");
            $table->string("tipo_de_cabelo");
            $table->string("cor_dos_olhos");
            $table->string("foto_de_perfil_esquerdo");
            $table->string("foto_de_perfil_direito"); 
            $table->string("foto_de_frente");
            $table->timestamp('criado_em')->useCurrent();
            $table->timestamp('alterado_em')->useCurrentOnUpdate()->nullable(true);
        });
    }
    
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('aparencia');
    }
};
