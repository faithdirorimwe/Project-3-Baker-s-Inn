import { Link } from "react-router-dom";

const Button = ({title, toPath}) => {
    return (
      <Link to = {toPath} className="btn" href="/Contact">{title}</Link>
      );
}
 
export default Button;