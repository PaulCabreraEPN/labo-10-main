import {Router} from 'express';
import { registerUserController } from '../controllers/users_controller.js';
const router = Router(); 

router.post('/users/register', registerUserController); 

export default router 