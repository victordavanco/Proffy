import express from 'express';
import cors from 'express';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//GET:buscar ou listar informação
//POST:criar informação
//PUT:atualizar informação
//DELETE:deletar informação

//Corpo (Request Budy)
//Route Params:Identificar qual requrso eu quero atualizar ou deletar
//Query Params: Paginação, filtros, ordenação



//localhost:3333

app.listen(3333);
