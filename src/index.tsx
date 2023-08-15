import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './redux/store/store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
   <Provider store={store}>
      <App />
   </Provider>
  <ToastContainer />

</React.StrictMode>
  // <React.StrictMode>
  //   <App />
  //   <ToastContainer />
  // </React.StrictMode>
);

reportWebVitals();
