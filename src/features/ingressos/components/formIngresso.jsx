import { useEffect, useState } from "react";
import InputForm from "../../../components/inputs/input";
import InputSelect from "../../../components/inputs/inputSelect";
import ModalFilme from "../../filme/components/modalFilme";

export default function FormIngresso(){

    const [sessoes, setSessoes] = useState([]);
    
        useEffect(() => {
            const sessoesStorage = JSON.parse(localStorage.getItem("sessoes")) || [];
            setSessoes(sessoesStorage);
        }, []);
    
    const handleSave = () => {
        const sessao = document.getElementById("inputSessao").value;
        const cliente = document.getElementById("inputCliente").value;
        const cpf = document.getElementById("inputCPF").value;
        const assento = document.getElementById("inputAssesnto").value;
        const pagamento = document.getElementById("inputPagamento").value;
        
        const ingressos = JSON.parse(localStorage.getItem("ingressos")) || [];

        const novaIngresso = {
            id: ingressos.length + 1,
            sessao,
            cliente,
            cpf,
            assento,
            pagamento
        };

        ingressos.push(novaIngresso);

        localStorage.setItem("ingressos", JSON.stringify(ingressos));

        // Limpar campos
        document.getElementById("inputSessao").value = "";
        document.getElementById("inputCliente").value = "";
        document.getElementById("inputCPF").value = "";
        document.getElementById("inputAssesnto").value = "";
        document.getElementById("inputPagamento").value = "";
    };

    return(
        <>
        <div className="cadastro_ingresso" style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "5%"}}>
            <form className="row g-3" style={{width: "46rem"}} onSubmit={(e) => e.preventDefault()}>
                <div className="col-md-6">
                    <InputSelect
                        id="inputSessao"
                        label="Filme - Sala - Data/Hora"
                        placeholder="Filme - Sala - Data/Hora"
                        // options={[
                        //     {value: "O Fanástico SR. Raposo", label: "O Fanástico SR. Raposo"},
                        //     {value: "Clube da Luta", label: "Clube da Luta"},
                        //     {value: "A Vida Secreta de Walter Mitty", label: "A Vida Secreta de Walter Mitty"},
                        //     {value: "Meu Malvado Favorito", label: "Meu Malvado Favorito"},
                        // ]}
                        options={sessoes.map(s => ({
                            value: `${s.filme} - ${s.sala} - ${s.dataHora}`,
                            label: `${s.filme} - ${s.sala} - ${s.dataHora}`
                        }))}
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
                    onSave={handleSave}
                    />
                </div>
            </form>
            </div>

            
            <hr></hr>
        </>
    );
}