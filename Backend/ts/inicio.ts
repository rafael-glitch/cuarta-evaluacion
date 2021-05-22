
const express= require('express')
const bodyParser = require('body-parser')
const cors= require('cors')
const gatos= require('../../src/app/datos.json')
const port= 3759
const app = express()
app.use(bodyParser.json({ extended: true }));
app.use(cors());

app.get('/',(req : any, res : any)=>{
    res.send(gatos)
})


app.post('/a', (req: any, res: any)=>{
    console.log(req.body);
    gatos.push(req.body);
    
})

app.post('/b', (req: any, res: any)=>{   
    console.log("3 eliminado");
    for (let i=0; i<gatos.length; i++){
        if((req.body.estado==gatos[i].estado)&&(req.body.titulo==gatos[i].titulo)&&(req.body.descripcion==gatos[i].descripcion)){
            console.log("un texto",gatos[i]);
            gatos.splice(i, 1);  
            break;
        }
    }
})
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})