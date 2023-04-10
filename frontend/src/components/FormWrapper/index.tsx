import "./styles.css";
import { FormEvent } from "react";
import { Link } from "react-router-dom";

interface FormWrapperProps {
	children: JSX.Element[];
	title: string;
	icon: string;
	target: string;
}

export const FormWrapper = ({
	children,
	title,
	icon,
	target,
}: FormWrapperProps) => {
	function handleSubmit(e: FormEvent) {
		e.preventDefault();
	}

	return (
		<div className="form-wrapper">
			<form className="form" onSubmit={(e) => handleSubmit(e)}>
				<header className="form-profile">
					<img id="icon" src={icon} alt="profile default icon" />
				</header>
				<div className="form-title-wrapper">
					<h1 className="form-title">{title}</h1>
				</div>

				<main className="form-inputs-wrapper">{children}</main>
				<footer className="form-button-wrapper">
					<Link to={target}>
						<button>Avançar</button>
					</Link>
				</footer>
			</form>
		</div>
	);
};
