import Menu from "../../../components/menus/menu";
import Carrosel from "../../home/components/carrosel/carrosel";
import FormSessao from "../components/formSessao";

export default function Sessoes(){
    return (
        <>
        <Menu />

        <Carrosel
        src1="/cartazes/clublut.jpg"
        src2="/cartazes/fantrapo.jpg"
        src3="/cartazes/openheim.jpg"
        />

        <figure class="text-center">
            <blockquote class="blockquote">
            <p>
                <h1>Cadastro de Sessões 🍿</h1>
            </p>
            </blockquote>
            <figcaption class="blockquote-footer">
            Cadastre aqui as sessões dos filmes que estarão em cartaz no CineSaraiva. 
            </figcaption>
        </figure>
        
        <FormSessao />
        </>
    );
}