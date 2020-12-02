import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Image } from "cloudinary-react";
import styled from "styled-components";

// Max upload size is 10mb

const PhotoDropzone = () => {
  // delete this once the server for products is setup
  const [uploadedFiles, setUploadedFiles] = useState([
    {
      asset_id: "007a76354eccc52cdb16e035d963af09",
      public_id: "mraihkkhuxslfeoujefx",
      version: 1606923128,
      version_id: "78b6651052a2a6e25895588841a93a9e",
      signature: "eb045620646c2ea255b76246514557cddc245428",
      width: 2736,
      height: 3648,
      format: "jpg",
      resource_type: "image",
      created_at: "2020-12-02T15:32:08Z",
      tags: [],
      bytes: 1462113,
      type: "upload",
      etag: "7f0d63085a11147860a57cd986546a7d",
      placeholder: false,
      url:
        "http://res.cloudinary.com/dldqebddc/image/upload/v1606923128/mraihkkhuxslfeoujefx.jpg",
      secure_url:
        "https://res.cloudinary.com/dldqebddc/image/upload/v1606923128/mraihkkhuxslfeoujefx.jpg",
      original_filename: "IMG_20200110_154255_024",
    },
  ]);
  // end delete here

  // important function used for upload
  const onDrop = useCallback((acceptedFiles) => {
    const url = "https://api.cloudinary.com/v1_1/dldqebddc/upload";

    acceptedFiles.forEach(async (acceptedFile) => {
      const formData = new FormData();
      formData.append("file", acceptedFile);
      formData.append("upload_preset", "s2wgg0f6");

      const response = await fetch(url, {
        method: "post",
        body: formData,
      });

      const data = await response.json();

      setUploadedFiles((old) => [...old, data]);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accepts: "image/*",
    multiple: false,
  });

  return (
    <>
      <Wrapper {...getRootProps()}>
        <Input {...getInputProps()} />
        Dropzone
      </Wrapper>
      <ul>
        {uploadedFiles.map((file) => (
          <li key={file.public_id}>
            {file.public_id}
            <Image
              cloudName="dldqebddc"
              publicId={file.public_id}
              width="300"
              crop="scale"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 500px;
  margin: 50px;
  border: 2px dashed grey;
  &:hover {
    border: 2px solid grey;
  }
`;

const Input = styled.input``;

export default PhotoDropzone;
