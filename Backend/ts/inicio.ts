
const express= require('express')
const bodyParser = require('body-parser')
const cors= require('cors')
const gatos= require('../../src/app/datos.json')
const port= 3758
const app = express()
app.use(bodyParser.json({ extended: true }));
app.use(cors());

app.get('/',(req : any, res : any)=>{
    res.send(gatos)
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})
app.post('/', (req: any, res: any)=>{
    console.log(req.body);
    gatos.push(req.body);
    
});