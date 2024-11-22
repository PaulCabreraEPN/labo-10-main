//Requerir modulos 
import express from 'express'
import routerUser from './routers/users_routers.js'

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
//Rutas para los usuarios
app.use('/api', routerUser)

//Exportación de la instancia app
export default app;