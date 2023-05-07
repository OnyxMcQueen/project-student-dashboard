// Students is our giant data object consisting of different students
import Students from './data/data.json';

// importing Components that we have created
import Header from './Components/Header';
import StudentContainer from './Components/StudentContainer';
import StudentList from './Components/StudentList';


function App() {
  return (
    <div>
      <Header />

      <StudentContainer>
        <StudentList students={Students}/>
      </StudentContainer>
    </div>
  );
}

export default App;
