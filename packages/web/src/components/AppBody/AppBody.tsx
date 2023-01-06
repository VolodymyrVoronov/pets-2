import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import trpc from "../../hooks/trpc";

import styles from "./AppBody.module.css";

const AppBody = (): JSX.Element => {
  const { data, isLoading, isError, error } = trpc.useQuery(["getPets"]);

  return <div className={styles["app-body"]}>AppBody</div>;
};

export default AppBody;
