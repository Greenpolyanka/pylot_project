import React from 'react';
import con from './Contacts.module.css';
import tel from '../images/tel.png';

const Contacts = () => {
    return (
        <div className={con.body}>
            <div className={con.header}>
                <h1 className={con.title_span}>КОНТАКТЫ</h1>
                <div className={con.container}>
                    <div className={con.wrapper}>
                        <img className={con.header_img} src={tel} alt="pic" />
                            <p className={con.offer_text}>
                                🐾 Наш телефон: 89634326443
                                <br /><br />🐾 Наш адрес электронной почты: iris347z@yandex.ru
                                <br /><br />🐾 Наш адрес: г.Екатеринбург, улица Малышева, д.150
                                <br /><br />🐾 Учредители проекта: Еголаева Татьяна Васильевна, Каменева Полина Дмитриевна.
                                <br /><br />🐾 Голодный телефон: 89634326443 МТС (просто пополните баланс на любую сумму)
                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;