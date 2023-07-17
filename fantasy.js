const Empty = document.getElementById("emp_div");

const data = [
  {
    image: "./images/fi1.webp",
    title: "Love, Past 7 ",
    rating: " RATINGS: 4.2/5",
    price: " PRICE:262/-",
  },
  {
    image: "./images/fi2.webp",
    title: "The Secret Garden",
    rating: " RATINGS: 3.9/5",
    price: " PRICE:199/-",
  },
  {
    image: "./images/fi3.webp",
    title: "The Hobbit & The Lord of the Rings Boxed Set",
    rating: " RATINGS: 4.2/5",
    price: " PRICE:1399/-",
  },
  {
    image: "./images/fi4.webp",
    title: "Fireborn: Twelve and the Frozen Forest",
    rating: " RATINGS: 3.2/5",
    price: " PRICE:316/-",
  },
  {
    image: "./images/fi5.webp",
    title: "To Kill a Kingdom",
    rating: " RATINGS: 4.1/5/-",
    price: " PRICE:125",
  },
  {
    image: "./images/fi6.webp",
    title: "The Complete Novels of Sherlock Holmes",
    rating: " RATINGS: 4.4/5",
    price: " PRICE:179/-",
  },
  {
    image: "./images/fi7.webp",
    title: "The Name of the Wind",
    rating: " RATINGS: 4.3/5",
    price: " PRICE:1750/-",
  },
  {
    image: "./images/fi8.webp",
    title: "Satyayoddha Kalki: Eye of Brahma ",
    rating: " RATINGS: 4.7/5",
    price: " PRICE:229/-",
  },
  {
    image: "./images/fi9.jpg",
    title: "The Shadows Between Us",
    rating: " RATINGS: 4.0/5",
    price: " PRICE: 359/-",
  },
  {
    image: "./images/fi10.jpg",
    title: "Babel",
    rating: " RATINGS: 3.9/5",
    price: " PRICE: 899/-",
  },
  {
    image: "./images/fi11.jpg",
    title: "House of Salt and Sorrows",
    rating: " RATINGS: 4.0/5",
    price: " PRICE: 454/-",
  },
  {
    image: "./images/fi12.jpg",
    title: "The Witchs Boy",
    rating: " RATINGS: 4.6/5",
    price: " PRICE: 325/-",
  },
];

data.map((el) => {
  const div = document.createElement("div");
  const image = document.createElement("img");
  image.src = el.image;
  image.alt = "error";
  const title = document.createElement("h2");
  title.innerText = el.title;
  //   const author = document.createElement("p");
  //   author.innerText = el.author;
  const ratings = document.createElement("h4");
  ratings.innerText = el.rating;
  const price = document.createElement("h3");
  price.innerText = el.price;
  div.append(image, title, ratings, price);
  Empty.append(div);
});
