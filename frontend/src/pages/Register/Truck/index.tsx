import { FormWrapper } from "../../../components/FormWrapper";
import "../styles.css";
import truckDefault from "../../../assets/truckDefault.svg";

export const TruckRegister = () => {
	return (
		<FormWrapper
			title="Dados do Caminhão"
			icon={truckDefault}
			target="/register/travel"
		>
			<section className="driver-form-section">
				<span>
					<label htmlFor="plate">Placa do veículo: </label>
					<input id="plate" type="text" />
				</span>
				<span>
					<label htmlFor="brand">Marca: </label>
					<input id="brand " type="text" />
				</span>
			</section>

			<section className="driver-form-section">
				<span>
					<label htmlFor="tare">Tara do veículo: </label>
					<input id="tare" type="number" maxLength={2} />
				</span>
				<span>
					<label htmlFor="owner">Proprietário: </label>
					<input id="owner" type="number" />
				</span>
			</section>

			<section className="driver-form-section">
				<span>
					<label htmlFor="renavam">
						Renavam:
						<input id="renavam" type="text" />
					</label>
				</span>
			</section>
		</FormWrapper>
	);
};
