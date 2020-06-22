import React from "react";
import { Provider } from 'react-redux'

// Components
import { Dashboard } from 'components/Dashboard';

// Store
import { initStore } from 'features/store'

const store = initStore()

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}

export default App;
