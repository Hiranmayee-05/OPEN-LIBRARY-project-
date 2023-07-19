// import firstimage from './images/rrr.jpeg';
// const { empty } = require("prelude-ls");

// const sbutton = document.getElementById("show_image");
const empty = document.getElementById("empty_div");
// const dbutton = document.getElementById("donot_show_image");

// const arr  = [1,2,3,4,5];
// arr.map(el) => {
//     console.log(el);
// }
//making obj

const data = [
  {
    image: "./images/g.webp",
    title: "This love that feels Right💚",
    author: "by Claire Wilder  | 27 October 2021",
    rating: "4.6★",
    price: "₹999 20% off",
    delivery: "Free delivery",
  },
  {
    image: "./images/b.webp",
    title: "Something i never told you❤",
    author: "by Shravya Bhinder  | 22 March 2016",
    rating: "4.6★",
    price: "₹599 20% off",
    delivery: "Free delivery",
  },
  {
    image: "./images/c.webp",
    title: "Wish i could tell you❤",
    author: "by Rina Kent  | 12 March 2020",
    rating: "4.6★",
    price: "₹980 20% off",
    delivery: "Free delivery",
  },
  {
    image: "./images/d.webp",
    title: "The Perfect us❤",
    author: "by Autumn Miller | 24 july 2022",
    rating: "4.6★",
    //star_link
    price: "₹699 20% off",
    delivery: "Free delivery",
  },
  {
    image: "./images/e.webp",
    title: "One Arranged Marraige Murder",
    author: "by Chetan bhagat | 12 January 2020",
    rating: "4.6★",
    price: "₹999 20% off",
    delivery: "Free delivery",
  },
  {
    image: "./images/f.webp",
    title: "Fell the last breath ",
    author: "by L. Blakely  | 13 September 2022",
    rating: "4.6★",
    price: "₹888 20% off",
    delivery: "Free delivery",
  },
  {
    image: "./images/7.webp",
    title: "A Thousand Kisses Deep",
    author: "by Chakraborty Novoneel  | 5 June 2016",
    rating: "4.6★",
    price: "₹889 20% off",
    delivery: "Free delivery",
  },
  {
    image: "./images/8.webp",
    title: "The Cocktail of Love",
    author: "by Maloo Dhruv  | 9 July 2014",
    rating: "4.6★",
    price: "₹660 20% off",
    delivery: "Free delivery",
  },
  {
    image: "./images/9.webp",
    title: "If it's Not Forever it's Not Love",
    author: "by  Datta Durjoy  | 15 June 2019",
    rating: "4.6★",
    price: "₹888 20% off",
    delivery: "Free delivery",
  },
  {
    image: "./images/10.webp",
    title: "Write Me A Love Story",
    author: "by Singh Ravinder  | 21 June 2015",
    rating: "4.6★",
    price: "₹334 20% off",
    delivery: "Free delivery",
  },
  {
    image: "./images/11.webp",
    title: "Love by Chance",
    author: "by Kashyap Mansi  | 5 June 2014",
    rating: "4.6★",
    price: "₹200 20% off",
    delivery: "Free delivery",
  },
  {
    image: "./images/12.webp",
    title: "Our Story of Love",
    author: "by  Aneel Keshav | 15 June 2021",
    rating: "4.6★",
    price: "₹888 20% off",
    delivery: "Free delivery",
  },
  {
    image: "./images/13.webp",
    author: "by Pandey Ajay K | 25 June 2014",
    rating: "4.6★",
    price: "₹888 20% off",
    delivery: "Free delivery",
  },
  {
    image: "./images/14.webp",
    title: "My Twisted Love Story💙",
    author: "by Singh Arun  | 5 June 2014",
    rating: "4.6★",
    price: "₹888 20% off",
    delivery: "Free delivery",
  },
  {
    image: "./images/15.webp",
    title: "When Love Came Calling♡ ♥💕❤",
    author: "by  Shenoy Preeti  | 09 Jan 2022",
    rating: "4.6★",
    price: "₹250 20% off",
    delivery: "Free delivery",
  },
];
// sbutton.addEventListener ("click",function(){
data.map((el) => {
  const div1 = document.createElement("div");
  div1.id = "child_div2";
  const div = document.createElement("div");
  div.id = "child_div";
  const parentdiv = document.createElement("div");
  parentdiv.id = "parent_div";
  const image = document.createElement("img");
  image.src = el.image;
  image.alt = "error";
  image.id = "image_id";
  const title = document.createElement("h3");
  title.innerText = el.title;
  title.id = "title";
  const author = document.createElement("h4");
  author.innerText = el.author;
  author.id = "author_id";
  const rating = document.createElement("h5");
  rating.innerText = el.rating;
  rating.id = "rating_id";
  const price = document.createElement("h3");
  price.innerText = el.price;
  price.id = "price";
  const delivery = document.createElement("h5");
  delivery.innerText = el.delivery;
  delivery.id = "delivery_id";
  div1.append(image);
  div.append(div1, title, author, rating, price, delivery);
  parentdiv.append(div);
  empty.append(parentdiv);
  // empty.style.display = "block";
  //   const ratingimage  = document.createElement("img");
  //   ratingimage.src = el.img;
  //   ratingimage.alt = "error";
  //   ratingimage.id = "rating_img";
});

// const sbutton = document.getElementById("showimage");
// const dbutton = document.getElementById("donotshowimage");
// const empty = document.getElementById("empty_div");

// const arr = [1,2,3,4,5];
// // map,foreach,reduce,filter,sort,find
// //filter what ever you want specific item from array
// // foreach return one ele
// //map return array of element

// const data [
//     {
//         image: "D:\mean_and_mern\july7th\images\home1.PNG",
//         title: "iphone",
//         rating : "5*",
//         price : "100000",
//     },
//     {
//         image: "D:\mean_and_mern\july7th\images\home1.PNG",
//         title: "iphone",
//         rating : "5*",
//         price : "100000",
//     },
// ]
// sbutton.addEventListener('click',()=>{
//     data.forEach(el => {
//         const div =  document.createElement("div");
//         const image =  document.createElement("img");
//         image.src = el.image;
//         image.alt = "error";
//         const title =  document.createElement("tittle");
//         title.innerText = el.title;
//         const rating =  document.createElement("rating");
//         rating.innerText=el.rating;
//         const price =  document.createElement("price");
//         price.innerText = el.price;
//         div.append[image,title,rating,price];
//         empty.append[div];
//     });
// });
// arr.map((el) => {
//     console.log(el);
// });
// sbutton.addEventListener('click',function () {
//     const div = document.createElement("div");
//     div.id = "child_div";
//     const image = document.createElement("img");
//     image.src = "D:\mean_and_mern\july7th\images\home1.PNG"
//     image.alt = "errror";
//     image.append(image);
//     empty.append(div);
//     empty.style.display = "block";
// });
// dbutton.addEventListener('click',function(){
//     window.location.reload();
//     empty.style.display="none";
// })