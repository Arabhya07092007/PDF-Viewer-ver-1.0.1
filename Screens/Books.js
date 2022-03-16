import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Button,
} from "react-native";

import { Icon } from "react-native-elements";
import { RFValue } from "react-native-responsive-fontsize";

import Header from "../Components/Header";
import Modal from "../Components/Modal";

export default class Books extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <StatusBar
            animated={true}
            backgroundColor="#a09ded"
            barStyle="dark-content"
            // showHideTransition={statusBarTransition}
          />
          <View>
            <Header
              title="NCERT Books"
              onPress={() => this.props.navigation.openDrawer()}
            />
          </View>
          <View style={styles.avatarCont}>
            <Modal
              title="Mathematics"
              navProp={this.props.navigation}
              component="Maths"
            />
            <Modal
              title="Science"
              navProp={this.props.navigation}
              component="Science"
            />
          </View>
          <View style={styles.avatarCont}>
            <Modal
              title="Social Science"
              navProp={this.props.navigation}
              component="Social"
            />
            <Modal
              title="English"
              navProp={this.props.navigation}
              component="English"
            />
          </View>
          <View style={styles.avatarCont}>
            <Modal
              title="Hindi"
              navProp={this.props.navigation}
              component="Hindi"
            />
            <Modal
              title="Sanskrit"
              navProp={this.props.navigation}
              component="Sanskrit"
            />
          </View>
          <View style={styles.avatarCont}>
            <Modal
              title="Physical Education"
              navProp={this.props.navigation}
              component="Physical"
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarCont: { flexDirection: "row", justifyContent: "center" },
});
