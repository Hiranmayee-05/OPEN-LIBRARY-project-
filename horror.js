// const SButton = document.getElementById("show_image");
const Empty = document.getElementById("empty_div");
const data = [
  {
    image: "./images/h2.webp",
    title: "I Am Watching You",
    author: "by Tersaa Driscoll",
    rating: "4.6★",
    price: "₹999",
  },
  {
    image: "./images/h3.webp",
    title: "One of Us Is Lying",
    author: "by Karen M. McManus ",
    rating: "4.8★",
    price: "₹1299",
  },
  {
    image: "./images/h4.webp",
    title: "The Watcher",
    author: "by Netta Newbound ",
    rating: "4.3★",
    price: "₹899",
  },
  {
    image: "./images/h5.webp",
    title: "The Assassins Betrayal",
    author: "by Auston King ",
    rating: "4.0★",
    price: "₹599",
  },
  {
    image: "./images/h6.webp",
    title: "A Room with a View",
    author: "by E. M. Forster",
    rating: "4.8★",
    price: "₹699",
  },
  {
    image: "./images/h7.webp",
    title: "Twenty Years Later",
    author: "by Charlie Donlea",
    rating: "3.9★",
    price: "₹579",
  },
  {
    image: "./images/h8.webp",
    title: "The Art of Arkham horror",
    author: "by Asmodee",
    rating: "4.9★",
    price: "₹679",
  },
  {
    image: "./images/h9.jpg",
    title: "The Sleep Experiment",
    author: "by  Jeremy Bates",
    rating: "4.0★",
    price: "₹795",
  },
  {
    image: "./images/h10.jpg",
    title: "Though a Night of Horrors",
    author: "by Shelly Henley Kelly",
    rating: "4.5★",
    price: "₹722",
  },
  {
    image: "./images/h14.jpg",
    title: "Agatha Christie Premium Collection",
    author: "by Agatha christie",
    rating: "4.5★",
    price: "₹824",
  },
  {
    image: "./images/h12.jpg",
    title: "1-2-3 Scream!",
    author: "by  R. U. Ginns and Javier Espila",
    rating: "4.9★",
    price: "₹679",
  },
  {
    image: "./images/h13.jpg",
    title: "Dont Dare to dream",
    author: "by Dan Friedman",
    rating: "3.9★",
    price: "₹1390",
  },
  {
    image: "./images/h15.jpg",
    title: "Escape Room",
    author: "by Maren Stoffels ",
    rating: "4.6★",
    price: "₹789",
  },
  {
    image: "./images/h8.webp",
    title: "The Art of Arkham horror",
    author: "by Asmodee",
    rating: "4.9★",
    price: "₹679",
  },
  {
    image: "./images/h16.webp",
    title: "The Ultimate Serial Killer",
    author: "by Jack Rosewood ",
    rating: "4.9★",
    price: "₹1259",
  },
  {
    image: "./images/h17.webp",
    title: "You Think You Know Me",
    author: "by Ryan Green",
    rating: "4.0★",
    price: "₹979",
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