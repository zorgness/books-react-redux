import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBook from './containers/AddBook';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">

      <NavbarComponent />

      <AddBook />

      <Footer />

    </div>
  );
}

export default App;
