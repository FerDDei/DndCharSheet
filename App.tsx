import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const GrayColor = '#D9D9D9';

const char_name = 'Character Name';


// HP&AC component
const HP_AC = (
  text : string,
) => {
  return (
    <View style=
      {{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        padding: 10,
      }}
    >
      <Text>{text}</Text>
    </View>
  );
};


function App() {
  return (
    <SafeAreaView style={container_styles.container}>
      <View style={char_image_styles.parent_container}>
        <View style={char_image_styles.container}>
          <View style={char_image_styles.image_container}>
          </View>
          <View style={char_image_styles.name_and_class_container}>
            <View style={char_image_styles.char_name_container}>
            </View>
            <View style={char_image_styles.class_image_container}>
            </View>
          </View>
        </View>
      </View>

      <View style={skills_section_styles.parent_container}>
        <Text>Skills Section</Text>
      </View>

      <View style={info_section_styles.parent_container}>
        <Text>Information Section</Text>
      </View>
    </SafeAreaView>
  );
}

const char_image_styles = StyleSheet.create({
  parent_container: {
    flex: 577 / 1366,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000', // Optional: to visualize the sections
  },
  container: {
    position: 'absolute',
    top: 22,
    left: 61,
    right: 61,
    bottom: 11,
    borderWidth: 1,
    borderColor: '#000', // Optional: to visualize the sections
  },
  image_container: {
    marginTop: 26,
    flex: 1,
    borderRadius: 15,
    borderWidth: 4,
    borderColor: 'red',
    overflow: 'hidden', // Ensures the image fits within the rounded corners
    position: 'relative',
  },
  name_and_class_container: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: '50%',
    marginLeft: -185, // Negative half of the width of char_name_container to center
  },
  char_name_container: {
    backgroundColor: GrayColor, // Example background color with opacity
    borderRadius: 15,
    width: 370,
    height: 53,
    borderWidth: 1,
    padding: 0,
  },
  class_image_container: {
    marginLeft: 15, // Space between char_name_container and class_image_container
    height: 53,
    width: 53,
    borderWidth: 1,
  },
});

const skills_section_styles = StyleSheet.create({
  parent_container: {
    flex: 127 / 1366,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000', // Optional: to visualize the sections
  },
});

const info_section_styles = StyleSheet.create({
  parent_container: {
    flex: 589 / 1366,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000', // Optional: to visualize the sections
  },
});

const container_styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 18,
  },
});

export default App;
