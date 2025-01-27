"use client";
import React, { useEffect } from "react";

const Chat_Bot_Icon = () => {
  useEffect(() => {
    (function (
      w: Window & { chatbotConfig?: [string, string, { apiHost: string }] },
      d: Document & { getElementByTagName: (tag: string) => Element[] },
      s: string,
      ...args: [string, string, { apiHost: string }]
    ) {
      const div = d.createElement("div");
      div.id = "aichatbot";
      d.body.appendChild(div);
      w.chatbotConfig = args as [string, string, { apiHost: string }];

      const f = d.getElementsByTagName(s)[0]; // Correct method call
      const j = d.createElement(s) as HTMLScriptElement;
      j.defer = true;
      j.type = "module";
      j.src = "https://aichatbot.sendbird.com/index.js";

      j.onload = () => console.log("SendBird chatbot script loaded successfully.");
      j.onerror = (e) => {
        console.error("Error loading SendBird script:", e);
      };

      if (f.parentNode) f.parentNode.insertBefore(j, f); // Corrected insertBefore logic
    })(
      window,
      document as Document & { getElementByTagName: (tag: string) => Element[] }, // Cast to match the expected type
      "script",
      "2C919442-9329-448F-9257-977099F669AF", // Replace with your App ID
      "f1bcb5820660702e13fca52ff321d7c87c3c72f4", // Replace with your Bot ID
      {
        apiHost: "https://api-2C919442-9329-448F-9257-977099F669AF.sendbird.com", // Replace with the correct API host
      }
    );

    // Cleanup function to remove the injected div and script when the component unmounts
    return () => {
      const div = document.getElementById("aichatbot");
      const script = document.querySelector("script[src='https://aichatbot.sendbird.com/index.js']");
      if (div) div.remove();
      if (script) script.remove();
    };
  }, []);

  return <div>ChatIcon</div>;
};

export default Chat_Bot_Icon;
