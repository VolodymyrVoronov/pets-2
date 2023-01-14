import { Button, ButtonGroup, Modal } from "rsuite";
import { ReactNode } from "react";
import { MdSave, MdOutlineArrowBackIos } from "react-icons/md";

import WhisperWrapper from "../WhisperWrapper/WhisperWrapper";

import styles from "./ModalBox.module.css";

interface IModalBoxProps {
  open: boolean;
  children: ReactNode;

  saveHandle: () => void;
  closeHandle: () => void;
}

const ModalBox = ({
  open,
  children,
  saveHandle,
  closeHandle,
}: IModalBoxProps): JSX.Element => {
  return (
    <Modal
      size="lg"
      open={open}
      onClose={closeHandle}
      overflow={false}
      backdrop="static"
    >
      <Modal.Header />
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <ButtonGroup
          justified
          size="lg"
          className={styles["modal-box__buttons"]}
        >
          <WhisperWrapper text="Back without saving">
            <Button
              color="orange"
              appearance="primary"
              onClick={closeHandle}
              data-testid="close-button"
            >
              <MdOutlineArrowBackIos /> &nbsp; Cancel
            </Button>
          </WhisperWrapper>

          <WhisperWrapper text="Save all changes">
            <Button
              color="green"
              appearance="primary"
              onClick={saveHandle}
              data-testid="confirm-button"
            >
              <MdSave /> &nbsp; Save
            </Button>
          </WhisperWrapper>
        </ButtonGroup>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalBox;
