import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;
const ClanWarLeagueNew = () => <h2>ClanWarLeagueNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path={"/"} exact={true} component={Landing}/>
            <Route path={"/cwls"} exact={true} component={Dashboard}/>
            <Route path={"/cwls/new"} exact={true} component={ClanWarLeagueNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
