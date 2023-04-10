import { FormWrapper } from "../../../components/FormWrapper";
import "../styles.css";
import travelDefault from "../../../assets/travelDefault.svg";

export const TravelRegister = () => {
	return (
		<FormWrapper title="Dados da Viagem" icon={travelDefault} target="/">
			<section className="driver-form-section">
				<span>
					<label htmlFor="travel-code">
						Código da viagem:
						<input id="travel-code" type="text" />
					</label>
				</span>
			</section>
			<section className="driver-form-section">
				<span>
					<label htmlFor="sender-state">Estado remetente: </label>
					<input id="sender-state" type="text" />
				</span>
				<span>
					<label htmlFor="addressee-state">Estado Destinatário: </label>
					<input id="addressee-state" type="text" />
				</span>
			</section>

			<section className="driver-form-section">
				<span>
					<label htmlFor="sender-city">Cidade remetente: </label>
					<input id="sender-city" type="number" />
				</span>
				<span>
					<label htmlFor="addressee-city">Cidade Destinatária: </label>
					<input id="addressee-city" type="number" />
				</span>
			</section>

			<section className="driver-form-section">
				<span>
					<label htmlFor="date">Data da Saída: </label>
					<input id="date" type="number" />
				</span>
				<span>
					<label htmlFor="date">Estimativa de chegada: </label>
					<input id="date" type="number" />
				</span>
			</section>
		</FormWrapper>
	);
};
