import Card from "../../../components/cards/card";
import Menu from "../../../components/menus/menu";
import FormIngresso from "../components/formIngresso";

export default function Ingressos(){
    return(
        <>
        {/* <Menu /> */}

        <div className="container">
            <br></br>
            <h3>Compre Ingrssos 🎟</h3>
            <br>
            </br>
            <div className="row">

                <Card 
                    src="/cartazes/parasite.jpg"
                />
                <Card 
                    src="/cartazes/flow.jpg"
                />
                <Card 
                    src="/cartazes/aindaaqui.jpg"
                />
                
            </div>

        </div>

        <hr></hr>

        <figure className="text-center">
        <blockquote className="blockquote">
            <p>
            <h1>Compra de Ingresso 🍿</h1>
            </p>
        </blockquote>
        <figcaption className="blockquote-footer">
            Compre seu ingresso para a sessão desejada!
        </figcaption>
        </figure>

        <FormIngresso/>
        </>
    );
}