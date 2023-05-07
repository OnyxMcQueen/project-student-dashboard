import StudentCard from "./StudentCard";

export default function StudentList({ students }){
    return(
        <div className="col-8 g-5">
            <div className="row">
                {students.map((student) => <StudentCard student={student}/>)}
            </div>
        </div>
    )
}