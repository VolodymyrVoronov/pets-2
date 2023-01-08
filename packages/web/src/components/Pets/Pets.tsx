import { FlexboxGrid, Col, Grid, Row } from "rsuite";

import styles from "./Pets.module.css";
import Pet from "../Pet/Pet";

interface IPetsProps {
  pets: {
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
  }[];
}

const Pets = ({ pets }: IPetsProps): JSX.Element => {
  return (
    <FlexboxGrid justify="center" className={styles["pets-page"]}>
      <FlexboxGrid.Item as={Col} colspan={24} xs={22} sm={20} md={18} xl={22}>
        <Grid fluid>
          <Row gutter={24}>
            {pets.map(({ id, name, age, information, photo, isMarked }) => {
              return (
                <Col key={id} xs={24} xl={12}>
                  <Pet
                    id={id}
                    name={name}
                    age={age}
                    information={information}
                    photo={photo}
                    isMarked={isMarked}
                  />
                </Col>
              );
            })}
          </Row>
        </Grid>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};

export default Pets;
