export default function ModalSala({
    idBotao,
    idModal,
    labelModal="Não Esquece -> Sala Cadastrada ✨",
    labelbotao,
    textoModal="A sala foi cadastrada com sucesso! 🎉 Não esquece",
}){
    return(
        <>
        <div className="col-12">
          
            <button type="button" className="btn btn-dark" id={idBotao} data-bs-toggle="modal" data-bs-target="#exampleModal">
              {labelbotao}
            </button>

            <div className="modal fade" id={idModal} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">{labelModal}</h1>
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