"use strict ";
// DOM Element
let salesTable = document.getElementById("salesTable");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
let stores = [];
// let hoursOfOperations = [];
salesTable.appendChild(tbody);

// Store constructor
function Store(location, custMin, custMax, avgCookiesPurchPerCust) {
  this.location = location;
  this.custMin = custMin;
  this.custMax = custMax;
  this.avgCookiesPurchPerCust = avgCookiesPurchPerCust;
  this.hoursOpen = 6;
  this.hoursClosed = 20;
  this.hoursOfOperations = [];
  this.cookiesPurchPerHourArr = [];
  this.test = "test";

  console.log(location, custMin, custMax, avgCookiesPurchPerCust);
  this.render = function () {
    this.calCookiesPurchPerHour();
    console.log(this.cookiesPurchPerHourArr);
    console.log(this.test);
    console.log(this.custmax);

    this.renderTable();
  };

  this.genHoursOfOperations = function () {
    for (let i = this.hoursOpen; i <= this.hoursClosed; i++) {
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
        return Math.floor(Math.random() * (custMax - custMin + 1) + custMin);
      };

      console.log(avgCookiesPurchPerCust);

      let hourlyCookieAvg = Math.ceil(
        randomCustPerHour() * avgCookiesPurchPerCust
      );

      this.cookiesPurchPerHourArr.push(hourlyCookieAvg);
      totalcookie += hourlyCookieAvg;
    }
    this.cookiesPurchPerHourArr.push(`Total: ${totalcookie}`);
    // stores.push(this.cookiesPurchPerHourArr);
  };

  this.renderTable = function () {
    ////////////////////////// render Table Header ///////////////////////

    // Build Header if don't yet exist
    // if (thead.children.length === 0) {
    //   salesTable.appendChild(thead);
    //   thead.appendChild(trow);

    //   // Instert Store Location header
    //   let storeNameHeader = document.createElement("th");
    //   storeNameHeader.textContent = "Store Location";
    //   trow.appendChild(storeNameHeader);

    //   // Generate headers
    //   for (let i = 0; i < this.hoursOfOperations.length; i++) {
    //     let th = document.createElement("th");
    //     th.textContent = `${this.hoursOfOperations[i]}`;
    //     trow.appendChild(th);
    //   }

    //   // Insert Daily Location Total header
    //   let dailyLocTotal = document.createElement("th");
    //   dailyLocTotal.textContent = "Daily Location Total";
    //   trow.appendChild(dailyLocTotal);

    // }
    ////////////////////// Render Table Body ////////////////////////////

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

function renderHeader() {
  let trow = document.createElement("tr");
  salesTable.appendChild(thead);
  thead.appendChild(trow);

  // Insert Store Location header
  let storeNameHeader = document.createElement("th");
  storeNameHeader.textContent = "Store Location";
  trow.appendChild(storeNameHeader);

  // Generate headers
  for (let i = 0; i < hoursOfOperations.length; i++) {
    let th = document.createElement("th");
    th.textContent = `${hoursOfOperations[i]}`;
    trow.appendChild(th);
  }

  // Insert Daily Location Total header
  let dailyLocTotal = document.createElement("th");
  dailyLocTotal.textContent = "Daily Location Total";
  trow.appendChild(dailyLocTotal);
}

// function cookieStandFactory(loc, custMin, custMax, avgCookiePurch) {
//   let newStore = new Store(loc, custMin, custMax, avgCookiePurch);
// }

let currentStores = [
  ["Seattle", 23, 65, 6.3],
  ["Tokyo", 3, 24, 1.2],
  ["Dubai", 11, 38, 3.7],
  ["Paris", 20, 38, 2.3],
  ["Lima", 2, 16, 4.6],
];

function genCurrentStores() {
  for (let i = 0; i < currentStores.length; i++) {
    stores.push(
      new Store(
        currentStores[i][0],
        currentStores[i][1],
        currentStores[i][2],
        currentStores[i][3]
      )
    );
  }
}

genCurrentStores();

function renderAll() {
  renderHeader();
  for (let i = 0; i < stores.length; i++) {
    stores[i].render();
  }
}

renderAll();

// Add new cookie stand

let form = document.querySelector("form");

function handleSubmit(event) {
  event.preventDefault();
  let loc = event.target.location.value;
  let custMin = event.target.custMin.value;
  let custMax = event.target.custMax.value;
  let avgCookiePurch = event.target.avgCookiePurch.value;

  new Store(loc, custMin, custMax, avgCookiePurch);
}

form.addEventListener("submit", handleSubmit);
