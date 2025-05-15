function Menu(){
    return (
        <>
        {/* Colocar as variáveis na assinatura para saber o active */}
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand" href="index.html">CineSaraiva 🎬</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="filmes.html">Filmes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="salas.html">Salas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sessoes.html">Sessões</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="ingressos.html">Ingressos</a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link active" href="ingressos.html">Ingressos</a>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link" href="sessoesDisponiveis.html">Sessões Disponíveis</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </>
    );
}

export default Menu;