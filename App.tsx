import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { PaperProvider } from "react-native-paper";
import { TailwindProvider } from "tailwind-rn";

import { RootNavigation } from "./src/navigation/root-stack";
import utilities from "./tailwind.json";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFontsLoaded: false,
    };
  }

  async componentDidMount() {
    await SplashScreen.preventAutoHideAsync();
    await this.loadFonts();
    SplashScreen.hideAsync();
  }

  async loadFonts() {
    await Font.loadAsync({
      "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
      "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
      "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
      // ... other font imports
    });

    this.setState({ isFontsLoaded: true });
  }

  render() {
    if (!this.state.isFontsLoaded) {
      return null; // Return any loading component here if needed
    }

    return (
      <TailwindProvider utilities={utilities}>
        <NavigationContainer>
          <PaperProvider>
            <RootNavigation />
          </PaperProvider>
        </NavigationContainer>
      </TailwindProvider>
    );
  }
}

export default App;
