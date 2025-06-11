import InputForm from "../../../components/inputs/input";
import InputSelect from "../../../components/inputs/inputSelect";
import ModalFilme from "../../filme/components/modalFilme";
import ModalSala from "./modalSala";
import api from "../../../service/api";

export default function SalaForm(){

    const handleSave = async () => {
        const nomeSala = document.getElementById("inputNomeSala").value;
        const capacidade = document.getElementById("inputCapacidadeSala").value;
        const tipo = document.getElementById("inputTipo").value;

        const salas = JSON.parse(localStorage.getItem("salas")) || [];

        const novaSala = {
            id: salas.length + 1,
            nomeSala,
            capacidade,
            tipo,
        };

        const response = await api.post("/salas", {
            nomeSala,
            capacidade: Number(capacidade),
            tipo
        })

        //salas.push(novaSala);

        //localStorage.setItem("salas", JSON.stringify(salas));

        // Limpar os campos após salvar
        document.getElementById("inputNomeSala").value = "";
        document.getElementById("inputCapacidadeSala").value = "";
        document.getElementById("inputTipo").value = "";
    };

    return(
        <>
        <div class="cadastro_sala" style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "5%"}}>
            <form class="row g-3" style={{width: "46rem"}} onSubmit={(e) => e.preventDefault()}>
                <div class="col-md-6">
                    <InputForm
                        id="inputNomeSala"
                        label="Nome da Sala"
                        type="text"
                        placeholder="Nome da Sala"
                    />
                </div>
                <div class="col-md-6">
                    <InputForm
                        id="inputCapacidadeSala"
                        label="Capacidade da Sala"
                        type="input"
                        placeholder="62 lugares"
                    />
                </div>
                <div class="col-md-12">
                    <InputSelect
                    id="inputTipo"
                    label="Tipo"
                    defaultValue="Tipo ..."
                    options={[
                            {value: "2D", label: "2D"},
                            {value: "3D", label: "3D"},
                            {value: "IMAX", label: "IMAX"},
                        ]}
                    />
                </div>
                <div class="col-12">
                
                    <ModalSala 
                    idBotao='btn-salvar-sala'
                    idModal='exampleModal'
                    labelModal="Sala Cadastrada ✨"
                    labelbotao='Salvar'
                    textoModal="A sala foi cadastrada com sucesso! 🎉"
                    onSave={handleSave}
                    />
                </div>
            </form>
            </div>
        </>
    );
}