import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import SideBar from "../../SideBar";
import AdminHeader from "../../adminHeader/index";

const AllEmails = () => {
  const emails = useSelector(
    (state) => state.newsletterReducer.emails && state.newsletterReducer.emails
  );
  return (
    <>
      {emails ? (
        <Wrapper>
          <SideBar />
          <MainWrapper>
            <Header>
              <Section>See all newsletter emails</Section>
              <AdminHeader />
            </Header>
            <EmailWrapper>
              <Title>Email list:</Title>
              {emails &&
                emails.map((email) => (
                  <Email key={email._id}>{email.email}</Email>
                ))}
            </EmailWrapper>
          </MainWrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <SideBar />
          <MainWrapper>
            <Header>
              <Section>See all newsletter emails</Section>
              <AdminHeader />
            </Header>
          </MainWrapper>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
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

const EmailWrapper = styled.div`
  margin: 20px 25px;
`;

const Title = styled.div`
  text-transform: uppercase;
  font-size: 14pt;
  font-weight: 900;
  font-family: sweet-sans-pro, sans-serif;
  margin-bottom: 5px;
`;

const Email = styled.div`
  text-indent: 15px;
`;

export default AllEmails;
