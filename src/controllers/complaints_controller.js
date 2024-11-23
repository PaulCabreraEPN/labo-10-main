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

const getComplaintController = async (req,res) => {
    try {
        const complaints = await complainModel.getComplaint()
        res.status(200).json(complaints)
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const findComplaintController = async (req,res) => {
    const {id} = req.params;
    try {
        const complaint = await complainModel.findComplaint(id)
        res.status(200).json(complaint)
    } catch (error) {
        res.status(500).json({message:error})
    }
}


export {
    registerComplaintController,
    getComplaintController,
    findComplaintController
}