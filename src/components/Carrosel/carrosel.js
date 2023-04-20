import style from '../Carrosel/carrosel.css'
import { Carousel } from 'react-responsive-carousel';


export default function Carrosel() {

    return (
        <Carousel>
            <div className={style["carousel-flex"]}>
                <div>
                    <img src="/Frame 8.png" alt="" />
                    <p className="legend" alt="">Legend 1</p>
                </div>
                <div>
                    <img src="/Frame 9.png" alt="" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/Frame 10.png" alt="" />
                    <p className="legend">Legend 3</p>
                </div>
            </div>
        </Carousel>


    )





}