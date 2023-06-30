import React from "react";
import "./App.css";
// import CartItem from './CartItem';
import Cart from "./Cart";
import Navbar from "./Navbar";
// import {db} from "./Firebase"; 
import firebase from "./Firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
    this.db=firebase.firestore();     //To get the firestore in constructor
  }

  componentDidMount() {
    // firebase
      // .firestore()
      this.db
      .collection("products")
      .get()
      .then(snapshot => {
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
  }

  handleIncreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products
    });
  };

  handleDecreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;

    this.setState({
      products
    });
  };

  handleDeleteProduct = id => {
    const { products } = this.state;

    const items = products.filter(product => product.id !== id);

    this.setState({
      products: items
    });
  };

  getcountOfCartItems = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach(product => {
      count += product.qty;
    });

    return count;
  };

  getcartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map(product => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return "";
    });

    return cartTotal;
  };

  // Now Create an Adding a Products in Firebase
  adProduct=()=>{
    this.db  //Instead of firebase.firestore()
    .collection("products")
    .add({
      img: "",
      price:999,
      qty: 2,
      title:"Washing Machine"
    })
.then(docRef=>{
  docRef.get().then(snapshot=>{
    console.log("Product has been added Successfully", snapshot.data());
  });
})
.catch(error=>{
  console.log(error);
});
  };
  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getcountOfCartItems()} />
        <button onClick={this.addProduct}
        style={{padding:20,fontSize:20}}>Add a Product</button>

        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          products={products}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL : {this.getcartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
