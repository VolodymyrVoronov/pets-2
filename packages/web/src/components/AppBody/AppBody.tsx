import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import trpc from "../../hooks/trpc";

import Paths from "../../constants";

import Navbar from "../Navbar/Navbar";

import styles from "./AppBody.module.css";

const AppBody = (): JSX.Element => {
  const location = useLocation();

  const { data, isLoading, isError, error } = trpc.useQuery(["getPets"]);

  return (
    <div className={styles["app-body"]}>
      <Navbar />

      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path={Paths.Root} element={<Navigate to={Paths.PetsPage} />} />
          <Route path={Paths.PetsPage} element={<div>PetsPage</div>} />
          <Route path={Paths.PetPageInfo} element={<div>PetPageInfo</div>} />
          <Route path={Paths.AddPetPage} element={<div>AddPetPage</div>} />
          <Route
            path={Paths.MarkedPetsPage}
            element={<div>MarkedPetsPage</div>}
          />
          <Route path={Paths.NoPage} element={<div>NoPage</div>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AppBody;
