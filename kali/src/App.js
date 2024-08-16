import './App.css';
import RouterList from './components/RouterList.js';

function App() {
  return (
    <section id='homepagesec'>
      <header>
        <nav id='navbar'>
          <RouterList />
        </nav>  
      </header>  
    </section>
  );
}

export default App;
