import React from "react";
import { Text, View } from "react-native";
import { Actions, Scene, Router } from "react-native-router-flux";
import Icon from "react-native-vector-icons/FontAwesome";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Home from "./components/Home";


//this.props.selected - this.props.title - this.props.iconName
const TabIcon = ({ selected, title, iconName }) => {
  const color = selected ? "red" : "black";
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center"
      }}
    >
      <Icon style={{ color: color }} name={iconName || "circle"} size={25} />
      {/* <Text style={{color: color, fontSize: 12}}>{title}</Text> */}
    </View>
  );
};

const styles = {
  navigationBarStyle: {
    backgroundColor: "#f4f4f8"
  },
  titleStyle: {
    color: "#005b96",
    fontWeight: "bold"
  }
};

const { navigationBarStyle, titleStyle } = styles;

const RouterComponent = () => {
  return (
    <Router
    //sceneStyle={{paddingTop: 50}}
    //hideNavBar
    >
     
      <Scene key="main">
        <Scene
          key="home"
          component={Home}
          title="HOME"
          icon={TabIcon}
          navigationBarStyle={navigationBarStyle}
          titleStyle={titleStyle}
        />
          
          <Scene
            key="productList"
            component={ProductList}
            title="PRODUCTS"
            onRight={() => {}}
            rightTitle=""
            rightButtonTextStyle={titleStyle}
            navigationBarStyle={navigationBarStyle}
            titleStyle={titleStyle}
          />
          <Scene
            key="productDetail"
            component={ProductDetail}
            title="PRODUCT DETAIL"
            onRight={() => {}}
            rightTitle=""
            rightButtonTextStyle={titleStyle}
            navigationBarStyle={navigationBarStyle}
            titleStyle={titleStyle}
          />
        
      </Scene>
    </Router>
  );
};

export default RouterComponent;
