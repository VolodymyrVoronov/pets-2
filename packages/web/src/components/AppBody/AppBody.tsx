import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Paths from "../../constants/paths";
import Trpc from "../../constants/trpc";

import PetsPage from "../../pages/PetsPage/PetsPage";
import AddPetPage from "../../pages/AddPetPage/AddPetPage";
import PetInfoPage from "../../pages/PetInfoPage/PetInfoPage";
import Navbar from "../Navbar/Navbar";
import AnimatedWrapper from "../AnimatedWrapper/AnimatedWrapper";

import styles from "./AppBody.module.css";

const AppBody = (): JSX.Element => {
  const location = useLocation();

  return (
    <AnimatedWrapper>
      <div className={styles["app-body"]}>
        <AnimatedWrapper
          animation={{
            initial: {
              y: -100,
            },
            animate: {
              y: 0,
            },
            transition: {
              duration: 1.5,
            },
          }}
        >
          <Navbar />
        </AnimatedWrapper>

        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route
              path={Paths.Root}
              element={<Navigate to={Paths.PetsPage} state={Trpc.GetPets} />}
            />
            <Route path={Paths.PetsPage} element={<PetsPage />} />
            <Route path={Paths.PetInfoPage} element={<PetInfoPage />} />
            <Route path={Paths.AddPetPage} element={<AddPetPage />} />
            <Route path={Paths.MarkedPetsPage} element={<PetsPage />} />
            <Route path={Paths.NoPage} element={<div>NoPage</div>} />
          </Routes>
        </AnimatePresence>
      </div>
    </AnimatedWrapper>
  );
};

export default AppBody;
