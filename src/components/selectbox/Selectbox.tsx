import {Select} from "radix-ui";
import {ChevronDownIcon, ChevronUpIcon,} from "@radix-ui/react-icons";
import {ComponentPropsWithoutRef} from "react";

import SelectItem from "./SelectItem";

import s from "./selectbox.module.scss";
import "../../styles/index.scss";

type OptionType = {
  value: string;
  label: string;
}

type SelectboxProps = {
  /** **Required**: Unique ID for the Select. Trigger and associated label */
  idProp: string;
  /** **Required**: Name attribute for the form (useful when submitting forms) */
  name: string;
  /** **Required**: Array of options to choose from, each with a label (display text) and value */
  options: OptionType[];
  /** **Required**: Placeholder text shown when no option is selected */
  placeholder: string;
  /** Label displayed above the select input */
  label?: string;
  /** Disables the select input */
  disabled?: boolean;
  /** Additional CSS class names for the root element */
  className?: string;
  /** Callback fired when the selected value changes */
  onValueChange?: (value: string) => void;
  /** Callback fired when the dropdown opens or closes */
  onOpenChange?: (open: boolean) => void;
} & Omit<ComponentPropsWithoutRef<typeof Select.Root>, "value" | "onValueChange" | "children">

const Selectbox: React.FC<SelectboxProps> = ({
                                               idProp,
                                               name,
                                               label = "",
                                               placeholder = "Select...",
                                               disabled = false,
                                               className,
                                               onValueChange,
                                               onOpenChange,
                                               options,
                                               ...rest
                                             }: SelectboxProps) => (
  <Select.Root
    onValueChange={onValueChange}
    onOpenChange={onOpenChange}
    {...rest}
  >
    {label && (
      <label htmlFor={idProp} className={s.Label}>
        {label}
      </label>
    )}
    <Select.Trigger
      id={idProp}
      className={s.Trigger}
      disabled={disabled}
      aria-label={label}
      name={name}
    >
      <Select.Value placeholder={placeholder}/>
      <Select.Icon className={s.Icon}>
        <ChevronDownIcon/>
      </Select.Icon>
    </Select.Trigger>

    <Select.Portal>
      <Select.Content className={s.Content} side="bottom" position="popper">
        <Select.ScrollUpButton className={s.ScrollButton}>
          <ChevronUpIcon/>
        </Select.ScrollUpButton>
        <Select.Viewport className={s.Viewport}>
          <Select.Group>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className={s.ScrollButton}>
          <ChevronDownIcon/>
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Portal>

  </Select.Root>
);


export default Selectbox;


