import Card from "../../../components/cards/card";
import Menu from "../../../components/menus/menu";
import FormIngresso from "../components/formIngresso";
import ModalTableIngresso from "../components/modalTableIngrsso";

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


        
        <figure class="text-center">
                              
            <h1 style={{padding: "12px"}}>Ingressos CineSaraiva</h1>
                                
            <div className="text-center">
            <ModalTableIngresso
                labelBotton="Ver Lista de Ingressos"
                labelModal="Ingressos Comprados 🎟️"
                textoModal="Aqui está a tabela dos ingressos cadastrados no sistema."
            />
            </div>
                                
        </figure>
        </>
    );
}