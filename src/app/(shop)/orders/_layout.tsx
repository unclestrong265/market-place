import { Tabs} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const TabLayout = () => {
    return (
        <SafeAreaView>
            <Tabs>
                <Tabs.Screen
                    name="index"
                    options={{
                        headerShown: false,
                    }}
                />
            </Tabs>
        </SafeAreaView>
    );
}

export default TabLayout;

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    SafeArea: {
        flex: 1,
    },
});