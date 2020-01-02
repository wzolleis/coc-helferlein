import { FetchCwlInfoAction, fetchCwlInfos } from './cwlActions';
import { TOMS_HUETTE_CLAN_TAG } from '../../../common/cocConstants';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { actionTypes } from '../../../common/testUtils';
import { INITIAL_STATE } from '../../../app/reducers/reducers';
import moxios from 'moxios';
import axios from 'axios';
import * as data from './data.json';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch cwl infos', () => {

    const store = mockStore(INITIAL_STATE);
    beforeEach(function () {
        // import and pass your custom axios instance to this method
        moxios.install(axios);
    });

    afterEach(function () {
        // import and pass your custom axios instance to this method
        moxios.uninstall()
    });

    it('returns cwl infos', async () => {

        store.dispatch(fetchCwlInfos(TOMS_HUETTE_CLAN_TAG, '2020-01'));

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {
                    stats: {
                        clanStats: []
                    },
                    season: data.season
                }
            });

            const expectedActions = [FetchCwlInfoAction.started.type, FetchCwlInfoAction.done.type];
            const receivedActions: string[] = actionTypes(store.getActions());
            expect(receivedActions).toIncludeAllMembers(expectedActions);
        });


    });
});