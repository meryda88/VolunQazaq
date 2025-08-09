function BlogPost(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', margin: '15px auto', maxWidth: '600px' }}>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  );
}

export default BlogPost;
