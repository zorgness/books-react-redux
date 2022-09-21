import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Footer from './components/Footer';
import ManageBook from './containers/ManageBook';
import NavbarComponent from './components/NavbarComponent';
import SearchBook from './containers/SearchBook';
import store from './redux/store';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">

        <Provider store={store} >

            <NavbarComponent />

            <BrowserRouter>
                <Routes>

                <Route path="/" element={<ManageBook />} />
                <Route path="/search" element={<SearchBook />} />

            </Routes>
            </BrowserRouter>

            <Footer />

        </Provider>

    </div>
  );
}

export default App;
