import React from 'react';
import au from './Aboutus.module.css';
import dom from '../images/dom.png';
import cat0 from '../images/cat0.png';
import img1 from '../images/img1.png';
import img2 from '../images/img2.png';
import img3 from '../images/img3.png';
import img4 from '../images/img4.png';
import img5 from '../images/img5.png';

const Aboutus = () => {
    return (
        <div className={au.body}>
            <div className={au.header}>
                <h1 className={au.title_span}>О НАС</h1>
                <div className={au.container}>
                    <div className={au.wrapper}>
                        <img className={au.header_img} src={dom} alt="pic" />
                        <p className={au.offer_text}>
                            🐾 Задача нашего приюта - спасти бездомных животных, забрать их
                            с улицы и помочь обрести новый дом.
                            Всех животных в приюте вакцинируем, стерилизуем.
                            После этого им подыскиваются новые добросовестные хозяева.
                            Все собаки, поступающие в приют, регистрируются,
                            на каждого животного заведен паспорт.
                            <br /><br />🐾 Результат нашего труда - заметное снижение численности
                            бездомных животных в городе и ближайших сельских поселениях.
                            <br /><br />🐾 Приют открыт для посещения школьникам, студентам, семьям с детьми.
                            Детям с детства прививается любовь к животным и ответственность
                            по отношению к более слабым созданиям.</p>
                    </div>
                </div>
            </div>
            <div className={au.main}>
                <div className={au.container2}>
                    <h1 className={au.title_span}>НАШИ ДОСТИЖЕНИЯ</h1>
                    <div className={au.wrapper}>
                        <p className={au.offer_text}>
                            🐾 Организация официально существует с 8 марта 2021г.
                            Только за этот период волонтерами было подобрано с улиц города более
                            полутора сотен собак, около 250 кошек.
                            <br /><br />🐾 За время деятельности волонтеров в течение последних 3 лет новых
                            хозяев обрели более 400 животных.
                            Приют содержится в основном благодаря поддержке неравнодушных людей,
                            за счет пожертвований.
                        </p>
                        <img className={au.header_img} src={cat0} alt="pic" width="280px" padding="50px" />
                    </div>
                </div>
            </div>
            <div className={au.foto}>
                <div className={au.container}>
                    <h1 className={au.title_span}>ФОТОГАЛЕРЕЯ</h1>
                    <div className={au.cssSlider}>
                        <ul className={au.slides}>
                            <li id="slide1"><img src={img1} alt="" /></li>
                            <li id="slide2"><img src={img2} alt="" /></li>
                            <li id="slide3"><img src={img3} alt="" /></li>
                            <li id="slide4"><img src={img4} alt="" /></li>
                            <li id="slide5"><img src={img5} alt="" /></li>
                        </ul>
                        <ul className={au.thumbnails}>
                            <li><a href="#slide1"><img src={img1} alt="" /></a></li>
                            <li><a href="#slide2"><img src={img2} alt="" /></a></li>
                            <li><a href="#slide3"><img src={img3} alt="" /></a></li>
                            <li><a href="#slide4"><img src={img4} alt="" /></a></li>
                            <li><a href="#slide5"><img src={img5} alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;