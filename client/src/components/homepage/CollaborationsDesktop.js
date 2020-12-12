import React from "react";
import styled from "styled-components";

import logo686 from "../../assets/collaborations/686.png";
import arcteryx from "../../assets/collaborations/arcteryx.png";
import equipe from "../../assets/collaborations/equipe.png";
import fswl from "../../assets/collaborations/fswl.png";
import if3 from "../../assets/collaborations/if3.png";
import psicobloc from "../../assets/collaborations/psicobloc.png";

const CollaborationsDesktop = () => {
  return (
    <>
      <Wrapper>
        <Title>Clients & Publications</Title>
        <Main>
          <Collaborations>
            <Div>
              <A
                href="https://ca.686.com/blogs/news/gfs-camp-recap-with-laurent-de-martin?utm_source=ebay&utm_medium=affiliate&utm_campaign=generic&clickId=3048279547"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={logo686} alt="Logo 686" />
              </A>
              <A
                href="https://www.facebook.com/arcteryxmontreal/media_set/?set=a.2269975689763053"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={arcteryx} alt="Logo Arc'teryx" />
              </A>
              <A
                href="https://www.lequipe.fr/Adrenaline/Ski-freeride/Actualites/Couloir-itineraire-domaine-piste-preferes-le-val-d-isere-de-leo-taillefer/998758"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={equipe} alt="Logo L'équipe" />
              </A>
            </Div>
            <Div>
              <A
                href="https://fromswitzerlandwithlove.ch/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={fswl} alt="Logo From Switzerland With Love" />
              </A>
              <A
                href="https://www.facebook.com/media/set/?set=a.10156832575509189&type=3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={if3} alt="Logo International Freeski Festival" />
              </A>
              <A
                href="https://www.instagram.com/p/B1odeuHDAog/?utm_source=ig_web_copy_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={psicobloc} alt="Logo Psicobloc" />
              </A>
            </Div>
          </Collaborations>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 190px auto 125px auto;
  @media (max-width: 1200px) {
    margin: 150px auto 75px auto;
  }
  @media (max-width: 1100px) {
    margin: 150px auto 75px auto;
  }
  @media (max-width: 868px) {
    margin: 100px auto 75px auto;
  }
  @media (max-width: 666px) {
    margin: 65px auto 75px auto;
  }
`;

const Title = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 15pt;
  margin-bottom: 50px;
  @media (max-width: 529px) {
    margin: 0px 0px 35px;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Collaborations = styled.div`
  max-width: 1000px;
  margin: 0px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 1200px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 720px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 325px;
  }
  @media (max-width: 529px) {
    margin: 0px 0px;
    width: 300px;
  }
  @media (max-width: 420px) {
    width: 275px;
  }
  @media (max-width: 380px) {
    width: 255px;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  @media (max-width: 1200px) {
    margin: 0px 0px 25px 0px;
    width: 600px;
  }
  @media (max-width: 720px) {
    margin: 0px 0px 0px 0px;
    flex-direction: column;
    height: 400px;
    width: 100px;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-self: center;
  }
  @media (max-width: 529px) {
    margin: 0px 0px;
    height: 400px;
  }
  @media (max-width: 420px) {
    height: 375px;
  }
  @media (max-width: 380px) {
    height: 355px;
  }
`;

const Image = styled.img`
  max-height: 100px;
  max-width: 100px;
  @media (max-width: 529px) {
    max-height: 95px;
    max-width: 95px;
  }
  @media (max-width: 420px) {
    max-height: 90px;
    max-width: 90px;
  }
`;

const A = styled.a`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 529px) {
    max-height: 95px;
    max-width: 95px;
  }
  @media (max-width: 420px) {
    max-height: 90px;
    max-width: 90px;
  }
`;

export default CollaborationsDesktop;
