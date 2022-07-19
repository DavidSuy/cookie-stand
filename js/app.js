"use strict ";

// create separate JS objects for each shop locations
// Seattle
let seattle = {
  location: "Seattle",
  min: 23,
  max: 65,
  avgCookie: 6.3,
  openHours: 6,
  closeHours: 20,
  cookiesPurchPerHour: [],
  genRandCustPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPurchPerHour: function () {
    let arr = [];
    let totalcookie = 0;
    for (let i = this.openHours; i < this.closeHours; i++) {
      let hourlyCookieAvg = Math.ceil(
        this.genRandCustPerHour() * this.avgCookie
      );
      if (i < 12) {
        arr.push(`${i}am: ${hourlyCookieAvg} cookies`);
        totalcookie += hourlyCookieAvg;
      } else if (i === 12) {
        arr.push(`${i}pm: ${hourlyCookieAvg} cookies`);
        totalcookie += hourlyCookieAvg;
      } else if (i > 12) {
        arr.push(`${i - 12}pm: ${hourlyCookieAvg} cookies`);
        totalcookie += hourlyCookieAvg;
      } else {
        console.log(
          "Please pass in the hours open and hours close when calling function."
        );
      }
    }
    arr.push(`Total: ${totalcookie}`);
    this.cookiesPurchPerHour = arr;
    return arr;
  },
  genHtmlEl: function () {
    this.calcCookiesPurchPerHour();
    let parentEl = document.getElementById("sales");
    let h2 = document.createElement("h2");
    h2.textContent = this.location;
    parentEl.appendChild(h2);
    let ol = document.createElement("ol");
    parentEl.appendChild(ol);
    for (let i = 0; i < this.cookiesPurchPerHour.length; i++) {
      let li = document.createElement("li");
      li.textContent = this.cookiesPurchPerHour[i];
      ol.appendChild(li);
    }
  },
  render: function () {
    this.genHtmlEl();
  },
};

// Tokyo
let tokyo = {
  location: "Tokyo",
  min: 3,
  max: 24,
  avgCookie: 1.2,
  openHours: 6,
  closeHours: 20,
  cookiesPurchPerHour: [],
  genRandCustPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPurchPerHour: function () {
    let arr = [];
    let totalcookie = 0;
    for (let i = this.openHours; i < this.closeHours; i++) {
      let hourlyCookieAvg = Math.ceil(
        this.genRandCustPerHour() * this.avgCookie
      );
      if (i < 12) {
        arr.push(`${i}am: ${hourlyCookieAvg} cookies`);
        totalcookie += hourlyCookieAvg;
      } else if (i === 12) {
        arr.push(`${i}pm: ${hourlyCookieAvg} cookies`);
        totalcookie += hourlyCookieAvg;
      } else if (i > 12) {
        arr.push(`${i - 12}pm: ${hourlyCookieAvg} cookies`);
        totalcookie += hourlyCookieAvg;
      } else {
        console.log(
          "Please pass in the hours open and hours close when calling function."
        );
      }
    }
    arr.push(`Total: ${totalcookie}`);
    this.cookiesPurchPerHour = arr;
    return arr;
  },
  genHtmlEl: function () {
    this.calcCookiesPurchPerHour();
    let parentEl = document.getElementById("sales");
    let h2 = document.createElement("h2");
    h2.textContent = this.location;
    parentEl.appendChild(h2);
    for (let i = 0; i < this.cookiesPurchPerHour.length; i++) {
      let ol = document.createElement("ol");
      let li = document.createElement("li");
      li.textContent = this.cookiesPurchPerHour[i];
      parentEl.appendChild(ol);
      parentEl.appendChild(li);
    }
  },
  render: function () {
    this.genHtmlEl();
  },
};

