import { render } from "@testing-library/react";

import TextArea from "./TextArea";

describe("TextArea", () => {
  it("renders correctly", () => {
    const { container } = render(<TextArea />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <textarea
          class="rs-input"
          rows="5"
          type="text"
        />
      </div>
    `);
  });
});
