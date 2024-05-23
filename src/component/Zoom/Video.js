import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Video = () => {
  const { id } = useParams();
  let myMeeting = async (element) => {
    const appID = 1614066159;
    const serverSecret = "be1c8faa9cf56f7496956a151a81d77d";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      "Axat"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Copy link",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname +
            "?roomID=" +
            id,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference, 
      },
    });
  };
  return (
    <>
      <div ref={myMeeting} />
    </>
  );
};

export default Video;
