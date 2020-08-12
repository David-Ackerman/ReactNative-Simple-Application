import React, { Component } from 'react';
import {View, Text, Button, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import api from '../../services/api';



export default class Home  extends Component{

   /*function navigateToUsers({ navigation }){
      navigation.navigate('Users');
   }*/
   state = {
      productInfo: {},
      docs: [],
      page: 1
   };
   componentDidMount(){
      this.loadProducts();
   }
   loadProducts = async (page = 1) => {
      const response = await api.get(`/products?page=${page}`);
      const { docs, ...productInfo } = response.data;

      this.setState({
         docs: [...this.state.docs, ...docs],
         productInfo,
         page
      });
   }
   loadMore = () => {
      const { page, productInfo } = this.state;
      if(page === productInfo.pages) return;

      const pageNumber = page + 1;
      this.loadProducts(pageNumber);
   };
   

   renderItem = ({ item }) => (
      <View style={styles.productContainer}>
         <Text style={styles.productTitle}>{item.title}</Text>
         <Text style={styles.productDescription}>{item.description}</Text>

         <TouchableOpacity 
            style={styles.productButton}
            onPress={() => {
               this.props.navigation.navigate("Product", { product: item});
               //console.log(item);
            }}
         >
            <Text style={styles.productButtonText}>Acessar</Text>
         </TouchableOpacity>
      </View>
   )

   render(){
      return(
         <View style={styles.container}>
            <FlatList
              contentContainerStyle={styles.list}
              data={this.state.docs}
              keyExtractor={item => item._id}
              renderItem={this.renderItem}
              onEndReached={this.loadMore}
              onEndReachedThreshold={0.2}
            />
            <Button title="Navigate to Users" />
         </View>
      );
   };
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fafafa"
   },
   list: {
      padding: 20
   },
   productContainer: {
      backgroundColor: "#FFF",
      borderWidth: 1,
      borderColor: "#DDD",
      borderRadius: 5,
      padding: 20,
      marginBottom: 20 
   },
   productTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333"
   },
   productDescription: {
      fontSize: 16,
      color: "#999",
      marginTop: 5,
      lineHeight: 24
   },
   productButton: {
      height: 42,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: "#7159c1",
      backgroundColor: 'transparent',
      justifyContent: "center",
      alignItems: "center",
      marginTop: 10
   },
   productButtonText: {
      fontSize: 16,
      color: "#7159c1",
      fontWeight: 'bold'
   }
});

/*
export default function Home ({ navigation }){
   function navigateToUsers(){
      navigation.navigate('Users');
   }
   
   

   return(
      <View>
         <Text> Home </Text>
         <Button title="Navigate to Users" onPress={navigateToUsers}/>
      </View>
   );
}*/