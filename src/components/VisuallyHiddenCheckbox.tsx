import { useToggleState } from "@react-stately/toggle";
import { useRef } from "react";
import { AriaCheckboxProps, useCheckbox, VisuallyHidden } from "react-aria";

export default function VisuallyHiddenCheckbox(props: AriaCheckboxProps) {
  const { children } = props;
  
  const state = useToggleState(props);

  const ref = useRef(null);

  const { inputProps } = useCheckbox(props, state, ref);

  return (
    <label>
      <VisuallyHidden elementType="span">
        <input {...inputProps} ref={ref} />
      </VisuallyHidden>
      {children}
    </label>)
}
