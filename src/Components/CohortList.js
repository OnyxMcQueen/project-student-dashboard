export default function CohortList({ students, handleStudentList, resetStudentList }){
     
    let cohortObject = {};

    for(let object of students){
        cohortObject[object.cohort.cohortCode] = cohortObject[object.cohort.cohortCode] + 1 || 1;
    }

    const tableRows = [];

    tableRows.push(
        <tr key='Students'>
            <th scope='row' onClick={resetStudentList} style={{"cursor": "pointer"}}>All Students</th>
            <td></td>
        </tr>
    )


    for(let property in cohortObject){
        tableRows.push(
            <tr key={property}>
                <th scope='row' onClick={() => handleStudentList(property)} style={{"cursor": "pointer"}}>{property}</th>
                <td className="text-center">
                    <span className="badge text-bg-secondary">{cohortObject[property]}</span>
                </td>
            </tr>
        )
    }

    return(
        <div className="col-4 g-5">
            <h3>Choose a class by start date</h3>
            <table className='table'>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )
}