import { FlexboxGrid, Panel, Col, Divider, ButtonGroup, Button } from "rsuite";
import {
  MdKeyboardBackspace,
  MdModeEditOutline,
  MdDelete,
  MdFavoriteBorder,
  MdFavorite,
} from "react-icons/md";

import formatDate from "../../helpers/formatDate";

import WhisperWrapper from "../WhisperWrapper/WhisperWrapper";

import placeholderPhoto from "../../assets/images/placeholder-01.png";

import styles from "./PetInfo.module.css";

interface IPetInfoProps {
  id: number;
  name: string;
  age: string;
  photo: string;
  breed: string;
  diet: string;
  diseases: string;
  information: string;
  createdAt: Date;
  isMarked: boolean;

  backHandle: () => void;
  editHandle: () => void;
  markHandle: (id: number, isMarked: boolean) => void;
  deleteHandle: (id: number) => void;
}

const PetInfo = ({
  id,
  name,
  age,
  photo,
  breed,
  diet,
  diseases,
  information,
  createdAt,
  isMarked,

  backHandle,
  editHandle,
  markHandle,
  deleteHandle,
}: IPetInfoProps): JSX.Element => {
  const onBackButtonClick = (): void => {
    backHandle();
  };

  const onEditButtonClick = (): void => {
    editHandle();
  };

  const onMarkButtonClick = (): void => {
    markHandle(id, !isMarked);
  };

  const onDeleteButtonClick = (): void => {
    deleteHandle(id);
  };

  const formattedDate = formatDate(createdAt);

  return (
    <FlexboxGrid justify="center" className={styles["pet-info"]}>
      <FlexboxGrid.Item as={Col} colspan={24} xs={22} sm={18} xl={12}>
        <Panel shaded bordered bodyFill className={styles["pet-info__card"]}>
          <p className={styles["pet-info__created-at"]}>
            Created at: <strong>{formattedDate}</strong>
          </p>
          <div
            className={styles["pet-info__photo"]}
            style={{
              backgroundImage: `url(${photo || placeholderPhoto})`,
            }}
          />

          <h3 className={styles["pet-info__name"]}>{name}</h3>
          <h4 className={styles["pet-info__age"]}>{age}</h4>
          <h6 className={styles["pet-info__breed"]}>{breed}</h6>

          <div className={styles["pet-info__text-block"]}>
            {information && (
              <>
                <Divider>Information</Divider>
                <p className={styles["pet-info__information"]}>{information}</p>
              </>
            )}

            {diet && (
              <>
                <Divider>Diet</Divider>
                <p className={styles["pet-info__diet"]}>{diet}</p>
              </>
            )}

            {diseases && (
              <>
                <Divider>Diseases</Divider>
                <p className={styles["pet-info__diseases"]}>{diseases}</p>
              </>
            )}
          </div>

          <ButtonGroup
            justified
            size="lg"
            className={styles["pet-info__buttons"]}
          >
            <WhisperWrapper text="Back to pets">
              <Button
                color="violet"
                appearance="primary"
                onClick={onBackButtonClick}
                data-testid="back-button"
              >
                <MdKeyboardBackspace /> &nbsp; Back
              </Button>
            </WhisperWrapper>

            <WhisperWrapper text="Edit this card">
              <Button
                color="blue"
                appearance="primary"
                onClick={onEditButtonClick}
                data-testid="edit-button"
              >
                <MdModeEditOutline /> &nbsp; Edit
              </Button>
            </WhisperWrapper>

            <WhisperWrapper text={isMarked ? "Unmark" : "Mark"}>
              <Button
                color="orange"
                appearance="primary"
                onClick={onMarkButtonClick}
                data-testid="mark-unmark-button"
              >
                {isMarked ? (
                  <>
                    <MdFavorite data-testid="unmark-button" /> &nbsp; Unmark
                  </>
                ) : (
                  <>
                    <MdFavoriteBorder data-testid="mark-button" /> &nbsp; Mark
                  </>
                )}
              </Button>
            </WhisperWrapper>

            <WhisperWrapper text="Delete this card">
              <Button
                color="red"
                appearance="primary"
                onClick={onDeleteButtonClick}
                data-testid="delete-button"
              >
                <MdDelete /> &nbsp; Delete
              </Button>
            </WhisperWrapper>
          </ButtonGroup>
        </Panel>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default PetInfo;
