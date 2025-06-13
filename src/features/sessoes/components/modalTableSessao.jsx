import { useEffect, useState } from "react";
import api from "../../../service/api";

export default function ModalTableSessao({
    id = 'modalTableSessao',
    idModal = 'modalTableSessaoLabel',
    labelBotton = 'Ver Sessões',
    labelModal = 'Lista de Sessões 🎬',
    textoModal = 'Aqui está a tabela com todas as sessões cadastradas.'
}) {
    const [sessoes, setSessoes] = useState([]);

    async function getSessoes() {
        const response = await api.get("/sessoes");
        setSessoes(response.data);
    }
    console.log("Sessoes:", sessoes);

    useEffect(() => {
        // const sessoesStorage = JSON.parse(localStorage.getItem("sessoes")) || [];
        // setSessoes(sessoesStorage);
        getSessoes();
    }, []);

    // const atualizarSessoes = () => {
    //     const sessoesStorage = JSON.parse(localStorage.getItem("sessoes")) || [];
    //     setSessoes(sessoesStorage);
    // };

    return (
        <>
            <div className="col-12">
                <button
                    type="button"
                    className="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target={`#${id}`}
                    //onClick={atualizarSessoes}
                >
                    {labelBotton}
                </button>

                <div
                    className="modal fade"
                    id={id}
                    tabIndex="-1"
                    aria-labelledby={idModal}
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id={idModal}>
                                    {labelModal}
                                </h1>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                {textoModal}

                                <div className="table-responsive mt-3">
                                    <table className="table table-bordered table-striped text-center align-middle">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Filme</th>
                                                <th>Sala</th>
                                                <th>Data & Hora</th>
                                                <th>Valor (R$)</th>
                                                <th>Idioma</th>
                                                <th>Formato</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {sessoes.length > 0 ? (
                                                sessoes.map((sessao) => (
                                                    <tr key={sessao.id}>
                                                        <td>{sessao.id}</td>
                                                        <td>{sessao.filme?.titulo}</td>
                                                        <td>{sessao.sala?.nomeSala}</td>
                                                        <td>{sessao.dataHora}</td>
                                                        <td>{sessao.valor}</td>
                                                        <td>{sessao.idioma}</td>
                                                        <td>{sessao.formato}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="7">Nenhuma sessão cadastrada.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
