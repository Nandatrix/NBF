import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Welcome } from "../pages/Welcome";
import { DriverRegister } from "../pages/Register/Driver";
import { TruckRegister } from "../pages/Register/Truck";
import { TravelRegister } from "../pages/Register/Travel";

export const MainRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/register/driver" element={<DriverRegister />} />
				<Route path="/register/truck" element={<TruckRegister />} />
				<Route path="/register/travel" element={<TravelRegister />} />
			</Routes>
		</Router>
	);
};
