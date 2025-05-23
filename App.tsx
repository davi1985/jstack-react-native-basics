import {ScrollView, Text} from 'react-native';

const App = () => {
  return (
    <ScrollView alwaysBounceVertical={false}>
      <Text style={{marginTop: 200, fontSize: 32, width: 1000}}>Hello</Text>

      <ScrollView horizontal alwaysBounceHorizontal={false}>
        <Text style={{fontSize: 32}}>
          JStack - the best React and JavaScript course JStack - the best React
          and JavaScript course
        </Text>
      </ScrollView>
    </ScrollView>
  );
};

export default App;
