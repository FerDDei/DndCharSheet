import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'react-native-linear-gradient';
import { useEffect, useState } from 'react';

const GrayColor = '#D9D9D9';

const backend_address = '192.168.1.180:5001';

const char_name = 'Althea';
const character_hp_max = 36;
const character_hp = 36;
const character_ac = 14;
const character_image_path = './assets/char_image.png';

const likes_and_dislikes = 'Likes: Georgia\nDislikes: Poop';
const inventory = 'Sword\nShield\nPotion';
const traits = 'Brave\nLoyal\nKind';
const backstory = 'Althea was born in a small village in the mountains. She was raised by her mother and father, who were both skilled warriors. She learned to fight at a young age, and quickly became one of the best fighters in the village. When she was 18, her village was attacked by a band of orcs. Althea fought bravely, but was ultimately captured and taken prisoner. She managed to escape, and has been on the run ever since. She is now searching for a way to defeat the orcs and save her village.';

const str = 12;
const dex = 20;
const con = 18;
const int = 20;
const wis = 14;
const cha = 14;

const str_mod = 2;
const dex_mod = 2;
const con_mod = 4;
const int_mod = -1;
const wis_mod = 2;
const cha_mod = 2;

const str_saving_throw = 14;
const dex_saving_throw = 14;
const con_saving_throw = 18;
const int_saving_throw = 8;
const wis_saving_throw = 14;
const cha_saving_throw = 14;


// HP&AC component
const HP_AC = (
  text : string,
) => {
  return (
    <View style={component_styles.hp_ac_component}>
      <Text style={text_styles.h3}>{text}</Text>
    </View>
  );
};

const Skills = (
  skill_name: string,
  skill_value: number,
  modifier: number,
) =>{
  return (
    <View style={component_styles.skill_compenent_container}>
      <View style={component_styles.skill_name_container}>
        <Text style={text_styles.h3}>{skill_name}</Text>
        <Text style={text_styles.h1}>{skill_value}</Text>
      </View>
      <View style={component_styles.modifier_container}>
        <Text style={text_styles.h4}>{modifier}</Text>
      </View>
    </View>
  );
};

const SavingThrows = (
  saving_throw_name: string,
  saving_throw_value: number,
) =>{
  return (
    <View style={saving_component_styles.container}>
      <View style={saving_component_styles.text_container}>
        <Text style={text_styles.h3}>{saving_throw_name}</Text>
      </View>
      <View style={saving_component_styles.value_container}>
        <Text style={text_styles.h3}>{saving_throw_value}</Text>
      </View>
    </View>
  );
}

const CharacterInfo = (
  title: string,
  content: string,
) => (
  <View>
    <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 5 }}>
      <Text style={text_styles.h3}>{title}</Text>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: 1, width: '100%' }}
      />
    </View>
    <View>
      <Text style={text_styles.body}>{content}</Text>
    </View>
  </View>
);

