import { data } from "../App";
import Account from "./Account";

const Accounts = () => {
  return data.map((elem) => {
    return <Account key={data.indexOf(elem)} {...elem} children="" />;
  });
};

export default Accounts;
