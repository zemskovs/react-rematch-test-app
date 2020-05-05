import { init, RematchRootState, RematchDispatch } from "@rematch/core";
import documents from "./documents";

export interface RootModel {
	documents: typeof documents;
}

const models = {
	documents: documents,
};

const store = init({
	models,
});

export default store;

export type RootState = RematchRootState<RootModel>;
export type RootDispatch = RematchDispatch<RootModel>;
