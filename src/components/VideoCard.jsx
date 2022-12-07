import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { format } from "timeago.js";
const Container = styled.div`
  width: ${(props) => props.type !== "sm" && "360px"};
  margin-bottom: ${(props) => (props.type === "sm" ? "10px" : "45px")};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
`;
const Image = styled.img`
  width: 100%;
  height: ${(props) => (props.type === "sm" ? "120px" : "202px")};
  background-color: #999;
  flex: 1;
`;
const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== "sm" && "16px"};
  gap: 12px;
  flex: 1;
`;
const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "none"};

  background-color: #999;
`;

const Texts = styled.div``;
const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 10px 0px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const VideoCard = ({ type, video }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const getChannel = async () => {
      const res = await axios.get(`/users/find/${video.userId}`);
      setChannel(res.data);
    };
    getChannel();
  }, [video.userId]);

  return (
    <Link to="video/1234" style={{ textDecoration: "none" }}>
      <Container type={type}>
        <Image type={type} src={video.imgUrl} />

        <Details type={type}>
          <ChannelImage type={type} src={channel.img} />
          <Texts>
            <Title>{video.title}</Title>
            <ChannelName>{channel.name}</ChannelName>
            <Info>
              {video.views} lượt xem • {format(video.createdAt)}
            </Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default VideoCard;
