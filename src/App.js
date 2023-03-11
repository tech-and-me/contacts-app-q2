import "./App.css";
import ContactsList from "./components/ContactsList";
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <div>
      <div>
        <Header />
        <ContactsList />
        <Footer />
      </div>
    </div>
  );
}

export default App;
