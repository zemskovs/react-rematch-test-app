import * as React from "react";
import { Doc } from "../../common/types";

interface Props {
	docs: ReadonlyArray<Doc>;
}

export const DocumentList: React.FC<Props> = ({ docs }) => {
	return (
		<div>
			<ul>
				{docs.map((doc) => (
					<li key={doc.id}>{doc.title}</li>
				))}
			</ul>
		</div>
	);
};
