import React from "react";
import "./store.css";
import Album1 from "../components/Images/Album 1.png";
import Album2 from "../components/Images/Album 2.png";
import Album3 from "../components/Images/Album 3.png";
import Album4 from "../components/Images/Album 4.png";
import Cofee from "../components/Images/Cofee.png";
import Shirt from "../components/Images/Shirt.png";
const Store = () => {
  return (
    <div>
      <section class="container content-section">
        <h2 class="section-header">MUSIC</h2>
        <div class="shop-items">
          <div class="shop-item">
            <span class="shop-item-title">Album 1</span>
            <img class="shop-item-image" src={Album1} />
            <div class="shop-item-details">
              <span class="shop-item-price">$12.99</span>
              <button class="btn btn-primary shop-item-button" type="button">
                ADD TO CART
              </button>
            </div>
          </div>
          <div class="shop-item">
            <span class="shop-item-title">Album 2</span>
            <img class="shop-item-image" src={Album2} />
            <div class="shop-item-details">
              <span class="shop-item-price">$14.99</span>
              <button class="btn btn-primary shop-item-button" type="button">
                ADD TO CART
              </button>
            </div>
          </div>
          <div class="shop-item">
            <span class="shop-item-title">Album 3</span>
            <img class="shop-item-image" src={Album3} />
            <div class="shop-item-details">
              <span class="shop-item-price">$9.99</span>
              <button class="btn btn-primary shop-item-button" type="button">
                ADD TO CART
              </button>
            </div>
          </div>
          <div class="shop-item">
            <span class="shop-item-title">Album 4</span>
            <img class="shop-item-image" src={Album4} />
            <div class="shop-item-details">
              <span class="shop-item-price">$19.99</span>
              <button class="btn btn-primary shop-item-button" type="button">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="container content-section">
        <h2 class="section-header">MERCH</h2>
        <div class="shop-items">
          <div class="shop-item">
            <span class="shop-item-title">T-Shirt</span>
            <img class="shop-item-image" src={Shirt} />
            <div class="shop-item-details">
              <span class="shop-item-price">$19.99</span>
              <button class="btn btn-primary shop-item-button" type="button">
                ADD TO CART
              </button>
            </div>
          </div>
          <div class="shop-item">
            <span class="shop-item-title">Coffee Cup</span>
            <img class="shop-item-image" src={Cofee} />
            <div class="shop-item-details">
              <span class="shop-item-price">$6.99</span>
              <button class="btn btn-primary shop-item-button" type="button">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="container content-section">
        <h2 class="section-header">CART</h2>
        <div class="cart-row">
          <span class="cart-item cart-header cart-column">ITEM</span>
          <span class="cart-price cart-header cart-column">PRICE</span>
          <span class="cart-quantity cart-header cart-column">QUANTITY</span>
        </div>
        <div class="cart-items"></div>
        <div class="cart-total">
          <strong class="cart-total-title">Total</strong>
          <span class="cart-total-price">$0</span>
        </div>
        <button class="btn btn-primary btn-purchase" type="button">
          PURCHASE
        </button>
      </section>
    </div>
  );
};

export default Store;
