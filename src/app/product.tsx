import { View, Text, StyleSheet } from 'react-native';

export default function Product() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product</Text>
      <Text>Product details will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 8,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});
