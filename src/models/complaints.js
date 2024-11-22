//Modelo para denuncias
const complainModel = {
    async registerComplaint(newComplain){
        const url = "http://localhost:4000/complaints";
        const peticion = await fetch(url, {
            method:'POST',
            body:JSON.stringify(newComplain),
            headers:{'Content-Type':'applicatio/json'}
        })

        console.log(peticion);
        const data = await peticion.json();

        return data;
    }

};

export default complainModel;