import styles from '../header/header.module.css'
import Button from '../button/button'

export default function Header(props) {
return (

<header>

<div className={styles["layout-grid"]}>
            <div className={styles["header-flex"]}>
                <img src="/Noví.png" alt="" />

                <Button>Entrar/Registrar</Button>
            </div>
        </div>
</header>


)


}