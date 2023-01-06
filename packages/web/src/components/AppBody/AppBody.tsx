import { ReactElement } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  NavLink,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Navbar, Nav } from "rsuite";
import { MdPets, MdNoteAdd, MdBookmark } from "react-icons/md";
import cn from "classnames";

import trpc from "../../hooks/trpc";

import Paths from "../../constants";

import styles from "./AppBody.module.css";

interface INavLinks {
  id: number;
  to: string;
  icon: ReactElement;
  text: string;
}

const navLinks: INavLinks[] = [
  {
    id: 1,
    to: Paths.PetsPage,
    icon: <MdPets />,
    text: "My pets",
  },
  {
    id: 2,
    to: Paths.AddPetPage,
    icon: <MdNoteAdd />,
    text: "Add pet",
  },
  {
    id: 3,
    to: Paths.MarkedPetsPage,
    icon: <MdBookmark />,
    text: "Marked pets",
  },
];

const AppBody = (): JSX.Element => {
  const location = useLocation();

  const { data, isLoading, isError, error } = trpc.useQuery(["getPets"]);

  return (
    <div className={styles["app-body"]}>
      <Navbar className={styles["app-body__header"]}>
        <Nav>
          {navLinks.map(({ id, to, icon, text }) => {
            return (
              <NavLink
                key={id}
                to={to}
                className={cn(styles["app-body__header-link"])}
              >
                {({ isActive }) => (
                  <Nav.Item
                    as="span"
                    icon={icon}
                    className={cn(styles["app-body__header-link-item"], {
                      [styles["app-body__header-link-item--active"]]: isActive,
                    })}
                  >
                    {text}
                  </Nav.Item>
                )}
              </NavLink>
            );
          })}
        </Nav>
      </Navbar>

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
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default AppBody;
