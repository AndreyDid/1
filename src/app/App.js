import React from "react";
import NavBar from "./components/ui/navBar";
import {Route, Switch} from "react-router-dom";
import HistoryOperations from "./layouts/historyOperations";
import Main from "./layouts/main";

function App() {
  return (
        <div className='container'>
          <NavBar />
          <Switch>
            <Route path='/historyOperations/:operationsId?' component={HistoryOperations} />
            <Route path='/' exact component={Main} />
          </Switch>
        </div>
      )
}

export default App;
