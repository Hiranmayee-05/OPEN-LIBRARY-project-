const Empty = document.getElementById("empty_div");
const data =[
    {
        image:'./poetry/images/selected-poems-original-imag99nnpamacmhz.webp',
        title:'Selected poems',
        author:'by Gulzar',
        rating:'4.8★',
        price:'₹159'
    },
    {
        image:'poetry/images/naraz-original-imaggnhesg4t2hby.webp',
        title:'naraz',
        author:'Rahat Indori',
        rating:'4.7★',
        price:'₹159'
    },
    {
        image:'poetry/images/yesterday-i-was-the-moon-original-imafhykzqx8gvpng.webp',
        title:'Yesterday I Was The Moon',
        author:'Noor Unnahar',
        rating:'4.5★',
        price:'₹227'
    },
    {
        image:'poetry/images/rumi-a-new-translation-original-imaesbtgvgzrufph.webp',
        title:'Rumi',
        author:'Farrukh Dhondy',
        rating:'4.8★',
        price:'₹291'
    },
    {
        image:'poetry/images/milk-and-honey-original-imafxz8grmyevdx2.webp',
        title:'Milk And Honey',
        author:'Rupi Kaur',
        rating:'4.6★',
        price:'₹342'
    },
    {
        image:'poetry/images/mein-jo-hoon-jon-elia-hoon-original-imafbxyfynthhgzd.webp',
        title:'Mein Jo Hoon,Jon Elia Hoon',
        author:'Dr. Kumar Viswas',
        rating:'4.6★',
        price:'₹360'
    },
    {
        image:'poetry/images/sweet-adeline-a-mother-s-kitchen-poetry-and-her-son-s-original-imagkpjye7yc277z.webp',
        title:'Sweet Adeline',
        author:'Robert L. Brunker',
        rating:'4.2★',
        price:'₹501'
    },
    {
        image:'poetry/images/meri-fitrat-hai-mastana-original-imaghnhw8fg9rzeg.webp',
        title:'Meri Fitrat Hai Mastana',
        author:'Manoj Muntasir',
        rating:'4.8★',
        price:'₹186'
    },
    {
        image:'poetry/images/pukhraj-original-imag39frtgyeggjz.webp',
        title:'Pukhraj',
        author:'Gulzar',
        rating:'4.4★',
        price:'₹217'
    },
    {
        image:'poetry/images/muhajirnama-original-imafbyffrsvmh76m.webp',
        title:'Muhajirnama',
        author:'Manawwar Rana',
        rating:'4.6★',
        price:'₹184'
    },
    {
        image:'poetry/images/gitanjali-original-imaggnhegkcrakqf.webp',
        title:'Geetanjali',
        author:'Rabindranath Tagore',
        rating:'4.4★',
        price:'₹145'
    },
    {
        image:'poetry/images/hitopadesha-by-narayana-a-new-english-translation-original-imageg3e76fhgjfv.webp',
        title:'Hitopadesha',
        author:'Narayana',
        rating:'4.7★',
        price:'₹367'
    },
    {
        image:'poetry/images/kaisa-kutta-hai-original-imagc3chgap89gpg.webp',
        title:'Kaisa Kutta Hai',
        author:'Rahgir',
        rating:'4.6★',
        price:'₹149'
    },
    {
        image:'poetry/images/kuchh-ishq-kiya-kuchh-kaam-kiya-original-imagmygysu2pfchf.webp',
        title:'Kuchh Ishq Kiya Kuchh Kaam Kiya',
        author:'Piyush Mishra',
        rating:'4.4★',
        price:'₹175'
    },
    {
        image:'poetry/images/kuchh-ishq-kiya-kuchh-kaam-kiya-original-imagmygysu2pfchf.webp',
        title:'Kuchh Ishq Kiya Kuchh Kaam Kiya',
        author:'Piyush Mishra',
        rating:'4.4★',
        price:'₹175'
    },
    {
        image:'poetry/images/kuchh-ishq-kiya-kuchh-kaam-kiya-original-imagmygysu2pfchf.webp',
        title:'Kuchh Ishq Kiya Kuchh Kaam Kiya',
        author:'Piyush Mishra',
        rating:'4.4★',
        price:'₹175'
    },
]

function start(){
    data.forEach((el)=>{
        const parent_div = document.createElement("div");
        parent_div.id = "parent_div";
        const div = document.createElement("div");
        div.id="parent1_div";
        const div1=document.createElement("img");
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
        const rating=document.createElement("p");
        rating.innerText = el.rating;
        rating.id = "r"
        const price = document.createElement("h4");
        price.innerText = el.price;
        price.id = "p"
        div.append(image);
        div1.append(div,title,author,rating,price);
        parent_div.append(div1);
        Empty.append(parent_div);
    })
};
start();