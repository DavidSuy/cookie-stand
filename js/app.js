"use strict ";
// DOM Element
let salesTable = document.getElementById("salesTable");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
let stores = [];

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

  this.render = function () {
    this.calCookiesPurchPerHour();

    this.renderTable();
  };

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
    this.cookiesPurchPerHourArr.push(this.location);

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
    stores.push(this.cookiesPurchPerHourArr);
  };

  this.renderTable = function () {
    ////////////////////////// render Table Header ///////////////////////
    let trow = document.createElement("tr");

    // Build Header if don't yet exist
    if (thead.children.length === 0) {
      salesTable.appendChild(thead);
      thead.appendChild(trow);

      // Instert Store Location header
      let storeNameHeader = document.createElement("th");
      storeNameHeader.textContent = "Store Location";
      trow.appendChild(storeNameHeader);

      // Generate headers
      for (let i = 0; i < this.hoursOfOperations.length; i++) {
        let th = document.createElement("th");
        th.textContent = `${this.hoursOfOperations[i]}`;
        trow.appendChild(th);
      }

      // Insert Daily Location Total header
      let dailyLocTotal = document.createElement("th");
      dailyLocTotal.textContent = "Daily Location Total";
      trow.appendChild(dailyLocTotal);

      ////////////////////// Render Table Body ////////////////////////////
      salesTable.appendChild(tbody);
    }

    // Generate Table Body Data

    let tr = document.createElement("tr");
    tbody.appendChild(tr);

    for (let i = 0; i < this.cookiesPurchPerHourArr.length; i++) {
      let td = document.createElement("td");
      td.textContent = this.cookiesPurchPerHourArr[i];
      tr.appendChild(td);
    }

    // Insert Daily Location Total data
  };
}

let seattle = new Store("Seattle", 23, 65, 6.3);
let tokyo = new Store("Tokyo", 3, 24, 1.2);
let dubai = new Store("Dubai", 11, 38, 3.7);
let paris = new Store("Paris", 20, 38, 2.3);
let lima = new Store("Lima", 2, 16, 4.6);

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

console.log(stores);
