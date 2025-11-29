import { StyleSheet, Text, View, FlatList } from 'react-native'
// Verify this path exists or adjust the import path accordingly
import { PRODUCTS } from '../../assets/products';
const PRODUCT = PRODUCTS;
const index = () => {
  return (
    <View>
       <FlatList data={PRODUCT} renderItem={( item )=> <View>
        <Text>{item.item.name}</Text>
       </View>}
        keyExtractor={item=> item.id.toString()}
        numColumns={2}
        ListHeaderComponent={<Text>Products</Text>}
        contentContainerStyle={styles.flatListColumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5}}
        />
    </View>
  );
};

export default index;


const styles = StyleSheet.create({
  flatListColumn: {
    paddingBottom: 20,
  },
    flatListContent: {
      justifyContent: 'space-between',
    },
})
