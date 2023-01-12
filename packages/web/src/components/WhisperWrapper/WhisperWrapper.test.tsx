import { render, waitFor, fireEvent } from "@testing-library/react";

import WhisperWrapper from "./WhisperWrapper";

describe("WhisperWrapper", () => {
  it("renders correctly when not hover", () => {
    const { container } = render(
      <WhisperWrapper text="Test text">
        <p>Test text</p>
      </WhisperWrapper>
    );

    expect(container).toMatchInlineSnapshot(`
      <div>
        <p
          aria-describedby="control-id-hover"
        >
          Test text
        </p>
      </div>
    `);
  });

  it("renders correctly when hover", async () => {
    const { baseElement, container } = render(
      <WhisperWrapper text="Test test test">
        <div>Test</div>
      </WhisperWrapper>
    );

    fireEvent.mouseOver(container.querySelector("div") as HTMLElement);

    await waitFor(() => {
      expect(baseElement).toMatchInlineSnapshot(`
        <body>
          <div>
            <div
              aria-describedby="control-id-hover"
            >
              Test
            </div>
          </div>
          <div
            class="rs-anim-fade rs-anim-in placement-top rs-tooltip rs-tooltip-arrow"
            id="control-id-hover"
            role="tooltip"
            style="left: 0px; top: 0px;"
          >
            <p>
              Test test test
            </p>
          </div>
        </body>
      `);
    });
  });

  it("renders correctly tag p correctly", () => {
    const { container } = render(
      <WhisperWrapper text="Test test test" tag="p">
        <div>Test</div>
      </WhisperWrapper>
    );

    fireEvent.mouseOver(container.querySelector("div") as HTMLElement);

    const p = document.querySelector("p");

    expect(p).toBeInTheDocument();
  });

  it("renders correctly tag h1 correctly", () => {
    const { container } = render(
      <WhisperWrapper text="Test test test" tag="h1">
        <div>Test</div>
      </WhisperWrapper>
    );

    fireEvent.mouseOver(container.querySelector("div") as HTMLElement);

    const h1 = document.querySelector("h1");

    expect(h1).toBeInTheDocument();
  });

  it("renders correctly tag h2 correctly", () => {
    const { container } = render(
      <WhisperWrapper text="Test test test" tag="h2">
        <div>Test</div>
      </WhisperWrapper>
    );

    fireEvent.mouseOver(container.querySelector("div") as HTMLElement);

    const h2 = document.querySelector("h2");

    expect(h2).toBeInTheDocument();
  });

  it("renders correctly tag h3 correctly", () => {
    const { container } = render(
      <WhisperWrapper text="Test test test" tag="h3">
        <div>Test</div>
      </WhisperWrapper>
    );

    fireEvent.mouseOver(container.querySelector("div") as HTMLElement);

    const h3 = document.querySelector("h3");

    expect(h3).toBeInTheDocument();
  });

  it("renders correctly tag h4 correctly", () => {
    const { container } = render(
      <WhisperWrapper text="Test test test" tag="h4">
        <div>Test</div>
      </WhisperWrapper>
    );

    fireEvent.mouseOver(container.querySelector("div") as HTMLElement);

    const h4 = document.querySelector("h4");

    expect(h4).toBeInTheDocument();
  });

  it("renders correctly tag h5 correctly", () => {
    const { container } = render(
      <WhisperWrapper text="Test test test" tag="h5">
        <div>Test</div>
      </WhisperWrapper>
    );

    fireEvent.mouseOver(container.querySelector("div") as HTMLElement);

    const h5 = document.querySelector("h5");

    expect(h5).toBeInTheDocument();
  });

  it("renders correctly tag h6 correctly", () => {
    const { container } = render(
      <WhisperWrapper text="Test test test" tag="h6">
        <div>Test</div>
      </WhisperWrapper>
    );

    fireEvent.mouseOver(container.querySelector("div") as HTMLElement);

    const h6 = document.querySelector("h6");

    expect(h6).toBeInTheDocument();
  });
});
