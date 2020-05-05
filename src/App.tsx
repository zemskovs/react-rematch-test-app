import * as React from "react";
import { hot } from "react-hot-loader/root";
import { Page } from "./layouts/Page";
import Documents from "./containers/DocumentByText/Documents";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = (props) => {
	return (
		<Provider store={store}>
			<Page>
				<Documents />
			</Page>
		</Provider>
	);
};

export default hot(App);
