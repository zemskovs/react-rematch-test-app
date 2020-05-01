import * as React from "react";
import { Navbar } from "./components/Navbar/Navbar";
import { hot } from "react-hot-loader/root";
import { Page } from "./layouts/Page";
import { DropZone } from "leda";

const App: React.FC = (props) => {
	return (
		<Page>
			<DropZone />
		</Page>
	);
};

export default hot(App);
