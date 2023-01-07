import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FlexboxGrid,
  Col,
  Panel,
  Grid,
  Row,
  Button,
  ButtonGroup,
  Whisper,
  Tooltip,
} from "rsuite";

import trpc from "../../hooks/trpc";

import Paths from "../../constants";

import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";
import Form from "../../components/Form/Form";
import PhotoUploader from "../../components/PhotoUploader/PhotoUploader";

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
  const navigator = useNavigate();

  const { mutate, isLoading, isError, error } = trpc.useMutation(["createPet"]);

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

  const onBackButtonClick = () => {
    navigator(Paths.PetsPage);
  };

  console.log(petData, petPhoto);

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
              <Whisper
                placement="top"
                controlId="control-id-hover"
                trigger="hover"
                speaker={
                  <Tooltip>
                    <h6>All information will be lost!</h6>
                  </Tooltip>
                }
              >
                <Button
                  onClick={onBackButtonClick}
                  color="blue"
                  appearance="ghost"
                >
                  Back to pets without saving
                </Button>
              </Whisper>
              <Button color="blue" appearance="primary">
                Save entered information
              </Button>
            </ButtonGroup>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </AnimatedWrapper>
  );
};

export default AddPetPage;
