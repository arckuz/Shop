import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {authRouts, publicRout} from "../routes";
import {SHOP_ROUTE} from "../utils/consts";
const AppRouter = () => {

    const isAuth = true
    return (
        <Switch>
            {isAuth && authRouts.map(({path,Component}) =>
            <Route path={path} component={Component} exact/>
            )}
            {publicRout.map(({path,Component}) =>
                <Route path={path} component={Component} exact/>
            )}
            <Redirect to={SHOP_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;