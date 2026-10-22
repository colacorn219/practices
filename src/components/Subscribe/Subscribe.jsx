import s from './Subscribe.module.css'
export function Subscribe() {
    return (
        <section>
            <div className="container">
                <div className={s.subscribe}>

                    <div className={s.subscribeCol}>
                        <h2>Письма с чудинкой</h2>
                        <p>Новинки, вдохновение и маленькие радости.
                            Не чаще двух раз в месяц — обещаем.</p>
                    </div>
                    <div className={s.subscribeCol}>
                        <form action="#" method='post'>
                            <input type="text" placeholder='Твоя электронная почта' />
                            <button type="submit" className='btn'>Подписаться</button>
                        </form>
                        <p>Подписываясь, ты соглашаешься с политикой конфиденциальности.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}