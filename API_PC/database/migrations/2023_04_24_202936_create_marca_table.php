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
        Schema::create('marca', function (Blueprint $table) {
            $table->id();
            $table->string('cicatriz_ou_tatuagem');
            $table->string('descricao');
            $table->string('parte_do_corpo');
            $table->string('foto');

            $table->unsignedBigInteger('tipo_de_tatuagem_id');
            $table->foreign('tipo_de_tatuagem_id')->references('id')->on('tipo_de_tatuagem');
            
            $table->unsignedBigInteger('aparencia_id');
            $table->foreign('aparencia_id')->references('id')->on('aparencia');

            $table->timestamp('criado_em')->useCurrent();
            $table->timestamp('alterado_em')->useCurrentOnUpdate()->nullable(true);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('marca');
    }
};
