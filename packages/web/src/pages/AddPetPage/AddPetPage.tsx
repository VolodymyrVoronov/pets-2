import { FlexboxGrid, Col, Panel } from "rsuite";

import trpc from "../../hooks/trpc";

import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";

import styles from "./AddPetPage.module.css";

const AddPetPage = (): JSX.Element => {
  const { mutate, isLoading, isError, error } = trpc.useMutation(["createPet"]);

  return (
    <AnimatedWrapper>
      <FlexboxGrid justify="center" className={styles["add-page"]}>
        <FlexboxGrid.Item as={Col} colspan={24} xs={22} sm={18} md={16} lg={14}>
          <Panel shaded bordered bodyFill className={styles["add-page__card"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            repellat ipsam minima eius itaque quasi modi odit eum explicabo
            dolor voluptas, inventore sint suscipit expedita dolorem doloremque
            fuga impedit illo!
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </AnimatedWrapper>
  );
};

export default AddPetPage;
