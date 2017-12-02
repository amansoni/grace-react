import { createSelector } from 'reselect';

/**
 * Direct selector to the memberPage state domain
 */
const selectMemberPageDomain = (state) => state.get('memberPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MemberPage
 */

const makeSelectMemberPage = () => createSelector(
  selectMemberPageDomain,
  (substate) => substate.toJS()
);

export default makeSelectMemberPage;
export {
  selectMemberPageDomain,
};
