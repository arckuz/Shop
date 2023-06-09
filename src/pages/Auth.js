import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {useLocation} from "react-router-dom";
import {NavLink } from 'react-router-dom';
const Auth = () => {
    const location=useLocation();
    const isLogin =location.pathname===LOGIN_ROUTE

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height:window.innerHeight-54}}>

            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">{isLogin?"Авторизация":"Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder = "Введите ваш email..."
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder = "Введите ваш пароль..."
                    />
                    <div className="d-flex justify-content-between mt-3 ">
                        {isLogin?
                        <div className="d-flex justify-content-between col-md-6" >
                            Нет аккаунта?
                            <NavLink style={{color: 'blue'}} to = {REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                        </div>
                            :
                            <div>
                                Есть аккаунт?
                                <NavLink style={{color: 'blue'}} to = {LOGIN_ROUTE}>Ввойдите!</NavLink>
                            </div>
                        }
                        <Button variant={"outline-success"}>
                            {isLogin?"Войти":"Регистрация"}
                        </Button>
                    </div>
                </Form>

            </Card>
        </Container>
    );
};

export default Auth;