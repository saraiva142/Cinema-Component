import BottonLink from "../botoes/botaoLink";
export default function CardResume() {
    return(
        <>
        <div className="col-12 col-sm-6 col-lg-4">
            <div className="card">
                <img src="/cartazes/Novo Projeto (9).png" alt="" className="card-img-top"></img>
                <div className="card-body">
                    <h4 className="card-title">O Fantástico Sr. Raposo</h4>
                    <p className="card-text">
                        O Sr. Raposo prometeu à esposa que deixaria a vida de roubos de galinhas. Porém, a proximidade do novo lar com as fazendas de Boggis, Bunce e Bean faz com que volte à velha vida. Só que logo o trio de fazendeiros se une para capturá-lo.
                    </p>
                    <br></br>
                    <BottonLink 
                        href="ingressos.html"
                        label="Comprar Ingressos"
                    />
                </div>
            </div>
        </div>
        </>
    );
}