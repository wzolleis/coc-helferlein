import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../components/Header";
import { connect } from "react-redux";
import { dofetchUser } from "../actions";

const Dashboard = () => <h2>Dashboard</h2>;
const ClanWarLeagueNew = () => <h2>ClanWarLeagueNew</h2>;
const Landing = () => <h2>Landing</h2>;

interface AppComponentDispatch {
  fetchUser: () => void
}

class App extends React.Component<AppComponentDispatch> {

  componentDidMount(): void {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className={"container"}>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path={"/"} exact={true} component={Landing}/>
            <Route path={"/dashboard"} exact={true} component={Dashboard}/>
            <Route path={"/cwls/new"} exact={true} component={ClanWarLeagueNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, { fetchUser: dofetchUser })(App);
