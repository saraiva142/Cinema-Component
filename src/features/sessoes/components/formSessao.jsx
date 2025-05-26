import { useEffect, useState } from "react";
import InputForm from "../../../components/inputs/input";
import InputSelect from "../../../components/inputs/inputSelect";
import ModalFilme from "../../filme/components/modalFilme";
import ModalSala from "../../salas/components/modalSala";

export default function FormSessao(){

    const [filmes, setFilmes] = useState([]);
    const [salas, setSalas] = useState([]);

    useEffect(() => {
        const filmesStorage = JSON.parse(localStorage.getItem("filmes")) || [];
        const salasStorage = JSON.parse(localStorage.getItem("salas")) || [];
        setFilmes(filmesStorage);
        setSalas(salasStorage);
    }, []);

    const handleSave = () => {
        const filme = document.getElementById("inputFilme").value;
        const sala = document.getElementById("inputSala").value;
        const dataHora = document.getElementById("inputDataHora").value;
        const valor = document.getElementById("inputValor").value;
        const idioma = document.getElementById("inputIdioma").value;
        const formato = document.getElementById("inputFormato").value;

        const sessoes = JSON.parse(localStorage.getItem("sessoes")) || [];

        const novaSessao = {
            id: sessoes.length + 1,
            filme,
            sala,
            dataHora,
            valor,
            idioma,
            formato
        };

        sessoes.push(novaSessao);

        localStorage.setItem("sessoes", JSON.stringify(sessoes));

        // Limpar campos
        document.getElementById("inputFilme").value = "";
        document.getElementById("inputSala").value = "";
        document.getElementById("inputDataHora").value = "";
        document.getElementById("inputValor").value = "";
        document.getElementById("inputIdioma").value = "";
        document.getElementById("inputFormato").value = "";
    };

    return(
        <>

        <div className="cadastro_film" style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "5%"}}>
            <form className="row g-3" style={{width: "46rem"}} onSubmit={(e) => e.preventDefault()}>
                <div className="col-md-6">
                    <InputSelect
                        id="inputFilme"
                        label="Filme"
                        defaultValue="O Fanástico SR. Raposo"
                        placeholder="O Fanástico SR. Raposo"
                        // options={[
                        //     {value: "Clube da Luta", label: "Clube da Luta"},
                        //     {value: "A Vida Secreta de Walter Mitty", label: "A Vida Secreta de Walter Mitty"},
                        //     {value: "Meu Malvado Favorito", label: "Meu Malvado Favorito"},
                        // ]}
                        options={filmes.map(f => ({ value: f.titulo, label: f.titulo }))}
                    />
                </div>
                <div className="col-md-6">
                    <InputSelect
                        id="inputSala"
                        label="Sala"
                        defaultValue="Sala B2"
                        placeholder="Sala B2"
                        // options={[
                        //     {value: "Sala-Pipoca", label: "Sala-Pipoca"},
                        //     {value: "Sala-Spielberg", label: "Sala-Spielberg"},
                        //     {value: "Sala-Tarantino", label: "Sala-Tarantino"},
                        // ]}
                        options={salas.map(s => ({ value: s.salaNome, label: s.salaNome }))}
                    />
                </div>
                <div className="col-md-6">
                    <InputForm
                        id="inputDataHora"
                        label="Data & Hora"
                        placeholder="Data & Hora"
                        type="datetime-local"
                    />
                </div>
                <div className="col-md-6">
                    <InputForm
                        id="inputValor"
                        label="Preço"
                        placeholder="R$60,00"
                        type="number"
                    />
                </div>
                <div className="col-md-6">
                    <InputSelect 
                        id="inputIdioma"
                        label="Idioma"
                        options={[
                            {value: "Dublado", label: "Dublado"},
                            {value: "Legandado", label: "Legendado"},
                        ]}
                    />
                </div>
                <div className="col-md-6">
                    <InputSelect 
                        id="inputFormato"
                        label="Formato"
                        options={[
                            {value:"2D", label:"2D"},
                            {value:"3D", label:"3D"}
                        ]}
                    />
                </div>
                <ModalSala 
                    idBotao='btn-salvar-sala'
                    idModal='exampleModal'
                    labelModal="Sessao Cadastrada ✨"
                    labelbotao='Salvar'
                    textoModal="A sessão foi cadastrada com sucesso! 🎉"
                    onSave={handleSave}
                />
            </form>
        </div>
        </>
    );
}