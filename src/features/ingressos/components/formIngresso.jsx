import InputForm from "../../../components/inputs/input";
import InputSelect from "../../../components/inputs/inputSelect";
import ModalFilme from "../../filme/components/modalFilme";

export default function FormIngresso(){
    return(
        <>
        <div className="cadastro_ingresso" style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "5%"}}>
            <form className="row g-3" style={{width: "46rem"}}>
                <div className="col-md-6">
                    <InputSelect
                        id="inputSessao"
                        label="Filme - Sala - Data/Hora"
                        placeholder="Filme - Sala - Data/Hora"
                        options={[
                            {value: "O Fanástico SR. Raposo", label: "O Fanástico SR. Raposo"},
                            {value: "Clube da Luta", label: "Clube da Luta"},
                            {value: "A Vida Secreta de Walter Mitty", label: "A Vida Secreta de Walter Mitty"},
                            {value: "Meu Malvado Favorito", label: "Meu Malvado Favorito"},
                        ]}
                    />
                </div>
                <div className="col-md-6">
                    <InputForm
                        id="inputCliente"
                        type="text"
                        label="Nome do Cliente"
                        placeholder="Digite seu nome"
                    />
                </div>
                <div className="col-md-6">
                    <InputForm
                        id="inputCPF"
                        label="CPF do Cliente"
                        placeholder="Digite seu CPF"
                        type="number"
                    />
                </div>
                <div className="col-md-6">
                    <InputForm
                        id="inputAssesnto"
                        label="Assento"
                        placeholder="A10"
                        type="text"
                    />
                </div>
                <div className="col-md-6">
                    <InputSelect
                        id="inputPagamento"
                        label="Forma de Pagamento"
                        placeholder="E o pix?"
                        options={[
                            {value:"Crédito", label:"Crédito"},
                            {value:"Débito", label:"Débito"},
                            {value:"PIX", label:"PIX"},
                            {value:"Dinheiro", label:"Dinheiro"},
                        ]}
                    />
                </div>
                
                <div className="col-12">
                    <ModalFilme
                    id="exampleModal"
                    idModal="exampleModalLabel"
                    labelBotton='Comprar Ingresso'
                    labelModal='Ingresso Comprado ✨'
                    textoModal='O ingresso foi comprado com sucesso! 🎉'
                    />
                </div>
            </form>
            </div>

            
            <hr></hr>
        </>
    );
}