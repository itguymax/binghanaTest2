import React, { Component } from "react";
import { FlatList, View } from "react-native";
import Product from "./Product";
import { connect } from "react-redux";

class ProductList extends Component {
  renderItem({ item }) {
    return <Product key={item} item={item} />;
  }

  keyExtractor = (item, index) => item.name;

  render() {
    return (
      <View style={{ paddingTop: 50, paddingBottom: 60 }}>
        <FlatList
          data={this.props.products}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          numColumns={2}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { products: state.products.products };
};

export default connect(mapStateToProps)(ProductList);
