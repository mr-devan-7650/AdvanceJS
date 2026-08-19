let myPromise = new Promise((res, rej) => {
  setInterval(() => {
    let value = Math.floor(Math.random() * 10);
    // console.log(value);

    if (value > 5) {
      res( "Success "+  value);
    } else {
      rej( "Error "+   value);
    }
  }, 1000);
});

myPromise
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  })
  .finally(()=>{
     console.log("Promise completed");
    
  })
