import InputForm from "../../../components/inputs/input";
import InputSelect from "../../../components/inputs/inputSelect";
import ModalFilme from "../../filme/components/modalFilme";
import ModalSala from "./modalSala";

export default function SalaForm(){
    return(
        <>
        <div class="cadastro_sala" style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "5%"}}>
            <form class="row g-3" style={{width: "46rem"}}>
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
                
                    <ModalSala />
                </div>
            </form>
            </div>
        </>
    );
}