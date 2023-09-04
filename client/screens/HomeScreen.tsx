import {StatusBar, View, Text, TextInput} from 'react-native';
import * as Icon from 'react-native-feather';

const HomeScreen = () => {
  return (
    <View className="bg-white">
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <View className="flex-row items-center space-x-2 px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 border border-gray-300 rounded-full">
          <Icon.Search width={'25'} height={'25'} stroke={'gray'} />
          <TextInput placeholder="Restaurants" className="ml-2 flex-1" />
          <View className="flex-row items-center space-x-1 border-0 border-l-2 border-l-gray-300">
            <Icon.MapPin width={'25'} height={'25'} stroke={'gray'} />
            <Text>New York, NYC</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
