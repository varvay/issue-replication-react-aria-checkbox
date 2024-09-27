import { useToggleState } from "@react-stately/toggle";
import { useRef } from "react";
import { AriaCheckboxProps, useCheckbox } from "react-aria";

export default function WorkaroundChecbox(props: AriaCheckboxProps) {
  const { children } = props;
  
  const state = useToggleState(props);

  const ref = useRef(null);

  const { inputProps } = useCheckbox(props, state, ref);

  return (
    <label>
      <input {...inputProps} ref={ref} />
      {children}
    </label>)
}
