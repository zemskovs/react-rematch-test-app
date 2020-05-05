import * as React from "react";
import { CustomInput } from "../../leda/CustomInput";
import { ChangeEvent } from "leda/dist/components/Input/types";

interface Props {
	onChange(e: ChangeEvent): void;
}

export const DocumentByText: React.FC<Props> = ({ onChange }) => {
	return (
		<div>
			<CustomInput onChange={onChange} hasClearButton />
		</div>
	);
};
