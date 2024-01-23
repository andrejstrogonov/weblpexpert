import React from 'react';
import HomeImg from './imgNavigationBar/Home.svg';
import HeartOutlineImg from './imgNavigationBar/HeartOutline.svg';
import BookOpenOutlineImg from './imgNavigationBar/BookOpenOutline.svg';
import SearchOutlineImg from './imgNavigationBar/SearchOutline.svg';
import { NavLink, Outlet } from 'react-router-dom';
import './style.css';

const setActive = ({ isActive }) => (isActive ? 'sidebar__list-item sidebar__list_active' : 'sidebar__list-item');

const NavigationBar = () => {
    return (
        <div className="wrapper">
            <section className="functionalPanel">
                <section className="sidebar">
                    <h2 className="sidebar__logo">Web LP Structure</h2>
                    <ul className="sidebar__list">
                        <NavLink to="/" className={setActive}>
                            <img className="sidebar__list-img" src={HomeImg} alt="Фон приложения" />
                            <p className="sidebar__list-paragraph">Главная</p>
                        </NavLink>
                        <NavLink to="/сlassic" className={setActive}>
                            <img className="sidebar__list-img" src={BookOpenOutlineImg} alt="Фон приложения" />
                            <p className="sidebar__list-paragraph">Класический вывод</p>
                        </NavLink>
                        <NavLink to="/relevance" className={setActive}>
                            <img className="sidebar__list-img" src={BookOpenOutlineImg} alt="Фон приложения" />
                            <p className="sidebar__list-paragraph">Релевантный вывод</p>
                        </NavLink>
                        <NavLink to="/clusterrelevance" className={setActive}>
                            <img className="sidebar__list-img" src={BookOpenOutlineImg} alt="Фон приложения" />
                            <p className="sidebar__list-paragraph">Кластерно релевантный</p>
                        </NavLink>
                        <NavLink to="/neuro" className={setActive}>
                            <img className="sidebar__list-img" src={HeartOutlineImg} alt="Фон приложения" />
                            <p className="sidebar__list-paragraph">Нейросетевой</p>
                        </NavLink>
                        <NavLink to="/statistics" className={setActive}>
                            <img className="sidebar__list-img" src={SearchOutlineImg} alt="Фон приложения" />
                            <p className="sidebar__list-paragraph">Статистика</p>
                        </NavLink>
                    </ul>
                </section>
                <section className="informationPanel">
                    <Outlet />
                </section>
            </section>
        </div>
    );
};

export default NavigationBar;
