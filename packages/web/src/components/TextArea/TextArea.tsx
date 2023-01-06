import { ForwardedRef, forwardRef } from "react";
import { Input } from "rsuite";

interface ITextAreaProps {
  className?: string;
  rows?: number;
  cols?: number;
}

const TextArea = forwardRef(
  (
    { className, rows = 5, cols, ...props }: ITextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => (
    <Input
      className={className}
      rows={rows}
      cols={cols}
      as="textarea"
      ref={ref}
      {...props}
    />
  )
);

TextArea.displayName = "TextArea";

export default TextArea;
