let feckeApiCallBack = (ul, success, failure) => {
  delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Connection Failled");
    } else {
      success(`Well Done the page is loaded successfully on this ${ul}`);
    }
  }, delay);
};
const feckeRequestApiCallBack = (url) => {
  return new Promise((rejected, success) => {
    let delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        rejected("Connection failed");
      } else {
        success(`App rendered successfully at ${url}`);
      }
    }, delay);
  });
};
