import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ErrorComponent = (props) =>
{
    return (<View style={styles.viewCentering}><Text style={styles.whiteBack}>{props.field}: {props.textError}</Text></View>);               
};

const styles = StyleSheet.create({
    whiteBack: {
        color: 'rgba(255,255,255, 0.8)',
    },
    viewCentering: 
    {
        paddingBottom: 2,
        width: "100%",
        alignItems: "center"
    }
})

export {ErrorComponent};
