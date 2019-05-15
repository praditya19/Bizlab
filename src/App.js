import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/home/Home";
import Pembelajaran from "./containers/pembelajaran/Pembelajaran";
import Masuk from "./containers/masuk/Masuk";
import Courses from "./containers/Courses/Courses";
import Detail from "./components/details/Detail";
import Data1 from "./containers/data1/Data1";
import Data2 from "./containers/data2/Data2";
import Data3 from "./containers/data3/Data3";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/vidio" exact component={Pembelajaran} />
        <Route path="/login" exact component={Masuk} />
        <Route path="/course" exact component={Courses} />
        <Route path="/detail" exact component={Detail} />
        <Route path="/detail/1" exact component={Data1} />
        <Route path="/detail/2" exact component={Data2} />
        <Route path="/detail/3" exact component={Data3} />
      </Switch>
    </div>
  );
}

export default App;
