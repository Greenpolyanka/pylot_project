import React from 'react';
import mains from './Main.module.css';
import catdog from '../images/catdog.png';
import dog from '../images/dog.png';
import money from '../images/money.png';
import food from '../images/food.png';
import man from '../images/man.png';


const Main = () => {
    return (
        <div className={mains.body}>
            <div className={mains.header}>
                <div className={mains.container}>
                    <div className={mains.wrapper}>
                        <div className={mains.offer}>
                            <h1 className={mains.title}>
                                <span className={mains.title_span}>ЛАПА ЗА ЛАПУ</span>
                                <p></p>
                                <h2>ПРИЮТ ДЛЯ ЖИВОТНЫХ</h2>
                                <h2>город Екатеринбург</h2></h1>
                            <p className={mains.offer_text}>
                                Более 30 собак и 50 кошек
                                находятся под нашей опекой.
                                Вы можете найти себе верного друга и питомца с нами!</p>
                            <a href="#pom" className={mains.btn}>Как можно помочь</a>
                        </div>
                        <img class="animate__animated animate__heartBeat" className={mains.header_img} src={catdog} alt="pic" />
                    </div>
                </div>
            </div>
            <div id="pom" className={mains.main}>
                <div className={mains.container}>
                    <h2 className={mains.main_title}>Как вы можете нам помочь?</h2>
                    <div className={mains.main_block}>
                        <div className={mains.main_blocks}>
                            <img src={dog} alt="pic" width="90%" />
                            <h3>Взять питомца из приюта</h3>
                            <p className={mains.main_pcol}>
                                Если вы однажды приняли решение взять животное из приюта, это вызывает только уважение.
                                Каждый пёс и кот заслуживает того, чтобы у него был хозяин, каждый готов стать ему преданным другом.
                                Решившись подарить питомцу свою любовь и нежность,
                                вы получите в ответ ещё больше любви, внимания, счастья.</p>
                        </div>
                        <div className={mains.main_blocks}>
                            <img src={money} alt="pic" width="90%" />
                            <h3>Оказать финансовую помощь</h3>
                            <p className={mains.main_pcol}>Вы можете найти реквизиты для финансовой помощи на вкладке "Контакты". Если у вас есть вопросы по поводу оказания помощи, заполните форму ниже.</p>
                        </div>
                        <div className={mains.main_blocks}>
                            <img src={food} alt="pic" width="90%" />
                            <h3>Кормом</h3>
                            <p className={mains.main_pcol}>
                                Животных в приюте не становится меньше. Каждый день у нас уходит по 30 кг крупы, 15 кг мясных субпродуктов. Поэтому никогда не будет лишней помощь продуктами.
                            </p>
                        </div>
                        <div className={mains.main_blocks}>
                            <img src={man} alt="pic" width="90%" />
                            <h3>Стать волонтером</h3>
                            <p className={mains.main_pcol}>
                                Волонтёр берет под свою опеку питомца из приюта, занимается его социализацией, выгуливает, учит командам, а также ищет для него постоянный дом. Он фотографирует своего подопечного, пишет объявления о нём, которые распространяет по всем доступным каналам: в соцсетях, досках объявлений, в местных газетах.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;