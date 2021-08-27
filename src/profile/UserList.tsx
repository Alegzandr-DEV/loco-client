function UserList(props: any) {

  const displayUsers = (props: any) => {
    const { users } = props;

    if (users.length > 0) {
      return(
        users.map((user: any, index: any) => {
          console.log(user);
          return(
            <div className="user" key={ user._id }>
              <h3 className="user_username">{ user.username }</h3>
              <p className="user_email">{ user.email }</p>
            </div>
          );
        })
      );
    } else {
      return(<h3>No user yet</h3>);
    }
  }

  return(
    <>
      { displayUsers(props) }
    </>
  );
}

export default UserList;
