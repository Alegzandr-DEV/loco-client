function User(props: any) {
  const displayUser = (props: any) => {
    const { user } = props;

    if (user._id) {
      return(
        <div className="user" key={ user._id }>
          <h3 className="user_username">{ user.username }</h3>
          <p className="user_email">{ user.email }</p>
        </div>
      );
    } else {
      return(<h3>No user yet</h3>);
    }
  }

  return(
    <>
      { displayUser(props) }
    </>
  );
}

export default User;
