import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import ManageBook from './containers/ManageBook';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';
import store from './redux/store';


function App() {
  return (
    <div className="App">

        <Provider store={store} >

            <NavbarComponent />

            <ManageBook />

            <Footer />

        </Provider>

    </div>
  );
}

export default App;