const saving_component_styles = StyleSheet.create({
  container : {
    height: 31,
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text_container: {
    position: 'absolute',
    height: 29,
    width: 90,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
    paddingLeft: 15,
    justifyContent: 'center',
    backgroundColor: GrayColor,
  },
  value_container: {
    position: 'absolute',
    height: 31,
    width: 31,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 1000,
    right: 0,
    backgroundColor: GrayColor,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 1,
    shadowOffset: {
      width: -1,
      height: 0,
    },
  },
});

const component_styles = StyleSheet.create({
  hp_ac_component: {
    height: 26,
    backgroundColor: GrayColor,
    justifyContent: 'center',
    borderRadius: 15,
    alignItems: 'flex-start',
    paddingLeft: 15,
  },
  skill_compenent_container: {
    height: 100,
    width: 90,
  },
  skill_name_container: {
    paddingTop: 0,
    height: 90,
    width: 90,
    borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 0,
    borderRadius: 15,
    backgroundColor: GrayColor,
  },
  modifier_container: {
    position: 'absolute',
    bottom: 0,
    height: 20,
    width: 35,
    backgroundColor: GrayColor, // Use GrayColor if defined elsewhere
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
  },

});

function App() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch(`http://${backend_address}/members`)
      .then((response) => response.json())
      .then((data) => {
        setMembers(data.members);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <SafeAreaView style={container_styles.container}>
      <View style={char_image_styles.parent_container}>
        <View style={char_image_styles.container}>
          <View style={char_image_styles.image_container}>
            <Image
              source={require(character_image_path)}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
              }}
            />
            <View style={char_image_styles.hp_and_ac_container}>
              {HP_AC(`HP: ${character_hp}/${character_hp_max}`)}
              {HP_AC(`AC: ${character_ac}`)}
            </View>
          </View>
          <View style={char_image_styles.name_and_class_container}>
            <View style={char_image_styles.char_name_container}>
              <Text style={text_styles.h1}>{char_name}</Text>
            </View>
            <View style={char_image_styles.class_image_container}>
            </View>
          </View>
        </View>
      </View>

      <View style={skills_section_styles.parent_container}>
        <View style={skills_section_styles.container}>
          <View style={skills_section_styles.skills_container}>
              {Skills('STR', str, str_mod)}
              {Skills('DEX', dex, dex_mod)}
              {Skills('CON', con, con_mod)}
              {Skills('INT', int, int_mod)}
              {Skills('WIS', wis, wis_mod)}
              {Skills('CHA', cha, cha_mod)}
          </View>
          <View style={skills_section_styles.saving_throw_container}>
              {SavingThrows('STR', str_saving_throw)}
              {SavingThrows('DEX', dex_saving_throw)}
              {SavingThrows('CON', con_saving_throw)}
              {SavingThrows('INT', int_saving_throw)}
              {SavingThrows('WIS', wis_saving_throw)}
              {SavingThrows('CHA', cha_saving_throw)}
          </View>
        </View>
      </View>

      <View style={info_section_styles.parent_container}>
        <View style={info_section_styles.container}>
            <View style={[info_section_styles.sub_container, {flex: 2}]}>
              <View style={[info_section_styles.content_container, {flex: 6}]}>
                {CharacterInfo('LIKES & DISLIKES', likes_and_dislikes)}
              </View>
              <View style={[info_section_styles.content_container, {flex: 4}]}>
                {CharacterInfo('INVENTORY', inventory)}
              </View>
            </View>
            <View style={[info_section_styles.sub_container, {flex: 3}]}>
              <View style={[info_section_styles.content_container, {flex: 2}]}>
                {CharacterInfo('TRAITS', traits)}
              </View>
              <View style={[info_section_styles.content_container, {flex: 8}]}>
                {CharacterInfo('BACKSTORY', backstory)}
              </View>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const char_image_styles = StyleSheet.create({
  parent_container: {
    flex: 577 / 1366,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#000', // Optional: to visualize the sections
  },
  container: {
    position: 'absolute',
    top: 22,
    left: 61,
    right: 61,
    bottom: 11,
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
    backgroundColor: GrayColor,
    borderRadius: 15,
    width: 370,
    height: 53,
    borderWidth: 1,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  class_image_container: {
    marginLeft: 15, // Space between char_name_container and class_image_container
    height: 53,
    width: 53,
    borderRadius: 15,
    backgroundColor: GrayColor, // Example background color
  },
  hp_and_ac_container: {
    flexDirection: 'column',
    gap: 5,
    height: 57,
    width: 150,
    marginTop: 5,
    marginLeft: 5,
  },
});

const skills_section_styles = StyleSheet.create({
  parent_container: {
    flex: 128 / 1366,
  },
  container: {
    position: 'absolute',
    flexDirection: 'row',
    gap: 10,
    top: 11,
    left: 61,
    right: 61,
    bottom: 11,
  },
  skills_container: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  saving_throw_container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center', // Optional: to align items vertically
    alignContent: 'space-between', // Optional: to align items horizontally
  },
});

const info_section_styles = StyleSheet.create({
  parent_container: {
    flex: 589 / 1366,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    top: 11,
    left: 61,
    right: 61,
    bottom: 11,
  },
  sub_container: {
    flexDirection: 'column',
    gap: 10,
  },
  content_container: {
    borderRadius: 15,
    padding: 5,
    backgroundColor: GrayColor,
  },
});

const container_styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 18,
  },
});

const text_styles = StyleSheet.create({
  body: {
    fontSize: 14,
    fontFamily: 'Arial',
  },
  h1: {
    fontSize: 40,
    fontFamily: 'Arial',
  },
  h2: {
    fontSize: 30,
    fontFamily: 'Arial',
  },
  h3: {
    fontSize: 20,
    fontFamily: 'Arial',
  },
  h4: {
    fontSize: 16,
    fontFamily: 'Arial',
  },
});

export default App;
