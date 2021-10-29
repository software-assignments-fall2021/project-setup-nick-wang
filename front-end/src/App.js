import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import PrimaryNav from './PrimaryNav'
// import Home from './Home'

import StickyNav from "./StickyNav";
import Home from "./Home";
import Login from "./Login";
import AccountBookMain from "./AccountBookMain";
import Account_page2 from "./Account_page2";
import Account_page3 from "./Account_page3";
import DiaryOverview from "./DiaryOverview";

import Diary from './Diary/Diary'
import DiaryDetail from './Diary/components/DiaryDetail/DiaryDetail'
import "./App.css";

function App() {

  return (
      <Router>
        <Switch>

          <Route path="/account_book/category">
            <StickyNav />
            <Account_page3 />
          </Route>

          <Route path="/account_book/overview">
            <StickyNav />
            <Account_page2 />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/Diary">
            <Diary />
          </Route>

          <Route path="/Detail">
            <DiaryDetail />
          </Route>

          <Route path="/diary_overview">
            <StickyNav />
            <DiaryOverview />
          </Route>

          <Route path="/account_book">
            <StickyNav />
            <AccountBookMain />
          </Route>

          <Route path="/">
            <Home />
          </Route>

          <Route path="/Diary" exact component={Diary} />
          <Route path="/Detail" component={DiaryDetail} />
        </Switch>
      </Router>
  );
}

export default App;
