import { ButtonGroup, IconButton, Panel } from "rsuite";
import { MdDelete, MdFavorite, MdReadMore } from "react-icons/md";

import placeholderPhoto from "../../assets/images/placeholder-01.png";

import styles from "./Pet.module.css";

interface IPetProps {
  id: number;
  name: string;
  age: string;
  information: string;
  photo: string;
}

const Pet = ({ id, name, age, information, photo }: IPetProps): JSX.Element => {
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
        <IconButton
          icon={<MdReadMore />}
          color="green"
          appearance="primary"
          circle
          className={styles.pet__button}
        />

        <IconButton
          icon={<MdFavorite />}
          color="orange"
          appearance="primary"
          circle
          className={styles.pet__button}
        />

        <IconButton
          icon={<MdDelete />}
          color="red"
          appearance="primary"
          circle
          className={styles.pet__button}
        />
      </ButtonGroup>
    </Panel>
  );
};

export default Pet;
