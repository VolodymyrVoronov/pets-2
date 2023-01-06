import { FlexboxGrid, Col } from "rsuite";

import trpc from "../../hooks/trpc";

import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";

import styles from "./AddPetPage.module.css";

const AddPetPage = (): JSX.Element => {
  const { mutate, isLoading, isError, error } = trpc.useMutation(["createPet"]);

  return (
    <AnimatedWrapper>
      <FlexboxGrid justify="center" className={styles["add-page"]}>
        <FlexboxGrid.Item as={Col} colspan={24} xs={22} sm={18} md={16} lg={14}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas in
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </AnimatedWrapper>
  );
};

export default AddPetPage;
