import React, { PropTypes } from "react";
import { Provider } from "react-redux";
import App from "./App";

const Root = ({store}) => (
    <Provider store={store}>
        <App />
    </Provider>
);

// Use this to bring in React Router
// const Root = ({store}) => (
//     <Provider store={store}>
//         <Router history={browserHistory}>
//             <Route path="/stats.html" component={App}/>
//         </Router>
//     </Provider>
// );

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;