import { ChangeEvent, memo, useState } from "react";
import { Divider } from "rsuite";

import convertToBase64 from "../../helpers/convertToBase64";

import placeholderPhoto from "../../assets/images/placeholder-01.png";

import styles from "./PhotoUploader.module.css";

interface IPhotoUploaderProps {
  data?: {
    photo: string;
  };
  onUploaderChange?: (photo: string) => void;
}

const PhotoUploader = ({
  data,
  onUploaderChange,
}: IPhotoUploaderProps): JSX.Element => {
  const [petData, setPetData] = useState({
    photo: "",
  });

  const onFileUploadChange = async (
    e: ChangeEvent<HTMLInputElement> | undefined
  ) => {
    if (e?.target && e?.target.files) {
      const file = e.target.files[0];
      const base64 = await convertToBase64(file);

      setPetData({ ...petData, photo: base64 as string });

      if (base64) {
        onUploaderChange?.(base64 as string);
      }
    }
  };

  return (
    <div className={styles.uploader}>
      <Divider>Photo upload</Divider>

      <input
        className={styles.uploader__input}
        type="file"
        name="photo"
        accept=".jpeg, .png, .jpg"
        onChange={(e) => onFileUploadChange(e)}
        id="photo"
      />

      <Divider>Photo preview</Divider>

      <div
        className={styles["uploader__uploaded-photo"]}
        style={{
          backgroundImage: `url(${
            data?.photo || petData.photo || placeholderPhoto
          })`,
        }}
      />
    </div>
  );
};

export default memo(PhotoUploader);
