const feckApiPromises = (url) => {
  return new Promise((rejected, resolved) => {
    delay = Math.floor(Math.random() * 5000);
    setTimeout(() => {
      if (delay > 4000) {
        resolved(`App was successfully rendered on ${url}`);
        console.log(delay);
      } else {
        rejected("App was Rejected!!");
        console.log(delay);
      }
    });
  });
};
let request = feckApiPromises("yelp.com/api/coffee/page1");
request
  .then(() => {
    console.log("PROMISE RESOLVED");
    console.log("IT WORKED on page 1");
    feckApiPromises("yelp.com/api/coffee/page2")
      .then(() => {
        console.log("PROMISE WORKED ON PAGE 2");
        console.log("it works again ON page 2");
      })
      .catch(() => {
        console.log("FAILED AGAIN on page 2");
      });
  })
  .catch(() => {
    console.log("PROMISE REJECTED");
    console.log("IT FAILED");
  });
