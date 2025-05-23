import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{fontSize: 32}}
        selectable
        selectionColor="rgba(255,0,0,0.5)"
        numberOfLines={1}
        ellipsizeMode="tail"
        allowFontScaling={false}
        maxFontSizeMultiplier={1.5}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae voluptas
        perferendis corporis voluptatem quibusdam totam nihil tempora aliquam!
        Cum sint aliquam saepe quaerat natus similique nesciunt beatae?
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 16,
  },
});
