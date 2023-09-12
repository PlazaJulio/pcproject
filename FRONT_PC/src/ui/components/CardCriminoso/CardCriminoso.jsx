export default function CardCriminoso({nomeCriminoso, imagem, conteudo}){
    return <div className="card">
        <div className="card-header">
            <p className="card-header-title">{nomeCriminoso}</p>
        </div>
        <figure className="card-image">
            <img src="https://img.freepik.com/fotos-gratis/criminoso-autoconfiante-posando-isolado-em-uma-superficie-cinza_176532-14391.jpg"/>
        </figure>
        <div className="card-content">
            <p>{conteudo}</p>
        </div>
    </div>
}

