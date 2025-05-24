import {ScrollView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <ScrollView
      // onScroll={e => console.log(e.nativeEvent.contentOffset.x)}
      // scrollEventThrottle={16}
      onScrollBeginDrag={() => console.log('begin drag')}
      onScrollEndDrag={() => console.log('end drag')}
      onScrollToTop={() => console.log('scroll to top')} // *iOS only
    >
      <ScrollView horizontal style={styles.horizontalScrollView}>
        <Text style={styles.text}>
          JStack - the best React and JavaScript course JStack - the best React
          and JavaScript course
        </Text>
      </ScrollView>

      <Text style={[styles.text, styles.contentText]}>
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

const styles = StyleSheet.create({
  horizontalScrollView: {
    marginTop: 100,
  },
  text: {
    fontSize: 32,
  },
  contentText: {
    marginTop: 50,
  },
});

export default App;
