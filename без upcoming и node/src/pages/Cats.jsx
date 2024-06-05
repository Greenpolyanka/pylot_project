// pages/Cats.jsx
import React from 'react';
import cats from './Cats.module.css';
import cat1 from '../images/cat1.jpg';
import cat2 from '../images/cat2.jpg';
import cat3 from '../images/cat3.jpg';
import cat4 from '../images/cat4.jpg';
import cat5 from '../images/cat5.jpg';
import cat6 from '../images/cat6.jpg';
import cat7 from '../images/cat7.jpg';
import cat8 from '../images/cat8.jpg';
import cat9 from '../images/cat9.jpg';
import cat10 from '../images/cat10.jpg';
import cat11 from '../images/cat11.png';

const Cats = () => {
    return (
        <div className={cats.container}>
            <h1 className={cats.h1}>Коты и кошки</h1>
            <h3 className={cats.h3}>Если вам кто-то приглянулся, то заполните форму обратной связи ниже</h3>
            <div className='row'>
                <div className='col-md-4'>
                    <div className={cats.kitten}>
                        <div className={cats.image}>
                            <img className={cats.img} src={cat1} alt="cute cat" />
                        </div>
                        <div className={cats.text}>
                            <h4>Тиша</h4>
                            <div>
                                <span>4 года. Спокойный и очень ласковый кот. Любит постоянно находиться рядом с хозяином.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className={cats.kitten}>
                        <div className={cats.image}>
                            <img className={cats.img} src={cat5} alt="cute cat" />
                        </div>
                        <div className={cats.text}>
                            <h4>Черныш</h4>
                            <div>
                                <span>2 года. Здоровый, привитый. Очень активный и тактильный кот, предпочитает лежать в раковине.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className={cats.kitten}>
                        <div className={cats.image}>
                            <img className={cats.img} src={cat3} alt="cute cat" />
                        </div>
                        <div className={cats.text}>
                            <h4>Оскар</h4>
                            <div>
                                <span>3 года. Абсолютно здоровый кот, любитель полежать в нестандартных местах.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className={cats.kitten}>
                        <div className={cats.image}>
                            <img className={cats.img} src={cat4} alt="cute cat" />
                        </div>
                        <div className={cats.text}>
                            <h4>Кассиопея</h4>
                            <div>
                                <span>Кошка. 2 года. Стерилизована. Не упустит возможности полежать на диване с хозяином и громко помурлыкать.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className={cats.kitten}>
                        <div className={cats.image}>
                            <img className={cats.img} src={cat2} alt="cute cat" />
                        </div>
                        <div className={cats.text}>
                            <h4>Арчи</h4>
                            <div>
                                <span>Здоровый кастрированный кот 6 лет. Живет сам по себе, изредка дает себя погладить. В приюте ждет своего человека около года.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className={cats.kitten}>
                        <div className={cats.image}>
                            <img className={cats.img} src={cat6} alt="cute cat" />
                        </div>
                        <div className={cats.text}>
                            <h4>Эльза</h4>
                            <div>
                                <span>4 года. Стерилизованная девочка, любит поиграться с ногами хозяев и забираться на высокие шкафы.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className={cats.kitten}>
                        <div className={cats.image}>
                            <img className={cats.img} src={cat7} alt="cute cat" />
                        </div>
                        <div className={cats.text}>
                            <h4>Карамель</h4>
                            <div>
                                <span>1 год. Недавно в приюте, стеснительная кошка, приспосабливается к новому пространству.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className={cats.kitten}>
                        <div className={cats.image}>
                            <img className={cats.img} src={cat8} alt="cute cat" />
                        </div>
                        <div className={cats.text}>
                            <h4>Крючок</h4>
                            <div>
                                <span>4 месяца. Юркий котенок, кастрированный, готов к переезду к хозяину.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className={cats.kitten}>
                        <div className={cats.image}>
                            <img className={cats.img} src={cat10} alt="cute cat" />
                        </div>
                        <div className={cats.text}>
                            <h4>Мира</h4>
                            <div>
                                <span>1,5 года, девочка. Игривая и очень ласковая. Стерилизована и обработана от паразитов.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className={cats.kitten}>
                        <div className={cats.image}>
                            <img className={cats.img} src={cat9} alt="cute cat" />
                        </div>
                        <div className={cats.text}>
                            <h4>Дуня</h4>
                            <div>
                                <span>5 лет, мальчик. Не очень любит подпускать к себе, но придет к хозяину сам, как захочет ласки.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className={cats.kitten}>
                        <div className={cats.image}>
                            <img className={cats.img} src={cat11} alt="cute cat" />
                        </div>
                        <div className={cats.text}>
                            <h4>Рикки</h4>
                            <div>
                                <span>3 месяца, мальчик. Как и все рыжие коты любит бегать в большом пространстве. Подойдет для загородного дома.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cats;