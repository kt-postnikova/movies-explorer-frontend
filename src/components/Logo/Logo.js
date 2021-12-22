import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function Logo() {

    return (
        <Link to="/"><img className="logo" src={logo} alt="Логотип Movie Explorer" /></Link>
    )
}

export default Logo;