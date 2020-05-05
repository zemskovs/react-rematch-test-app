import { Doc } from "../common/types";
import { loadDocuments } from "../common/api";
import { RootDispatch } from ".";

type State = ReadonlyArray<Doc>;

const model = {
	state: [] as State,
	reducers: {
		loaded: (state: State, payload: ReadonlyArray<Doc>) => payload,
	},
	effects: (dispatch: RootDispatch) => ({
		async load() {
			const documents = await loadDocuments();
			dispatch.documents.loaded(documents);
		},
	}),
};

export default model;
