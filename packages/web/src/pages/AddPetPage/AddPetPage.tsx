import { useMemo, useState } from "react";
import { FlexboxGrid, Col, Panel, Grid, Row } from "rsuite";

import trpc from "../../hooks/trpc";

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
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </AnimatedWrapper>
  );
};

export default AddPetPage;
