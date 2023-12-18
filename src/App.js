import HeaderCartButton from "./components/layout/HeaderCartButton";
import classes from './App.scss';
import Header from "./components/layout/Header";
import Footer from './components/layout/Footer';
import Main from "./components/layout/Main";

function App() {
  
  return (
    <>
      <div className='App main-section'>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
