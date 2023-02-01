import pfp from "../img/pfp.png";

const User = (props) => {
  return (
    <div className="userinfo">
      <p className="username">{props.username}</p>
      <img src={pfp} alt="" className="pfp" />
    </div>
  );
};

export default User;
