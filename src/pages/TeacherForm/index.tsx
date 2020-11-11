import React from "react";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import './styles.css';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

function TeacherForm(){
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
            title="Qua incrível que você quer dar aulas."
            description="O primeiro passo é preencher esse formulário de inscrição"
            />
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="WhatsApp"/>    
                    <Textarea name="bio" label="Biografia"/>               
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