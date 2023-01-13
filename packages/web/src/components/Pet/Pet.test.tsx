import { vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import Pet from "./Pet";

const mockPetData = {
  id: 1,
  name: "Test name",
  age: "Test age",
  information: "Test information",
  photo: "test-photo.png",
  isMarked: false,
};

const noop = (...args: any[]): any => {};

describe("Pet", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Pet
        {...mockPetData}
        moreInfoHandle={noop}
        markHandle={noop}
        deleteHandle={noop}
      />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="_pet_31fcfa rs-panel rs-panel-bordered rs-panel-shaded"
        >
          <div
            class="rs-panel-body rs-panel-body-fill"
            role="region"
          >
            <div
              class="_pet__photo_31fcfa"
              style="background-image: url(test-photo.png);"
            />
            <div
              class="_pet__info_31fcfa"
            >
              <h4
                class="_pet__info-name_31fcfa"
              >
                Test name
              </h4>
              <h6
                class="_pet__info-age_31fcfa"
              >
                Test age
              </h6>
              <p
                class="_pet__info-information_31fcfa"
              >
                Test information
              </p>
            </div>
            <div
              class="_pet__buttons_31fcfa rs-btn-group rs-btn-group-lg rs-btn-group-vertical"
              role="group"
            >
              <button
                aria-describedby="control-id-hover"
                class="_pet__button_31fcfa rs-btn-icon rs-btn-icon-placement-left rs-btn-icon-circle rs-btn rs-btn-primary rs-btn-green rs-btn-lg"
                data-testid="more-information-button"
                type="button"
              >
                <svg
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
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                  />
                </svg>
                <span
                  class="rs-ripple-pond"
                >
                  <span
                    class="rs-ripple"
                  />
                </span>
              </button>
              <button
                aria-describedby="control-id-hover"
                class="_pet__button_31fcfa rs-btn-icon rs-btn-icon-placement-left rs-btn-icon-circle rs-btn rs-btn-primary rs-btn-orange rs-btn-lg"
                data-testid="mark-button"
                type="button"
              >
                <svg
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
                    d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                  />
                </svg>
                <span
                  class="rs-ripple-pond"
                >
                  <span
                    class="rs-ripple"
                  />
                </span>
              </button>
              <button
                aria-describedby="control-id-hover"
                class="_pet__button_31fcfa rs-btn-icon rs-btn-icon-placement-left rs-btn-icon-circle rs-btn rs-btn-primary rs-btn-red rs-btn-lg"
                data-testid="delete-button"
                type="button"
              >
                <svg
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
                    d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
                  />
                </svg>
                <span
                  class="rs-ripple-pond"
                >
                  <span
                    class="rs-ripple"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    `);
  });

  it("should have passed pet on the page", () => {
    const { container, getByText } = render(
      <Pet
        {...mockPetData}
        moreInfoHandle={noop}
        markHandle={noop}
        deleteHandle={noop}
      />
    );

    const photo = container.querySelector("[class*=pet__photo]");

    expect(photo).toHaveStyle(`background-image: url(${mockPetData.photo})`);
    expect(getByText(mockPetData.name)).toBeInTheDocument();
    expect(getByText(mockPetData.age)).toBeInTheDocument();
    expect(getByText(mockPetData.information)).toBeInTheDocument();
  });

  it("should click buttons", () => {
    const onMoreInfoButtonClick = vi.fn();
    const onMarkButtonClick = vi.fn();
    const onDeleteButtonClick = vi.fn();

    const { getByTestId } = render(
      <Pet
        {...mockPetData}
        moreInfoHandle={onMoreInfoButtonClick}
        markHandle={onMarkButtonClick}
        deleteHandle={onDeleteButtonClick}
      />
    );

    fireEvent.click(getByTestId("more-information-button"));
    expect(onMoreInfoButtonClick).toHaveBeenCalledTimes(1);

    fireEvent.click(getByTestId("mark-button"));
    expect(onMarkButtonClick).toHaveBeenCalledTimes(1);

    fireEvent.click(getByTestId("delete-button"));
    expect(onDeleteButtonClick).toHaveBeenCalledTimes(1);
  });
});
