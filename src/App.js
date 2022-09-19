import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import AddBook from './containers/AddBook';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';
import store from './redux/store';


function App() {
  return (
    <div className="App">

        <Provider store={store} >

            <NavbarComponent />

            <AddBook />

            <Footer />

        </Provider>

    </div>
  );
}

export default App;
