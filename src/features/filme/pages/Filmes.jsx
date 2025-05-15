import CardResume from "../../../components/cards/cardResume";
import Menu from "../../../components/menus/menu";

export default function Filmes() {
    return (
        <>
        <Menu />
        
        <div class="container">
            <br></br>
            <h3>Filmes</h3>
            <br></br>
            <div class="row">    
                <CardResume />
                <CardResume />
                <CardResume />
            </div>
        </div>

        <hr></hr>

        <figure class="text-center">
            <blockquote class="blockquote">
                <p>
                <h1>Cadastrar Filmes</h1>
                </p>
            </blockquote>
            <figcaption class="blockquote-footer">
                Cadastre um filme para que ele apareça na lista de filmes disponíveis.
            </figcaption>
        </figure>
        </>
    );
}