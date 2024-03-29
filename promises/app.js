const feckApiPromises = (url) => {
  return new Promise((resolved, rejected) => {
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
// let request = feckApiPromises("yelp.com/api/coffee/page1");
// request
//   .then(() => {
//     console.log("PROMISE WORKED ON PAG(1)");
//     feckApiPromises("yelp.com/api/coffee/page2")
//       .then(() => {
//         console.log("PROMISE WORKED ON PAG(2)");
//         feckApiPromises("yelp.com/api/coffee/page3")
//           .then(() => {
//             console.log("PROMISE WORKED ON PAG(3)");
//             feckApiPromises("yelp.com/api/coffee/page4")
//               .then(() => {
//                 console.log("PROMISE WORKED ON PAG(4)");
//                 feckApiPromises("yelp.com/api/coffee/page5")
//                   .then(() => {
//                     console.log("PROMISE WORKED ON PAG(5)");
//                     feckApiPromises("yelp.com/api/coffee/page6")
//                       .then(() => {
//                         console.log("PROMISE WORKED ON PAG(6)");
//                       })
//                       .catch(() => {
//                         console.log("FAILED on page 6");
//                       });
//                   })
//                   .catch(() => {
//                     console.log("FAILED on page 5");
//                   });
//               })
//               .catch(() => {
//                 console.log("FAILED on page 4");
//               });
//           })
//           .catch(() => {
//             console.log("FAILED on page 3");
//           });
//       })
//       .catch(() => {
//         console.log("FAILED on page 2");
//       });
//   })
//   .catch(() => {
//     console.log("FAILED on page 1");
//   });

feckApiPromises("yelp.com/api/coffee/page1")
  .then((data) => {
    console.log(data);
    console.log("WORKED WELL ON PAGE 1");
    return feckApiPromises("yelp.com/api/coffee/page2");
  })
  .then(() => {
    console.log(data);
    console.log("WORKED ON PAGE 2");
    return feckApiPromises("yelp.com/api/coffee/page2");
  })
  .then((data) => {
    console.log(data);
    console.log("WORKED ON PAGE 3");
    return feckApiPromises("yelp.com/api/coffee/page3");
  })
  .catch((err) => {
    console.log("FAILLED AT ALL");
    console.log(err);
  });
