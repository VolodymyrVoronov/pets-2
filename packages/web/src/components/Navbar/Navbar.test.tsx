import { render, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { BrowserRouter, Router } from "react-router-dom";

import Navbar from "./Navbar";

describe("Navbar", () => {
  it("renders correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <nav
          class="_navbar_278c00 _navbar--center_278c00 rs-navbar rs-navbar-default"
        >
          <div
            class="rs-navbar-nav rs-nav rs-nav-default rs-nav-horizontal"
          >
            <a
              class="_navbar__link_278c00"
              data-testid="/pets"
              href="/pets"
            >
              <span
                class="_navbar__link-item_278c00 rs-navbar-item"
              >
                <svg
                  class="rs-navbar-item-icon"
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0h24v24H0z"
                    fill="none"
                  />
                  <circle
                    cx="4.5"
                    cy="9.5"
                    r="2.5"
                  />
                  <circle
                    cx="9"
                    cy="5.5"
                    r="2.5"
                  />
                  <circle
                    cx="15"
                    cy="5.5"
                    r="2.5"
                  />
                  <circle
                    cx="19.5"
                    cy="9.5"
                    r="2.5"
                  />
                  <path
                    d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"
                  />
                </svg>
                My pets
                <span
                  class="rs-ripple-pond"
                >
                  <span
                    class="rs-ripple"
                  />
                </span>
              </span>
            </a>
            <a
              class="_navbar__link_278c00"
              data-testid="/add-pet"
              href="/add-pet"
            >
              <span
                class="_navbar__link-item_278c00 rs-navbar-item"
              >
                <svg
                  class="rs-navbar-item-icon"
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0h24v24H0z"
                    fill="none"
                  />
                  <path
                    d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"
                  />
                </svg>
                Add pet
                <span
                  class="rs-ripple-pond"
                >
                  <span
                    class="rs-ripple"
                  />
                </span>
              </span>
            </a>
            <a
              class="_navbar__link_278c00"
              data-testid="/marked-pets"
              href="/marked-pets"
            >
              <span
                class="_navbar__link-item_278c00 rs-navbar-item"
              >
                <svg
                  class="rs-navbar-item-icon"
                  fill="currentColor"
                  height="1em"
                  stroke="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0h24v24H0z"
                    fill="none"
                  />
                  <path
                    d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
                  />
                </svg>
                Marked pets
                <span
                  class="rs-ripple-pond"
                >
                  <span
                    class="rs-ripple"
                  />
                </span>
              </span>
            </a>
          </div>
        </nav>
      </div>
    `);
  });

  it("should have correct pathnames", () => {
    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Router location={history.location} navigator={history}>
        <Navbar />
      </Router>
    );

    fireEvent.click(getByTestId("/add-pet"));
    expect(history.location.pathname).toBe("/add-pet");

    fireEvent.click(getByTestId("/marked-pets"));
    expect(history.location.pathname).toBe("/marked-pets");

    fireEvent.click(getByTestId("/pets"));
    expect(history.location.pathname).toBe("/pets");
  });
});
