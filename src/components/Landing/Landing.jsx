import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
	return (
		<div className="container__landing">
			<div className="bg-landing">
				<Link to="/home"><div className="text-Link">Iniciar</div></Link>
			</div>
		</div>
		)
}

export default Landing;