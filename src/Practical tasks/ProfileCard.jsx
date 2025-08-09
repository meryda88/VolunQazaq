function ProfileCard(props) {
    return (
        <div className="card">
            <img src={props.image} alt="profile" width="120"/>
            <h2>Аты-жөні: {props.name}</h2>
            <p>Bio: {props.bio}</p>
        </div>
    )
}

export default ProfileCard