import styles from '../Carrosel/carrosel.module.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Carrosel(props) {

    return (

        // <div className={styles["layout-grid"]}>
        //     <div className={styles["main-flex"]}>
        //         <div className={styles.carrosel}>
        //             <div className={styles["alinhamento-imgs"]}>
        //                 <div className={styles["box-img"]}>

        //                     <img src="/Frame 8.png" alt="" />
        //                 </div>
        //                 <div className={styles["box-img"]}>

        //                     <img src="/Frame 9.png" alt="" />
        //                 </div>
        //                 <div className={styles["box-img"]}>

        //                     <img src="/Frame 10.png" alt="" />
        //                 </div>
        //                 <div className={styles["box-img"]}>

        //                     <img src="/Frame 8.png" alt="" />
        //                 </div>
        //             </div>
        //             <div className={styles["box-seta"]}>
        //                 <div className={styles["first-block"]}></div>
        //                 <div className={styles["second-block"]}></div>
        //                 <div className={styles["third-block"]}></div>

        //                 <img src="/Arrow 1.svg" alt="" />
        //             </div>


        //         </div>

        //     </div>
        // </div>

        <div className={styles["layout-grid"]}>
            <Carousel className={styles["main-slide"]}>
                
                    <div>
                        <img className={styles["img-size"]} src="/Frame 8.png" alt='' />
                        <p className="legend">Legend 1</p>
                    </div>
                    <div>
                        <img className={styles["img-size"]} src="/Frame 9.png" alt=''/>
                        <p className="legend">Legend 2</p>
                    </div>
                    <div>
                        <img className={styles["img-size"]} src="/Frame 10.png" alt=''/>
                        <p className="legend">Legend 3</p>
                    </div>
                    <div>
                        <img className={styles["img-size"]} src="/Frame 8.png" alt=''/>
                        <p className="legend">Legend 3</p>
                    </div>
                    
                
            </Carousel>
        </div>
    )





}