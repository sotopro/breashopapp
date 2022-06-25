import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./tab";
import AuthNavigator from "./auth";

const AppNavigator = () => {
  const [user, setUser] = useState(null);
  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
