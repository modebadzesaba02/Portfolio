
import Header from './components/Header';
import Body from './components/Body';
import Edu from './components/Edu';
import Skills from './components/Skills';
import Workout from './components/Workout';
import NumberGuessingGame from './components/NumberGuessingGame';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className='bg-gray-800'>
      <Header />
      <Body />
      <Edu></Edu>
      <Skills></Skills>
      <Workout></Workout>
      <NumberGuessingGame></NumberGuessingGame>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
