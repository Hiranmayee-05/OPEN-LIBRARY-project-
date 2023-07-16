const Empty = document.getElementById("empty_div");
const data=[
         {
            image: "../img/62926938 (1).jpg",
            title: "The Seven Year Slip",
            author:"Ashley Poston",
            rating: "4.43/5",
            price: "10.99$"
},
{
    image: "../img/13335037.jpg",
    title: "Divergent",
    author:"Veronica Roth ",
    rating: "4.15/5",
    price: "$14.55"
},

{
        image:"../img/59127642.jpg",
        title:"Trials of the Innermost",
        author:"Jonathan Fuller",
        rating:"3.89/5",
        price:"$13.99",
},
{
        image:"../img/63910884.jpg",
        title:"The Chaperone",
        author:"M.Hendrix",
        rating:"3.89/5",
        price:"$7.39",
},
{
    image:"../img/61780027.jpg",
    title:"The Ruby Code",
    author:"Jessica Khoury",
    rating:"4.29/5",
    price:"$13.99",
},
{
    image:"../img/58775691.jpg",
    title:"The Road To Rosewell",
    author:"Connie Willis",
    rating:"3.97/5",
    price:"$10.99",
},
{
        image:"../img/62854825.jpg",
        title:"The Ghost Of Trappist",
        author:"K.B. Wagers",
        rating:"4.30/5",
        price:"$13.99",
},
{
        image:"../img/61885024.jpg",
        title:"The Edge Of Sleep",
        author:"Jake Emanuel" ,       
        rating:"3.66/5",
        price:"$14.99",
},
{
        image:"../img/153591718.jpg",
        title:"The Surviving Sky",
        author:"Kritika H. Rao",
        rating:"3.88/5",
        price:"$9.99",
},
{
    image:"../img/62711641.jpg",
    title:"Fractal Noise",
    author:"Christopher Paolini",
    rating:"3.50/5",
    price:"$14.99",
},
{
    image:"../img/1656001.jpg",
    title:"The Host",
    author:"Stephenie Meyer",
    rating:"3.85/5",
    price:"$8.99",
},
{
    image:"../img/9275658.jpg",
    title:"Legend",
    author:"Marie Lu",
    rating:"4.16/5",
    price:"$12.99",
},


];

        data.map((el)=>{
                const div=document.createElement("div");
                const image=document.createElement("img");
                image.src=el.image;
                image.alt="error";
                const title=document.createElement("h2");
                title.innerText=el.title;
                const author=document.createElement("p")
                author.innerText=el.author;
                const ratings=document.createElement("p");
                ratings.innerText=el.rating;
                const price=document.createElement("h4");
                div.append(image,title,author,ratings,price);
                Empty.append(div);
        });
