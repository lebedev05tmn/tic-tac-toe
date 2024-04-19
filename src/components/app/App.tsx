import React from "react";
import { GlobalStyle } from "./style";
import Page from "../page/page";
import { AppRoot, View, Panel, Group, Header } from "@vkontakte/vkui";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppRoute } from "../../const";
import "@vkontakte/vkui/dist/vkui.css";

const App: React.FC = () => {
  return (
    <AppRoot>
      <View activePanel="main">
        <Panel id="main">
          <Group
            mode="card"
            header={<Header mode="secondary">Tic tac toe</Header>}>
            <GlobalStyle />
            <BrowserRouter>
              <Routes>
                {Object.values(AppRoute).map((path: string) => (
                  <Route
                    key={path}
                    path={path}
                    element={<Page router={path} />}
                  />
                ))}
              </Routes>
            </BrowserRouter>
          </Group>
        </Panel>
      </View>
    </AppRoot>
  );
};

export default App;
