import React from "react";

import CompanyDetails from "./components/CompanyDetails";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
   return (
      <Provider store={store}>
         <CompanyDetails />
      </Provider>
   );
}

export default App;
