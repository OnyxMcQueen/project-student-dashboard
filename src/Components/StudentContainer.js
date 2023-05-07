export default function StudentContainer({ children }){
    return(
        <div className="container">
            <div className="row">
                {children}
            </div>
        </div>
    )
}