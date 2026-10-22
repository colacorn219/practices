import s from './Footer.module.css';
import logo from '../../assets/footerLogo.svg'

export function Footer() {
    return (
        <footer>
            <div className="container">
                <div className={s.footer}>
                    <div className={s.footerContent}>
                        <div className={s.footerMini}>
                            <img src={logo} alt="" />
                            <p className='greyText'>Вещи с характером для тех, кто не хочет быть как все. Собрано с теплом и чуточкой чуда.</p>
                        </div>
                        <div className={s.footerMini}>
                            <p>Магазин</p>
                            <a href="#">Главная</a>
                            <a href="#">Каталог</a>
                            <a href="#">Корзина</a>
                        </div>

                        <div className={s.footerMini}>
                            <p>На связи</p>
                            <a href="mailto:привет@чуда.рф">привет@чуда.рф</a>
                        </div>
                    </div>
                    <hr />
                    <div className={s.footerContent}>
                        <p className="greyText">© 2026 Чуда. Нетфуллова Азалия 426ВЕБ.</p>
                        <a href="#">Политика конфиденциальности</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}