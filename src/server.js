//Requerir modulos 
import express from 'express'
import router from './routers/users_routers.js'

//Inializaciones 
const app = express()

app.set('port', process.env.port || 3000)

//  Middleware
app.use(express.json())

//Rutas
//Ruta principal
app.get('/', (req, res)=>{
    res.send("OK")

})
//Rutas para los users
app.use('/api', router)

//Exportación de la instancia app
export default app;