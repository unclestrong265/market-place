import { Stack, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function CategoriesLayout() {
    const router = useRouter();
    return (
        <Stack>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name="arrow-back" size={24} color='black' />
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack>
    );
};