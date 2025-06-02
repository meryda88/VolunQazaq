function ProductCard(props) {
    return(
        <div className="product-card">
            <img src={props.image} alt="profile" width="200"/>
            <h2>{props.name}</h2>
            <p>Price: {props.price}т</p>
        </div>
    )
}

export default ProductCard