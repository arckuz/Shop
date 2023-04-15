import React, {useContext} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRouts, publicRout} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
const AppRouter = () => {

    const {user} = useContext(Context)

    console.log(user)
    return (
        //выбор подходящего роута
        <Switch>
            {user.isAuth && authRouts.map(({path,Component}) =>
            <Route key={path} path={path} component={Component} exact/>
            )}
            {publicRout.map(({path,Component}) =>
                <Route key= {path} path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;