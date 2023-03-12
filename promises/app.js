const feckApiPromises = (url) => {
  return new Promise((rejected, success) => {
    delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        rejected("App was Rejected!!");
      } else {
        success(`App was successfully rendered on ${url}`);
      }
    });
  });
};
