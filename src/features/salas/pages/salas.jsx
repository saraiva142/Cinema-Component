import Menu from '../../../components/menus/menu';
import Carrosel from '../../home/components/carrosel/carrosel'
import SalaForm from '../components/formSala';
import ModalTableSala from '../components/modalTableSala';

export default function Salas(){
    return(
        <>
        {/* <Menu /> */}
        <Carrosel 
            src1='/cartazes/killbill.png'
            src2='/cartazes/budapest.jpg'
            src3='/cartazes/starwars.jpg'
        />

        <figure class="text-center">
            <blockquote class="blockquote">
                <p>
                <h1>Cadastrar Salas 🛋</h1>
                </p>
            </blockquote>
            <figcaption class="blockquote-footer">
                Cadastre uma nova sala para o nosso cinema! 
            </figcaption>
        </figure>

        <SalaForm />

        <hr></hr>
        
        <figure class="text-center">
              
            <h1 style={{padding: "12px"}}>Salas CineSaraiva</h1>
                
            <div className="text-center">
                <ModalTableSala
                labelBotton="Ver Lista de Salas"
                labelModal="Salas Cadastradas 🛋️"
                textoModal="Aqui está a tabela das salas cadastradas no sistema."
                />
            </div>
                
        </figure>
        </>
    );
}