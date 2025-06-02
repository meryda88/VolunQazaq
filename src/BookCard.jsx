function BookCard(props) {
    return(
        <div className="book-card">
            <img src={props.image} alt="book"/>
            <h2>{props.name}</h2>
            <p>{props.author}</p>
            <p>{props.year}</p>
        </div>
    )
}

export default BookCard