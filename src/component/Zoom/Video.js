import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
// import { APP_ID, SERVER_SECRET } from "./constant";

const Video = () => {
  const { id } = useParams();
  let myMeeting = async (element) => {
    // generate Kit Token
    const appID = 1003131021;
    const serverSecret = "83e56f1b2642fa49fb996261e59249bc";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      id,
      Date.now().toString(),
      "Priyanshu"
    );

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    // start the call
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
        mode: ZegoUIKitPrebuilt.VideoConference, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
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
