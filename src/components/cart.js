import React, { useLayoutEffect } from 'react'
import ShopifyBuy from "@shopify/buy-button-js"
import { graphql, useStaticQuery } from 'gatsby'


import { Base64 } from 'js-base64'

import "../styles/revert-buy-button.scss"

const ProductDetail = () => {
  return null
}


// const ProductDetail = typeof document !== `undefined` ? ({ product }) => {
//   useLayoutEffect(() => {

//         const client = ShopifyBuy.buildClient({
//           domain: "258-test.myshopify.com",
//           storefrontAccessToken: "106c29a8e7b0a5d0237cbcb80429183d"
//         })
//         const ui = ShopifyBuy.UI.init(client);
//         const decodded = Base64.decode(product.shopifyId);
//         const acutalId = decodded.replace("gid://shopify/Product/", "");

//         const button = typeof document !== `undefined` ? document.getElementById("button") : null
        
//         ui.createComponent("product", {
//             id: acutalId,
//             node: button,
//             options: {
//               "product": {
//                 "styles": {
//                   "buttonWithQuantity": {
//                     "text-align": "left"
//                   },
//                   "button": {
//                     "border": "1px solid rgb(118, 118, 118) !important",
//                     "font-size": "13px",
//                     "padding": "1px 6px",
//                     "color": "#000000",
//                     "background-color": "rgb(239, 239, 239)",
//                     ":hover": {
//                       "background-color": "rgb(215, 215, 215)"
//                     },
//                     "transition": "none",
//                     "border-radius": "3px",
//                     "border-top-left-radius": "3px !important",
//                     "border-bottom-left-radius": "3px !important",
//                     "margin-left": "10px !important"
//                   },
//                   "quantity": {
//                     "border": "1px solid rgb(118, 118, 118) !important",
//                     "border-radius": "3px !important"
//                   },
//                   "quantityInput": {
//                     "border": "none !important",
//                     "font-size": "13px",
//                     "padding": "0",
//                     "width": "30px !important"
//                   }
//                 },
//                 "buttonDestination": "checkout",
//                 "contents": {
//                   "img": false,
//                   "button": false,
//                   "buttonWithQuantity": true,
//                   "title": false,
//                   "price": false
//                 },
//                 "text": {
//                   "button": "Buy now"
//                 }
//               },
//             "cart": {
//               "text": {
//                 "total": "Subtotal",
//                 "button": "Checkout"
//               },
//               "popup": false
//             }
//           }
//         })
//     })
    
//   return (
//           <div id="button"></div>
//   )
// } : () => {
//  return null
// }

const Cart = () => {

  const data = useStaticQuery(graphql`
  query ProductLayOutQuery {
    shopifyProduct(handle: {eq: "my-cool-magazine"}) {
        handle
        title
        description
        descriptionHtml
        id
        shopifyId
        variants {
            sku
            title
            price
            id
        }
    }
}
  `)

  return (
    <div>
            <p>my cool magazine</p>
            <p>description</p>
            <p>price: $30?</p>
            <ProductDetail  product={data.shopifyProduct}/>
    </div>
  )
}

export default Cart

