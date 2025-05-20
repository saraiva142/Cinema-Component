import CardResume from "../../../components/cards/cardResume";
import Menu from "../../../components/menus/menu";
import FormFilms from "../components/formFilm";

export default function Filmes() {
    return (
        <>
        <Menu />
        
        <div className="container">
            <br></br>
            <h3>Filmes</h3>
            <br></br>
            <div className="row">    
                <CardResume 
                    src="/cartazes/Novo Projeto (9).png"
                    alt="O Fantástico Sr. Raposo"
                    title="O Fantástico Sr. Raposo"
                    texto="O Sr. Raposo prometeu à esposa que deixaria a vida de roubos de galinhas. Porém, a proximidade do novo lar com as fazendas de Boggis, Bunce e Bean faz com que volte à velha vida. Só que logo o trio de fazendeiros se une para capturá-lo."
                    href="ingressos.html"
                    label_botton="Comprar Ingressos"
                />
                <CardResume 
                    src="/cartazes/odisseia.png"
                    alt="A Space Odyssey"
                    title="A Space Odyssey"
                    texto="Dave Bowman e outros astronautas são enviados para uma misteriosa missão, os chips de seus computadores começam a mostrar um comportamento estranho, levando a um tenso confronto entre homem e máquina que resulta em uma viagem alucinante no espaço e no tempo."
                    href="ingressos.html"
                    label_botton="Comprar Ingressos"
                />
                <CardResume 
                    src="/cartazes/wallter.png"
                    alt="A Vida Secreta de Walter Mitty"
                    title="A Vida Secreta de Walter Mitty"
                    texto="Um homem tímido ao receber um pacote com negativos do importante fotógrafo Sean O'Connell, ele percebe que está faltando uma foto. É quando, Walter, com o apoio de Cheryl (Kristen Wiig) é obrigado a embarcar em uma verdadeira aventura."
                    href="ingressos.html"
                    label_botton="Comprar Ingressos"
                />
            </div>
        </div>

        <hr></hr>

        <figure className="text-center">
            <blockquote className="blockquote">
                <p>
                    <h1>Cadastrar Filmes</h1>
                </p>
            </blockquote>
            <figcaption className="blockquote-footer">
                Cadastre um filme para que ele apareça na lista de filmes disponíveis.
            </figcaption>
        </figure>

        <FormFilms />
        </>
    );
}