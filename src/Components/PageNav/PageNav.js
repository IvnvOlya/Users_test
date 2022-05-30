import './PageNav.css';

export default function PageNav(){
    return(
        <div className="PageNav">
            <div className="PageNav_heading">Concert club</div>
            <div className="PageNav_btns">
                <button className="PageNav_btn">Версия для слабовидящих</button>
                <button className="PageNav_btn">Мой профиль</button>
            </div>
        </div>
    )
}