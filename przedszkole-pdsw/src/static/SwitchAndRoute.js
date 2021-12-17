import MenuAndViewController from "../component/MenuAndViewController"
import Login from "../view/Login"
import {Switch, Route } from "react-router-dom";
import Activities from "../view/Activities";
import ChildrenDate from "../view/ChildrenDate"
import Messages from "../view/Messages";
const SwitchAndRoute = () =>{
    return(
        <Switch>
            <Route exact path="/" component={MenuAndViewController} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/activities" component={Activities} />
            <Route exact path="/messages" component={Messages} />
            <Route exact path="/children-date" component={ChildrenDate} />
        </Switch >
    )
 }
 
 export default SwitchAndRoute;