import React from 'react';
import { Route, Switch } from 'react-router-dom';


export default function RouterSwitch({ routes }) {
  return (
      <Switch>
        {
          routes.map((r, k) => {
            return (
              <Route
                exact
                path={r.path}
                component={r.component}
                key={k}
              />);
          })
        }
        {
          routes.filter(r => r.detailPath).map((r, k) => {
            return (
              <Route
                path={r.detailPath}
                component={r.detailComponent}
                key={"DTL" + k}
              />);
          })
        }
      </Switch>
  );
}
