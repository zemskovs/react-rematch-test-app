import { connect } from "react-redux";
import { RootState, RootDispatch } from "../../store";
import * as React from "react";
import { DocumentList } from "../../components/DocumentsList/DocumentsList";

type DocumentsProps = ReturnType<typeof mapState> &
	ReturnType<typeof mapDispatch>;

const Documents: React.FC<DocumentsProps> = ({ docs, load }) => {
	React.useEffect(() => {
		load();
	}, []);

	return <DocumentList docs={docs}></DocumentList>;
};

const mapState = (state: RootState) => ({
	docs: state.documents,
});

const mapDispatch = (dispatch: RootDispatch) =>
	({
		load: dispatch.documents.load,
	} as any); //todo разобраться с типами

export default connect(mapState, mapDispatch)(Documents);
