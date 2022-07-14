import React from 'react';
import {Provider} from 'react-redux';
import {configStore} from '../store/storeConfig';

const ReduxProviderWrapper = (WrappedComponent: any) => {
  return (props: any) => (
    <Provider store={configStore}>
      <WrappedComponent {...props} />
    </Provider>
  );
};

export default ReduxProviderWrapper;