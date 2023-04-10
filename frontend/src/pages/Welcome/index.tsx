import "./styles.css";
import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";

export const Welcome = () => {
	return (
		<div className="wrapper">
			<main className="welcome-options">
				<img className="logo" src={logo} alt="NBF logo" />
				<Link to="/dashboard">
					<button className="option">Vizualizar cadastros</button>
				</Link>
				<Link to="/register/driver">
					<button className="option">Realizar um cadastro</button>
				</Link>
			</main>
		</div>
	);
};
