import InputForm from "../../../components/inputs/input";
import InputSelect from "../../../components/inputs/inputSelect";

export default function FormFilms() {
    return (
        <>
        <div className="cadastro_film" style={{display: "flex",  justifyContent: "center", alignItems: "center", padding: "5%"}}>
            <form className="row g-3" style={{width: "46rem"}}>
                <div className="col-md-6">
                    <InputForm
                        id="inputTitulo"
                        label="Título"
                        placeholder="Título do filme"
                    />
                </div>
                <div className="col-md-6">
                    <InputSelect
                        id="inputGenero"
                        label="Gênero"
                        defaultValue="Gênero..."
                        placeholder="Gênero..."
                        options={[
                            {value: "Comédia", label: "Comédia"},
                            {value: "Românce", label: "Românce"},
                            {value: "Ficção", label: "Ficção"},
                            {value: "Ação", label: "Ação"},
                            {value: "Animação", label: "Animação"},
                        ]}
                    />
                </div>
                <div className="col-12">
                    <InputForm
                        id={"inputDiretor"}
                        label={"Descrição"}
                        placeholder={"Sinópse do filme"}
                    />
                </div>
                <div className="col-12">
                    <InputSelect
                        id="inputClassificacaoIndicativa"
                        label="Classificação Indicativa"
                        placeholder="Classificação Indicativa"
                        options={[
                            {value: "L", label: "L"},
                            {value: "10", label: "10"},
                            {value: "12", label: "12"},
                            {value: "14", label: "14"},
                            {value: "16", label: "16"},
                            {value: "18", label: "18"},
                        ]}
                    />
                </div>
                <div className="col-md-6">
                    <InputForm
                        id="inputDuracao"
                        label="Duração (min)"
                        type="number"
                        placeholder="Duração do filme"
                    />
                </div>
                <div className="col-md-6">
                    <InputForm
                        id="inputDataEstreia"
                        label="Data de Estreia"
                        placeholder="Data de Estreia"
                        type="date"
                    />
                </div>
                <div className="col-12">
            
                    <button type="button" id="btn-salvar" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Salvar
                    </button>

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Filme Cadastrado ✨</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            O filme foi cadastrado com sucesso! Agora ele já está disponível para compra de ingressos.
                        </div>
                        
                        </div>
                    </div>
                    </div>
                </div>
            </form>
        </div>
        </>
    );
}