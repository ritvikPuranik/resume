import React from "react";
import { BubbleChat } from "flowise-embed-react";
import profilePicture from "../../images/profile_picture.png";

const Chatbot = () => {
  return (
    <BubbleChat
      chatflowid="bfdad2e5-228d-4b81-99ba-29968bf87723"
      apiHost="https://chatbot.technudge.in"
    //   parseDecodeHtml={true}
      theme={{
        button: {
          backgroundColor: "#bd6708",
          right: 20,
          bottom: 20,
          size: 48,
          dragAndDrop: true,
          iconColor: "white",
          // customIconSrc: devIcon,

          autoWindowOpen: {
            autoOpen: true,
            openDelay: 2,
            autoOpenOnMobile: false,
          },
        },
        tooltip: {
          showTooltip: true,
          tooltipMessage: "Hi There 👋",
          tooltipBackgroundColor: "black",
          tooltipTextColor: "white",
          tooltipFontSize: 20,
        },
        disclaimer: {
          title: "Hi There!",
          message:
            "I am Ritvik's Virtual Assistant. I can help you with a professional description of Ritvik. His work, his skills, anything you'd like to know. Just ask!",
          textColor: "black",
          buttonColor: "#bd6708",
          buttonText: "Start Chatting",
          buttonTextColor: "white",
          blurredBackgroundColor: "rgba(0, 0, 0, 0.4)",
          backgroundColor: "white",
        },
        customCSS: ``,
        chatWindow: {
          showTitle: true,
          showAgentMessages: true,
          title: "Ritvik's Portfolio",
          // titleAvatarSrc: 'https://raw.githubusercontent.com/walkxcode/dashboard-icons/main/svg/google-messages.svg',
          welcomeMessage: "Hi, I'm Ritvik's VA. How can I help you?",
          errorMessage: "Oops! Something went wrong. Please try again later.",
          backgroundColor: "#ffffff",
          backgroundImage: "enter image path or link",
          height: 700,
          width: 400,
          fontSize: 16,
          starterPrompts: [
            "What is Ritvik's LinkedIn handle?",
            "What are Ritvik's skills?",
          ],
          starterPromptFontSize: 15,
          clearChatOnReload: false,
        //   sourceDocsTitle: "Sources:",
          renderHTML: true,
        //   renderMarkdown: true,
          botMessage: {
            backgroundColor: "#f7f8ff",
            textColor: "#303235",
            showAvatar: true,
            avatarSrc: profilePicture,
          },
          userMessage: {
            backgroundColor: "#3B81F6",
            textColor: "#ffffff",
            showAvatar: true,
            avatarSrc:
              "https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png",
          },
          textInput: {
            placeholder: "Type your question",
            backgroundColor: "#ffffff",
            textColor: "#303235",
            sendButtonColor: "#3B81F6",
            maxChars: 50,
            maxCharsWarningMessage:
              "You exceeded the characters limit. Please input less than 50 characters.",
            autoFocus: true,
            sendMessageSound: true,
            sendSoundLocation: "send_message.mp3",
            receiveMessageSound: true,
            receiveSoundLocation: "receive_message.mp3",
          },
          feedback: {
            color: "#303235",
          },
          dateTimeToggle: {
            date: true,
            time: true,
          },
          footer: {
            textColor: "#bd6708",
            text: "Developed in house by",
            company: "Ritvik",
            companyLink: "https://technudge.in/ritvikPuranik",
          },
        },
      }}
    />
  );
};

export default Chatbot;
