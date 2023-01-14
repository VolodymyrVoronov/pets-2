/* eslint-disable no-irregular-whitespace */
import { vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";

import noop from "../../helpers/noop";
import formatDate from "../../helpers/formatDate";

import PetInfo from "./PetInfo";

const mockPetData = {
  id: 1,
  name: "Test name",
  age: "Test age",
  photo: "test-photo.png",
  breed: "Test breed",
  diet: "Test diet",
  diseases: "Test diseases",
  information: "Test information",
  createdAt: new Date(),
  isMarked: false,
};

describe("PetInfo", () => {
  it("renders correctly", () => {
    const { container } = render(
      <PetInfo
        {...mockPetData}
        backHandle={noop}
        editHandle={noop}
        markHandle={noop}
        deleteHandle={noop}
      />
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="_pet-info_1e6e72 rs-flex-box-grid rs-flex-box-grid-top rs-flex-box-grid-center"
        >
          <div
            class="rs-flex-box-grid-item rs-flex-box-grid-item-24 rs-col rs-col-xl-12 rs-col-sm-18 rs-col-xs-22"
            role="gridcell"
          >
            <div
              class="_pet-info__card_1e6e72 rs-panel rs-panel-bordered rs-panel-shaded"
            >
              <div
                class="rs-panel-body rs-panel-body-fill"
                role="region"
              >
                <p
                  class="_pet-info__created-at_1e6e72"
                >
                  Created at: 
                  <strong>
                    14/01/2023
                  </strong>
                </p>
                <div
                  class="_pet-info__photo_1e6e72"
                  style="background-image: url(test-photo.png);"
                />
                <h3
                  class="_pet-info__name_1e6e72"
                >
                  Test name
                </h3>
                <h4
                  class="_pet-info__age_1e6e72"
                >
                  Test age
                </h4>
                <h6
                  class="_pet-info__breed_1e6e72"
                >
                  Test breed
                </h6>
                <div
                  class="_pet-info__text-block_1e6e72"
                >
                  <div
                    aria-orientation="horizontal"
                    class="rs-divider rs-divider-horizontal rs-divider-with-text"
                    role="separator"
                  >
                    <span
                      class="rs-divider-inner-text"
                    >
                      Information
                    </span>
                  </div>
                  <p
                    class="_pet-info__information_1e6e72"
                  >
                    Test information
                  </p>
                  <div
                    aria-orientation="horizontal"
                    class="rs-divider rs-divider-horizontal rs-divider-with-text"
                    role="separator"
                  >
                    <span
                      class="rs-divider-inner-text"
                    >
                      Diet
                    </span>
                  </div>
                  <p
                    class="_pet-info__diet_1e6e72"
                  >
                    Test diet
                  </p>
                  <div
                    aria-orientation="horizontal"
                    class="rs-divider rs-divider-horizontal rs-divider-with-text"
                    role="separator"
                  >
                    <span
                      class="rs-divider-inner-text"
                    >
                      Diseases
                    </span>
                  </div>
                  <p
                    class="_pet-info__diseases_1e6e72"
                  >
                    Test diseases
                  </p>
                </div>
                <div
                  class="_pet-info__buttons_1e6e72 rs-btn-group rs-btn-group-lg rs-btn-group-justified"
                  role="group"
                >
                  <button
                    aria-describedby="control-id-hover"
                    class="rs-btn rs-btn-primary rs-btn-violet rs-btn-lg"
                    data-testid="back-button"
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
                        d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"
                      />
                    </svg>
                       Back
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
                    class="rs-btn rs-btn-primary rs-btn-blue rs-btn-lg"
                    data-testid="edit-button"
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
                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 5.63l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 000-1.41z"
                      />
                    </svg>
                       Edit
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
                    class="rs-btn rs-btn-primary rs-btn-orange rs-btn-lg"
                    data-testid="mark-unmark-button"
                    type="button"
                  >
                    <svg
                      data-testid="mark-button"
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
                       Mark
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
                    class="rs-btn rs-btn-primary rs-btn-red rs-btn-lg"
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
                       Delete
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
    `);
  });

  it("should have passed pet on the page", () => {
    const { container, getByText, getByTestId } = render(
      <PetInfo
        {...mockPetData}
        backHandle={noop}
        editHandle={noop}
        markHandle={noop}
        deleteHandle={noop}
      />
    );

    const photo = container.querySelector("[class*=pet-info__photo]");

    const formattedDate = formatDate(mockPetData.createdAt);

    expect(photo).toHaveStyle(`background-image: url(${mockPetData.photo})`);
    expect(getByText(mockPetData.name)).toBeInTheDocument();
    expect(getByText(mockPetData.age)).toBeInTheDocument();
    expect(getByText(mockPetData.information)).toBeInTheDocument();
    expect(getByText(mockPetData.breed)).toBeInTheDocument();
    expect(getByText(mockPetData.diet)).toBeInTheDocument();
    expect(getByText(mockPetData.diseases)).toBeInTheDocument();
    expect(getByText(formattedDate)).toBeInTheDocument();
    expect(getByTestId("mark-button")).toBeInTheDocument();
  });

  it("should click buttons", () => {
    const backHandle = vi.fn();
    const editHandle = vi.fn();
    const markHandle = vi.fn();
    const deleteHandle = vi.fn();

    const { getByTestId } = render(
      <PetInfo
        {...mockPetData}
        backHandle={backHandle}
        editHandle={editHandle}
        markHandle={markHandle}
        deleteHandle={deleteHandle}
      />
    );

    fireEvent.click(getByTestId("back-button"));
    expect(backHandle).toHaveBeenCalledTimes(1);

    fireEvent.click(getByTestId("edit-button"));
    expect(editHandle).toHaveBeenCalledTimes(1);

    fireEvent.click(getByTestId("mark-unmark-button"));
    expect(markHandle).toHaveBeenCalledTimes(1);

    fireEvent.click(getByTestId("delete-button"));
    expect(deleteHandle).toHaveBeenCalledTimes(1);
  });
});
