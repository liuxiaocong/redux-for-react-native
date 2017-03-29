/**
 * Created by xiaoconglau on 29/03/2017.
 */
import React from "react";
import { StyleSheet, View, Text, Alert } from "react-native";

const styles = StyleSheet.create( {
    container: {
        marginTop: 30,
        flex: 1
    }
} );
const HomeView = React.createClass( {

    componentDidMount: function () {
    },

    componentWillUnmount: function () {
    },


    render: function () {
        return (
            <View style={styles.container}>
                <Text onPress={
                    ()=>this.props.onAdd()
                }>App View</Text>
                <Text>{this.props.count}</Text>
            </View>
        )
    }
} );

export default HomeView;
