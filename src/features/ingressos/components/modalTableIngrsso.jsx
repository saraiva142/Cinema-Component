import { useEffect, useState } from "react";
import api from "../../../service/api";

export default function ModalTableIngresso({
    id = 'modalTableIngresso',
    idModal = 'modalTableIngressoLabel',
    labelBotton = 'Ver Ingressos',
    labelModal = 'Lista de Ingressos 🎟️',
    textoModal = 'Aqui está a tabela com todos os ingressos cadastrados.'
}) {
    const [ingressos, setIngressos] = useState([]);

    async function getIngressos() {
        const response = await api.get("/ingressos");
        setIngressos(response.data);
    }
    console.log("Ingressos:", ingressos);
    useEffect(() => {
        // const ingressosStorage = JSON.parse(localStorage.getItem("ingressos")) || [];
        // setIngressos(ingressosStorage);
        getIngressos();
    }, []);

    const atualizarIngressos = () => {
        const ingressosStorage = JSON.parse(localStorage.getItem("ingressos")) || [];
        setIngressos(ingressosStorage);
    };

    return (
        <>
            <div className="col-12">
                <button
                    type="button"
                    className="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target={`#${id}`}
                    //onClick={atualizarIngressos}
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
                                                <th>Sessão</th>
                                                <th>Cliente</th>
                                                <th>CPF</th>
                                                <th>Assento</th>
                                                <th>Pagamento</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ingressos.length > 0 ? (
                                                ingressos.map((ingresso) => (
                                                <tr key={ingresso.id}>
                                                    <td>{ingresso.id}</td>
                                                    <td>
                                                    {ingresso.sessao
                                                        ? `${ingresso.sessao.filme?.titulo || ''} - ${ingresso.sessao.sala?.nomeSala || ''} - ${ingresso.sessao.dataHora ? new Date(ingresso.sessao.dataHora).toLocaleString() : ''}`
                                                        : ''}
                                                    </td>
                                                    <td>{ingresso.cliente}</td>
                                                    <td>{ingresso.cpf}</td>
                                                    <td>{ingresso.assento}</td>
                                                    <td>{ingresso.pagamento}</td>
                                                </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                <td colSpan="6">Nenhum ingresso cadastrado.</td>
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
