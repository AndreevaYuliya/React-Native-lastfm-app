import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    screenScrollContainer: {
        flex: 1,
        paddingVertical: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    title: {
        maxWidth: '50%',
        fontSize: 18,
        fontWeight: 'bold',
    },
    goBackButton: {
        position: 'absolute',
        left: 0,
    },
});
