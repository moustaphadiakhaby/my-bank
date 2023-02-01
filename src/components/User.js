import pfp from "../img/pfp.png";

const User = (props) => {
  return (
    <div className="userinfo">
      <p className="username">{props.username}</p>
      <div className="pfp">
        <img src={pfp} alt="" />
      </div>
    </div>
  );
};

export default User;
