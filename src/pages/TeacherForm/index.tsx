import React,{useState} from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

function TeacherForm(){
    const [name, setName]= useState('');
    const [avatar, setAvatar]= useState('');
    const [whatsapp, setWhatsapp]= useState('');
    const [bio, setBio]= useState('');

    const [scheduleItems, setScheduleItems ] = useState( [
        {week_day:0, from:'', to:''}

    ]);

    function addNewScheduleItem(){
        setScheduleItems([
            ...scheduleItems,
            {week_day:0, from:'', to:''}
        ]);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Qua incrível que você quer dar aulas."
            description="O primeiro passo é preencher esse formulário de inscrição"
            />
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input 
                    name="name" 
                    label="Nome completo"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                    />
                    <Input 
                    name="avatar" 
                    label="Avatar"
                    value={avatar}
                    onChange={(e)=>{setAvatar(e.target.value)}}
                    />
                    <Input 
                    name="whatsapp" 
                    label="WhatsApp"
                    value={whatsapp}
                    onChange={(e)=>{setWhatsapp(e.target.value)}}
                    />    
                    <Textarea 
                    name="bio" 
                    label="Biografia"
                    value={bio}
                    onChange={(e)=>{setBio(e.target.value)}}
                    />               
                </fieldset>
                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select 
                    name="subject" 
                    label="Matéria"
                    options={[
                        {value:'Artes', label:'Artes'},
                        {value:'Biologia', label:'Biologia'},
                        {value:'Ciências', label:'Ciências'},
                        {value:'Educação Física', label:'Educação Física'},
                        {value:'Física', label:'Física'},
                        {value:'Geografia', label:'Geografia'},
                        {value:'História', label:'História'},
                        {value:'Matemárica', label:'Matemárica'},
                        {value:'Português', label:'Português'},
                        {value:'Química', label:'Química'},
                        {value:'Programação', label:'Programação'},
                    ]}
                    />                   
                    <Input name="cost" label="Custo da sua hora por aula"/>
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                        + Novo horário
                    </button>
                    </legend>
                    
                  {scheduleItems.map(scheduleItem =>{
                      return(
                        <div key={scheduleItem.week_day} className="schedule-item">
                        <Select 
                         name="week_day" 
                         label="Dia da semana"
                         options={[
                            {value:'0', label:'Domingo'},
                            {value:'1', label:'Segunda-feira'},
                            {value:'2', label:'Terça-feira'},
                            {value:'3', label:'Quarta-feira Física'},
                            {value:'4', label:'Quinta-feira'},
                            {value:'5', label:'Sexta-feira'},
                            {value:'6', label:'Sábado'},                        
                        ]}
                        />
                        <Input name="from" label="Das" type="time"/>
                        <Input name="to" label="até" type="time"/>
                        </div>
                      )
                  })}  
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante"/>
                        Importante!<br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>

            </main>
        </div>
    )
}
export default TeacherForm; 