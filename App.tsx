/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.char_image_section}>
        <View style={styles.char_image_container}>
          <Image
            source={require('./assets/char_image.png')}
            style={styles.char_image}
          />
        </View>
      </View>
      <View style={styles.skills_section}>
        <Text>Section 2</Text>
      </View>
      <View style={styles.info_section}>
        <Text>Section 3</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 18,
  },
  char_image_section: {
    flex: 518 / 1234,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#000', // Optional: to visualize the sections
  },
  skills_section: {
    flex: 127 / 1234,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#000', // Optional: to visualize the sections
  },
  info_section: {
    flex: 589 / 1234,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#000', // Optional: to visualize the sections
  },
  char_image_container: {
    marginTop: 50,
    margin: 30,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: 'red',
    overflow: 'hidden', // Ensures the image fits within the rounded corners
  },
  char_image: {
    flex: 1,
    aspectRatio: 1792 / 1024,
  },
});

export default App;
