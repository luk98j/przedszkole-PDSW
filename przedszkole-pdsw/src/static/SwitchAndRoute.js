import MenuAndViewController from "../component/MenuAndViewController"
import Login from "../view/Login"
import {Switch, Route } from "react-router-dom";
import Activities from "../view/Activities";

const SwitchAndRoute = () =>{
    return(
        <Switch>
            <Route exact path="/" component={MenuAndViewController} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/activities" component={Activities} />
            <Route exact path="/news" component={Activities} />
            <Route exact path="/children-date" component={Activities} />
        </Switch >
    )
 }
 
 export default SwitchAndRoute;