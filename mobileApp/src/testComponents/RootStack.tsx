// THIS IS A TEST COMPONENT FOR THE BOTTOM NAVIGATION. THIS COMPONENT IS NOT USED IN THE APP.
// Reason for this is that the Victory Native XL chart library is not currently working with jest.

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getHeaderTitle } from "@react-navigation/elements";
import BottomNav from "./BottomNav";
import DetailsScreen from "../screens/Details/DetailsScreen";
import { CustomAppBar } from "../components/AppBars/CustomAppBar";
import FormScreen from "../screens/Forms/FormScreen";
import FormAppBar from "../components/AppBars/FormAppBar";
import { RootStackParamList } from "../NavigationTypes";
import DetailsAppBar from "../components/AppBars/DetailsAppBar";

const Stack = createNativeStackNavigator<RootStackParamList>();

/* 
    The RootStack component is used to render the main bottom navigation of 
    the app and the screens that are accessed through it like the DetailsScreen
    and FormScreen.
*/
function RootStack() {
    return (
        <Stack.Navigator
            initialRouteName="BottomNavigation"
            screenOptions={
                {
                    // headerShown: false,
                    // header: (props) => <CustomAppBar {...props} />,
                }
            }
        >
            <Stack.Screen
                name="BottomNavigation"
                component={BottomNav}
                options={{
                    header: (props) => <CustomAppBar {...props} />,
                }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{
                    header: (props) => <DetailsAppBar {...props} />,
                }}
            />
            <Stack.Screen
                name="Forms"
                component={FormScreen}
                options={{
                    header: (props) => <FormAppBar {...props} />,
                }}
            />
        </Stack.Navigator>
    );
}

export default RootStack;
