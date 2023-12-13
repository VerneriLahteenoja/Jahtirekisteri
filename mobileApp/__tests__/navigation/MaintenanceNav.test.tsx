import { screen, render } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import MaintenanceNav from "../../src/components/NavComponents/MaintenanceNav";

test("MaintenanceNav renders correctly", () => {
    render(
        <NavigationContainer>
            <MaintenanceNav />
        </NavigationContainer>
    );

    expect(screen.getAllByText("Jäsenet")).toBeTruthy();
});
