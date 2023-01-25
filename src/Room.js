import React from 'react';
import { useParams } from 'react-router-dom';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const Room = () => {
    const { roomID } = useParams();
    const meeting = async(element) => {
        const appID = 2128847173;
        const serverSecret = "7e3b0f6807bf21ecffb204bacb54bd1b"
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret, 
            roomID, 
            Date.now().toString(),
            "senpai"
        );

        const zp = ZegoUIKitPrebuilt.create(kitToken);

        zp.joinRoom({
            container: element,
            scenario: {
              mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
          });
    };
  return (
    <div ref={meeting} style={{width:"100vw", height:"100vh"}}></div>
  );
};

export default Room;