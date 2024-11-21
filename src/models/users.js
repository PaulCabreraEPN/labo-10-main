const userModel = {

    async registerUserModel (newUser) {
        const url = "http://localhost:4000/users"
        const peticion = await fetch(url,{
            method:'POST',
            body:JSON.stringify(newUser),
            headers:{'Content-Type':'application/json'}
        })

        console.log(peticion);
        const data = await peticion.json()
        
        return data
    },

}

export default userModel