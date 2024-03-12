import { TwitchEmbed } from "react-twitch-embed";

export const Stream = () => {
  return (
    <TwitchEmbed
      channel="krifor69"
      autoplay={false}
      hideControls
      withChat={false}
    />
  );
};
