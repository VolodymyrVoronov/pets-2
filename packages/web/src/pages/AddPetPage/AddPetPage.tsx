import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FlexboxGrid,
  Col,
  Panel,
  Grid,
  Row,
  Button,
  ButtonGroup,
  Divider,
  Message,
} from "rsuite";

import trpc from "../../hooks/trpc";

import Paths from "../../constants";

import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";
import Form from "../../components/Form/Form";
import PhotoUploader from "../../components/PhotoUploader/PhotoUploader";
import WhisperWrapper from "../../components/WhisperWrapper/WhisperWrapper";

import styles from "./AddPetPage.module.css";

interface IPetData {
  name: string;
  age: string;
  breed: string;
  diet: string;
  diseases: string;
  information: string;
}

const AddPetPage = (): JSX.Element => {
  const navigate = useNavigate();

  const { mutate, isLoading, isSuccess, isError, error } = trpc.useMutation([
    "createPet",
  ]);

  const [petData, setPetData] = useState<IPetData>();
  const [petPhoto, setPetPhoto] = useState<string>("");

  const onFormChange = useMemo(
    () => (formData: IPetData) => {
      setPetData(formData);
    },
    []
  );

  const onUploaderChange = useMemo(
    () => (photo: string) => {
      setPetPhoto(photo);
    },
    []
  );

  const onBackButtonClick = (): void => {
    navigate(Paths.PetsPage);
  };

  const onSaveButtonClick = (): void => {
    interface IPhoto {
      photo: string;
    }

    type TCombinedPet = IPetData & IPhoto;

    const pet = {
      ...petData,
      photo: petPhoto,
    } as TCombinedPet;

    mutate(pet);
  };

  const redirectToPetsPage = useCallback(() => {
    if (isSuccess) {
      const timeoutId = setTimeout(() => {
        navigate(Paths.PetsPage);

        clearTimeout(timeoutId);
      }, 1000);
    }
  }, [isSuccess, navigate]);

  useEffect(() => {
    redirectToPetsPage();
  }, [redirectToPetsPage]);

  return (
    <AnimatedWrapper>
      <FlexboxGrid justify="center" className={styles["add-page"]}>
        <FlexboxGrid.Item
          as={Col}
          colspan={24}
          xs={22}
          sm={18}
          md={20}
          lg={20}
          xl={16}
        >
          <Panel shaded bordered bodyFill className={styles["add-page__card"]}>
            <Grid fluid>
              <Row>
                <Col xs={24} lg={11} lgPush={0}>
                  <PhotoUploader onUploaderChange={onUploaderChange} />
                </Col>
                <Col xs={24} lg={11} lgPush={2}>
                  <Form onFormChange={onFormChange} />
                </Col>
              </Row>
            </Grid>

            <ButtonGroup
              size="lg"
              justified
              className={styles["add-page__buttons"]}
            >
              <WhisperWrapper text="All information will be lost!" tag="h6">
                <Button
                  onClick={onBackButtonClick}
                  color="blue"
                  appearance="ghost"
                  loading={isLoading}
                >
                  Back to pets without saving
                </Button>
              </WhisperWrapper>

              <Button
                onClick={onSaveButtonClick}
                color="blue"
                appearance="primary"
                disabled={!petData?.name || !petData?.age}
                loading={isLoading}
              >
                Save entered information
              </Button>
            </ButtonGroup>

            {(isError || isSuccess) && <Divider />}

            {isError && (
              <Message showIcon type="error" header="Error">
                {error?.message}
              </Message>
            )}

            {isSuccess && (
              <Message showIcon type="success" header="Success">
                Saved!
              </Message>
            )}
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </AnimatedWrapper>
  );
};

export default AddPetPage;
