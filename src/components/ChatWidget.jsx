import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const theme = {
  background: "#f5f8fb",
  headerBgColor: "#1976d2",
  headerFontColor: "#fff",
  headerFontSize: "16px",
  botBubbleColor: "#1976d2",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

const steps = [
  {
    id: "1",
    message: "Hi! How can I help you today?",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Thanks! We'll get back to you soon.",
    end: true,
  },
];

const App = () => (
  <div>
    {/* other components */}
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "300px",
        zIndex: 9999,
      }}
    >
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} floating={true} botAvatar="/bot.png" userAvatar="/user.png" />
      </ThemeProvider>
    </div>
  </div>
);

export default App;
