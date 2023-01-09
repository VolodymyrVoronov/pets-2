import { ButtonGroup, IconButton, Panel } from "rsuite";
import { MdDelete, MdFavoriteBorder, MdFavorite, MdInfo } from "react-icons/md";

import WhisperWrapper from "../WhisperWrapper/WhisperWrapper";

import placeholderPhoto from "../../assets/images/placeholder-01.png";

import styles from "./Pet.module.css";

interface IPetProps {
  id: number;
  name: string;
  age: string;
  information: string;
  photo: string;
  isMarked: boolean;

  moreInfoHandle: (id: number) => void;
  markHandle: (id: number, isMarked: boolean) => void;
  deleteHandle: (id: number) => void;
}

const Pet = ({
  id,
  name,
  age,
  information,
  photo,
  isMarked,

  moreInfoHandle,
  markHandle,
  deleteHandle,
}: IPetProps): JSX.Element => {
  const onMoreInfoButtonClick = (): void => {
    moreInfoHandle(id);
  };

  const onMarkButtonClick = (): void => {
    markHandle(id, !isMarked);
  };

  const onDeleteButtonClick = (): void => {
    deleteHandle(id);
  };

  return (
    <Panel shaded bordered bodyFill className={styles.pet}>
      <div
        className={styles.pet__photo}
        style={{
          backgroundImage: `url(${photo || placeholderPhoto})`,
        }}
      />

      <div className={styles.pet__info}>
        <h4 className={styles["pet__info-name"]}>{name}</h4>
        <h6 className={styles["pet__info-age"]}>{age}</h6>
        <p className={styles["pet__info-information"]}>{information}</p>
      </div>

      <ButtonGroup vertical size="lg" className={styles.pet__buttons}>
        <WhisperWrapper text="More information">
          <IconButton
            icon={<MdInfo />}
            color="green"
            appearance="primary"
            circle
            className={styles.pet__button}
            onClick={onMoreInfoButtonClick}
          />
        </WhisperWrapper>

        <WhisperWrapper text={isMarked ? "Unmark" : "Mark"}>
          <IconButton
            icon={isMarked ? <MdFavorite /> : <MdFavoriteBorder />}
            color="orange"
            appearance="primary"
            circle
            className={styles.pet__button}
            onClick={onMarkButtonClick}
          />
        </WhisperWrapper>

        <WhisperWrapper text="Delete this card">
          <IconButton
            icon={<MdDelete />}
            color="red"
            appearance="primary"
            circle
            className={styles.pet__button}
            onClick={onDeleteButtonClick}
          />
        </WhisperWrapper>
      </ButtonGroup>
    </Panel>
  );
};

export default Pet;
