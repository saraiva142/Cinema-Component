import { useEffect, useState } from "react";
import Card from "../../../components/cards/card";
import Menu from "../../../components/menus/menu";
import CardSessao from "../components/cardSessao";

export default function SessaoDisp(){

    const [sessoes, setSessoes] = useState([]);

    useEffect(() => {
        const sessoesStorage = JSON.parse(localStorage.getItem("sessoes")) || [];
        setSessoes(sessoesStorage);
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
                                    filme={sessao.filme}
                                    sala={sessao.sala}
                                    dataHora={sessao.dataHora}
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