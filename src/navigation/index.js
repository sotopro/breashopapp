import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import TabNavigator from "./tab";
import AuthNavigator from "./auth";

const AppNavigator = () => {
  const userId = useSelector((state) => state.auth.userId);

  console.log("userId", userId);
  return (
    <NavigationContainer>
      {userId ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
