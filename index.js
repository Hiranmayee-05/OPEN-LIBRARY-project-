// import firstimage from './images/rrr.jpeg';
// const { empty } = require("prelude-ls");

// const sbutton = document.getElementById("show_image");
const empty  = document.getElementById("empty_div");
// const dbutton = document.getElementById("donot_show_image");


// const arr  = [1,2,3,4,5];
// arr.map(el) => {
//     console.log(el);
// }
//making obj

const data = [
    {
      image : './images/g.webp',
        title : "This love that feels Right💚",
        author : "by Claire Wilder  | 27 October 2021",
        rating : "4.6★",
        price : "₹999 20% off",
        delivery : "Free delivery"
    },
    {
        image : './images/b.webp',
        title : "Something i never told you❤️️",
        author : "by Shravya Bhinder  | 22 March 2016",
        rating : "4.6★",
           price : "₹599 20% off",
           delivery : "Free delivery"
     
     },
     {
        image : './images/c.webp',
        title : "Wish i could tell you❤",
        author : "by Rina Kent  | 12 March 2020",
        rating : "4.6★",
           price : "₹980 20% off",
           delivery : "Free delivery"
       
     },
     {
        image : './images/d.webp',
        title : "The Perfect us❤",
        author : "by Autumn Miller | 24 july 2022",
        rating : "4.6★",
           //star_link
        price : "₹699 20% off",
        delivery : "Free delivery"
       
     },
     { 
        image : './images/e.webp',
        title : "One Arranged Marraige Murder",
         author : "by Chetan bhagat | 12 January 2020",
         rating : "4.6★",
         price : "₹999 20% off",
         delivery : "Free delivery"
   
     },
     {
        image : './images/f.webp',
        title : "Fell the last breath ",
        author : "by L. Blakely  | 13 September 2022",
        rating : "4.6★",
        price : "₹888 20% off",
        delivery : "Free delivery"
     },
     {
        image : './images/7.webp',
        title : "A Thousand Kisses Deep",
        author : "by Chakraborty Novoneel  | 5 June 2016",
        rating : "4.6★",
        price : "₹889 20% off",
        delivery : "Free delivery"
     },
     {
        image : './images/8.webp',
        title : "The Cocktail of Love",
        author : "by Maloo Dhruv  | 9 July 2014",
        rating : "4.6★",
        price : "₹660 20% off",
        delivery : "Free delivery"
     },
     {
        image : './images/9.webp',
        title : "If it's Not Forever it's Not Love",
        author : "by  Datta Durjoy  | 15 June 2019",
        rating : "4.6★",
         price : "₹888 20% off",
         delivery : "Free delivery"
     },
     {
        image : './images/10.webp',
        title : "Write Me A Love Story",
        author : "by Singh Ravinder  | 21 June 2015",
        rating : "4.6★",
        price : "₹334 20% off",
        delivery : "Free delivery"
     },
     {
        image : './images/11.webp',
        title : "Love by Chance",
        author : "by Kashyap Mansi  | 5 June 2014",
        rating : "4.6★",
        price : "₹200 20% off",
        delivery : "Free delivery"
     },
     {
        image : './images/12.webp',
        title : "Our Story of Love",
        author : "by  Aneel Keshav | 15 June 2021",
        rating : "4.6★",
        price : "₹888 20% off",
        delivery : "Free delivery"
     },
     {
        image : './images/13.webp',
        author : "by Pandey Ajay K | 25 June 2014",
        rating : "4.6★",
        price : "₹888 20% off",
        delivery : "Free delivery"
     },
     {
        image : './images/14.webp',
        title : "My Twisted Love Story💙",
        author : "by Singh Arun  | 5 June 2014",
        rating : "4.6★",
        price : "₹888 20% off",
        delivery : "Free delivery"
     },
     {
        image : './images/15.webp',
        title : "When Love Came Calling♡ ♥💕❤",
        author : "by  Shenoy Preeti  | 09 Jan 2022",
        rating : "4.6★",
        price : "₹250 20% off",
        delivery : "Free delivery"
     },
];
// sbutton.addEventListener ("click",function(){
    data.map((el) => {
      const div1 = document.createElement("div");
      div1.id  = "child_div2";
        const div = document.createElement("div");
        div.id = "child_div";
        const parentdiv = document.createElement("div");
        parentdiv.id = "parent_div";
        const image =  document.createElement("img");
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
        const price =  document.createElement("h3");
        price.innerText = el.price;
        price.id = "price";
        const delivery = document.createElement("h5");
        delivery.innerText = el.delivery;
        delivery.id = "delivery_id";
        div1.append(image);
        div.append(div1,title,author,rating,price,delivery);
        parentdiv.append(div);
        empty.append(parentdiv);
        // empty.style.display = "block";
              //   const ratingimage  = document.createElement("img");
      //   ratingimage.src = el.img;
      //   ratingimage.alt = "error";
      //   ratingimage.id = "rating_img";

    })
//});
// dbutton.addEventListener("click",function(){
//     // const div = document.createElement("div");
//     // empty.style.display =  "none";
//     window.location.reload();
// });

// html elemnt= click 
// callback function = function() 
// sbutton.addEventListener("click" ,function(){
//      const div = document.createElement("div");   
//     //  child div
//     div.id = "f";
//     const image = document.createElement("img");
//     image.src = "data:image/jpeg;base64,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";
//     image.alt="error";
//     const para  = document.createElement("p");
//     para.innerText = "hello i am satya:";
//     // append = rendering
//     div.append(image,para,data);
//     empty.append(div);
//     empty.style.display = "block";

//     //pARrent div
// });















































































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
