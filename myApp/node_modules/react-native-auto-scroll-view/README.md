# react-native-auto-scroll-view

ScrollView component that disables vertical scrolling if ScrollView content takes less space than ScrollView wrapper and enables vertical scrolling if ScrollView content takes more space than ScrollView wrapper.

## Installation

``` yarn add react-native-auto-scroll-view ```

## Example

```jsx
import { Text } from 'react-native';
import AutoScrollView from 'react-native-auto-scroll-view';

const TestComponent = () => {
  // in this case, scrolling will be enabled
  // if decrease size of the array from 20 to 5 for example, scrolling will be disabled
  const testArray = new Array(20).fill('lorem ipsum');
  const styles = {
    contentContainerStyle: {
      flexGrow: 1,
    },
    text: {
      backgroundColor: 'pink',
      padding: 20,
      marginVertical: 5,
    },
  };

  return (
    <AutoScrollView
      contentContainerStyle={styles.contentContainerStyle}
    >
      {testArray.map((element, index) => (
        <Text key={index} style={styles.text}>{element}</Text>
      ))}
    </AutoScrollView>
  );
};
```

You can use all default ScrollView properties and methods: [Docs of ScrollView](https://facebook.github.io/react-native/docs/scrollview.html)
