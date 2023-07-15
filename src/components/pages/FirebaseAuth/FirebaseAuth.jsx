import { Button } from "@mui/material"
import { login } from "../../../firebaseConfig"
import { useNavigate } from "react-router-dom"


export const FirebaseAuth = () => {
    const navigate = useNavigate ()

    let infoInput = {
        email: "barabasaxel@gmail.com",
        password: "123456789"
    }
    
    const handleSubmit = async () => {
        let res = await login (infoInput)
        console.log (res)
        navigate ("/")
    }

    return (
    <div>
        <h1>Estoy en el login</h1>
        <Button onClick={handleSubmit}>Ingresar</Button>
        <h2>aun no tienes cuenta?</h2>
        <Button>Registrarse</Button>
    </div>
  )
}