import { ReactElement } from "react";
import { Navbar as Navigation, Nav } from "rsuite";
import { NavLink } from "react-router-dom";
import cn from "classnames";
import { MdPets, MdNoteAdd, MdBookmark } from "react-icons/md";

import Paths from "../../constants";

import styles from "./Navbar.module.css";

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

interface INavbarProps {
  buttonsPosition?: "left" | "center" | "right";
}

const Navbar = ({ buttonsPosition = "center" }: INavbarProps): JSX.Element => {
  return (
    <Navigation
      className={cn(styles.navbar, styles[`navbar--${buttonsPosition}`])}
    >
      <Nav>
        {navLinks.map(({ id, to, icon, text }) => {
          return (
            <NavLink key={id} to={to} className={styles.navbar__link}>
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
