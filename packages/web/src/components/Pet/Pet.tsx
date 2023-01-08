import { ButtonGroup, IconButton, Panel, Tooltip, Whisper } from "rsuite";
import { MdDelete, MdFavorite, MdReadMore } from "react-icons/md";

import placeholderPhoto from "../../assets/images/placeholder-01.png";

import styles from "./Pet.module.css";

interface IPetProps {
  id: number;
  name: string;
  age: string;
  information: string;
  photo: string;
  isMarked: boolean;
}

const Pet = ({
  id,
  name,
  age,
  information,
  photo,
  isMarked,
}: IPetProps): JSX.Element => {
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
        <Whisper
          placement="top"
          controlId="control-id-hover"
          trigger="hover"
          speaker={
            <Tooltip>
              <p>More information</p>
            </Tooltip>
          }
        >
          <IconButton
            icon={<MdReadMore />}
            color="green"
            appearance="primary"
            circle
            className={styles.pet__button}
          />
        </Whisper>

        <Whisper
          placement="top"
          controlId="control-id-hover"
          trigger="hover"
          speaker={
            <Tooltip>{isMarked ? <p>Unmarked</p> : <p>Marked</p>}</Tooltip>
          }
        >
          <IconButton
            icon={<MdFavorite />}
            color={isMarked ? "violet" : "blue"}
            appearance="primary"
            circle
            className={styles.pet__button}
          />
        </Whisper>

        <Whisper
          placement="top"
          controlId="control-id-hover"
          trigger="hover"
          speaker={
            <Tooltip>
              <p>Delete this card</p>
            </Tooltip>
          }
        >
          <IconButton
            icon={<MdDelete />}
            color="red"
            appearance="primary"
            circle
            className={styles.pet__button}
          />
        </Whisper>
      </ButtonGroup>
    </Panel>
  );
};

export default Pet;
