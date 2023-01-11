import { render } from "@testing-library/react";

import AnimatedWrapper from "./AnimatedWrapper";

describe("AnimatedWrapper", () => {
  it("renders correctly", () => {
    const { container } = render(<AnimatedWrapper>Test text</AnimatedWrapper>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          style="opacity: 0;"
        >
          Test text
        </div>
      </div>
    `);
  });
});
