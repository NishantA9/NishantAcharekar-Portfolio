import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import HeroImg from "../../images/fe.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";
import { headContentAnimation,  headTextAnimation } from "../../utils/motion";
import StarCanvas from "../canvas/Stars";
// import { Star } from "@mui/icons-material";

const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    z-index: 1;

    @media screen and (max-width: 960px) {
        padding: 66px 16px;
    }

    @media screen and (max-width: 640px) {
        padding: 32px 16px;
    }

    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1100px;

    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`;

const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;
    @media screen and (max-width: 960px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        gap: 6px;
        flex-direction: column;
        align-items: center;
    }
`;

const HeroRightContainer = styled.div`
    width: 100%;
    order: 2;
    display: flex;
    justify-content: end;
    @media screen and (max-width: 960px) {
        order: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 80px;
    }

    @media screen and (max-width: 640px) {
        margin-bottom: 30px;
    }
`;

const Title = styled.div`
    font-size: 50px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;

    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 960px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
`;

const TextLoop = styled.div`
    font-size: 32px;
    font-weight: 600;
    display: flex;
    gap: 12px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;

    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 960px) {
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
    }
`;

const Span = styled.div`
    cursor: pointer;
    color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 42px;
    color: ${({ theme }) => theme.text_primary + 95};

    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 960px) {
        font-size: 16px;
        line-height: 32px;
    }
`;

const ResumeButton = styled.a`
    appearance: button;
    text-decoration: none;

    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;

    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%
    );
    box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
    border-radius: 50px;
    font-size: 20px;
    font-weight: 600;

    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow: 20px 20px 60px #1f2634;
        filter: brightness(1.2);
    }

    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    }
`;

const ImgWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
    border-radius: 50%;
    overflow: hidden; /* Ensures the image remains circular */
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 640px) {
        max-width: 280px;
    }
`;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%; /* Ensures the image is circular */
`;

const HeroBg = styled.div`
    position: absolute;
    display: flex;
    top: 50%;
    right: 0;
    bottom: 0;
    left: 50%;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    justify-content: end;
    transform: translate(-50%, -50%);
`;

const Hero = () => {
    return (
        <div id="About">
            <HeroContainer>
                <HeroBg>
                    <StarCanvas />
                    <HeroBgAnimation />
                </HeroBg>
                <motion.div {...headContentAnimation}>
                    <HeroInnerContainer>
                    <HeroLeftContainer>
                    <motion.div {...headTextAnimation}>
            
                        <Title>
                            Hi, I am <br /> {Bio.name}
                        </Title>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        </motion.div>

                        <motion.div {...headContentAnimation}>
                        <SubTitle>{Bio.description}</SubTitle>
                        </motion.div>

                        <ResumeButton href={Bio.resume} target="_blank">
                        Check Resume</ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer>

                    <motion.div {...headContentAnimation}>

                        <Tilt>
                            <ImgWrapper>
                                <Img src={HeroImg} alt="Nishant Acharekar" />
                            </ImgWrapper>
                        </Tilt>
                        </motion.div>
                        
                    </HeroRightContainer>
                    </HeroInnerContainer>
                </motion.div>
           
            </HeroContainer>
        </div>
    );
};

export default Hero;
