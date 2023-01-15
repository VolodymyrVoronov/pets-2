import { MdOutlineBlock } from "react-icons/md";

import AnimatedWrapper from "../../components/AnimatedWrapper/AnimatedWrapper";

import styles from "./NoPage.module.css";

const NoPage = (): JSX.Element => {
  return (
    <AnimatedWrapper className={styles["no-page__container"]}>
      <h4>No page was found.</h4>
      <MdOutlineBlock className={styles["no-page__container-icon"]} />
    </AnimatedWrapper>
  );
};

export default NoPage;
