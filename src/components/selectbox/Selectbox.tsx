import {Select} from "radix-ui";
import {ChevronDownIcon, ChevronUpIcon,} from "@radix-ui/react-icons";

import SelectItem from "./SelectItem";

import s from "./selectbox.module.scss";
import "../../styles/index.scss"

const Selectbox = () => (
  <Select.Root>
    <label htmlFor="custom-select-id" className={s.Label}>Select-box</label>
    <Select.Trigger className={s.Trigger} aria-label="Select-box" id="custom-select-id">
      <Select.Value placeholder="Select-box"/>
      <Select.Icon className={s.Icon}>
        <ChevronDownIcon/>
      </Select.Icon>
    </Select.Trigger>
    {/*<Select.Portal>*/}
      <Select.Content className={s.Content} side="bottom" position="popper">
        <Select.ScrollUpButton className={s.ScrollButton}>
          <ChevronUpIcon/>
        </Select.ScrollUpButton>
        <Select.Viewport className={s.Viewport}>
          <Select.Group>
            <SelectItem value="Select-box 1">Select-box 1</SelectItem>
            <SelectItem value="Select-box 2">Select-box 2</SelectItem>
            <SelectItem value="Select-box 3">Select-box 3</SelectItem>
            <SelectItem value="Select-box 3">Select-box 3</SelectItem>
            <SelectItem value="Select-box 3">Select-box 3</SelectItem>
            <SelectItem value="Select-box 3">Select-box 3</SelectItem>
            <SelectItem value="Select-box 3">Select-box 3</SelectItem>
            <SelectItem value="Select-box 3">Select-box 3</SelectItem>
            <SelectItem value="Select-box 3">Select-box 3</SelectItem>
            <SelectItem value="Select-box 3">Select-box 3</SelectItem>
            <SelectItem value="Select-box 3">Select-box 3</SelectItem>
            <SelectItem value="Select-box 3">Select-box 4</SelectItem>
            <SelectItem value="Select-box 3">Select-box 5</SelectItem>
            <SelectItem value="Select-box 3">Select-box 6</SelectItem>
            <SelectItem value="Select-box 3">Select-box 7</SelectItem>
            <SelectItem value="Select-box 3">Select-box 8</SelectItem>
            <SelectItem value="Select-box 3">Select-box 9</SelectItem>
            <SelectItem value="Select-box 3">Select-box 1</SelectItem>
            <SelectItem value="Select-box 3">Select-box 2</SelectItem>
            <SelectItem value="Select-box 3">Select-box 4</SelectItem>
            <SelectItem value="Select-box 3">Select-box 5</SelectItem>
            <SelectItem value="Select-box 3">Select-box 6</SelectItem>
            <SelectItem value="Select-box 3">Select-box 71</SelectItem>
            <SelectItem value="Select-box 3">Select-box 4</SelectItem>
            <SelectItem value="Select-box 3">Select-box 5</SelectItem>
            <SelectItem value="Select-box 3">Select-box 6</SelectItem>
            <SelectItem value="Select-box 3">Select-box 7</SelectItem>
            <SelectItem value="Select-box 3">Select-box 8</SelectItem>
            <SelectItem value="Select-box 3">Select-box 9</SelectItem>
            <SelectItem value="Select-box 3">Select-box 1</SelectItem>
            <SelectItem value="Select-box 3">Select-box 2</SelectItem>
            <SelectItem value="Select-box 3">Select-box 4</SelectItem>
            <SelectItem value="Select-box 3">Select-box 5</SelectItem>
            <SelectItem value="Select-box 3">Select-box 6</SelectItem>
            <SelectItem value="Select-box 3">Select-box 71</SelectItem>
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton className={s.ScrollButton}>
          <ChevronDownIcon/>
        </Select.ScrollDownButton>
      </Select.Content>
    {/*</Select.Portal>*/}

  </Select.Root>
);


export default Selectbox;


