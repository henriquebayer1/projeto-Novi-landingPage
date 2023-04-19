import styles from '../header/header.module.css'

export default function Header(props) {
return (

<header>
<div>
    <h1 className={styles.h1}>{props.titulo}</h1>
    <h2 className={styles.h2}>{props.subtitulo}</h2>
    <button></button>
</div>

</header>


)


}