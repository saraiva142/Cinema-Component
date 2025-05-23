import Card from "../../../components/cards/card";
import Menu from "../../../components/menus/menu";

export default function SessaoDisp(){
    return(
        <>
        {/* <Menu /> */}

        <div class="container">
            <br></br>
            <h5 class="card-title fs-1 fw-bold" style={{color: "black"}}>Sessões Disponíveis 🍿 -</h5>
            <br>
            </br>
            <div class="row">
                
                    <Card 
                    src="/cartazes/truman.jpg"
                    />
                    <Card 
                    src="/cartazes/curtindo.jpg"
                    />
                    <Card 
                    src="/cartazes/kadu.jpg"
                    />

            </div>
        </div>

        <div class="card text-bg-dark">
            <div class="card-img-overlay">
            
            <div class="container mt-5">
                <div id="sessoesDisponiveis" class="row d-flex justify-content-between gap-4">
                     {/* Os cards das sessões serão adicionados aqui */}
                </div>
            </div>
            </div>
        </div>
        
        
        
        </>
    );
}