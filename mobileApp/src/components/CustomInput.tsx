import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, MD3Colors, IconButton, useTheme } from "react-native-paper";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

type MaterialIconNames = keyof typeof MaterialIcons.glyphMap;
type MaterialCommunityIconNames = keyof typeof MaterialCommunityIcons.glyphMap;

type Props = {
    iconSet: "MaterialIcons" | "MaterialCommunityIcons" | "NoIcon";
    iconNameMaterial?: MaterialIconNames;
    iconNameMaterialCommunity?: MaterialCommunityIconNames;
    title: string;
    value: string | undefined;
    onPress: () => void;
    iconButtonName: MaterialCommunityIconNames;
};

function CustomInput({
    iconSet,
    iconNameMaterial,
    iconNameMaterialCommunity,
    title,
    value,
    onPress,
    iconButtonName,
}: Props) {
    const [valueText, setValueText] = useState(value);
    const theme = useTheme();

    let iconElement = <View style={styles.emptyIcon} />;

    switch (iconSet) {
        case "MaterialIcons":
            iconElement = (
                <MaterialIcons
                    name={iconNameMaterial}
                    size={24}
                    style={{ ...styles.icon, color: MD3Colors.neutral40 }}
                />
            );
            break;
        case "MaterialCommunityIcons":
            iconElement = (
                <MaterialCommunityIcons
                    name={iconNameMaterialCommunity}
                    size={24}
                    style={{ ...styles.icon, color: MD3Colors.neutral40 }}
                />
            );
            break;
        default:
            iconElement = <View style={styles.emptyIcon} />;
            break;
    }

    const valueJSX = valueText ? (
        <Text variant="bodyMedium" style={{ color: MD3Colors.neutral40 }}>
            {valueText}
        </Text>
    ) : (
        <Text
            variant="bodyMedium"
            style={{ color: MD3Colors.neutral40, fontStyle: "italic" }}
        >
            Ei valittu
        </Text>
    );

    return (
        <View style={styles.inputContainer}>
            {iconElement}
            <View
                style={{
                    flexGrow: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <View>
                    <Text variant="bodyLarge">{title}</Text>
                    {valueJSX}
                </View>
                <IconButton
                    mode="contained"
                    icon={iconButtonName}
                    iconColor={theme.colors.onPrimary}
                    containerColor={theme.colors.primary}
                    onPress={() => onPress()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20,
        //paddingRight: 5,
        paddingRight: 55,
    },
    icon: {
        paddingTop: 5,
        paddingLeft: 14,
        paddingRight: 16,
    },
    emptyIcon: {
        paddingTop: 5,
        paddingLeft: 26,
        paddingRight: 28,
        minWidth: 24,
        minHeight: 24,
    },
});

export default CustomInput;
