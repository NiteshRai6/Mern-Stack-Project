import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);



// Redux :

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { legacy_createStore } from 'redux';
// import { Provider } from 'react-redux'
// import rootReducer from './Component/Redux/Services/Reducers/RootReducser';
// const store = legacy_createStore(rootReducer);
// console.log('store data', store);


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     <Provider store={store} >
//         <App />
//     </Provider>
// );