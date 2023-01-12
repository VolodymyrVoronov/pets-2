import { vi } from "vitest";
import { fireEvent, render, waitFor } from "@testing-library/react";

import PhotoUploader from "./PhotoUploader";

const mockData = {
  photo: "test-photo-string",
};

const file = new File(["test-photo"], "test-photo.png", {
  type: "image/png",
});

describe("Form", () => {
  it("renders correctly", () => {
    const { container } = render(<PhotoUploader />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="_uploader_2c9084"
        >
          <div
            aria-orientation="horizontal"
            class="rs-divider rs-divider-horizontal rs-divider-with-text"
            role="separator"
          >
            <span
              class="rs-divider-inner-text"
            >
              Photo upload
            </span>
          </div>
          <input
            accept=".jpeg, .png, .jpg"
            aria-describedby="control-id-hover"
            class="_uploader__input_2c9084"
            data-testid="photo-uploader"
            id="photo"
            name="photo"
            type="file"
          />
          <div
            aria-orientation="horizontal"
            class="rs-divider rs-divider-horizontal rs-divider-with-text"
            role="separator"
          >
            <span
              class="rs-divider-inner-text"
            >
              Photo preview
            </span>
          </div>
          <div
            class="_uploader__uploaded-photo_2c9084"
            style="background-image: url(/src/assets/images/placeholder-01.png);"
          />
        </div>
      </div>
    `);
  });

  it("should have photo on the page", () => {
    const { container } = render(<PhotoUploader photo={mockData.photo} />);

    const photo = container.querySelector("[class*=uploader__uploaded-photo]");

    expect(photo).toHaveStyle(`background-image: url(${mockData.photo})`);
  });

  it("should upload photo", async () => {
    const { getByTestId } = render(<PhotoUploader />);

    const photoUploader = getByTestId("photo-uploader") as HTMLInputElement;

    await waitFor(() => {
      fireEvent.change(photoUploader, {
        target: { files: [file] },
      });
    });

    expect(photoUploader.files).toHaveLength(1);
  });

  it("should call func", async () => {
    const onPhotoUploadChange = vi.fn();

    const { getByTestId } = render(
      <PhotoUploader onUploaderChange={onPhotoUploadChange} />
    );

    const photoUploader = getByTestId("photo-uploader") as HTMLInputElement;

    await waitFor(() => {
      fireEvent.change(photoUploader, {
        target: { files: [file] },
      });
    });

    await waitFor(() => {
      expect(onPhotoUploadChange).toHaveBeenCalledTimes(1);
    });
  });
});
