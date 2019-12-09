import React, { Component } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { Actions } from "react-native-router-flux";

class Product extends Component {
  onPressItem() {
    Actions.productDetail({ productDetail: this.props.item });
  }

  render() {
    const {image, name, price } = this.props.item;
    const {
      styleContainer,
    
      styleImage,
     
      stylePrice
    } = styles;

    return (
      <TouchableWithoutFeedback onPress={this.onPressItem.bind(this)}>
        <View style={styleContainer}>
          <Image source={{ uri: image }} style={styleImage} />
          
          
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={stylePrice}>${price}</Text>
           
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  styleContainer: {
    borderWidth: 0.5,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "column",
    borderColor: "#ddd",
    position: "relative",
    flex: 1
  },
  styleImage: {
    flex: 1,
    width: null,
    height: 190,
    marginTop: 40,
    marginBottom: 40
  },
  styleBrand: {
    fontWeight: "bold",
    color: "#747474"
  },
  styleName: {
    color: "#878787"
  },
  stylePrice: {
    fontWeight: "bold",
    color: "#EE5555"
  }
};

export default Product;
