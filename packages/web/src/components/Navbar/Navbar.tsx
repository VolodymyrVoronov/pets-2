import { ReactElement } from "react";
import { Navbar as Navigation, Nav } from "rsuite";
import { NavLink } from "react-router-dom";
import { MdPets, MdNoteAdd, MdBookmark } from "react-icons/md";
import cn from "classnames";

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

const Navbar = (): JSX.Element => {
  return (
    <Navigation className={styles.navbar}>
      <Nav>
        {navLinks.map(({ id, to, icon, text }) => {
          return (
            <NavLink key={id} to={to} className={cn(styles.navbar__link)}>
              {({ isActive }) => (
                <Nav.Item
                  as="span"
                  icon={icon}
                  className={cn(styles["navbar__link-item"], {
                    [styles["navbar__link-item--active"]]: isActive,
                  })}
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
