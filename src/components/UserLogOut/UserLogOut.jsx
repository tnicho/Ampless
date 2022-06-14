import './UserLogOut.css';

export default function UserLogOut({ user, setUser }) {
  // function handleLogOut() {
  //   localStorage.removeItem('token');
  //   this.props.setUserInState(null);
  // }

  return (
    <div className="UserLogOut">
      {/* <div>{user.name}</div>
      <div className="email">{user.email}</div>
      <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button> */}
      <button>Logout</button>
    </div>
  );
}
