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
            <a
              href="https://ca.686.com/blogs/news/gfs-camp-recap-with-laurent-de-martin?utm_source=ebay&utm_medium=affiliate&utm_campaign=generic&clickId=3048279547"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={logo686} alt="Logo 686" />
            </a>
            <a
              href="https://www.facebook.com/arcteryxmontreal/media_set/?set=a.2269975689763053"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={arcteryx} alt="Logo Arc'teryx" />
            </a>
            <a
              href="https://www.lequipe.fr/Adrenaline/Ski-freeride/Actualites/Couloir-itineraire-domaine-piste-preferes-le-val-d-isere-de-leo-taillefer/998758"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={equipe} alt="Logo L'équipe" />
            </a>
            <a
              href="https://fromswitzerlandwithlove.ch/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={fswl} alt="Logo From Switzerland With Love" />
            </a>
            <a
              href="https://www.facebook.com/media/set/?set=a.10156832575509189&type=3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={if3} alt="Logo International Freeski Festival" />
            </a>
            <a
              href="https://www.instagram.com/p/B1odeuHDAog/?utm_source=ig_web_copy_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={psicobloc} alt="Logo Psicobloc" />
            </a>
          </Collaborations>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 190px auto 125px auto;
`;

const Title = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-weight: 900;
  font-family: sweet-sans-pro, sans-serif;
  font-size: 15pt;
  margin-bottom: 50px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Collaborations = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Image = styled.img`
  max-height: 100px;
  max-width: 100px;
`;

export default CollaborationsDesktop;
