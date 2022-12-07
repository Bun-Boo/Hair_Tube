import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VideoCard from "../components/VideoCard";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Home = ({ type }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      const res = await axios.get(`/videos/${type}`);
      setVideos(res.data);
    };
    getVideos();
  }, [type]);
  return (
    <Container>
      {videos &&
        videos.map((video) => <VideoCard key={video._id} video={video} />)}
    </Container>
  );
};

export default Home;
