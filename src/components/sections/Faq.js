import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transformation: uppercase;
  color: ${(props) => props.theme.body};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.cauroselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
  }

  & > *::last-child {
    & > *::first-child {
      margin-top: 0;
    }
  }
`;

const Box = styled.div`
  width: 45%;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
      // markers: true,
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="faq">
      <Title>FAQ</Title>
      <Container>
        <Box>
        <Accordion title="Where do I get a fluff rock?">
        You can get them from a hel.io presale link

          </Accordion>  
            <Accordion title="What are The Goodies?">
            -JoJo's Copy Trading: Ever wanted to trade like a pro without actually being one? Hold a FLuFF Rock, and you're in. It's like magic, but for trading.<br></br>
            -Alpha Galore: We're dropping trading tips like they're hot memes. Get ready to profit.<br></br>
            -Community Driven: Dive into our cozy, exclusive community where every member is a gem. It's all about quality, not quantity. Here, you're not just another member; you're family. Expect quests for $FLUFF tokens, endless memes, and friendships. It's the small community vibe that makes every moment memorable.<br></br>
            -Save the Puppers: Part of our dough goes to saving endangered red wolves. Because FLuFFs care<br></br>
            -Did you miss out on RSICs ? No problem, we’ve got you covered! At fluff rocks we are building our token on bitcoin runes <br></br>
          </Accordion>
          <Accordion title="What happens on April 1st? ">
            You will be able to trade in the tokens you e received from fluff rocks to runes
          </Accordion>
        </Box>
        <Box>
          <Accordion title="What do I do if I have any questions or suggestions? ">
            Just visit our discord and open a ticket 
          </Accordion> 
         <Accordion title="Why FLuFF?">
         Because where else can you get trading insights, become part of an exclusive community, AND save wolves all at the same time? Only in the FLuFFiverse. It’s fluffy rocks, meme dreams, and everything in between - all on bitcoin runes! <br></br>
          Stay tuned, stay fluffy, and remember – in the world of FLuFF, everything is better with a little fur on it. 🐶🐾
          </Accordion>
          <Accordion title="What about saving the wolves? ">
           We will be allocating a portion of the mint funds to this. More information will be divulged in the discord on launch day or shortly thereafter
          </Accordion>
          <Accordion title="What are bitcoin runes and where can I read about them?  ">
          You can find all the information you need in our discord in the runes channel 
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
