import React from "react";
import styled from "styled-components";
import Carousel from "../Carousel";
import Button from "../Button";
import { ThemeProvider } from "styled-components";
import { dark } from "../../styles/Themes";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70em) {
    width: 80%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }

  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transformation: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }

  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

// const SubTextLight = styled.p`
//   font-size: ${(props) => props.theme.fontmd};
//   color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.6)`};
//   align-self: flex-start;
//   width: 80%;
//   margin: 1rem auto;
//   font-weight: 400;

//   @media (max-width: 64em) {
//     width: 100%;
//     text-align: center;
//     font-size: ${(props) => props.theme.fontsm};
//   }

//   @media (max-width: 40em) {
//     font-size: ${(props) => props.theme.fontsm};
//   }

//   @media (max-width: 30em) {
//     font-size: ${(props) => props.theme.fontxs};
//   }
// `;

const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  align-self: flex-start;

  @media (max-width: 64em) {
    width: 100%;

    button {
      margin: 0 auto;
    }
  }
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Box>
          <Title>
            Welcome To The <br /> FLuFFiverse! 
          </Title>
          <SubText>
           News: On April 1st, the digital realm gets 144 times fluffier!<br></br>
          That's right, we're dropping FLuFF Rocks Breaking- not your grandma's garden rocks,<br></br>
          but the coolest, meme-worthy NFTs this side of the blockchain.<br></br>

          </SubText>
          <SubText>
         What's the FLuFF all about?
         <br></br>
         Mint Alert: Circle April 1st with a big, fat, rainbow marker. It's FLuFF Day, baby!<br></br>
         Exclusive Club: Only 144 FLuFF Rocks. Why 144? Because it's 12 squared, and that's just mathematically adorable.<br></br>
         </SubText>
          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <Button text="JOIN OUR DISCORD" link="https://discord.gg/kbPcsDzFtU" />
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
