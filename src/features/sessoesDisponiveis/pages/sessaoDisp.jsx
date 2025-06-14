import { useEffect, useState } from "react";
import Card from "../../../components/cards/card";
import Menu from "../../../components/menus/menu";
import CardSessao from "../components/cardSessao";
import api from "../../../service/api";

export default function SessaoDisp(){

    const [sessoes, setSessoes] = useState([]);

    async function getSessoesDispo() {
        const response = await api.get("/sessoes");
        setSessoes(response.data);
    }
    console.log("Sessoes:", sessoes);

    useEffect(() => {
        // const sessoesStorage = JSON.parse(localStorage.getItem("sessoes")) || [];
        // setSessoes(sessoesStorage);
        getSessoesDispo();
    }, []);

    return(
        <>
        {/* <Menu /> */}

        <div class="container">
            <br></br>
            <h5 class="card-title fs-1 fw-bold" style={{color: "black"}}>Sessões Disponíveis 🍿 -</h5>
            <br>
            </br>
            <div class="row">
                
                    <Card 
                    src="/cartazes/truman.jpg"
                    />
                    <Card 
                    src="/cartazes/curtindo.jpg"
                    />
                    <Card 
                    src="/cartazes/kadu.jpg"
                    />

            </div>
        </div>

        <div className="card text-bg-dark">
            <div className="card-img-overlay">
                <div className="container mt-5">
                    <div
                        className="row d-flex justify-content-between gap-4"
                        id="sessoesDisponiveis"
                    >
                        {sessoes.length > 0 ? (
                            sessoes.map((sessao) => (
                                <CardSessao
                                    key={sessao.id}
                                    filme={sessao.filme?.titulo || 'Sem título'}
                                    sala={sessao.sala?.nomeSala || 'Sem sala'}
                                    dataHora={new Date(sessao.dataHora).toLocaleString()}
                                    valor={sessao.valor}
                                />
                            ))
                        ) : (
                            <p style={{ color: "white" }}>
                                Nenhuma sessão disponível no momento.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
        
        
        
        </>
    );
}