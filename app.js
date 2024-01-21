let data = {
  count: 0,
  increment: 1,
  INTERVAL: 1000,
  clicks: 0,
  grandma: {
    price: 10,
    increment: 1,
    count: 0,
  },
  oven: {
    price: 100,
    increment: 10,
    count: 0,
  },
  factory: {
    price: 1000,
    increment: 100,
    count: 0,
  },
  mine: {
    price: 10000,
    increment: 1000,
    count: 0,
  },
  bank: {
    price: 100000,
    increment: 10000,
    count: 0,
  },
};

/////////////////////////////////////////////////////////////////////////////
//                                DOCUMENT.

document
  .getElementById("grandma-button")
  .addEventListener("click", (e) => buy(e, "grandma", increaseIncrement1()));
document
  .getElementById("oven-button")
  .addEventListener("click", (e) => buy(e, "oven", increaseIncrement10()));
document
  .getElementById("factory-button")
  .addEventListener("click", (e) => buy(e, "factory", increaseIncrement100()));
document
  .getElementById("mine-button")
  .addEventListener("click", (e) => buy(e, "mine", increaseIncrement1000()));
document
  .getElementById("bank-button")
  .addEventListener("click", (e) => buy(e, "bank", increaseIncrement10000()));
document
  .getElementById("Don'tPush")
  .addEventListener("click", (e) => (e, clickCounterDontPushButton()));
document
  .getElementById("reset-button")
  .addEventListener("click", (e) => resetButton(e));

//////////////////////////////////////////////////////////////////////////
//                      SETINTERVAL

setInterval(() => {
  data.count = data.count + data.increment;
  updateTable("count", data.count);
}, data.INTERVAL);

/////////////////////////////////////////////////////////////////////////////
//                                  FUNCTIONS

// function updateIncrement(person) {                    //DELETE
//   data.increment = data[person].increment;
// }

function buy(event, person) {
  if (canBuy(person)) {
    updatePersonCount(person);
    // updateIncrement(person);                           //DELETE 
    restPriceToCount(person);
  }
}

function canBuy(person) {
  if (data.count > data[person].price) {
    return true;
  } else {
    return false;
  }
}

function updatePersonCount(person) {
  data[person].count = data[person].count + 1;
  updateTable(person + "-count", data[person].count);
}

function restPriceToCount(person) {
  data.count = data.count - data[person].price;
}

function updateTable(id, value) {
  document.getElementById(id).innerHTML = value;
}

/////////////////////////////////////////////////////////////////////////////
//                      RESET BUTTON

function resetButton() {
  updateTable("grandma-count", data.grandma.count = 0);
  updateTable("oven-count", data.oven.count = 0);
  updateTable("factory-count", data.factory.count = 0);
  updateTable("mine-count", data.mine.count = 0);
  updateTable("bank-count", data.bank.count = 0);
  updateTable("count", data.count = 0);
  updateTable("click-counter", data.clicks = 0);
  data.increment = 1;
}


/////////////////////////////////////////////////////////////////////////////
//                      CONTADOR CLICKS
function clickCounterDontPushButton() {
  updateTable("count", data.count = 1 + data.count);
}

function clickCounter() {
  updateTable("count", data.count = 1 + data.count);
}

///////////////////////////////////////////////////////////////////////////
//                                  INCREASE SETINTERVAL

function increaseIncrement1() {
  if (data.count >= data.grandma.price) {
    clickCounter(data.increment = 1 + data.increment)
    updateTable("click-counter", data.clicks = 1 + data.clicks);
    updateTable("count", data.count = 1 + data.count);
  } else {
    updateTable(`no-balance`, `Not enough cookies!!`);
    setTimeout(() => {
      updateTable(`no-balance`, ``)
    }, 2500)
  }
}


function increaseIncrement10() {
  if (data.count >= data.oven.price) {
    clickCounter(data.increment = 10 + data.increment)
    updateTable("click-counter", data.clicks = 10 + data.clicks);
    updateTable("count", data.count = 1 + data.count);
  } else {
    updateTable(`no-balance`, `Not enough cookies!!`);
    setTimeout(() => {
      updateTable(`no-balance`, ``)
    }, 2500)
  }
}

function increaseIncrement100() {
  if (data.count >= data.factory.price) {
    clickCounter(data.increment = 100 + data.increment)
    updateTable("click-counter", data.clicks = 100 + data.clicks);
    updateTable("count", data.count = 1 + data.count);
  } else {
    updateTable(`no-balance`, `Not enough cookies!!`);
    setTimeout(() => {
      updateTable(`no-balance`, ``)
    }, 2500)
  }
}

function increaseIncrement1000() {
  if (data.count >= data.mine.price) {
    clickCounter(data.increment = 1000 + data.increment)
    updateTable("click-counter", data.clicks = 1000 + data.clicks);
    updateTable("count", data.count = 1 + data.count);
  } else {
    updateTable(`no-balance`, `Not enough cookies!!`);
    setTimeout(() => {
      updateTable(`no-balance`, ``)
    }, 2500)
  }
}

function increaseIncrement10000() {
  if (data.count >= data.bank.price) {
    clickCounter(data.increment = 10000 + data.increment)
    updateTable("click-counter", data.clicks = 10000 + data.clicks);
    updateTable("count", data.count = 1 + data.count);
  } else {
    updateTable(`no-balance`, `Not enough cookies!!`);
    setTimeout(() => {
      updateTable(`no-balance`, ``)
    }, 2500)
  }
}

function initilizeTable() {
  updateTable("grandma-count", data.grandma.count);
  updateTable("grandma-price", "$C " + data.grandma.price);
  updateTable("grandma-increment", "+" + data.grandma.increment);

  updateTable("oven-count", data.oven.count);
  updateTable("oven-price", "$C " + data.oven.price);
  updateTable("oven-increment", "+" + data.oven.increment);

  updateTable("factory-count", data.factory.count);
  updateTable("factory-price", "$C " + data.factory.price);
  updateTable("factory-increment", "+" + data.factory.increment);

  updateTable("mine-count", data.mine.count);
  updateTable("mine-price", "$C " + data.mine.price);
  updateTable("mine-increment", "+" + data.mine.increment);

  updateTable("bank-count", data.bank.count);
  updateTable("bank-price", "$C " + data.bank.price);
  updateTable("bank-increment", "+" + data.bank.increment);

  updateTable("count", data.count);
}
//////////////////////////////////////////////////////////////////////////
//                      START

initilizeTable();






