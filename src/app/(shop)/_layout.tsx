import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
    return (
        <SafeAreaView style={styles.container}>
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
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default TabsLayout;