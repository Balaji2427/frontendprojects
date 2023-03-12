import React from 'react';
import Banner from '../images/banner1.jpg';
import Product1 from '../images/product1.jpg';
import Product2 from '../images/product2.jpg';
import Product3 from '../images/product3.jpg';
import Product4 from '../images/product4.jpg';
import Product5 from '../images/product5.jpg';
import Product6 from '../images/product6.jpg';
import Product from './Product';

const Home = () => {
  return (
    <div className="home">
        <div className="home_container">
            <img 
                className="home_image"
                src={Banner} 
                alt="Banner" 
            />

            <div className="home_row">
                <Product
                    id="12321341"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image={Product1}
                />
                <Product
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image={Product2}
                />
            </div>

            <div className="home__row">
                <Product
                    id="4903850"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199.99}
                    rating={3}
                    image={Product3}
                />
                <Product
                    id="23445930"
                    title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                    price={98.99}
                    rating={5}
                    image={Product4}
                />
                <Product
                    id="3254354345"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image={Product5}
                />
            </div>

            <div className="home__row">
                <Product
                    id="90829332"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image={Product6}
                />
            </div>
        </div>
    </div>
  )
}

export default Home
