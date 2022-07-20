"use strict ";

// create separate JS objects for each shop locations
// Seattle
// let seattle = {
//   location: "Seattle",
//   min: 23,
//   max: 65,
//   avgCookie: 6.3,
//   openHours: 6,
//   closeHours: 20,
//   cookiesPurchPerHour: [],
//   genRandCustPerHour: function () {
//     return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
//   },
//   calcCookiesPurchPerHour: function () {
//     let arr = [];
//     let totalcookie = 0;
//     for (let i = this.openHours; i < this.closeHours; i++) {
//       let hourlyCookieAvg = Math.ceil(
//         this.genRandCustPerHour() * this.avgCookie
//       );
//       if (i < 12) {
//         arr.push(`${i}am: ${hourlyCookieAvg} cookies`);
//         totalcookie += hourlyCookieAvg;
//       } else if (i === 12) {
//         arr.push(`${i}pm: ${hourlyCookieAvg} cookies`);
//         totalcookie += hourlyCookieAvg;
//       } else if (i > 12) {
//         arr.push(`${i - 12}pm: ${hourlyCookieAvg} cookies`);
//         totalcookie += hourlyCookieAvg;
//       } else {
//         console.log(
//           "Please pass in the hours open and hours close when calling function."
//         );
//       }
//     }
//     arr.push(`Total: ${totalcookie}`);
//     this.cookiesPurchPerHour = arr;
//     return arr;
//   },
//   genHtmlEl: function () {
//     this.calcCookiesPurchPerHour();
//     let parentEl = document.getElementById("sales");
//     let h2 = document.createElement("h2");
//     h2.textContent = this.location;
//     parentEl.appendChild(h2);
//     let ol = document.createElement("ol");
//     parentEl.appendChild(ol);
//     for (let i = 0; i < this.cookiesPurchPerHour.length; i++) {
//       let li = document.createElement("li");
//       li.textContent = this.cookiesPurchPerHour[i];
//       ol.appendChild(li);
//     }
//   },
//   render: function () {
//     this.genHtmlEl();
//   },
// };

// Render Location
// seattle.render();

// Store constructor
function Store(
  location,
  minHourlyCookies,
  maxHourlyCookies,
  avgCookiesPurchPerCust,
  hoursOpen = 6,
  hoursClosed = 20
) {
  this.location = location;
  this.minHourlyCookies = minHourlyCookies;
  this.maxHourlyCookies = maxHourlyCookies;
  this.avgCookiesPurchPerCust;
  this.hoursOpen = hoursOpen;
  this.hoursClosed = hoursClosed;
  this.hoursOfOperations = [];
  this.cookiesPurchPerHourArr = [];

  this.genHoursOfOperations = function () {
    for (let i = hoursOpen; i <= hoursClosed; i++) {
      if (i < 12 && i > 0) {
        this.hoursOfOperations.push(`${i}am`);
      } else if (i === 12) {
        this.hoursOfOperations.push(`${i}pm`);
      } else if (i > 12 && i <= 24) {
        this.hoursOfOperations.push(`${i - 12}pm`);
      }
    }
  };

  this.calCookiesPurchPerHour = function () {
    let totalcookie = 0;

    this.genHoursOfOperations();

    for (let i = 0; i < this.hoursOfOperations.length; i++) {
      let randomCustPerHour = function () {
        return Math.floor(
          Math.random() * (maxHourlyCookies - minHourlyCookies + 1) +
            minHourlyCookies
        );
      };

      let hourlyCookieAvg = Math.ceil(
        randomCustPerHour() * avgCookiesPurchPerCust
      );

      this.cookiesPurchPerHourArr.push(hourlyCookieAvg);
      totalcookie += hourlyCookieAvg;
    }
    this.cookiesPurchPerHourArr.push(`Total: ${totalcookie}`);
    console.log(this.cookiesPurchPerHourArr);
  };

  this.renderList = function (table) {
    let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");

    table.appendChild(tbody);
    tbody.appendChild(tr);
    let storeLoc = document.createElement("td");
    storeLoc.textContent = location;
    tr.appendChild(storeLoc);
    for (let i = 0; i < this.cookiesPurchPerHourArr.length; i++) {
      let td = document.createElement("td");
      td.textContent = this.cookiesPurchPerHourArr[i];
      tr.appendChild(td);
    }
  };

  this.renderTable = function (parent) {
    // let table = 0;
    let art = document.createElement("article");
    console.log(parent);
    let table = document.createElement("table");
    if (parent) {
      table = parent;
      console.log("no parent");
    } else {
      console.log("we in it");
      console.log(table);
    }
    art.appendChild(table);
    let thead = document.createElement("thead");
    let trow = document.createElement("tr");

    let cookieTablesContainer = document.getElementById("xxx");
    cookieTablesContainer.appendChild(table);

    art.appendChild(table);
    table.appendChild(thead);
    thead.appendChild(trow);
    let storeNameHeader = document.createElement("th");
    storeNameHeader.textContent = "Store Location";
    trow.appendChild(storeNameHeader);

    for (let i = 0; i < this.hoursOfOperations.length; i++) {
      let th = document.createElement("th");
      th.textContent = `${this.hoursOfOperations[i]}`;
      trow.appendChild(th);
    }

    let dailyLocTotal = document.createElement("th");
    dailyLocTotal.textContent = "Daily Location Total";
    trow.appendChild(dailyLocTotal);

    this.renderList(table);
  };

  this.render = function (table) {
    this.calCookiesPurchPerHour();

    let xxx = document.getElementById("xxx");
    console.log(xxx);

    // let h2 = document.createElement("h2");
    // let div = document.createElement("div");

    // cookieTablesContainer.appendChild(art);
    if (!table) {
      // h2.textContent = "Seattle";
      // art.appendChild(h2);
      this.renderTable();
    } else {
      this.renderTable(table);
    }
  };
}

let seattle = new Store("Seattle", 23, 65, 6.3);
let tokyo = new Store("Tokyo", 23, 65, 6.3);

seattle.render();
tokyo.render();

// console.log(seattle);
