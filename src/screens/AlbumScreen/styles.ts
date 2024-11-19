import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    albumDetailsButton: {
        position: 'absolute',
        right: 0,
    },
});
