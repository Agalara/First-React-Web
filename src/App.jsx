import CoreConcepts from './components/CoreConcept/CoreConcepts.jsx'
import Header  from './components/Header/Header.jsx';
import Examples from './components/Examples/Examples.jsx';


function App() {

  return (
    <>
      <Header /> {/*Asi usamos la funcion componente que hemos creado. 
      Poner simplemente Header() no funciona. Otra opcion es poner <Header /> y nos ahorramos 
      la parte final */}
      <main>
        <CoreConcepts />  
        <Examples />  
      </main>
    </>
  );
};

export default App;