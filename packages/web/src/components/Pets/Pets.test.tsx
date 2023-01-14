/* eslint-disable no-irregular-whitespace */
import { vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import noop from "../../helpers/noop";

import Pets from "./Pets";

const mockPetData = [
  {
    id: 1,
    name: "Test name one",
    age: "Test age one",
    photo: "test-photo-one.png",
    breed: "Test breed one",
    diet: "Test diet one",
    diseases: "Test diseases one",
    information: "Test information one",
    createdAt: new Date(),
    isMarked: false,
  },
  {
    id: 2,
    name: "Test name two",
    age: "Test age two",
    photo: "test-photo-two.png",
    breed: "Test breed two",
    diet: "Test diet two",
    diseases: "Test diseases two",
    information: "Test information two",
    createdAt: new Date(),
    isMarked: false,
  },
  {
    id: 3,
    name: "Test name three",
    age: "Test age three",
    photo: "test-photo-three.png",
    breed: "Test breed three",
    diet: "Test diet three",
    diseases: "Test diseases three",
    information: "Test information three",
    createdAt: new Date(),
    isMarked: false,
  },
];

describe("Pets", () => {
  it("renders correctly", () => {
    const { container } = render(
      <Pets
        pets={mockPetData}
        moreInfoHandle={noop}
        markHandle={noop}
        deleteHandle={noop}
      />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="_pets-page_de1fe4 rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-center"
        >
          <div
            class="rs-flex-box-grid-item rs-flex-box-grid-item-24 rs-col rs-col-xl-22 rs-col-md-18 rs-col-sm-20 rs-col-xs-22"
            role="gridcell"
          >
            <div
              class="rs-grid-container-fluid"
              role="grid"
            >
              <div
                class="rs-row"
                role="row"
                style="margin-left: -12px; margin-right: -12px;"
              >
                <div
                  class="rs-col rs-col-xl-12 rs-col-xs-24"
                  role="gridcell"
                  style="padding-left: 12px; padding-right: 12px;"
                >
                  <div
                    class="_pet_31fcfa rs-panel rs-panel-bordered rs-panel-shaded"
                  >
                    <div
                      class="rs-panel-body rs-panel-body-fill"
                      role="region"
                    >
                      <div
                        class="_pet__photo_31fcfa"
                        style="background-image: url(test-photo-one.png);"
                      />
                      <div
                        class="_pet__info_31fcfa"
                      >
                        <h4
                          class="_pet__info-name_31fcfa"
                        >
                          Test name one
                        </h4>
                        <h6
                          class="_pet__info-age_31fcfa"
                        >
                          Test age one
                        </h6>
                        <p
                          class="_pet__info-information_31fcfa"
                        >
                          Test information one
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
                <div
                  class="rs-col rs-col-xl-12 rs-col-xs-24"
                  role="gridcell"
                  style="padding-left: 12px; padding-right: 12px;"
                >
                  <div
                    class="_pet_31fcfa rs-panel rs-panel-bordered rs-panel-shaded"
                  >
                    <div
                      class="rs-panel-body rs-panel-body-fill"
                      role="region"
                    >
                      <div
                        class="_pet__photo_31fcfa"
                        style="background-image: url(test-photo-two.png);"
                      />
                      <div
                        class="_pet__info_31fcfa"
                      >
                        <h4
                          class="_pet__info-name_31fcfa"
                        >
                          Test name two
                        </h4>
                        <h6
                          class="_pet__info-age_31fcfa"
                        >
                          Test age two
                        </h6>
                        <p
                          class="_pet__info-information_31fcfa"
                        >
                          Test information two
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
                <div
                  class="rs-col rs-col-xl-12 rs-col-xs-24"
                  role="gridcell"
                  style="padding-left: 12px; padding-right: 12px;"
                >
                  <div
                    class="_pet_31fcfa rs-panel rs-panel-bordered rs-panel-shaded"
                  >
                    <div
                      class="rs-panel-body rs-panel-body-fill"
                      role="region"
                    >
                      <div
                        class="_pet__photo_31fcfa"
                        style="background-image: url(test-photo-three.png);"
                      />
                      <div
                        class="_pet__info_31fcfa"
                      >
                        <h4
                          class="_pet__info-name_31fcfa"
                        >
                          Test name three
                        </h4>
                        <h6
                          class="_pet__info-age_31fcfa"
                        >
                          Test age three
                        </h6>
                        <p
                          class="_pet__info-information_31fcfa"
                        >
                          Test information three
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
              </div>
            </div>
          </div>
        </div>
      </div>
    `);
  });

  it("should have passed pets on the page", () => {
    const { container, getByText } = render(
      <Pets
        pets={mockPetData}
        moreInfoHandle={noop}
        markHandle={noop}
        deleteHandle={noop}
      />
    );

    for (let i = 0; i < mockPetData.length; i += 1) {
      const photo = container.querySelectorAll("[class*=pet__photo]")[i];

      expect(photo).toHaveStyle(
        `background-image: url(${mockPetData[i].photo})`
      );
      expect(getByText(mockPetData[i].name)).toBeInTheDocument();
      expect(getByText(mockPetData[i].age)).toBeInTheDocument();
      expect(getByText(mockPetData[i].information)).toBeInTheDocument();
    }
  });

  it("should click buttons", () => {
    const moreInfoHandle = vi.fn();
    const markHandle = vi.fn();
    const deleteHandle = vi.fn();

    const { getAllByTestId } = render(
      <Pets
        pets={mockPetData}
        moreInfoHandle={moreInfoHandle}
        markHandle={markHandle}
        deleteHandle={deleteHandle}
      />
    );

    for (let i = 0; i < mockPetData.length; i += 1) {
      fireEvent.click(getAllByTestId("more-information-button")[i]);
      expect(moreInfoHandle).toHaveBeenCalledTimes(i + 1);

      fireEvent.click(getAllByTestId("mark-button")[i]);
      expect(markHandle).toHaveBeenCalledTimes(i + 1);

      fireEvent.click(getAllByTestId("delete-button")[i]);
      expect(deleteHandle).toHaveBeenCalledTimes(i + 1);
    }
  });
});
