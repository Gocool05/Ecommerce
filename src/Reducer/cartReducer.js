import React from 'react'

const initialState = {
items:[
  {id:1, name:'Item 1', price:100, quantity:5,img:'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg'},
  {id:2, name:'Item 2', price:200, quantity:3,img:'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg'},
  {id:3, name:'Item 3', price:300, quantity:2,img:'https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg'},
],
addedItems:[],
total:0

};

const cartReducer = (state = initialState, action) => {
return state;
}

export default cartReducer;