import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { dofetchUser } from '../actions';
import Landing from '../components/Landing';
import { AppLinks } from './AppLinks';
import Dashboard from '../components/Dashboard';
import Clans from '../components/Clans';


const ClanWarLeagueNew = () => <h2>ClanWarLeagueNew</h2>;

interface AppComponentDispatch {
  fetchUser: () => void;
}

class App extends React.Component<AppComponentDispatch> {
  componentDidMount(): void {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className={'container'}>
        <BrowserRouter>
          <div>
            <Header/>
            <Route path={AppLinks.LANDING} exact={true} component={Landing}/>
            <Route
              path={AppLinks.DASHBOARD}
              exact={true}
              component={Dashboard}
            />
            <Route
              path={AppLinks.CLANS}
              exact={true}
              component={Clans}
            />
            <Route
              path={AppLinks.DUMMY}
              exact={true}
              component={ClanWarLeagueNew}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUser: dofetchUser }
)(App);
