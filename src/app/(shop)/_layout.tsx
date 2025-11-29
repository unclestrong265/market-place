import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import type { ComponentProps } from 'react';

function TabBarIcon(props: {
    name: ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={24} {...props} />;
}
const styles = StyleSheet.create({
    SafeArea: {
        flex: 1,
        backgroundColor: '#ffffffff', // You can change this to your preferred background color
    },
});

const TabLayout = () => {
    return (
        <SafeAreaView edges={['top']} style={styles.SafeArea}>
            <Tabs screenOptions={{
                tabBarActiveTintColor: '#1BC464',
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: { fontSize: 16},
                tabBarStyle: {
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    paddingTop: 10,
                },
                headerShown: false,
            }}>                
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Shop',
                        tabBarIcon(props) {
                            return <TabBarIcon name="shopping-bag" {...props} />;
                        },
                        headerShown: false,
                    }}
                />
                <Tabs.Screen name='orders' options={{}}/>
            </Tabs>
        </SafeAreaView>
    );
};

export default TabLayout;
