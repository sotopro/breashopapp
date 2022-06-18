
import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: colors.white,
    },
    cartList: {
        flex: 1
    },
    footer: {
        borderTopColor: colors.primary,
        borderTopWidth: 1
    },
    buttonConfirm: {
        backgroundColor: colors.secondary,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonText: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
    },
    totalContainer: {
        flex: 0.35,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    totalTitle: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
    },
    total: {
        fontSize: 15,
        fontFamily: 'Lato-Bold',
    },
})