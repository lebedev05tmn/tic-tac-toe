import React from "react";
import { GlobalStyle } from "./style";
import Page from "../page/page";
import { AppRoot, View, Panel, Group, Header } from "@vkontakte/vkui";
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
            <Page />
          </Group>
        </Panel>
      </View>
    </AppRoot>
  );
};

export default App;
