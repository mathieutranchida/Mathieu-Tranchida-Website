import React, { useCallback } from "react";
import styled from "styled-components";
import SideBar from "../../SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useDropzone } from "react-dropzone";
import { Image } from "cloudinary-react";

import COLORS from "../../../../constants";

import {
  updateAddProductImageName,
  updateAddProductImageSrc,
  updateAddProductAthlete,
  updateAddProductLocation,
  updateAddProductProject,
  updateAddProductImageType,
  updateAddProductImageFormat,
  updateAddProductClientWarning,
  updateAddProductTag,
  clearAddProduct,
} from "../../../../redux/actions";
import AdminHeader from "../../adminHeader";

const AddProduct = () => {
  const dispatch = useDispatch();

  const newProduct = useSelector((state) => state.addProductReducer);

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
      console.log(data);
      dispatch(updateAddProductImageSrc(data.public_id));
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accepts: "image/*",
    multiple: false,
  });

  const handleCreateProduct = () => {
    console.log(newProduct);
    fetch("/post-product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
  };

  return (
    <>
      <Wrapper>
        <SideBar />
        <MainWrapper>
          <Header>
            <Section>Add a product to the store</Section>
            <AdminHeader />
          </Header>
          <FormWrapper>
            <Main>
              <InputDiv>
                <Input
                  placeholder="Add image title..."
                  required
                  type="text"
                  onChange={(ev) => {
                    dispatch(updateAddProductImageName(ev.target.value));
                  }}
                />
                <Type>
                  Image title <Required>*</Required>
                </Type>
              </InputDiv>
              <InputDiv>
                <Input
                  placeholder="Add athlete name..."
                  type="text"
                  onChange={(ev) => {
                    dispatch(updateAddProductAthlete(ev.target.value));
                  }}
                />
                <Type>Athlete</Type>
              </InputDiv>
              <InputDiv>
                <Input
                  placeholder="Add location..."
                  type="text"
                  onChange={(ev) => {
                    dispatch(updateAddProductLocation(ev.target.value));
                  }}
                />
                <Type>Location</Type>
              </InputDiv>
              <InputDiv>
                <Input
                  placeholder="Add project name..."
                  type="text"
                  onChange={(ev) => {
                    dispatch(updateAddProductProject(ev.target.value));
                  }}
                />
                <Type>Project</Type>
              </InputDiv>
              <InputDiv>
                <Select
                  name="image type"
                  onChange={(ev) => {
                    dispatch(updateAddProductImageType(ev.target.value));
                  }}
                >
                  <Option value="">Choose type</Option>
                  <Option value="action">Action</Option>
                  <Option value="landscape">Landscape</Option>
                  <Option value="lifestyle">Lifestyle</Option>
                </Select>
                <Type>Image type</Type>
              </InputDiv>
              <InputDiv>
                <Select
                  name="image format"
                  required
                  onChange={(ev) => {
                    dispatch(updateAddProductImageFormat(ev.target.value));
                  }}
                >
                  <Option value="">Choose format</Option>
                  <Option value="1x1">1 x 1</Option>
                  <Option value="4x5">4 x 5</Option>
                  <Option value="2x3">2 x 3</Option>
                </Select>
                <Type>
                  Image format <Required>*</Required>
                </Type>
              </InputDiv>
              <InputDiv>
                <Box
                  placeholder="Add client warning..."
                  onChange={(ev) => {
                    dispatch(updateAddProductClientWarning(ev.target.value));
                  }}
                />
                <Type>Client warning</Type>
              </InputDiv>
              <InputDiv>
                <Box
                  placeholder="Add tags..."
                  onChange={(ev) => {
                    dispatch(updateAddProductTag(ev.target.value));
                  }}
                />
                <Type>Image tags</Type>
              </InputDiv>
            </Main>
            {newProduct.imageSrc ? (
              <Image
                cloudName="dldqebddc"
                publicId={newProduct.imageSrc}
                height="574"
              />
            ) : (
              <ImageUploadWrapper {...getRootProps()}>
                <Dropzone {...getInputProps()} />
                <InstructionsWrapper>
                  <Instructions>Drop photo here</Instructions>
                  <Instructions>or</Instructions>
                  <Instructions> Click here to add photo</Instructions>
                </InstructionsWrapper>
              </ImageUploadWrapper>
            )}
          </FormWrapper>
          <ConfirmationWrapper>
            {newProduct.imageSrc && <ClearButton>Delete photo</ClearButton>}
            <ClearButton
              onClick={() => {
                dispatch(clearAddProduct());
                document.location.reload();
              }}
            >
              Clear
            </ClearButton>
            <AddButton
              onClick={() => {
                handleCreateProduct();
              }}
            >
              Add to store
            </AddButton>
          </ConfirmationWrapper>
        </MainWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
`;

const MainWrapper = styled.div`
  width: calc(100vw - 300px);
`;

const Header = styled.div`
  border-bottom: 1px grey solid;
  border-image-source: linear-gradient(270deg, white 5%, grey 65%, grey 100%);
  border-image-slice: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;

const Section = styled.div`
  font-weight: 500;
`;

const FormWrapper = styled.div`
  margin: 25px 25px 0px 25px;
  display: flex;
`;

const ConfirmationWrapper = styled.div`
  display: flex;
  align-items: center;
  float: right;
  margin: 0px 25px 0px 25px;
`;

const Main = styled.div`
  margin-right: 25px;
`;

const InputDiv = styled.div`
  margin-bottom: 12px;
`;

const Type = styled.div`
  font-weight: 200;
  font-size: 11pt;
`;

const Input = styled.input`
  width: 300px;
  border-bottom: 1px solid ${COLORS.grey};
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  font-size: 11pt;
  font-family: halyard-display, sans-serif;
  font-weight: 300;
  padding: 2px 4px;
  outline: none;
  color: ${COLORS.black};
`;

const Box = styled.input`
  width: 300px;
  height: 100px;
  border: 1px solid ${COLORS.grey};
  background-color: transparent;
  font-size: 11pt;
  font-family: halyard-display, sans-serif;
  font-weight: 300;
  padding: 2px 4px;
  outline: none;
  color: ${COLORS.black};
`;

const Select = styled.select`
  width: 125px;
  border-bottom: 1px solid ${COLORS.grey};
  border-top: none;
  border-left: none;
  border-right: none;
  background-color: transparent;
  font-size: 11pt;
  font-family: halyard-display, sans-serif;
  font-weight: 300;
  padding: 2px 4px;
  outline: none;
  color: ${COLORS.black};
`;

const Option = styled.option``;

const Required = styled.span`
  font-weight: 400;
  color: red;
`;

const ImageUploadWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 574px;
  width: 100%;
  border: 2px dashed grey;
  color: ${COLORS.grey};
  font-weight: 300;
  outline: none;
  cursor: pointer;
  &:hover {
    border: 2px solid ${COLORS.grey};
  }
`;

const Dropzone = styled.input``;

const Instructions = styled.div``;

const InstructionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ClearButton = styled.button`
  margin-left: 15px;
  background-color: transparent;
  border: red 1px solid;
  color: red;
  padding: 15px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    background-color: red;
    color: white;
  }
`;

const AddButton = styled.button`
  margin-left: 15px;
  background-color: transparent;
  border: green 1px solid;
  color: green;
  padding: 15px;
  cursor: pointer;
  margin-bottom: 25px;
  &:hover {
    background-color: green;
    color: white;
  }
`;

export default AddProduct;
