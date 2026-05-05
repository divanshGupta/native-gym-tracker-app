import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashboardScreen } from "../screens/dashboard/DashboardScreen";
import { LogWorkoutScreen } from "../screens/workout/LogWorkoutScreen";
import { ExerciseLibraryScreen } from "../screens/exercises/ExerciseLibraryScreen";
import { WorkoutHistoryScreen } from "../screens/history/WorkoutHistoryScreen";
import { ProfileScreen } from "../screens/profile/ProfileScreen";
// Import icons from @expo/vector-icons

const Tab = createBottomTabNavigator();

export const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: { backgroundColor: "#1A1A2E", borderTopColor: "#16213E" },
      tabBarActiveTintColor: "#E85D04",
      tabBarInactiveTintColor: "#6B7280",
      headerShown: false,
    }}
  >
    <Tab.Screen name="Dashboard" component={DashboardScreen} />
    <Tab.Screen name="Log" component={LogWorkoutScreen} />
    <Tab.Screen name="Exercises" component={ExerciseLibraryScreen} />
    <Tab.Screen name="History" component={WorkoutHistoryScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);