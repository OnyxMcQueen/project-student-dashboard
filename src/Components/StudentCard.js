export default function StudentCard({ student }){
    console.log(student);

    let middleName = student.names.middleName.charAt(0);

    return(
        <div className="col-12 g-2">
            <div className="card">
                <div className="row g-0">
                    <div className="col-4">
                        <img src={student.profilePhoto} className='img-fluid rounded-start' alt='A student'/>
                    </div>
                    <div className="col-8">
                        <div className="card-body text-center py-5">
                            <h5 className="card-title">{student.names.preferredName} {middleName}. {student.names.surname}</h5>
                            <p className="card-text">{student.username}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}