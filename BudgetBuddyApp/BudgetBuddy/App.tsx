import React, { Suspense, useEffect, useState } from 'react';
import { SQLiteProvider } from 'expo-sqlite/next';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Screens/Home';

const Stack = createNativeStackNavigator();

const loadDatabase = async () => {
  const dbName = "mySQLiteDB.db";
  const dbAsset = require("./assets/mySQLiteDB.db");
  const dbUri = Asset.fromModule(dbAsset).uri;
  const dbFilePath = `${FileSystem.documentDirectory}SQLite/${dbName}`;

  const fileInfo = await FileSystem.getInfoAsync(dbFilePath);
  if (!fileInfo.exists) {
    await FileSystem.makeDirectoryAsync(
      `${FileSystem.documentDirectory}SQLite`,
      { intermediates: true }
    );
    await FileSystem.downloadAsync(dbUri, dbFilePath);
  }
}

export default function App() {
  const [dbLoaded, setDbLoaded] = useState<boolean>(false);

  useEffect(() => {
    loadDatabase().then(() => {
      setDbLoaded(true)
    }).catch((error) => {
      console.log("DB loading error!!");
      console.log(error);
    })
  }, [])

  if (!dbLoaded) return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Loading...</Text>
      <ActivityIndicator size={"large"} color="gray" />
    </View>
  )

  return (
    <NavigationContainer>
      <Suspense>
        <SQLiteProvider databaseName='mySQLiteDB.db' useSuspense>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}
              options={{
                headerTitle: "Budget Buddy",
                headerLargeTitle: true,
              }} />
          </Stack.Navigator>
        </SQLiteProvider>
      </Suspense>
    </NavigationContainer>
  );
}