// Dubai
let dubai = {
  location: "dubai",
  min: 11,
  max: 38,
  avgCookie: 3.7,
  openHours: 6,
  closeHours: 20,
  cookiesPurchPerHour: [],
  genRandCustPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPurchPerHour: function () {
    let arr = [];
    let totalcookie = 0;
    for (let i = this.openHours; i < this.closeHours; i++) {
      let hourlyCookieAvg = Math.ceil(
        this.genRandCustPerHour() * this.avgCookie
      );
      if (i < 12) {
        arr.push(`${i}am: ${hourlyCookieAvg} cookies`);
        totalcookie += hourlyCookieAvg;
      } else if (i === 12) {
        arr.push(`${i}pm: ${hourlyCookieAvg} cookies`);
        totalcookie += hourlyCookieAvg;
      } else if (i > 12) {
        arr.push(`${i - 12}pm: ${hourlyCookieAvg} cookies`);
        totalcookie += hourlyCookieAvg;
      } else {
        console.log(
          "Please pass in the hours open and hours close when calling function."
        );
      }
    }
    arr.push(`Total: ${totalcookie}`);
    this.cookiesPurchPerHour = arr;
    return arr;
  },
  genHtmlEl: function () {
    this.calcCookiesPurchPerHour();
    let parentEl = document.getElementById("sales");
    let h2 = document.createElement("h2");
    h2.textContent = this.location;
    parentEl.appendChild(h2);
    for (let i = 0; i < this.cookiesPurchPerHour.length; i++) {
      let ol = document.createElement("ol");
      let li = document.createElement("li");
      li.textContent = this.cookiesPurchPerHour[i];
      parentEl.appendChild(ol);
      parentEl.appendChild(li);
    }
  },
  render: function () {
    this.genHtmlEl();
  },
};

// Paris
let paris = {
  location: "Paris",
  min: 20,
  max: 38,
  avgCookie: 2.3,
  openHours: 6,
  closeHours: 20,
  cookiesPurchPerHour: [],
  genRandCustPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPurchPerHour: function () {
    let arr = [];
    let totalcookie = 0;
    for (let i = this.openHours; i < this.closeHours; i++) {
      let hourlyCookieAvg = Math.ceil(
        this.genRandCustPerHour() * this.avgCookie
      );
      if (i < 12) {
        arr.push(`${i}am: ${hourlyCookieAvg} cookies`);
        totalcookie += hourlyCookieAvg;
      } else if (i === 12) {
        arr.push(`${i}pm: ${hourlyCookieAvg} cookies`);
        totalcookie += hourlyCookieAvg;
      } else if (i > 12) {
        arr.push(`${i - 12}pm: ${hourlyCookieAvg} cookies`);
        totalcookie += hourlyCookieAvg;
      } else {
        console.log(
          "Please pass in the hours open and hours close when calling function."
        );
      }
    }
    arr.push(`Total: ${totalcookie}`);
    this.cookiesPurchPerHour = arr;
    return arr;
  },
  genHtmlEl: function () {
    this.calcCookiesPurchPerHour();
    let parentEl = document.getElementById("sales");
    let h2 = document.createElement("h2");
    h2.textContent = this.location;
    parentEl.appendChild(h2);
    for (let i = 0; i < this.cookiesPurchPerHour.length; i++) {
      let ol = document.createElement("ol");
      let li = document.createElement("li");
      li.textContent = this.cookiesPurchPerHour[i];
      parentEl.appendChild(ol);
      parentEl.appendChild(li);
    }
  },
  render: function () {
    this.genHtmlEl();
  },
};

// Lima
let lima = {
  location: "Lima",
  min: 2,
  max: 16,
  avgCookie: 4.6,
  openHours: 6,
  closeHours: 20,
  cookiesPurchPerHour: [],
  genRandCustPerHour: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesPurchPerHour: function () {
    let arr = [];
    let totalcookie = 0;
    for (let i = this.openHours; i < this.closeHours; i++) {
      let hourlyCookieAvg = Math.ceil(
        this.genRandCustPerHour() * this.avgCookie
      );
      if (i < 12) {
        arr.push(`${i}am: ${hourlyCookieAvg} cookies`);
        totalcookie += hourlyCookieAvg;
      } else if (i === 12) {
        arr.push(`${i}pm: ${hourlyCookieAvg} cookies`);
        totalcookie += hourlyCookieAvg;
      } else if (i > 12) {
        arr.push(`${i - 12}pm: ${hourlyCookieAvg} cookies`);
        totalcookie += hourlyCookieAvg;
      } else {
        console.log(
          "Please pass in the hours open and hours close when calling function."
        );
      }
    }
    arr.push(`Total: ${totalcookie}`);
    this.cookiesPurchPerHour = arr;
    return arr;
  },
  genHtmlEl: function () {
    this.calcCookiesPurchPerHour();
    let parentEl = document.getElementById("sales");
    let h2 = document.createElement("h2");
    h2.textContent = this.location;
    parentEl.appendChild(h2);
    for (let i = 0; i < this.cookiesPurchPerHour.length; i++) {
      let ol = document.createElement("ol");
      let li = document.createElement("li");
      li.textContent = this.cookiesPurchPerHour[i];
      parentEl.appendChild(ol);
      parentEl.appendChild(li);
    }
  },
  render: function () {
    this.genHtmlEl();
  },
};

// Render Location
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
