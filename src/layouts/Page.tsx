import * as React from "react";
import { Navbar } from "../components/Navbar/Navbar";

export const Page: React.FC = (props) => {
	return (
		<>
			<Navbar />
			{props.children}
		</>
	);
};
