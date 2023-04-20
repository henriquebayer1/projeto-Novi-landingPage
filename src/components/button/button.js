import { useNavigate } from 'react-router-dom'
import style from './button.module.css'

export default function Button()
{

    const navigate = useNavigate();

    function handleClick () {

navigate("/Login")

    }

return (


<button className={style["button-login-cadastro"]} onClick={(e)=>handleClick()}>Entrar/Registrar</button>

)


}