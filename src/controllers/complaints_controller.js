import { v4 as uuidv4 } from 'uuid'
import complainModel from '../models/complaints.js';

const registerComplaintController = async (req, res) =>{


    const {...otherData} = req.body;
    const complaintData = {
        id: uuidv4(),
        ...otherData
    };

    try {
        const complaint = await complainModel.registerComplaint(complaintData);
        console.log(complaint);
        res.status(200).json({message:"Denuncia registrada con éxito."});
        
    } catch (error) {
        res.status(500).json(error.msg);
    }
}

export {
    registerComplaintController
}