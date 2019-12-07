import React, { Component } from "react";
import { Text, View, Image, ScrollView, FlatList } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { Card, CardSection, Button } from "./common";
//import HomeIntroduceProductOnSale from "./HomeIntroduceProductOnSale";

class Home extends Component {
  // componentDidMount() {
  //   this.props.getProductsOnSaleIntro();
  // }

  // renderItem({ item }) {
  //   return <HomeIntroduceProductOnSale key={item} item={item} />;
  // }

  keyExtractor = (item, index) => item.name;

  render() {
    const { styleImage, cardStyle } = styles;
    return (
      <ScrollView style={{ flex: 1 }}>
        <View
          style={{ paddingTop: 50, paddingBottom: 60, backgroundColor: "#fff" }}
        >
          <Card style={cardStyle}>
            <CardSection
              style={{
                flexDirection: "column",
                padding: 0,
                borderBottomWidth: 0,
                justifyContent: "center"
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  alignSelf: "flex-start",
                  fontSize: 22,
                  paddingTop: 5,
                  paddingBottom: 5,
                  borderWidth: 0,
                  borderBottomWidth: 0
                }}
              >
                Categories
              </Text>
            </CardSection>
          </Card>
          <Card style={cardStyle}>
            <CardSection style={{ padding: 0, borderBottomWidth: 0 }}>
              <Image
                source={require("../assets/images/categories/basket.jpg")}
                style={styleImage}
              />
            </CardSection>
            <CardSection
              style={{ borderBottomWidth: 0, justifyContent: "center" }}
            >
              <Button
                buttonStyleProps={{
                  backgroundColor: "#000",
                  borderColor: "#000",
                  marginRight: 0,
                  marginLeft: 0
                }}
                textStyleProps={{ color: "#FFF", fontWeight: "bold" }}
                onPress={() => {
                  // this.props.getProductsByCategory({ category: "Boots" });
                  // Actions.productList();
                }}
              >
                Basket
              </Button>
            </CardSection>
          </Card>

          <Card style={cardStyle}>
            <CardSection style={{ borderBottomWidth: 0 }}>
              <Image
                source={require("../assets/images/categories/casquettes.jpg")}
                style={styleImage}
              />
            </CardSection>
            <CardSection
              style={{ borderBottomWidth: 0, justifyContent: "center" }}
            >
              <Button
                buttonStyleProps={{
                  marginRight: 0,
                  marginLeft: 0,
                  borderColor: "#316497",
                  backgroundColor: "#316497"
                }}
                textStyleProps={{ color: "#FFF", fontWeight: "bold" }}
                // onPress={() => {
                //   this.props.getAllTopBrand();
                //   Actions.categoriesList({ isShowBrand: true });
                // }}
              >
                Casquettes
              </Button>
            </CardSection>
          </Card>

          <Card style={cardStyle}>
            <CardSection style={{ borderBottomWidth: 0 }}>
              <Image
                source={require("../assets/images/categories/montres.jpg")}
                style={styleImage}
              />
            </CardSection>
            <CardSection
              style={{ borderBottomWidth: 0, justifyContent: "center" }}
            >
              <Button
                buttonStyleProps={{
                  marginRight: 0,
                  marginLeft: 0,
                  borderColor: "#ee4035",
                  backgroundColor: "#ee4035"
                }}
                textStyleProps={{ color: "#FFF", fontWeight: "bold" }}
                // onPress={() => {
                //   this.props.getAllTopBrand();
                //   Actions.categoriesList({ isShowBrand: true });
                // }}
              >
                Montres
              </Button>
            </CardSection>
          </Card>
          <Card style={cardStyle}>
            <CardSection style={{ borderBottomWidth: 0 }}>
              <Image
                source={require("../assets/images/categories/lunettes.jpg")}
                style={styleImage}
              />
            </CardSection>
            <CardSection
              style={{ borderBottomWidth: 0, justifyContent: "center" }}
            >
              <Button
                buttonStyleProps={{
                  marginRight: 0,
                  marginLeft: 0,
                  borderColor: "#1a1b21",
                  backgroundColor: "#1a1b21"
                }}
                textStyleProps={{ color: "#FFF", fontWeight: "bold" }}
                // onPress={() => {
                //   this.props.getAllTopBrand();
                //   Actions.categoriesList({ isShowBrand: true });
                // }}
              >
                Lunettes
              </Button>
            </CardSection>
          </Card>
          <Card style={cardStyle}>
            <CardSection style={{ borderBottomWidth: 0 }}>
              <Image
                source={require("../assets/images/categories/telephone.jpg")}
                style={styleImage}
              />
            </CardSection>

            <CardSection
              style={{ borderBottomWidth: 0, justifyContent: "center" }}
            >
              <Button
                buttonStyleProps={{
                  marginRight: 0,
                  marginLeft: 0,
                  borderColor: "#ee4035",
                  backgroundColor: "#ee4035"
                }}
                textStyleProps={{ color: "#FFF", fontWeight: "bold" }}
                // onPress={() => {
                //   this.props.getAllTopBrand();
                //   Actions.categoriesList({ isShowBrand: true });
                // }}
              >
                Mobiles
              </Button>
            </CardSection>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  styleImage: {
    flex: 1,
    width: null,
    height: 250
  },
  cardStyle: {
    borderWidth: 0,
    marginTop: 0,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 25,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.0,
    shadowRadius: 0,
    elevation: 0
  }
};



export default Home
