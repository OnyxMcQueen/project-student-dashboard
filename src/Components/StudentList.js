import StudentCard from "./StudentCard";

export default function StudentList({ students }){
    return(
        <div className="col-8 g-5">
            <h2>{students[0].cohort.cohortCode}</h2>
            <p>Total Students: <span className="text-success">{students.length}</span></p>
            <div className="row">
                {students.map((student) => <StudentCard student={student}/>)}
            </div>
        </div>
    )
}