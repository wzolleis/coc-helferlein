import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import { connect } from 'react-redux';
import { dofetchUser } from './actions/appActions';
import Landing from './components/Landing';
import { AppLinks } from './AppLinks';
import Dashboard from './components/Dashboard';
import ClanContainer from '../clans/components/ClanContainer';
import '../css/clan/form.css';
import ClanNewForm from '../clans/components/ClanNewForm';
import TeamManagementContainer from '../teams/components/TeamManagementContainer';


interface AppComponentDispatch {
    fetchUser: () => void;
}

class App extends React.Component<AppComponentDispatch> {
    componentDidMount(): void {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className='container'>
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
                            component={ClanContainer}
                        />
                        <Route
                            path={AppLinks.CLANS_NEW}
                            exact={true}
                            component={ClanNewForm}
                        /><Route
                            path={AppLinks.TEAM_MANAGEMENT}
                            exact={true}
                            component={TeamManagementContainer}
                        />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(
    null,
    {fetchUser: dofetchUser}
)(App);
