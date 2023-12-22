import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate, Link } from 'react-router-dom';

function MainMenu  () {
return(
    <div className="d-grid gap-3 ">
        
        <Link to={'/News'}  className="w-75 mx-auto mt-5  text-white text-center card bg-primary card-body shadow">Новости</Link>
        <Link to={'/Notifications'} className="w-75 mt-5 mx-auto text-white text-center card bg-primary card-body shadow">Уведомления</Link>
        <Link to={'/Voting'} className="w-75 mt-5 mx-auto text-white text-center card bg-primary card-body shadow">Голосование </Link>
        <Link to={'/FAQ'} className="w-75 mt-5 mx-auto text-white text-center card bg-primary card-body shadow">Вопросы</Link>
        <Link to={'/InfoCenter'} className="w-75 mt-5 mx-auto text-white text-center card bg-primary card-body shadow">Инфоцентр</Link>
        
    </div>
)
}

export default MainMenu;
