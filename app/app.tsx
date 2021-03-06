import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from '@app/utils/history';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import root app
import configureStore from '@store/configureStore';
import Router from './Router';

import { AuthProvider } from './Auth';
// Load the favicon and the .htaccess file
import '!file-loader?name=[name].[ext]!../assets/images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('app') as HTMLElement;

const ConnectedApp = () => (
  <Provider store={store}>
    <AuthProvider>
      <ConnectedRouter history={history}>
        <React.Suspense fallback={<span>Loading...</span>}>
          <Router />
        </React.Suspense>
      </ConnectedRouter>
    </AuthProvider>
  </Provider>
);

ReactDOM.render(<ConnectedApp />, MOUNT_NODE);
