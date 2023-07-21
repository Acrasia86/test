import './App.css';
import Animal from './components/Animal';
import { elephantList, tigerList } from './components/animals';
import elephant from './pictures/elephant.jpg';
import tiger from './pictures/tiger.jpg';

interface AnimalProps {
  animalLocatedAt: string;
  className: string;
  classNameLocatedAt: string;
  imgSrc: string;
  title: string;
  animalList: string[];
}

function App() {

  const animals: AnimalProps[] = [
    {
      animalLocatedAt: 'Tigern finns i: ',
      className: 'tiger',
      classNameLocatedAt: 'tigerLocatedAt',
      imgSrc: tiger,
      title: 'Det här är en tiger',
      animalList: tigerList

    },
    {
      animalLocatedAt: 'Elefanten finns i: ',
      className: 'elephant',
      classNameLocatedAt: 'elephantLocatedAt',
      imgSrc: elephant,
      title: 'Det här är en elefant',
      animalList: elephantList

    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        {
          animals.map((x) => (
            <Animal animalList={x.animalList} animalLocatedAt={x.animalLocatedAt} className={x.className} classNameLocatedAt={x.classNameLocatedAt} imgSrc={x.imgSrc} title={x.title}/>
          ))
        }
      </header>
    </div>
  );
}

export default App;
