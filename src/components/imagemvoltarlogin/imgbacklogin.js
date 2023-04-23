import {AiOutlineArrowLeft} from 'react-icons/ai'
import styles from './imgbacklogin.module.css'

export default function ImgBackLogin()

{
return (
    <>

<AiOutlineArrowLeft className={styles["arrow-icon"]}/>
<p className={styles["p-back-to-login"]}>Voltar ao login</p>

<img className={styles["background-image"]} src="/Mask group.png" alt="imagem-back-ground" />
</>
)


}