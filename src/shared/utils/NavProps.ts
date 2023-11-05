import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type NavStackParamList = {
    HomeScreen: undefined;
    Details: undefined;
};

export type NavProps = NativeStackScreenProps<NavStackParamList>;