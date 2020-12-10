import React, { useLayoutEffect, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Base64 } from 'js-base64'
// import ShopifyBuy from "@shopify/buy-button-js"

// const button = typeof document !== `undefined` ? document.getElementById("button") : null


// const ProductDetail = () => {
//   return null
// }


const ProductDetail = typeof document !== 'undefined' ? ({ product }) => {
  useEffect(() => {

        const ShopifyBuy = require('@shopify/buy-button-js')

        const client = ShopifyBuy.buildClient({
          domain: "258-zine.myshopify.com",
          storefrontAccessToken: "69968bc1590ce4025349e29b889dd80d"
        })
        const ui = ShopifyBuy.UI.init(client);

        const button = typeof document !== `undefined` ? document.getElementById("button") : null

        const quantityTemplate = `<div class="{{data.classes.product.quantity}} {{data.quantityClass}}" data-element="product.quantity">
            {{#data.contents.quantityDecrement}}
              <button class="{{data.classes.product.quantityButton}} {{data.classes.product.quantityDecrement}}" type="button" data-element="product.quantityDecrement">
                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path d="M0 18.75H38.5" stroke="black" stroke-width="1.46667"/>
                </g>
                <defs>
                <clipPath id="clip0">
                <rect width="38.5" height="38.5" fill="white"/>
                </clipPath>
                </defs>
                </svg>
              </button>
            {{/data.contents.quantityDecrement}}
            {{#data.contents.quantityInput}}
              <input class="{{data.classes.product.quantityInput}}" type="number" min="0" aria-label="Quantity" value="{{data.selectedQuantity}}" data-element="product.quantityInput">
            {{/data.contents.quantityInput}}
            {{#data.contents.quantityIncrement}}
              <button class="{{data.classes.product.quantityButton}} {{data.classes.product.quantityIncrement}}" type="button" data-element="product.quantityIncrement">
              <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0)">
              <path d="M0 19.25H38.5" stroke="black" stroke-width="1.46667"/>
              <path d="M19.25 38.5L19.25 -8.34465e-07" stroke="black" stroke-width="1.46667"/>
              </g>
              <defs>
              <clipPath id="clip0">
              <rect width="38.5" height="38.5" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              </button>
            {{/data.contents.quantityIncrement}}
           </div>`;

        const buttonTemplate = `<div class="{{data.classes.product.buttonWrapper}}" data-element="product.buttonWrapper"><button {{#data.buttonDisabled}}disabled{{/data.buttonDisabled}} class="{{data.classes.product.button}} {{data.buttonClass}}" data-element="product.button"><p>{{data.buttonText}}</p>
        <svg width="78" height="36" viewBox="0 0 78 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 18L76 18" stroke="black" stroke-width="2"/>
        <path d="M59 35L76 18L59 0.999997" stroke="black"stroke-width="2"/>
        </svg>
        </button></div>`;
        const productTemplates = {
          "button": buttonTemplate,
          "quantity": quantityTemplate,
          "buttonWithQuantity": `<div class="{{data.classes.product.buttonWithQuantity}}" data-element="product.buttonWithQuantity">${quantityTemplate}${buttonTemplate}</div>`
        }

        ui.createComponent("product", {
            id: 6111154438324,
            node: button,
            options: {
              "product": {
                "templates": productTemplates,
                "iframe": false,
                "styles": {
                  "buttonWithQuantity": {
                    "text-align": "center",
                    "display": "flex",
                    "flex-direction": "column"
                  },
                  "button": {
                    "border": "1px solid rgb(0,0,0) !important",
                    "font-size": "35px",
                    "padding": "10px 20px",
                    "color": "#000000",
                    "background-color": "rgb(239, 239, 239)",
                    ":hover": {
                      "background-color": "rgb(215, 215, 215)"
                    },
                    "transition": "none",
                    "border-radius": "20px",
                    "border-top-left-radius": "20px !important",
                    "border-bottom-left-radius": "20px !important"
                  },
                  "quantity": {
                    "border": "1px solid rgb(118, 118, 118) !important",
                    "border-radius": "3px !important"
                  },
                  "quantityInput": {
                    "border": "none !important",
                    "font-size": "13px",
                    "padding": "0",
                    "width": "30px !important"
                  }
                },
                "buttonDestination": "checkout",
                "contents": {
                  "img": false,
                  "button": false,
                  "buttonWithQuantity": true,
                  "title": false,
                  "price": false,
                  "quantityIncrement": true,
                  "quantityDecrement": true
                },
                "text": {
                  "button": "BUY THE ZINE"
                }
              },
            "cart": {
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              },
              "popup": false
            }
          }
        })


    }, [])


    
  return (
          <div id="button">

          </div>
  )
} : () => {
 return null
}

const Cart = () => {


  return (
    <div>
            <ProductDetail />
    </div>
  )
}

export default Cart

