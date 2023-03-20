const feckData = (url) => {
  return new Promise((resolve, reject) => {
    let timeTaken = Math.floor(Math.random() * 10);
    setTimeout(() => {
      if (timeTaken < 5) {
        resolve(`It is very fast at ${url}`);
        console.log(timeTaken);
      } else {
        reject("It slowly");
        console.log(timeTaken);
      }
    }, 1000);
  });
};

feckData("/dog/page1")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.log(err))
  .finally(() =>
    console.log("tHIS MESSAGE MUST BE DINNALLY SEEN BY EVERY ONE")
  );
