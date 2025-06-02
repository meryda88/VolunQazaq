function Example(props) {
    return(
        <div className="box">
        <h2>Аты-жөні: {props.name}</h2>
        <p>Мамандығы: {props.speciality}</p>
        <p>Қала: {props.city}</p>
        </div>
    )
}

export default Example