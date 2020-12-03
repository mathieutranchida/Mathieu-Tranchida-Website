import React from "react";
import styled from "styled-components";
import { Image } from "cloudinary-react";

import COLORS from "../../../../constants";

import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";

const AdminProduct = ({
  imageName,
  imageSrc,
  athlete,
  location,
  project,
  imageType,
  imageFormat,
  clientWarning,
  tag,
  _id,
}) => {
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <Image cloudName="dldqebddc" publicId={imageSrc} height="165" />
        </ImageWrapper>
        <InfoWrapper>
          <LeftColumn>
            <Type>Title:</Type>
            <Type>Athlete:</Type>
            <Type>Location:</Type>
            <Type>Project:</Type>
            <Type>Type:</Type>
            <Type>Format:</Type>
            {/* <Type>Note:</Type> */}
          </LeftColumn>
          <RightColumn>
            <Content>{imageName}</Content>
            <Content>{athlete ? athlete : "N/A"}</Content>
            <Content>{location ? location : "N/A"}</Content>
            <Content>{project ? project : "N/A"}</Content>
            <Content>{imageType ? imageType : "N/A"}</Content>
            <Content>{imageFormat ? imageFormat : "N/A"}</Content>
            {/* <Content>{clientWarning ? clientWarning : "N/A"}</Content> */}
          </RightColumn>
        </InfoWrapper>
        <ActionWrapper>
          <ButtonEdit _id={_id} />
          <ButtonDelete _id={_id} />
        </ActionWrapper>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  border: 1px solid ${COLORS.grey};
  padding-top: 20px;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  padding: 15px 25px 10px 25px;
`;

const LeftColumn = styled.div`
  margin-right: 15px;
`;

const Type = styled.div`
  font-weight: 400;
  font-size: 11pt;
`;

const RightColumn = styled.div``;

const Content = styled.div`
  font-weight: 200;
  font-size: 11pt;
`;

const ActionWrapper = styled.div`
  padding: 0px 15px 15px 25px;
  display: flex;
  justify-content: right;
  align-items: center;
  float: right;
`;

const Button = styled.button`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-left: 5px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`;

export default AdminProduct;
