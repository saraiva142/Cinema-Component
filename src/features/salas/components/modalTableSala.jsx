import { useEffect, useState } from "react";
import api from "../../../service/api";

export default function ModalTableSala({
    id = 'modalTableSala',
    idModal = 'modalTableSalaLabel',
    labelBotton = 'Ver Salas',
    labelModal = 'Lista de Salas 🛋️',
    textoModal = 'Aqui está a tabela com todas as salas cadastrados.'
}) {

    const [salas, setSalas] = useState([]);

    async function getSalas() {
        const response = await api.get("/salas");
        setSalas(response.data)
    }
    console.log("askhsakhdkashd", salas)

    useEffect(() => {
        // const salasStorage = JSON.parse(localStorage.getItem("salas")) || [];
        // setSalas(salasStorage);
        getSalas();
    }, []);
    
    return (
        <>
            <div className="col-12">
                <button
                    type="button"
                    className="btn btn-dark"
                    data-bs-toggle="modal"
                    data-bs-target={`#${id}`}
                    // onClick={() => {
                    //     //const salasStorage = JSON.parse(localStorage.getItem("salas")) || [];
                    //     setFilmes(salasStorage);
                    // }}
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
                    <div className="modal-dialog modal-lg">
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
                                    <table className="table table-bordered table-striped text-center">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Nome da Sala</th>
                                                <th>Capacidade</th>
                                                <th>Tipo</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {salas.length > 0 ? (
                                                salas.map((sala) => (
                                                    <tr key={sala.id}>
                                                        <td>{sala.id}</td>
                                                        <td>{sala.nomeSala}</td>
                                                        <td>{sala.capacidade}</td>
                                                        <td>{sala.tipo}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="7">Nenhuma sala cadastrada.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
