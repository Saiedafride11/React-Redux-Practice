import React from 'react';
import Product from '../Product/Product';
import {addToCart} from '../../redux/actions/cartActions';
import {connect} from 'react-redux';

const Shop = (props) => {
    console.log(props)
    // const products = [
    //     { name: 'Lenovo Laptop', id: 1},
    //     { name: 'Afsus Laptop', id: 2},
    //     { name: 'Dell Laptop', id: 3},
    //     { name: 'HP Laptop', id: 4},
    //     { name: 'Toshiba Laptop', id: 5},
    // ];

    const {products, addToCart} = props; // Redux store teke 
    return (
        <div>
            <h1>This is Shop {products.length}</h1>
            {
                products.map(product => <Product product={product} addToCart={addToCart} key={product.id}></Product>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products
    }
  }

const mapDispatchToProps = {
    addToCart: addToCart
    
  }

// const connectToStore = connect(mapStateToProps, mapDispatchToProps);
// connect(mapStateToProps, mapDispatchToProps)(Shop);

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
