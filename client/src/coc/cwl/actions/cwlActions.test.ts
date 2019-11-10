import { FetchCwlInfoAction, fetchCwlInfos } from './cwlActions';
import { TOMS_HUETTE_CLAN_TAG } from '../../../common/cocConstants';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { actionTypes } from '../../../common/testUtils';
import { INITIAL_STATE } from '../../../app/reducers/reducers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('fetch cwl infos', () => {

    const store = mockStore(INITIAL_STATE);

    it('returns cwl infos', () => {
        store.dispatch(fetchCwlInfos(TOMS_HUETTE_CLAN_TAG));
        const expectedActions = [FetchCwlInfoAction.started.type, FetchCwlInfoAction.done.type];
        const receivedActions: string[] = actionTypes(store.getActions());
        expect(receivedActions).toIncludeAllMembers(expectedActions);
    });
});