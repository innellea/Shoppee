import '../styles/globals.css';

import { Provider } from 'react-redux';

import { store } from '../app/store';

import { Provider as AuthProvider } from 'next-auth/client';

const MyApp = ({ Component, pageProps }) => (
  <AuthProvider session={pageProps.session}>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  </AuthProvider>
);

export default MyApp;
