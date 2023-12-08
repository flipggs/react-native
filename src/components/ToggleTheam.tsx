import {View, Text, Switch} from 'react-native';
import {useColorScheme} from 'nativewind';
import colors from 'tailwindcss/colors';

export function ToogleTheam() {
  const {colorScheme, toggleColorScheme} = useColorScheme();

  return (
    <View className="flex-row items-center gap-2">
      <Text className="text-yellow-500">Dark</Text>
      <Switch
        trackColor={{true: colors.blue[400], false: colors.yellow[500]}}
        thumbColor={
          colorScheme === 'light' ? colors.blue[900] : colors.yellow[900]
        }
        onValueChange={toggleColorScheme}
        value={colorScheme === 'light'}
      />
      <Text className="text-blue-400">Light</Text>
    </View>
  );
}
