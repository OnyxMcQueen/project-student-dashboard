// Students is our giant data object consisting of different students
import Students from './data/data.json';

// importing Components that we have created
import Header from './Components/Header';
import StudentContainer from './Components/StudentContainer';
import StudentList from './Components/StudentList';
import CohortList from './Components/CohortList';
import { useState } from 'react';


function App() {
  const [students, setStudents] = useState(Students);

  function handleStudentList(cohort){

    let filteredStudentArray = Students.filter((student) => {
      return (
        student.cohort.cohortCode.includes(cohort)
      )
    })
    
    setStudents(filteredStudentArray);
  }

  function resetStudentList(){
        setStudents(Students);
  }

  return (
    <div>
      <Header />

      <StudentContainer>
        <CohortList students={Students} handleStudentList={handleStudentList} resetStudentList={resetStudentList}/>
        <StudentList students={students}/>
      </StudentContainer>
    </div>
  );
}

export default App;
