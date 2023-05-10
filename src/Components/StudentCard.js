import React, { useState } from 'react';

export default function StudentCard({ student }){

    let middleName = student.names.middleName.charAt(0);
    let studentBirthday = student.dob.split("/");
    let notesArray = student.notes;

    //State
    const [toggleDetails, setToggleDetails] = useState(false);
    const [input, setInput] = useState({
        commenter: "",
        comment: ""
    });
    
    // Function to convert numeric birthday to alphanumeric

    function getMonthName(monthNumber){
        const date = new Date();
        date.setMonth(monthNumber - 1);

        return date.toLocaleString('en-US', { month: 'long' });
    }

    // handle the toggle change

    function handleToggleChange(event){
        event.preventDefault();
        setToggleDetails(!toggleDetails);
    }

    // Checking to see if student is on track to graduate

    let onTrack = null;

    if(student.certifications.resume || student.certifications.linkedin || student.certifications.mockInterview || student.certifications.github){
        onTrack = true;
    }
    if(student.codewars.current.total > 600){
        onTrack = true;
    }

    // Function for adding a note

    function handleTextChange(event){
        setInput({
            ...input,
            [event.target.id]: event.target.value
        })

        console.log(input);
    }

    function handleSubmit(event){
        event.preventDefault();
    }

    return(
        <div className="col-12 g-2">
            <div className="card">
                <div className="row g-0">
                    <div className="col-3">
                        <img src={student.profilePhoto} className='img-fluid rounded-start' alt='A student'/>
                    </div>
                    <div className="col-7">
                        <div className="card-body text-center py-5">
                            <h5 className="card-title">{student.names.preferredName} {middleName}. {student.names.surname}</h5>
                            <p className="card-text">{student.username}</p>
                            <p>Birthday: {getMonthName(studentBirthday[0])} {studentBirthday[1]}, {studentBirthday[2]}</p>
                            <a href='...' onClick={handleToggleChange}>{!toggleDetails ? "Show More...": "Show Less..."}</a>
                        </div>
                    </div>
                    <div className='col-2 py-5'>
                        <p className='py-5 text-success small px-1'>{onTrack ? "On Track to Graduate" : ""}</p>
                    </div>
                    {toggleDetails ? (
                        <>
                        <div className="row py-2 text-center">
                            <div className='col-4'>
                                <h5>Codewars:</h5>
                                <p><span className='text-success'>Current Total:</span> {student.codewars.current.total}</p>
                                <p><span className='text-success'>Last Week:</span> {student.codewars.current.lastWeek}</p>
                                <p><span className='text-success'>Goal:</span> {student.codewars.goal.total}</p>
                                <p><span className='text-success'>Percent of goal achieved:</span> {((student.codewars.current.total / student.codewars.goal.total).toFixed(1) * 100)}%</p>
                            </div>
                            <div className='col-4'>
                                <h5>Scores:</h5>
                                <p><span className='text-success'>Assignments:</span> {(student.cohort.scores.assignments * 100).toFixed(0)}%</p>
                                <p><span className='text-success'>Projects:</span> {(student.cohort.scores.projects * 100).toFixed(0)}%</p>
                                <p><span className='text-success'>Assessments:</span> {(student.cohort.scores.assessments * 100).toFixed(0)}%</p>
                            </div>
                            <div className='col-4'>
                                <h5>Certifications:</h5>
                                <p><span className='text-success'>Resume:</span> {student.certifications.resume ? "✅": "❌"}</p>
                                <p><span className='text-success'>LinkedIn:</span> {student.certifications.linkedin ? "✅": "❌"}</p>
                                <p><span className='text-success'>Mock Interview:</span> {student.certifications.mockInterview ? "✅": "❌"}</p>
                                <p><span className='text-success'>Github:</span> {student.certifications.github ? "✅": "❌"}</p>
                            </div>
                        </div>
                        <hr />
                        <div className='row py-2 text-secondary'>
                            <h6>1-on-1 notes</h6>
                            <form className='form-group row py-2'>
                                <label htmlFor='name' class='col-3 col-form-label'>Commenter Name</label>
                                <input type='text' id='commenter' className='col-5' value={input.commenter} onChange={handleTextChange}/>
                            </form>
                            <form className='form-group row py-2'>
                                <label htmlFor='comment' className='col-3 col-form-label'>Comment</label>
                                <input type='text' id='comment' className='col-5' value={input.comment} onChange={handleTextChange}/>
                            </form>
                            <button type='submit' className='btn btn-success col-2 m-3' onClick={() => handleSubmit}>Add Note</button>
                        </div>
                        <h6 className='py-2 m-3 text-secondary'>Previous Comments</h6>
                        <ul className='px-3'>{
                            notesArray.map((object) => <li>{object.commenter} says, {object.comment}</li>)
                            }</ul>
                        </>
                    ): (null)}
                </div>
            </div>
        </div>
    )
}