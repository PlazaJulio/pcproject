export default function CriminosoFilter({stateFilter, dispatchFilter, handleChangeFilter, temMarca, ehTatuagem, tatuagens}) {

    return (
        <>
            <div className='mb-3'>
                <span>Nome:</span>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_NOME" 
                    name="nome" 
                    placeholder="Nome*" 
                    value={stateFilter.nome}
                    onChange={handleChangeFilter}
                />
            </div>

            <div className='mb-3'>
                <span>Alcunha:</span>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_ALCUNHA" 
                    name="alcunha" 
                    placeholder="Alcunha*" 
                    value={stateFilter.alcunha}
                    onChange={handleChangeFilter}
                />
            </div>

            <div className='mb-3'>
                <p>Genero:</p>
                <select
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_GENERO"
                    name="genero" 
                    value={stateFilter.genero}
                    onChange={handleChangeFilter}
                >
                    <option value="">-</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </select>
            </div>

            <div className='mb-3'>
                <p>Idade Minima:</p>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_IDADEMIN"
                    name="idade_min"
                    type="number" 
                    placeholder="Idade Minima" 
                    value={stateFilter.idade_min}
                    onChange={handleChangeFilter}
                />

                <p>Idade Máxima:</p>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_IDADEMAX"
                    name="idade_max"
                    type="number" 
                    placeholder="Idade Máxima" 
                    value={stateFilter.idade_max}
                    onChange={handleChangeFilter}
                />
            </div>

            <div className='mb-3'>
                <p>Nome do pai:</p>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_PAI"
                    name="pai"
                    placeholder="Nome do pai*" 
                    value={stateFilter.pai}
                    onChange={handleChangeFilter}
                />
            </div>


            <div className='mb-3'>
                <p>Nome da mãe:</p>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    " 
                    data-type="SET_MAE"
                    name="mae"
                    placeholder="Nome da mãe*" 
                    value={stateFilter.mae}
                    onChange={handleChangeFilter}
                />
            </div>

            <div className='mb-3'>
                <p>RG:</p>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_RG"
                    name="rg"
                    placeholder="RG" 
                    value={stateFilter.rg}
                    onChange={handleChangeFilter}
                />
            </div>

            <div className='mb-3'>
                <p>CPF:</p>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_CPF"
                    name="cpf"
                    placeholder="Cpf" 
                    value={stateFilter.cpf}
                    onChange={handleChangeFilter}
                />
            </div>

            <div className='mb-3'>
                <p>Telefone:</p>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_TELEFONE"
                    name="telefone" 
                    placeholder="Telefone" 
                    value={stateFilter.telefone}
                    onChange={handleChangeFilter}
                />
            </div>

            <div className='flex gap-4 items-center mb-3'>
                <label className="flex gap-0.5 items-center">
                    <input 
                        className="
                            w-4
                            h-4
                            appearance-none
                            border-2
                            border-stone-300
                            rounded 
                            mr-1
                            checked:bg-stone-400
                            hover:border-stone-500
                            checked:border-stone-500
                            focus:border-stone-500
                            focus:outline-none
                        "
                        data-type="SET_OBITO"
                        name="obito"
                        type='checkbox'
                        value={stateFilter.obito}
                        checked={stateFilter.obito}
                        onChange={() => dispatchFilter({
                            type: "SET_OBITO",
                            obito: !stateFilter.obito
                        })}
                    />
                    Obito
                </label>

                <label className="flex gap-0.5 items-center">
                    <input
                        className="
                            w-4
                            h-4
                            appearance-none
                            border-2
                            border-stone-300
                            rounded 
                            mr-1
                            checked:bg-stone-400
                            hover:border-stone-500
                            checked:border-stone-500
                            focus:border-stone-500
                            focus:outline-none
                        "
                        data-type="SET_FORAGIDO"
                        name="foragido"
                        type="checkbox" 
                        value={stateFilter.foragido}
                        checked={stateFilter.foragido}
                        onChange={() => dispatchFilter({
                            type: "SET_FORAGIDO",
                            foragido: !stateFilter.foragido
                        })}
                    />
                    Foragido
                </label>
            </div>

            <div className="flex gap-4 items-center mb-3">
                <label className="flex gap-0.5 items-center">
                    <input
                        className="
                            w-4
                            h-4
                            appearance-none
                            border-2
                            border-stone-300
                            rounded 
                            mr-1
                            checked:bg-stone-400
                            hover:border-stone-500
                            checked:border-stone-500
                            focus:border-stone-500
                            focus:outline-none
                        "
                        name="tem_marca"
                        type="checkbox" 
                        value={temMarca}
                        checked={temMarca}
                        onChange={handleChangeFilter}
                    />
                    Tem marca
                </label>

            </div>

            {
                temMarca &&
                <>
                    <div className="mb-3">
                        <p>Descricao da marca:</p>
                        <input 
                            className="
                                shadow-inner 
                                shadow-stone-100
                                text-stone-600
                                text-sm
                                bg-stone-50 
                                w-full 
                                border 
                                rounded 
                                border-stone-200 
                                py-2 
                                px-3 
                                hover:border-stone-500 
                                focus:border-stone-500 
                                focus:outline-none
                            " 
                            data-type="SET_DESCRICAOMARCA"
                            name="descricao"
                            placeholder="Descrição da marca" 
                            value={stateFilter.descricao}
                            onChange={handleChangeFilter}
                        />
                    </div>
                    <div className="mb-3">
                        <p>Parte do corpo com a marca:</p>
                        <input 
                            className="
                                shadow-inner 
                                shadow-stone-100
                                text-stone-600
                                text-sm
                                bg-stone-50 
                                w-full 
                                border 
                                rounded 
                                border-stone-200 
                                py-2 
                                px-3 
                                hover:border-stone-500 
                                focus:border-stone-500 
                                focus:outline-none
                            " 
                            data-type="SET_PARTEDOCORPO"
                            name="parte_do_corpo"
                            placeholder="Parte do corpo" 
                            value={stateFilter.parte_do_corpo}
                            onChange={handleChangeFilter}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="flex gap-0.5 items-center">
                            <input
                                className="
                                    w-4
                                    h-4
                                    appearance-none
                                    border-2
                                    border-stone-300
                                    rounded 
                                    mr-1
                                    checked:bg-stone-400
                                    hover:border-stone-500
                                    checked:border-stone-500
                                    focus:border-stone-500
                                    focus:outline-none
                                "
                                name="eh_tatuagem"
                                type="checkbox" 
                                value={ehTatuagem}
                                checked={ehTatuagem}
                                onChange={handleChangeFilter}
                            />
                            É tatuagem
                        </label>
                    </div>
                </>
            }

            {
                temMarca && ehTatuagem &&

                <div className='mb-3'>
                    <p>Tipo da tatuagem:</p>
                    <select 
                        className="
                            shadow-inner 
                            shadow-stone-100
                            text-stone-600
                            text-sm
                            bg-stone-50 
                            w-full 
                            border 
                            rounded 
                            border-stone-200 
                            py-2 
                            px-3 
                            hover:border-stone-500 
                            focus:border-stone-500 
                            focus:outline-none
                        "
                        data-type="SET_TIPODETATUAGEM"
                        name="tipo_de_tatuagem_id"
                        value={stateFilter.tipo_de_tatuagem_id}
                        onChange={handleChangeFilter}>
                        <option value="">-</option>
                        {tatuagens.map((tatuagem, index) => {
                            return <option key={index} value={tatuagem.id}>{tatuagem.tipo}</option>
                        })}
                    </select>
                </div>
            }


            <div className='mb-3'>
                <p>Naturalidade:</p>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_NATURALIDADE"
                    name="naturalidade"
                    placeholder="Naturalidade" 
                    value={stateFilter.naturalidade}
                    onChange={handleChangeFilter}
                />
            </div>

            <div className='mb-3'>
                <p>Nacionalidade:</p>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    " 
                    data-type="SET_NACIONALIDADE"
                    name="nacionalidade"
                    placeholder="Nacionalidade" 
                    value={stateFilter.nacionalidade}
                    onChange={handleChangeFilter}
                />
            </div>

            <div className='mb-3'>
                <p>Local de trabalho:</p>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_LOCALDETRABALHO"
                    name="localDeTrabalho"
                    placeholder="Local de tabalho" 
                    value={stateFilter.localDeTrabalho}
                    onChange={handleChangeFilter}
                />
            </div>

            <div className='mb-3'>
                <p>Profissão:</p>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_PROFISSAO"
                    name="profissao"
                    placeholder="Profissao" 
                    value={stateFilter.profissao}
                    onChange={handleChangeFilter}
                />
            </div>

            <div className='mb-3'>
                <p>Grau de Escolaridade:</p>
                <select 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_GRAUDEESCOLARIDADE"
                    name="grau_de_escolaridade"
                    value={stateFilter.grau_de_escolaridade}
                    onChange={handleChangeFilter}
                >
                    <option value="">-</option>
                    <option value="Ensino Fundamental Incompleto">Ensino Fundamental Incompleto</option>
                    <option value="Ensino Fundamental Completo">Ensino Fundamental Completo</option>
                    <option value="Ensino Medio Incompleto">Ensino Médio Incompleto</option>
                    <option value="Ensino Medio Completo">Ensino Médio Completo</option>
                    <option value="Ensino Superior Incompleto">Ensino Superior Incompleto</option>
                    <option value="Ensino Superior Completo">Ensino Superior Completo</option>
                    <option value="Outro">Outro</option>
                </select>
            </div>

            <div className='mb-3'>
                <p>Altura Minima:</p>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_ALTURAMIN"
                    name="altura_min"
                    type="number"
                    placeholder="Altura Minima (digite com ponto em vez de virgula - Ex: 1.75)" 
                    value={stateFilter.altura_min}
                    onChange={handleChangeFilter}
                />

                <p>Altura Máxima:</p>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_ALTURAMAX"
                    name="altura_max"
                    type="number"
                    placeholder="Altura Máxima (digite com ponto em vez de virgula - Ex: 1.75)" 
                    value={stateFilter.altura_max}
                    onChange={handleChangeFilter}
                />
            </div>


            <div className='mb-3'>
                <p>Etnia:</p>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_ETNIA"
                    name="etnia"
                    placeholder="Etnia" 
                    value={stateFilter.etnia}
                    onChange={handleChangeFilter}
                />
            </div>


            <div className='mb-3'>
                <p>Porte físico:</p>
                <select
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_PORTEFISICO"
                    name="porte_fisico" 
                    value={stateFilter.porte_fisico}
                    onChange={handleChangeFilter}
                >
                    <option value="">-</option>
                    <option value="Magro">Magro</option>
                    <option value="Médio">Médio</option>
                    <option value="Gordo">Gordo</option>
                    <option value="Forte">Forte</option>
                    <option value="Outro">Outro</option>
                </select>
            </div>

            <div className='mb-3'>
                <p>Cor dos olhos:</p>
                <select 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_CORDOSOLHOS"
                    name="cor_dos_olhos"
                    value={stateFilter.cor_dos_olhos}
                    onChange={handleChangeFilter}
                >
                    <option value="">-</option>
                    <option value="Azul">Azul</option>
                    <option value="Castanho">Castanho claro</option>
                    <option value="Verde">Verde</option>
                    <option value="Castanho escuro">Castanho escuro</option>
                    <option value="Ambar">Ambar</option>
                    <option value="Outro">Outro</option>
                </select>
            </div>

            <div className='mb-3'>
                <p>Cor da pele:</p>
                <select
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_CORDAPELE"
                    name="cor_da_pele"
                    value={stateFilter.cor_da_pele}
                    onChange={handleChangeFilter}
                >
                    <option value="">-</option>
                    <option value="Amarelo">Amarelo</option>
                    <option value="Branco">Branco</option>
                    <option value="Indigena">Indigena</option>
                    <option value="Preto">Preto</option>
                </select>
            </div>

            <div className='mb-3'>
                <p>Cor do cabelo:</p>
                <select
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_CORDOCABELO"
                    name="cor_do_cabelo"
                    placeholder="Cor do cabelo" 
                    value={stateFilter.cor_do_cabelo}
                    onChange={handleChangeFilter}
                >
                    <option value="">-</option>
                    <option value="Preto">Preto</option>
                    <option value="Castanho">Castaho</option>
                    <option value="Loiro">Loiro</option>
                    <option value="Ruivo">Ruivo</option>
                    <option value="Outro">Outro</option>
                </select>
            </div>

            <div className='mb-3'>
                <p>Tipo de cabelo:</p>
                <select 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_TIPODECABELO"
                    name="tipo_de_cabelo"
                    value={stateFilter.tipo_de_cabelo}
                    onChange={handleChangeFilter}
                >
                    <option value="">-</option>
                    <option value="Encaracolado">Encaracolado</option>
                    <option value="Liso">Liso</option>
                    <option value="Careca">Careca</option>
                    <option value="Calvo">Calvo</option>
                    <option value="Outro">Outro</option>
                </select>
            </div>

            <div className='mb-3'>
                <p>CEP:</p>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_CEP"
                    name="cep"
                    placeholder="CEP" 
                    value={stateFilter.cep}
                    onChange={handleChangeFilter}
                />
            </div>

            <div className='mb-3'>
                <p>Rua:</p>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_RUA"
                    name="rua"
                    placeholder="Rua" 
                    value={stateFilter.rua}
                    onChange={handleChangeFilter}
                />
            </div>

            <div className='mb-3'>
                <p>Bairro:</p>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    " 
                    data-type="SET_BAIRRO"
                    name="bairro"
                    placeholder="Bairro" 
                    value={stateFilter.bairro}
                    onChange={handleChangeFilter}
                />
            </div>

            <div className='mb-3'>
                <p>Numero:</p>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    " 
                    data-type="SET_NUMERO"
                    name="numero"
                    type="number" 
                    placeholder="Numero (digite um numero, nunca uma letra)" 
                    value={stateFilter.numero}
                    onChange={handleChangeFilter}
                />
            </div>

            <div className='mb-3'>
                <p>Complemento:</p>
                <input 
                    className="
                        shadow-inner 
                        shadow-stone-100
                        text-stone-600
                        text-sm
                        bg-stone-50 
                        w-full 
                        border 
                        rounded 
                        border-stone-200 
                        py-2 
                        px-3 
                        hover:border-stone-500 
                        focus:border-stone-500 
                        focus:outline-none
                    "
                    data-type="SET_COMPLEMENTO"
                    name="complemento"
                    placeholder="Complemento" 
                    value={stateFilter.complemento}
                    onChange={handleChangeFilter}
                />
            </div>
        </>
    )
}