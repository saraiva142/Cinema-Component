import InputForm from "../../../components/inputs/input";
import InputSelect from "../../../components/inputs/inputSelect";
import api from "../../../service/api";
import ModalFilme from "./modalFilme";

export default function FormFilms() {

    const handleSave = async () => {
        const titulo = document.getElementById("inputTitulo").value;
        const genero = document.getElementById("inputGenero").value;
        const descricao = document.getElementById("inputDescricao").value;
        const classificacao = document.getElementById("inputClassificacaoIndicativa").value;
        const duracao = document.getElementById("inputDuracao").value;
        const estreia = document.getElementById("inputDataEstreia").value;

        console.log(estreia);

        const filmes = JSON.parse(localStorage.getItem("filmes")) || [];

        const novoFilme = {
            id: filmes.length + 1,
            titulo,
            genero,
            descricao,
            classificacao,
            duracao,
            estreia
        };

        const response = await api.post("/filmes", {
            titulo,
            genero,
            descricao,
            classificacao,
            duracao,
            estreia
        })

        // filmes.push(novoFilme);

        // localStorage.setItem("filmes", JSON.stringify(filmes));

        // Limpar os campos após salvar
        document.getElementById("inputTitulo").value = "";
        document.getElementById("inputGenero").value = "";
        document.getElementById("inputDescricao").value = "";
        document.getElementById("inputClassificacaoIndicativa").value = "";
        document.getElementById("inputDuracao").value = "";
        document.getElementById("inputDataEstreia").value = "";
    };

    return (
        <>
        <div className="cadastro_film" style={{display: "flex",  justifyContent: "center", alignItems: "center", padding: "5%"}}>
            <form className="row g-3" style={{width: "46rem"}} onSubmit={(e) => e.preventDefault()}>
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
                        id={"inputDescricao"}
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
                <ModalFilme
                id="exampleModal"
                idModal="exampleModalLabel"
                labelBotton='Salvar'
                labelModal='Filme Cadastrado ✨'
                textoModal='O filme foi cadastrado com sucesso! Agora ele já está disponível para compra de ingressos.'
                onSave={handleSave}
                />
            </form>
        </div>
        </>
    );
}