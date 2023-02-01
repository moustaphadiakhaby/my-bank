const Button = ({ children }) => {
  return (
    <div className="pushbutton">
      <label htmlFor={children}>
        <button>SEE MORE</button>
      </label>
    </div>
  );
};

export default Button;
