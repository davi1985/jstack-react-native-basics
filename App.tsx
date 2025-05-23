import {ScrollView, Text} from 'react-native';

const App = () => {
  return (
    <ScrollView
      persistentScrollbar // * Android only
      indicatorStyle={'black'} // * iOS only
      showsVerticalScrollIndicator={false}>
      <ScrollView
        horizontal
        style={{marginTop: 100}}
        showsHorizontalScrollIndicator={false}>
        <Text style={{fontSize: 32}}>
          JStack - the best React and JavaScript course JStack - the best React
          and JavaScript course
        </Text>
      </ScrollView>

      <Text style={{marginTop: 50, fontSize: 32}}>
        JStack - the best React and JavaScript course JStack - the best React
        and JavaScript course JStack - the best React and JavaScript course
        JStack - the best React and JavaScript course JStack - the best React
        and JavaScript course JStack - the best React and JavaScript course
        JStack - the best React and JavaScript course JStack - the best React
        and JavaScript course JStack - the best React and JavaScript course
        JStack - the best React and JavaScript course JStack - the best React
        and JavaScript course JStack - the best React and JavaScript course
        JStack - the best React and JavaScript course JStack - the best React
        and JavaScript course JStack - the best React and JavaScript course
      </Text>
    </ScrollView>
  );
};

export default App;
