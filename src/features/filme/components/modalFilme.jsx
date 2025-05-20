export default function ModalFilme({
    id='exampleModal',
    idModal='exampleModalLabel',
    labelBotton='Esqueceu, seria salvar',
    labelModal='Esquceu TBM - Filme Cadastrado ✨',
    textoModal='O filme foi cadastrado com sucesso! Agora ele já está disponível para compra de ingressos.'

}){
    return(
        <>
        <div className="col-12">
            
                    <button type="button" id="btn-salvar" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    {labelBotton}
                    </button>

                    <div className="modal fade" id={id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={idModal}>{labelModal}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {textoModal}
                        </div>
                        
                        </div>
                    </div>
                    </div>
                </div>
        </>
    );
}