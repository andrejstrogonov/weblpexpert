import React from 'react';
import './style.css';

const Test = () => {
    return (
        <>
            <h2 className="informationPanel__title">Главная</h2>

            <div className="inputFields">
                <div className="question">
                    <h3 className="inputFields_title">Вопрос</h3>
                    <div className="question__input inputTextStyles">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur nesciunt cumque nisi neque ea voluptatibus recusandae, quod id quam animi, ex adipisci dolores? Explicabo vero ducimus aliquid culpa ipsum aliquam.</div>
                </div>
                <div className="responseResults">
                    <h3 className="inputFields_title">Варианты ответов</h3>
                    <ul className="responseResults_list inputTextStyles">
                        <li className="responseResults_item responseResults_item-active">ascdsvf</li>
                        <li className="responseResults_item">sdfd</li>
                        <li className="responseResults_item">cdvsf</li>
                        <li className="responseResults_item">sacdvf</li>
                        <li className="responseResults_item">dcvf</li>
                    </ul>
                </div>
                <h3 className="inputFields_title">Выбранный вариант</h3>
                <p className="selectedResponse">Lorem ipsum dolor s Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, maiores esse? Voluptates exercitationem, deserunt architecto a aspernatur tempora id nobis dignissimos natus neque quibusdam suscipit asperiores explicabo! Molestiae, aut! Ratione?</p>
            </div>
        </>
    );
};

export default Test;
