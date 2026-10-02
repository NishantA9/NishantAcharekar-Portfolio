import React, { useState } from "react";
import styled from "styled-components";
import { creativeWork, Bio } from "../../data/constants";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  padding: 0px 16px;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const ToggleButton = styled.div`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.primary + 20};
  }
  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
  ${({ active, theme }) => active && `background: ${theme.primary + 20};`}
`;

const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 28px;
`;

const Card = styled.div`
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
  }
`;

const Media = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  background: #000;
  cursor: pointer;
`;

const MediaImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${({ fit }) => fit || "cover"};
`;

const Frame = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const PlayButton = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
  &::after {
    content: "▶";
    color: white;
    font-size: 22px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 4px;
  }
`;

const CardTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding: 0 4px 4px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Lightbox = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  cursor: zoom-out;
  img {
    max-width: 92%;
    max-height: 92%;
    border-radius: 12px;
  }
`;

const ChannelButton = styled.a`
  margin-top: 36px;
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  border-radius: 20px;
  padding: 10px 24px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.6s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

// Accepts watch?v=, youtu.be/, /live/, /shorts/ and /embed/ links
const getYouTubeId = (url = "") => {
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|live\/|shorts\/|embed\/))([\w-]{11})/
  );
  return match ? match[1] : null;
};

const CreativeCard = ({ item, onOpen }) => {
  const [playing, setPlaying] = useState(false);

  if (item.category === "video") {
    const id = getYouTubeId(item.youtube);
    if (!id) return null;
    const cover = item.cover || `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    return (
      <Card>
        <Media onClick={() => setPlaying(true)}>
          {playing ? (
            <Frame
              src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
              title={item.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <MediaImg src={cover} alt={item.title} loading="lazy" />
              <PlayButton />
            </>
          )}
        </Media>
        <CardTitle>{item.title}</CardTitle>
      </Card>
    );
  }

  return (
    <Card>
      <Media onClick={() => onOpen(item.image)}>
        <MediaImg
          src={item.image}
          alt={item.title}
          loading="lazy"
          fit={item.category === "overlay" ? "contain" : "cover"}
        />
      </Media>
      <CardTitle>{item.title}</CardTitle>
    </Card>
  );
};

const Creative = () => {
  const [toggle, setToggle] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const items =
    toggle === "all"
      ? creativeWork
      : creativeWork.filter((item) => item.category === toggle);

  return (
    <Container id="Creative">
      <Wrapper>
        <Title>Creative Work</Title>
        <Desc style={{ marginBottom: "40px" }}>
          Thumbnails, video edits and overlays I've created for my YouTube channel and streams.
        </Desc>

        <ToggleButtonGroup>
          <ToggleButton active={toggle === "all"} onClick={() => setToggle("all")}>
            ALL
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === "thumbnail"} onClick={() => setToggle("thumbnail")}>
            THUMBNAILS
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === "video"} onClick={() => setToggle("video")}>
            VIDEO EDITS
          </ToggleButton>
          <Divider />
          <ToggleButton active={toggle === "overlay"} onClick={() => setToggle("overlay")}>
            OVERLAYS
          </ToggleButton>
        </ToggleButtonGroup>

        <Grid>
          {items.map((item) => (
            <CreativeCard key={item.id} item={item} onOpen={setLightbox} />
          ))}
        </Grid>

        <ChannelButton href={Bio.youtube} target="_blank" rel="noreferrer">
          Visit my YouTube Channel
        </ChannelButton>
      </Wrapper>

      {lightbox && (
        <Lightbox onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="Preview" />
        </Lightbox>
      )}
    </Container>
  );
};

export default Creative;