import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/home/Home";
import Pembelajaran from "./containers/pembelajaran/Pembelajaran";
import Masuk from "./containers/masuk/Masuk";
import Courses from "./containers/Courses/Courses";
import Detail from "./components/details/detail";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/vidio" exact component={Pembelajaran} />
        <Route path="/login" exact component={Masuk} />
        <Route path="/course" exact component={Courses} />
        <Route path="/detail" exact component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
