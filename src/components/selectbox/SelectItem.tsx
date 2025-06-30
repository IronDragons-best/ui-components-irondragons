import * as React from "react";
import {Select} from "radix-ui";

import s from "./selectbox.module.scss";
import {ComponentPropsWithoutRef, ElementRef, ForwardedRef} from "react";

type SelectItemProps = {
  value: string;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<typeof Select.Item>;

type SelectItemComponent = React.ForwardRefExoticComponent<
  SelectItemProps & React.RefAttributes<ElementRef<typeof Select.Item>>
>;

const SelectItem: SelectItemComponent = React.forwardRef<ElementRef<typeof Select.Item>, SelectItemProps>(
  ({
     children,
     className,
     ...props
   }: SelectItemProps, forwardedRef: ForwardedRef<ElementRef<typeof Select.Item>>): React.ReactElement => {
    return (
      <Select.Item
        className={`${s.Item} ${className}`}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
      </Select.Item>
    );
  },
);

export default SelectItem;