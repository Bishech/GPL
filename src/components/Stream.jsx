import YouTube from "react-youtube";

export const Stream = () => {
  const opts = {
    playerVars: {
      autoplay: 0,
    },
  };
  const onPlayerReady = (event) => {
    event.target.pauseVideo();
  };
  return (
    <YouTube
      opts={opts}
      onReady={onPlayerReady}
      className="youtubeContainer"
      videoId="6gpvnHW1Xts"
    />
  );
};
