import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from "react-redux";
import store, { persistedStore } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
   return (
     <Provider store={store}>
       <PersistGate persistor={persistedStore} loading={null}>
         <Component {...pageProps} />
       </PersistGate>
     </Provider>
   );
 }

export default MyApp;
