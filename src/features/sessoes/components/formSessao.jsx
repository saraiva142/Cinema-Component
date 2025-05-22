import InputForm from "../../../components/inputs/input";
import InputSelect from "../../../components/inputs/inputSelect";
import ModalFilme from "../../filme/components/modalFilme";
import ModalSala from "../../salas/components/modalSala";

export default function FormSessao(){
    return(
        <>

        <div className="cadastro_film" style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "5%"}}>
            <form className="row g-3" style={{width: "46rem"}}>
                <div className="col-md-6">
                    <InputSelect
                        id="inputFilme"
                        label="Filme"
                        defaultValue="O Fanástico SR. Raposo"
                        placeholder="O Fanástico SR. Raposo"
                        options={[
                            {value: "Clube da Luta", label: "Clube da Luta"},
                            {value: "A Vida Secreta de Walter Mitty", label: "A Vida Secreta de Walter Mitty"},
                            {value: "Meu Malvado Favorito", label: "Meu Malvado Favorito"},
                        ]}
                    />
                </div>
                <div className="col-md-6">
                    <InputSelect
                        id="inputSala"
                        label="Sala"
                        defaultValue="Sala B2"
                        placeholder="Sala B2"
                        options={[
                            {value: "Sala-Pipoca", label: "Sala-Pipoca"},
                            {value: "Sala-Spielberg", label: "Sala-Spielberg"},
                            {value: "Sala-Tarantino", label: "Sala-Tarantino"},
                        ]}
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
                />
            </form>
        </div>
        </>
    );
}