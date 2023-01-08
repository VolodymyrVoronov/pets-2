import { ReactElement } from "react";
import { Tooltip, Whisper } from "rsuite";

interface IWhisperWrapperProps {
  tag?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  children: ReactElement;
}

const WhisperWrapper = ({
  tag = "p",
  text,
  children,
}: IWhisperWrapperProps): JSX.Element => {
  const Component = tag;

  return (
    <Whisper
      placement="top"
      controlId="control-id-hover"
      trigger="hover"
      speaker={
        <Tooltip>
          <Component>{text}</Component>
        </Tooltip>
      }
    >
      {children}
    </Whisper>
  );
};

export default WhisperWrapper;
