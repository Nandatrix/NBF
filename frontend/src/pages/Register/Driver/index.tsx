import { FormWrapper } from "../../../components/FormWrapper";
import "../styles.css";
import profileDefault from "../../../assets/profileDefault.svg";

export const DriverRegister = () => {
	return (
		<FormWrapper
			title="Dados do Motorista"
			icon={profileDefault}
			target="/register/truck"
		>
			<section className="driver-form-section">
				<span>
					<label htmlFor="firstName">Nome: </label>
					<input id="firstName" type="text" />
				</span>
				<span>
					<label htmlFor="lastName">Sobrenome: </label>
					<input id="lastName " type="text" />
				</span>
			</section>

			<section className="driver-form-section">
				<span>
					<label htmlFor="age">Idade: </label>
					<input id="age" type="number" maxLength={2} />
				</span>
				<span>
					<label htmlFor="phone">Telefone: </label>
					<input id="phone" type="number" />
				</span>
				<span>
					<label htmlFor="cpf">CPF: </label>
					<input id="cpf" type="number" />
				</span>
			</section>

			<section className="driver-form-section">
				<span>
					<label htmlFor="cnh">CNH: </label>
					<input id="cnh" type="number" />
				</span>
				<span>
					<label htmlFor="validity">Validade da CNH: </label>
					<input id="validity" type="number" />
				</span>
			</section>

			<section className="driver-form-section">
				<span>
					<label htmlFor="address">
						Endereço:
						<input id="address" type="text" />
					</label>
				</span>
			</section>
		</FormWrapper>
	);
};
