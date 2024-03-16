import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./themes/default";
import bridge from "@vkontakte/vk-bridge";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";

bridge.send("VKWebAppInit");

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ThemeProvider theme={defaultTheme}>
    <ConfigProvider>
      <AdaptivityProvider>
        <App />
      </AdaptivityProvider>
    </ConfigProvider>
  </ThemeProvider>
);
