import s from './Prem.module.css'
import PremIcon from '../../assets/sparkles.svg'
import PremIcon2 from '../../assets/truck.svg'
import PremIcon3 from '../../assets/heart.svg'
export function Prem() {
    return (
        <section>
            <div className="container">
                <div className= {s.Prems}>
                    <div className={s.PremCard}>
                        <img src={PremIcon} alt="" />
                        <div className="cardText">
                            <h3>Не массово, а с душой</h3>
                            <p className='greyText'>Небольшие партии и особенные детали.</p>
                        </div>
                    </div>
                    <div className={s.PremCard}>
                        <img src={PremIcon2} alt="" />
                        <div className="cardText">
                            <h3>К тебе, где бы ты ни был</h3>
                            <p className='greyText'>Доставка по России от 3 рабочих дней.</p>
                        </div>
                    </div>
                    <div className={s.PremCard}>
                        <img src={PremIcon3} alt="" />
                        <div className="cardText">
                            <h3>Можно передумать</h3>
                            <p className='greyText'>Возврат в течение 14 дней.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}