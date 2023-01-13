import { ReactElement } from "react";
import { Navbar as Navigation, Nav } from "rsuite";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { MdPets, MdNoteAdd, MdBookmark } from "react-icons/md";

import Paths from "../../constants/paths";
import Trpc from "../../constants/trpc";

import styles from "./Navbar.module.css";

interface INavLink {
  id: number;
  to: string;
  state?: string;
  icon: ReactElement;
  text: string;
}

const navLinks: INavLink[] =
  [
    {
      id: 1,
      to: Paths.PetsPage,
      state: Trpc.GetPets,
      icon: <MdPets />,
      text: "My pets",
    },
    {
      id: 2,
      to: Paths.AddPetPage,
      state: "",
      icon: <MdNoteAdd />,
      text: "Add pet",
    },
    {
      id: 3,
      to: Paths.MarkedPetsPage,
      state: Trpc.GetMarkedPets,
      icon: <MdBookmark />,
      text: "Marked pets",
    },
  ] || undefined;

interface INavbarProps {
  buttonsPosition?: "left" | "center" | "right";
}

const Navbar = ({ buttonsPosition = "center" }: INavbarProps): JSX.Element => {
  return (
    <Navigation
      className={cn(styles.navbar, styles[`navbar--${buttonsPosition}`])}
    >
      <Nav>
        {navLinks.map(({ id, to, state, icon, text }) => {
          return (
            <NavLink
              key={id}
              to={to}
              state={state}
              className={styles.navbar__link}
              data-testid={to}
            >
              {({ isActive }) => (
                <Nav.Item
                  as="span"
                  icon={icon}
                  className={styles["navbar__link-item"]}
                  active={isActive}
                >
                  {text}
                </Nav.Item>
              )}
            </NavLink>
          );
        })}
      </Nav>
    </Navigation>
  );
};

export default Navbar;
