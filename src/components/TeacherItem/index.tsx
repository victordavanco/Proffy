import React from 'react';
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://scontent.fsjp9-1.fna.fbcdn.net/v/t1.0-0/c0.25.206.206a/p206x206/123338896_4452107444864168_2579871710604009164_o.jpg?_nc_cat=106&ccb=2&_nc_sid=da31f3&_nc_ohc=hK3X6GVxirYAX-veiJs&_nc_ht=scontent.fsjp9-1.fna&tp=27&oh=716fcdd12f929ce6ef33eb258b767065&oe=5FC63CC3" alt="Víctor Madrid Davanço"/>
                        <div>
                            <strong>Víctor Madrid Davanço</strong>
                            <span>Programação</span>
                        </div>
                    </header>
                    <p>Sempre em busca por novos desafios! 
                        <br/><br/>
                       Com experiência em desenvolvimento React!
                       </p>
                       <footer>
                           <p>Preço/hora
                           <strong>R$ 200,00</strong>
                           </p>
                           
                           <button type="button">
                               <img src={whatsappIcon} alt="WhatsApp"/>
                               Entrar em contato.
                           </button>
                       </footer>
                </article>
    )
}
export default TeacherItem;