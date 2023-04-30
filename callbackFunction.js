

let stocks = {
  Fruits: ["banana", "Mango", "grapes", "orange"],
  liquids: ["water", "ice"],
  Holders: ["cone", "cup", "stick"],
  Toppings: ["chocolate", "peanuts"],
};

let is_shop_open = false;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed"));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was selected.`))
  .then(() => {
    return order(0000, () => console.log("Production has Started"))
  })
  .then(() => {
    return order(2000, () => console.log("The fruits was chooped."))
  })
  .then(() => {
    return order(1000, () => {
      console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} was selected`)
    });
  })

  .then(() => {
    return order(1000, () => {
      console.log("start the machine")
    })
  })

  .then(() => {
    return order(2000, () => {
      console.log(`Icecream placed on ${stocks.Holders[0]} `)
    })
  })
  .then(() => {
    return order(2000, () => {
      console.log(`${stocks.Toppings[1]} was selected`);
    })
  })

  .catch(()=>{
    console.log("Sorry We can not serve Icecream")
  })

// let order = (fruits_name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[fruits_name]} was selected`);
//     call_production();
//   }, 2000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("production has started");
//     setTimeout(() => {
//       console.log("The Fruits has been chooped"), 2000;
//       setTimeout(() => {
//         console.log(` Add some ${stocks.liquids[0]} and ${stocks.liquids[1]}`);
//        setTimeout(()=>{
//          console.log("The machine has been started.")
//          setTimeout(()=>{
//             console.log(` The ice was placed on ${stocks.Holders[1]}`)
//             setTimeout(()=>{
//                 console.log(`Finally I got  ${stocks.Toppings[0]}`)
//             },1000)
//          },2000)
//        },1000)
//       }, 2000);
//     }, 2000);
//   }, 0000);
// };

// order(0, production);
