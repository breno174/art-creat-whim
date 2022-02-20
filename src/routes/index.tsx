import { ComponentType } from "react";
import { Route, Switch, RouteProps } from "react-router-dom";
import { Home } from "../pages/Home";

interface IRoutesProps extends RouteProps {
  component: ComponentType;
}

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};
