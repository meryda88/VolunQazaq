function AuthorDetails(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '15px auto', maxWidth: '600px' }}>
      <h3>Автор: {props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default AuthorDetails;
