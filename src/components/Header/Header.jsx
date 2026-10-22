import s from './Header.module.css'
import logo from '../../assets/logo.svg'
export function Header() {
    return (
        <header>
            <div className="container">
                <div className={s.header}>
                    <div className="logo"><img src={logo} /></div>
                    <nav>
                        <a href="#">Главная</a>
                        <a href="#">Каталог</a>
                        <a href="#">Корзина</a>
                    </nav>
                    <p>Будь собой. Это идёт.</p>
                </div>
            </div>

        </header>
    )
}