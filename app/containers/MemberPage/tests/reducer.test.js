
import { fromJS } from 'immutable';
import memberPageReducer from '../reducer';

describe('memberPageReducer', () => {
  it('returns the initial state', () => {
    expect(memberPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
