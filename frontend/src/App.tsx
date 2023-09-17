import './App.css';
import Header from './Header.tsx';
import Body from './Body.tsx';
import Footer from './Footer.tsx';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
