const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

display(menu);
function display(array) {
  let menuhtml = array.map(function (value,index) {
    return `  <article class="menu-item">
  <img src="${value.img}" alt="menu item" class="photo"
  <div class="item-info">
    <header>
      <h4>${value.title}</h4>
      <h4 class="price">${value.price}</h4>
    </header>
    <p class="item-text">
      ${value.desc}
    </p>
     <button type="button" class="btn btn-primary" onclick="addtocart(${index})">addtocart</button>
    </div>
    
  
</article>`;
  });

  let but = array.map(function (value) {
    return ` <button type="button" class="filter-btn" data-id="shakes" onclick="filtermenu('${value.category}')">
 ${value.category}
 </button>`;
  });
  document.getElementById("btn").innerHTML = but.join("");
  document.getElementById("menu").innerHTML = menuhtml.join("");
}

function filtermenu(category) {
  let filterarray = menu.filter(function (value) {
    return value.category == category;
  });
  console.log(filterarray);
  display(filterarray);
}
let carts=[];
function addtocart(index){
let myindex=menu[index]
  let d=carts.findIndex(function(value){
    return myindex.title==value.title;
  });
  if(d<0){
    myindex["quan"]=1;
    carts.push(myindex);
  }
  else {
    carts[index].quan = carts[index].quan + 1;
  }
  document.getElementById("col-3").innerText=carts.length;
}

function price()
{
  let p=carts.reduce(function(pre,cuu){
    return pre+cuu.quan*cuu.price;
  },0)
  console.log(p);
  document.getElementById("col-4").innerText=p;
  
}
function asc(){
  let d=menu.sort(function(a,b){
    if(a.price > b.price){
      return 1;
    }
    else{
      return -1;
    } 
  });
  display(d);
}
function des(){
  let d=menu.sort(function(a,b){
    if(a.price > b.price){
      return -1;
    }
    else{
      return 1;
    } 
  });
  display(d);
}
function arrangeData(){
  let d=document.getElementById("sel").value;
  menu.sort(function(a,b){
    if(d=="PA"){
      if(a.price>b.price){
        return 1;
      }
      else
      {
        return -1;
      }
    }
    
     else if(d=="PD"){
        if(a.price>b.price){
          return -1;
        }
        else{
          return 1;
        }
      }
else if(d=="CA"){
  if(a.category>b.category){
    return 1;
  }
  else{
    return -1;
  }
}
else {
  if(a.category<b.category){
    return -1;
  }
  else{
    return 1;
  }
}
    
  });
  display(menu);
}


function filterData()
{
  let t = document.getElementById("fi").value;
  let searchTerm = document.getElementById("searchTerm").value
  let fil = menu.filter(function(value){

    if(t == "C")
    {
      return value.category  == searchTerm;

    }
    else if(t == "P")
    {
      return value.price == searchTerm;
    } 

  })

  display(fil);

}