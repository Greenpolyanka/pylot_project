import React from 'react';
import cats from './Cats.module.css';
import dog1 from '../images/dog1.jpg';
import dog2 from '../images/dog2.jpg';
import dog3 from '../images/dog3.jpg';
import dog4 from '../images/dog4.jpg';
import dog5 from '../images/dog5.jpg';
import dog6 from '../images/dog6.jpg';
import dog7 from '../images/dog7.jpg';

const Dogs = () => {
    return (
        <div className={cats.container}>
            <h1 className={cats.h1}>Собаки</h1>
            <h3 className={cats.h3}>Если вам кто-то приглянулся, то заполните форму обратной связи ниже</h3>
            <div className='row'>
                <div className='col-md-4'>
                    <div className={cats.kitten}>
                        <div className={cats.image}>
                            <img className={cats.img} src={dog1} alt="cute dog" />
                        </div>
                        <div className={cats.text}>
                            <h4>Феликс</h4>
                            <div>
                                <span>4 года. Красавчик для активных хозяев, любит поиграться в сугробах зимой.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className={cats.kitten}>
                        <div className={cats.image}>
                            <img className={cats.img} src={dog2} alt="cute dog" />
                        </div>
                        <div className={cats.text}>
                            <h4>Брауни</h4>
                            <div>
                                <span>2 года. Тихая и здоровая девочка.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className={cats.kitten}>
                        <div className={cats.image}>
                            <img className={cats.img} src={dog3} alt="cute dog" />
                        </div>
                        <div className={cats.text}>
                            <h4>Чурик</h4>
                            <div>
                                <span>1 год. Мальчик породы чихуахуа, не даст хозяину соскучиться ни на прогулке, ни дома.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className={cats.kitten}>
                        <div className={cats.image}>
                            <img className={cats.img} src={dog4} alt="cute dog" />
                        </div>
                        <div className={cats.text}>
                            <h4>Майя</h4>
                            <div>
                                <span>2 года. Игривая собака для веселых хозяев с просторной квартирой.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className={cats.kitten}>
                        <div className={cats.image}>
                            <img className={cats.img} src={dog5} alt="cute dog" />
                        </div>
                        <div className={cats.text}>
                            <h4>Арчи</h4>
                            <div>
                                <span>4 месяца. Породистый щенок.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className={cats.kitten}>
                        <div className={cats.image}>
                            <img className={cats.img} src={dog6} alt="cute dog" />
                        </div>
                        <div className={cats.text}>
                            <h4>Эльза</h4>
                            <div>
                                <span>4 года. Стерилизованная девочка для загородного дома.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className={cats.kitten}>
                        <div className={cats.image}>
                            <img className={cats.img} src={dog7} alt="cute dog" />
                        </div>
                        <div className={cats.text}>
                            <h4>Киндер</h4>
                            <div>
                                <span>2 месяца. Щенок померанского шпица, готов уехать к хозяевам с 3 месяцев.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dogs;