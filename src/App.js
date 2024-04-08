import React, { useState } from 'react';
import { NavbarWithMegaMenu } from './Navbar';
import { CarouselCustomNavigation } from './Carousel';
import { SimpleFooter } from './Footer';
import { Gallery } from './Gallery';

import './App.css';

function App() {

  let data = require("./products.json")

  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState();
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productLikes, setProductLikes] = useState("");

  let handleClick = 
  ( 
    productName,
    productImage,
    productDescription, 
    productPrice, 
    productLikes
  ) => {
    setProductName(productName);
    setProductImage(productImage);
    setProductDescription(productDescription);
    setProductPrice(productPrice);
    setProductLikes(productLikes);
  }

  return (
    <div className="App">
      <header className="App-header">
        <NavbarWithMegaMenu />
      </header>
      <div className='grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible'>
        <h1 className='text-4xl font-bold mt-10 mb-10'>Welcome</h1>
        <CarouselCustomNavigation />
      </div>
      <div className='grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible'>
        <h2 className='text-4xl font-bold mt-5 mb-20'>Articles</h2>
        <div className="grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 lg:px-40">
          {data.map((product) => (
            <Gallery key={product.id} 
            productImage={product.image} 
            productName={product.title} 
            productDescription={product.description}
            productPrice={product.price}
            productLikes={product.rating.count}
            />
          ))}
        </div>

      </div>
      <SimpleFooter />
    </div>
  );
}

export default App;
