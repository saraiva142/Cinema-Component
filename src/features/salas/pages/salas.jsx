import Carrosel from '../../home/components/carrosel/carrosel'
import SalaForm from '../components/formSala';

export default function Salas(){
    return(
        <>
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
        </>
    );
}