import s from './Banner.module.css'
import bannerImg from '../../assets/BannerImg.png'
export function Banner() {
    return (
        <section>
            <div className="container">
                <div className={s.banner}>
                    <div className={s.bannerLeft}>
                        <p className="plash">
                            ОСЕНЬ С ХАРАКТЕРОМ / 2026
                        </p>
                        <h1>Не как все. <br />
                            Как ты.</h1>
                        <p>Уютный винтаж, забавные детали и вещи,
                            которые делают обычный день особенным.</p>
                        <a href="#" className="btn">Перейти в каталог<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M3.74951 8.99999H14.2507M9.00011 14.2506L14.2507 8.99999L9.00011 3.74939" stroke-width="1.6" stroke-linecap="round" stroke="" />
                        </svg></a>
                    </div>
                    <div className={s.bannerRight}>
                        <div className={s.bannerImg}><img src={bannerImg} alt="" /></div>
                        <div className="textRow">
                            <p>Кардиган «Тёплый сюжет»</p>
                            <p className="plash">
                                НАХОДКА СЕЗОНА
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}