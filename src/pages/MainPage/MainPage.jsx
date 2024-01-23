import React from 'react';
import './style.css';

const MainPage = ({ dataArray }) => {
    let { title, question, answerOptions, response } = dataArray;
    return (
        <>
            <h2 className="informationPanel__title">{title}</h2>
            <div className="inputFields">
                <div className="question">
                    <h3 className="inputFields_title">Вопрос</h3>
                    <div className="question__input inputTextStyles">{question}</div>
                </div>
                <div className="responseResults">
                    <h3 className="inputFields_title">Варианты ответов</h3>
                    <ul className="responseResults_list inputTextStyles">
                        {answerOptions.map((element, index) => {
                            return (
                                <li key={index} className={element === response ? 'responseResults_item responseResults_item-active' : 'responseResults_item'}>
                                    {element}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <h3 className="inputFields_title">Выбранный вариант</h3>
                <p className="selectedResponse">{response}</p>
            </div>
        </>
    );
};

export default MainPage;
