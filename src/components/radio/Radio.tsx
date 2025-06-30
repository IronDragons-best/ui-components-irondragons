import { RadioGroup } from "radix-ui";
import styles from "./radio.module.scss";
import {ComponentProps, InputHTMLAttributes, ReactElement} from "react";

export type RadioOptionsType = {
	id: string;
	radioName: string;
}

type Props = ComponentProps<typeof RadioGroup.Root> & InputHTMLAttributes<HTMLInputElement> & {
	/** **Required**:Array of radio button options*/
	options: RadioOptionsType[],
	/** Disables all radio buttons */
	selectedOption?: string,
}

export const Radio = ({options, defaultValue, disabled, ...rest}:Props): ReactElement => (
		<RadioGroup.Root
			className={styles.Root}
			defaultValue="default"
			aria-label="View density"
			{...rest}
		>
			{options?.length && options.map((option) => (
				<div className={disabled ? styles.disabled : ''} style={{display: "flex", alignItems: "center"}} key={option.id}>
					<RadioGroup.Item className={styles.Item} value={option.radioName} id={option.id}>
						<RadioGroup.Indicator className={styles.Indicator}/>
					</RadioGroup.Item>
					<label className={styles.Label} htmlFor={option.id}>
						{option.radioName}
					</label>
				</div>
			))}
			
		</RadioGroup.Root>
);


