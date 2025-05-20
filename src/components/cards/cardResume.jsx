import BottonLink from "../botoes/botaoLink";
export default function CardResume({
    src="/cartazes/Novo Projeto (9).png",
    alt="",
    title="O Fantástico Sr. Raposo",
    texto="Texto do filme",
    href="ingressos.html",
    label_botton="Comprar Ingressos",
}) {
    return(
        <>
        {/* O Sr. Raposo prometeu à esposa que deixaria a vida de roubos de galinhas. Porém, a proximidade do novo lar com as fazendas de Boggis, Bunce e Bean faz com que volte à velha vida. Só que logo o trio de fazendeiros se une para capturá-lo. */}
        <div className="col-12 col-sm-6 col-lg-4">
            <div className="card">
                <img src={src} alt="" className="card-img-top"></img>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">
                        {texto}
                    </p>
                    <br></br>
                    <BottonLink 
                        href={href}
                        label={label_botton}
                    />
                </div>
            </div>
        </div>
        </>
    );
}