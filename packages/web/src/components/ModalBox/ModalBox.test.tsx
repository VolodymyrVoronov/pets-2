/* eslint-disable no-irregular-whitespace */
import { vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import noop from "../../helpers/noop";

import ModalBox from "./ModalBox";

describe("ModalBox", () => {
  it("renders correctly", () => {
    const { baseElement } = render(
      <ModalBox open saveHandle={noop} closeHandle={noop}>
        Test
      </ModalBox>
    );

    expect(baseElement).toMatchInlineSnapshot(`
        <body
          class="rs-modal-open rs-modal-has-backdrop"
          style=""
        >
          <div />
          <div
            aria-hidden="true"
            class="rs-modal-backdrop rs-anim-fade rs-anim-in"
          />
          <div
            class="rs-modal-wrapper"
            tabindex="-1"
          >
            <div
              aria-labelledby="dialog-:r0:-title"
              aria-modal="true"
              class="rs-modal-lg rs-anim-bounce-in rs-modal"
              id="dialog-:r0:"
              role="dialog"
              style="display: block;"
            >
              <div
                class="rs-modal-dialog"
                role="document"
              >
                <div
                  class="rs-modal-content"
                >
                  <div
                    class="rs-modal-header"
                  >
                    <span
                      aria-label="Close"
                      class="rs-modal-header-close rs-btn-close"
                      role="button"
                      title="Close"
                    >
                      <svg
                        aria-hidden="true"
                        aria-label="close"
                        class="rs-icon"
                        data-category="application"
                        fill="currentColor"
                        focusable="false"
                        height="1em"
                        viewBox="0 0 16 16"
                        width="1em"
                      >
                        <path
                          d="M2.784 2.089l.069.058 5.146 5.147 5.146-5.147a.5.5 0 01.765.638l-.058.069L8.705 8l5.147 5.146a.5.5 0 01-.638.765l-.069-.058-5.146-5.147-5.146 5.147a.5.5 0 01-.765-.638l.058-.069L7.293 8 2.146 2.854a.5.5 0 01.638-.765z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div
                    class="rs-modal-body"
                  >
                    Test
                  </div>
                  <div
                    class="rs-modal-footer"
                  >
                    <div
                      class="_modal-box__buttons_846a67 rs-btn-group rs-btn-group-lg rs-btn-group-justified"
                      role="group"
                    >
                      <button
                        aria-describedby="control-id-hover"
                        class="rs-btn rs-btn-primary rs-btn-orange rs-btn-lg"
                        data-testid="close-button"
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
                            d="M0 0h24v24H0V0z"
                            fill="none"
                            opacity=".87"
                          />
                          <path
                            d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"
                          />
                        </svg>
                           Cancel
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
                        class="rs-btn rs-btn-primary rs-btn-green rs-btn-lg"
                        data-testid="confirm-button"
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
                            d="M17 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"
                          />
                        </svg>
                           Save
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
        </body>
      `);
  });

  it("should click buttons", () => {
    const closeHandle = vi.fn();
    const saveHandle = vi.fn();

    const { getByTestId } = render(
      <ModalBox open saveHandle={saveHandle} closeHandle={closeHandle}>
        Test
      </ModalBox>
    );

    fireEvent.click(getByTestId("close-button"));
    expect(closeHandle).toHaveBeenCalledTimes(1);

    fireEvent.click(getByTestId("confirm-button"));
    expect(saveHandle).toHaveBeenCalledTimes(1);
  });
});
