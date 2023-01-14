import { vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import Form from "./Form";

const mockFormData = {
  name: "Test Name",
  age: "1",
  breed: "Test Breed",
  diet: "Test Diet",
  diseases: "Test Diseases",
  information: "Test Information",
};

describe("Form", () => {
  it("renders correctly", () => {
    const { container } = render(<Form />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <form
          class="rs-form rs-form-vertical rs-form-fluid"
        >
          <div
            class="rs-form-group"
            role="group"
          >
            <label
              class="rs-form-control-label"
              for="name"
              id="name-control-label"
            >
              Name
            </label>
            <div
              class="rs-form-control rs-form-control-wrapper"
            >
              <input
                aria-describedby="name-help-text"
                aria-labelledby="name-control-label"
                class="rs-input"
                id="name"
                name="name"
                type="text"
                value=""
              />
            </div>
            <span
              class="rs-form-help-text"
              id="name-help-text"
            >
              Required
            </span>
          </div>
          <div
            class="rs-form-group"
            role="group"
          >
            <label
              class="rs-form-control-label"
              for="age"
              id="age-control-label"
            >
              Age
            </label>
            <div
              class="rs-form-control rs-form-control-wrapper"
            >
              <input
                aria-describedby="age-help-text"
                aria-labelledby="age-control-label"
                class="rs-input"
                id="age"
                max="100"
                min="0"
                name="age"
                type="number"
                value=""
              />
            </div>
            <span
              class="rs-form-help-text"
              id="age-help-text"
            >
              Required
            </span>
          </div>
          <div
            class="rs-form-group"
            role="group"
          >
            <label
              class="rs-form-control-label"
              for="breed"
              id="breed-control-label"
            >
              Breed
            </label>
            <div
              class="rs-form-control rs-form-control-wrapper"
            >
              <input
                aria-describedby="breed-help-text"
                aria-labelledby="breed-control-label"
                class="rs-input"
                id="breed"
                name="breed"
                type="text"
                value=""
              />
            </div>
          </div>
          <div
            class="rs-form-group"
            role="group"
          >
            <label
              class="rs-form-control-label"
              for="diet"
              id="diet-control-label"
            >
              Diet
            </label>
            <div
              class="rs-form-control rs-form-control-wrapper"
            >
              <textarea
                aria-describedby="diet-help-text"
                aria-labelledby="diet-control-label"
                class="rs-input"
                id="diet"
                name="diet"
                rows="5"
                type="text"
              />
            </div>
          </div>
          <div
            class="rs-form-group"
            role="group"
          >
            <label
              class="rs-form-control-label"
              for="diseases"
              id="diseases-control-label"
            >
              Diseases
            </label>
            <div
              class="rs-form-control rs-form-control-wrapper"
            >
              <textarea
                aria-describedby="diseases-help-text"
                aria-labelledby="diseases-control-label"
                class="rs-input"
                id="diseases"
                name="diseases"
                rows="5"
                type="text"
              />
            </div>
          </div>
          <div
            class="rs-form-group"
            role="group"
          >
            <label
              class="rs-form-control-label"
              for="information"
              id="information-control-label"
            >
              Information
            </label>
            <div
              class="rs-form-control rs-form-control-wrapper"
            >
              <textarea
                aria-describedby="information-help-text"
                aria-labelledby="information-control-label"
                class="rs-input"
                id="information"
                name="information"
                rows="5"
                type="text"
              />
            </div>
          </div>
        </form>
      </div>
    `);
  });

  it("should set passed data into fields", () => {
    const { getByRole } = render(<Form data={mockFormData} />);

    expect(getByRole("textbox", { name: /name/i })).toHaveValue(
      mockFormData.name
    );
    expect(getByRole("spinbutton", { name: /age/i })).toHaveValue(
      +mockFormData.age
    );
    expect(getByRole("textbox", { name: /breed/i })).toHaveValue(
      mockFormData.breed
    );
    expect(getByRole("textbox", { name: /diet/i })).toHaveValue(
      mockFormData.diet
    );
    expect(getByRole("textbox", { name: /diseases/i })).toHaveValue(
      mockFormData.diseases
    );
    expect(getByRole("textbox", { name: /information/i })).toHaveValue(
      mockFormData.information
    );
  });

  it("should have empty fields", () => {
    const { getByRole } = render(<Form />);

    expect(getByRole("textbox", { name: /name/i })).not.toHaveValue();
    expect(getByRole("spinbutton", { name: /age/i })).not.toHaveValue();
    expect(getByRole("textbox", { name: /breed/i })).not.toHaveValue();
    expect(getByRole("textbox", { name: /diet/i })).not.toHaveValue();
    expect(getByRole("textbox", { name: /diseases/i })).not.toHaveValue();
    expect(getByRole("textbox", { name: /information/i })).not.toHaveValue();
  });

  it("should call func with values", () => {
    const onFormInputsChange = vi.fn();

    const { getByRole } = render(<Form onFormChange={onFormInputsChange} />);

    const inputName = getByRole("textbox", { name: /name/i });
    const inputAge = getByRole("spinbutton", { name: /age/i });
    const inputBreed = getByRole("textbox", { name: /breed/i });
    const inputDiet = getByRole("textbox", { name: /diet/i });
    const inputDiseases = getByRole("textbox", { name: /diseases/i });
    const inputInformation = getByRole("textbox", { name: /information/i });

    fireEvent.change(inputName, { target: { value: mockFormData.name } });
    fireEvent.change(inputAge, { target: { value: mockFormData.age } });
    fireEvent.change(inputBreed, { target: { value: mockFormData.breed } });
    fireEvent.change(inputDiet, { target: { value: mockFormData.diet } });
    fireEvent.change(inputDiseases, {
      target: { value: mockFormData.diseases },
    });
    fireEvent.change(inputInformation, {
      target: { value: mockFormData.information },
    });

    expect(onFormInputsChange).toBeCalledWith(mockFormData);
  });
});
