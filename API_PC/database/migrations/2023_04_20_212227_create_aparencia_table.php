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
            $table->string("foto_de_perfil_esquerdo")->nullable(true);
            $table->string("foto_de_perfil_direito")->nullable(true); 
            $table->string("foto_de_frente")->nullable(true);

            $table->unsignedBigInteger('cor_id');
            $table->foreign('cor_id')->references('id')->on('cor');
            $table->unsignedBigInteger('cor_do_cabelo_id');
            $table->foreign('cor_do_cabelo_id')->references('id')->on('cor_do_cabelo');
            $table->unsignedBigInteger('tipo_de_cabelo_id');
            $table->foreign('tipo_de_cabelo_id')->references('id')->on('tipo_de_cabelo');
            $table->unsignedBigInteger('cor_dos_olhos_id');
            $table->foreign('cor_dos_olhos_id')->references('id')->on('cor_dos_olhos');
            $table->unsignedBigInteger('porte_fisico_id');
            $table->foreign('porte_fisico_id')->references('id')->on('porte_fisico');

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
