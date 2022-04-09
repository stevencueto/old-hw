import logo from './logo.svg';
import './App.css'
import Header from './components/header/Header';
import OuterWrapper from './components/OuterWrapper';
import Footer from './components/footer/Footer';
const App = () => {
  return (
      <div className="app">
        <Header></Header>
          <OuterWrapper></OuterWrapper>
          <Footer></Footer>
      </div>
  )
}

export default App;
