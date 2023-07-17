// const SButton = document.getElementById("show_image");
const Empty = document.getElementById("empty_div");
const data = [
  {
    image: "./images/t1.webp",
    title: "I Hear You",
    author: "by Nidhi Upadhyay",
    rating: "4.6★",
    price: "₹456",
  },
  {
    image: "./images/t2.webp",
    title: "Cold Blooded Lve",
    author: "by Girish Dutt Shukla  ",
    rating: "4.8★",
    price: "₹375",
  },
  {
    image: "./images/t3.webp",
    title: "Dark Matter",
    author: "by Netta Newbound ",
    rating: "4.3★",
    price: "₹525",
  },
  {
    image: "./images/t4.jpg",
    title: "The Unexpected guest",
    author: "by Agatha Christie",
    rating: "4.3★",
    price: "₹599",
  },
  {
    image: "./images/t5.webp",
    title: "The Wife Upstairs",
    author: "by Rachel Hawkins ",
    rating: "4.0★",
    price: "₹499",
  },
  {
    image: "./images/t6.webp",
    title: "Girl Alone",
    author: "by Blake Pierce",
    rating: "4.5★",
    price: "₹668",
  },
  {
    image: "./images/t7.webp",
    title: "The Good Girls Guide",
    author: "by Holly Jackson",
    rating: "4.6★",
    price: "₹499",
  },
  {
    image: "./images/t8.webp",
    title: "The Therapist",
    author: "by B A Paris",
    rating: "4.0★",
    price: "₹450",
  },
  {
    image: "./images/t9.webp",
    title: "99 Red Balloons",
    author: "by Elisabeth Carpenter",
    rating: "4.5★",
    price: "₹722",
  },
  {
    image: "./images/t16.jpg",
    title: "Verity",
    author: "by Colleen Hoover",
    rating: "4.5★",
    price: "₹456",
  },
  {
    image: "./images/t10.webp",
    title: "Sidney Sheldon",
    author: "by Sidney Sheldon",
    rating: "4.0★",
    price: "₹679",
  },
  {
    image: "./images/t11.jpg",
    title: "The Girl in the House",
    author: "by Harshvardhan Rao",
    rating: "3.9★",
    price: "₹490",
  },
  {
    image: "./images/t12.jpg",
    title: "Whisper To Me Your Lies",
    author: "by  Novoneel Chakraborty",
    rating: "4.6★",
    price: "₹399",
  },
  {
    image: "./images/t13.jpg",
    title: "Next In Line",
    author: "by Jeffrey Archer ",
    rating: "4.5★",
    price: "₹323",
  },
  {
    image: "./images/t19.webp",
    title: "local Woman Missing",
    author: "by Mary Kubica ",
    rating: "4.9★",
    price: "₹459",
  },
  {
    image: "./images/t15.jpg",
    title: "Bad Liars",
    author: "by  Vikrant Khanna",
    rating: "4.6★",
    price: "₹345",
  },
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