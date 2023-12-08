import {View, Text, TextInput} from 'react-native';
import {Button} from '../components/Button';
import React from 'react';
import {ToogleTheam} from '../components/ToggleTheam';

function Home(): JSX.Element {
  return (
    <View className="flex-1 dark:bg-black light:bg-white items-center justify-center px-6">
      <ToogleTheam />
      <Text className="dark:text-white light:text-black text-2xl font-bold my-4">
        Native
      </Text>
      <TextInput className="w-full h-14 dark:border-white light:border-black border-2 rounded-md text-white px-4 my-4 focus:border-orange-500" />
      <TextInput className="w-full h-14 dark:border-white light:border-black border-2 rounded-md text-white px-4 my-4 focus:border-orange-500" />
      <Button className="w-full" />
    </View>
  );
}

export default Home;
