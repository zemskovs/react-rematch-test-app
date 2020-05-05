import * as React from "react";
import { CustomDiv } from "../../leda/CustomDiv";
import { DropZone as Drop } from "../../leda/DropZone";
import { ChangeEvent } from "leda/dist/components/DropZone/types";

interface Props {
	onChange(component: ChangeEvent): void;
}

export const DropZone: React.FC<Props> = ({ onChange }) => {
	return (
		<CustomDiv>
			<Drop onChange={onChange}></Drop>
			<CustomDiv></CustomDiv>
		</CustomDiv>
	);
};
