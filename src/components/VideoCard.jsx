import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;
const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #999;
`;

const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 10px 0px;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const VideoCard = () => {
  return (
    <Link to="video/1234" style={{ textDecoration: "none" }}>
      <Container>
        <Image src="https://i.ytimg.com/vi/rioEqqsODnw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPyngENLiwMfig8YyB8h3303CmaA" />

        <Details>
          <ChannelImage src="https://i.ibb.co/8zcVCqj/ava.jpg" />
          <Texts>
            <Title>Video Video</Title>
            <ChannelName>Hair Hair</ChannelName>
            <Info>14 N lượt xem • 9 ngày trước</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default VideoCard;
