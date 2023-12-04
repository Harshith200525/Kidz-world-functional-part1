// This is a brute force method to solve the problem.

let cartData = [];
let btnCartBook1 = document.getElementById("book1");
let btnCartBook2 = document.getElementById("book2");
let btnCartBook3 = document.getElementById("book3");
let btnCartBook4 = document.getElementById("book4");
let btnCartBook5 = document.getElementById("book5");
let btnCartBook6 = document.getElementById("book6");
let btnCartGame1 = document.getElementById("game1");
let btnCartGame2 = document.getElementById("game2");
let btnCartGame3 = document.getElementById("game3");
let btnCartGame4 = document.getElementById("game4");
let btnCartCraft1 = document.getElementById("craft1");
let btnCartCraft2 = document.getElementById("craft2");
let btnCartCraft3 = document.getElementById("craft3");
let btnCartCraft4 = document.getElementById("craft4");
let btnCart = document.getElementById("cart");
let btnCartValue = document.getElementById("cart-value");
let tracker = document.getElementById("cart-value");

let totalDoll = 0;
let totalCen = 0;

let totalNum = 0;

let items = [
  {
    name: "This was our pact",
    quantity: 0,
    dollars: 7,
    cents: 49,
  },
  {
    name: "The famous five",
    quantity: 0,
    dollars: 4,
    cents: 59,
  },
  {
    name: "Matilda",
    quantity: 0,
    dollars: 6,
    cents: 80,
  },
  {
    name: "Harry Potter",
    quantity: 0,
    dollars: 10,
    cents: 0,
  },
  {
    name: "For Young Readers",
    quantity: 0,
    dollars: 7,
    cents: 29,
  },
  {
    name: "Wimpy Kid - DIY",
    quantity: 0,
    dollars: 4,
    cents: 99,
  },
  {
    name: "Dart Board",
    quantity: 0,
    dollars: 17,
    cents: 49,
  },
  {
    name: "Connect Four",
    quantity: 0,
    dollars: 19,
    cents: 99,
  },
  {
    name: "Jenga",
    quantity: 0,
    dollars: 20,
    cents: 99,
  },
  {
    name: "Monopoly",
    quantity: 0,
    dollars: 19,
    cents: 49,
  },
  {
    name: "Bookmarks",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Birthday Card",
    quantity: 0,
    dollars: 12,
    cents: 49,
  },
  {
    name: "Stuffed toys",
    quantity: 0,
    dollars: 15,
    cents: 99,
  },
  {
    name: "Dream catcher drawing",
    quantity: 0,
    dollars: 18,
    cents: 49,
  },
];

btnCartBook1.onclick = () => {
  items[0].quantity += 1;
  totalDoll += items[0].dollars;
  totalCen += items[0].cents;
  totalNum += 1;
  btnCartValue.innerHTML = totalNum;
  cartData.push(0);
};

btnCartBook2.onclick = () => {
  items[1].quantity += 1;
  totalDoll += items[1].dollars;
  totalCen += items[1].cents;
  totalNum += 1;
  btnCartValue.innerHTML = totalNum;
  cartData.push(1);
};

btnCartBook3.onclick = () => {
  items[2].quantity += 1;
  totalDoll += items[2].dollars;
  totalCen += items[2].cents;
  totalNum += 1;
  btnCartValue.innerHTML = totalNum;
  cartData.push(2);
};

btnCartBook4.onclick = () => {
  items[3].quantity += 1;
  totalDoll += items[3].dollars;
  totalCen += items[3].cents;
  totalNum += 1;
  btnCartValue.innerHTML = totalNum;
  cartData.push(3);
};

btnCartBook5.onclick = () => {
  items[4].quantity += 1;
  totalDoll += items[4].dollars;
  totalCen += items[4].cents;
  totalNum += 1;
  btnCartValue.innerHTML = totalNum;
  cartData.push(4);
};

btnCartBook6.onclick = () => {
  items[5].quantity += 1;
  totalDoll += items[5].dollars;
  totalCen += items[5].cents;
  totalNum += 1;
  btnCartValue.innerHTML = totalNum;
  cartData.push(5);
};

btnCartGame1.onclick = () => {
  items[6].quantity += 1;
  totalDoll += items[6].dollars;
  totalCen += items[6].cents;
  totalNum += 1;
  btnCartValue.innerHTML = totalNum;
  cartData.push(6);
};

btnCartGame2.onclick = () => {
  items[7].quantity += 1;
  totalDoll += items[7].dollars;
  totalCen += items[7].cents;
  totalNum += 1;
  btnCartValue.innerHTML = totalNum;
  cartData.push(7);
};

btnCartGame3.onclick = () => {
  items[8].quantity += 1;
  totalDoll += items[8].dollars;
  totalCen += items[8].cents;
  totalNum += 1;
  btnCartValue.innerHTML = totalNum;
  cartData.push(8);
};

btnCartGame4.onclick = () => {
  items[9].quantity += 1;
  totalDoll += items[9].dollars;
  totalCen += items[9].cents;
  totalNum += 1;
  btnCartValue.innerHTML = totalNum;
  cartData.push(9);
};

btnCartCraft1.onclick = () => {
  items[10].quantity += 1;
  totalDoll += items[10].dollars;
  totalCen += items[10].cents;
  totalNum += 1;
  btnCartValue.innerHTML = totalNum;
  cartData.push(10);
};

btnCartCraft2.onclick = () => {
  items[11].quantity += 1;
  totalDoll += items[11].dollars;
  totalCen += items[11].cents;
  totalNum += 1;
  btnCartValue.innerHTML = totalNum;
  cartData.push(11);
};

btnCartCraft3.onclick = () => {
  items[12].quantity += 1;
  totalDoll += items[12].dollars;
  totalCen += items[12].cents;
  totalNum += 1;
  btnCartValue.innerHTML = totalNum;
  cartData.push(12);
};

btnCartCraft4.onclick = () => {
  items[13].quantity += 1;
  totalDoll += items[13].dollars;
  totalCen += items[13].cents;
  totalNum += 1;
  btnCartValue.innerHTML = totalNum;
  cartData.push(13);
};

btnCart.onclick = () => {
  let filterCart = cartData.filter(
    (item, index) => cartData.indexOf(item) === index
  );
  for (let i = 0; i < filterCart.length; i++) {
    console.log(
      "Item name: " +
        items[filterCart[i]].name +
        " - " +
        "Quantity: " +
        items[filterCart[i]].quantity
    );
  }
  if (totalCen >= 100) {
    let temp = totalCen % 100;
    totalDoll += (totalCen - temp) / 100;
    totalCen = temp;
  }
  console.log(
    "The total amount is " + totalDoll + "$ and " + totalCen + " cents"
  );
};
