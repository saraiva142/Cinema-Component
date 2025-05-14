function Menu(){
    return (
        <>
        {/* Colocar as variáveis na assinatura para saber o active */}
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
            <a class="navbar-brand" href="index.html">CineSaraiva 🎬</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="filmes.html">Filmes</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="salas.html">Salas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sessoes.html">Sessões</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="ingressos.html">Ingressos</a>
                </li>
                {/* <li class="nav-item">
                    <a class="nav-link active" href="ingressos.html">Ingressos</a>
                </li> */}
                <li class="nav-item">
                    <a class="nav-link" href="sessoesDisponiveis.html">Sessões Disponíveis</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        </>
    );
}

export default Menu;