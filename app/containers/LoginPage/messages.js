/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.LoginPage.header',
    defaultMessage: 'Please enter your email and password',
  },
  error: {
    id: 'app.containers.LoginPage.error',
    defaultMessage: 'We did not find those details registered. Please try again.',
  },
});
