import { Link } from "react-router-dom";
import BackRow from "../../icon/BackRow";
import './notFound.css';
function NotFound() {
    return (
        <div className="not-found ">
            <ul>
                <li>
                    <h1>404 NOT FOUND</h1>
                </li>
                <li>
                    <p>We're sorry,</p>
                    <p>the page you were looking for could not be found</p>
                </li>
                <li>
                    <Link to='/' className="center button"><p>HOME PAGE</p> <BackRow /></Link>
                </li>
            </ul>
        </div>
    );
}

export default NotFound;