const Empty = document.getElementById("empty_div");
const data = [
  {
    image: "./images/p1.webp",
    title: "Selected poems",
    author: "by Gulzar",
    rating: "4.8★",
    price: "₹159",
  },
  {
    image: "./images/p2.webp",
    title: "naraz",
    author: "Rahat Indori",
    rating: "4.7★",
    price: "₹159",
  },
  {
    image: "./images/p3.webp",
    title: "Yesterday I Was The Moon",
    author: "Noor Unnahar",
    rating: "4.5★",
    price: "₹227",
  },
  {
    image: "./images/p4.webp",
    title: "Rumi",
    author: "Farrukh Dhondy",
    rating: "4.8★",
    price: "₹291",
  },
  {
    image: "./images/p5.webp",
    title: "Milk And Honey",
    author: "Rupi Kaur",
    rating: "4.6★",
    price: "₹342",
  },
  // {
  //     image:'../poetry/images/p6.webp',
  //     title:'Mein Jo Hoon,Jon Elia Hoon',
  //     author:'Dr. Kumar Viswas',
  //     rating:'4.6★',
  //     price:'₹360'
  // },
  {
    image: "./images/p7.webp",
    title: "Sweet Adeline",
    author: "Robert L. Brunker",
    rating: "4.2★",
    price: "₹501",
  },
  {
    image: "./images/p8.webp",
    title: "Meri Fitrat Hai Mastana",
    author: "Manoj Muntasir",
    rating: "4.8★",
    price: "₹186",
  },
  {
    image: "./images/p9.webp",
    title: "Pukhraj",
    author: "Gulzar",
    rating: "4.4★",
    price: "₹217",
  },
  {
    image: "./images/p12.webp",
    title: "Muhajirnama",
    author: "Manawwar Rana",
    rating: "4.6★",
    price: "₹184",
  },
  {
    image: "./images/p10.webp",
    title: "Geetanjali",
    author: "Rabindranath Tagore",
    rating: "4.4★",
    price: "₹145",
  },
  {
    image: "./images/p13.webp",
    title: "Hitopadesha",
    author: "Narayana",
    rating: "4.7★",
    price: "₹367",
  },
  {
    image: "./images/p14.webp",
    title: "Kaisa Kutta Hai",
    author: "Rahgir",
    rating: "4.6★",
    price: "₹149",
  },
  // {
  //     image:'../poetry/images/p11.webp',
  //     title:'Kuchh Ishq Kiya Kuchh Kaam Kiya',
  //     author:'Piyush Mishra',
  //     rating:'4.4★',
  //     price:'₹175'
  // },
  // {
  //     image:'../poetry/images/p15.webp',
  //     title:'Kuchh Ishq Kiya Kuchh Kaam Kiya',
  //     author:'Piyush Mishra',
  //     rating:'4.4★',
  //     price:'₹175'
  // },
  // {
  //     image:'../images/kuchh-ishq-kiya-kuchh-kaam-kiya-original-imagmygysu2pfchf.webp',
  //     title:'Kuchh Ishq Kiya Kuchh Kaam Kiya',
  //     author:'Piyush Mishra',
  //     rating:'4.4★',
  //     price:'₹175'
  // },
];

function start() {
  data.forEach((el) => {
    const parent_div = document.createElement("div");
    parent_div.id = "parent_div";
    const div = document.createElement("div");
    div.id = "parent1_div";
    const div1 = document.createElement("div1");
    div1.id = "child_div";
    const image = document.createElement("img");
    image.src = el.image;
    image.alt = "error";
    const title = document.createElement("h2");
    title.innerText = el.title;
    title.id = "t";
    const author = document.createElement("h4");
    author.innerText = el.author;
    author.id = "a";
    const rating = document.createElement("p");
    rating.innerText = el.rating;
    rating.id = "r";
    const price = document.createElement("h4");
    price.innerText = el.price;
    price.id = "p";
    div.append(image);
    div1.append(div, title, author, rating, price);
    parent_div.append(div1);
    Empty.append(parent_div);
  });
}
start();