import Button from "./Button";

const Account = ({ name, balance, color, operations, children }) => {
  return (
    <div className="item container">
      <div style={{ backgroundColor: color }} className="maintitle">
        <h1>{name}</h1>
        <p className="balance">
          {balance} <span>€</span>
        </p>
      </div>

      <div className="operations">
        {operations.map((elem, index) => {
          return (
            <div key={operations.indexOf(elem)} className="operationsdesc">
              <div className="date">{elem.date}</div>
              <div className="operationtitle">{elem.description}</div>
              <div className="amount">{elem.amount} €</div>
            </div>
          );
        })}
        <Button children={children} />
      </div>
    </div>
  );
};

export default Account;
