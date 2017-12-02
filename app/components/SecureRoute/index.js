/**
*
* SecureRoute
*
*/

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// import styled from 'styled-components';

export const SecureRoute = ({ component: Component, ...rest }) => (
  <Route
{...rest} render={(props) => (
      localStorage.getItem('user')
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  )}
  />
);

// class SecureRoute extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
//   render() {
//     return (
//       <div>
//         <FormattedMessage {...messages.header} />
//       </div>
//     );
//   }
// }

// SecureRoute.propTypes = {

// };

export default SecureRoute;
