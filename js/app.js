"use strict ";

// DOM Element
let salesTable = document.getElementById("salesTable");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
let stores = [];
let storesArr = [];
let hoursOfOperations = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
  "8pm",
];

salesTable.appendChild(tbody);

// Store constructor
function Store(location, custMin, custMax, avgCookiesPurchPerCust) {
  this.location = location;
  this.custMin = custMin;
  this.custMax = custMax;
  this.avgCookiesPurchPerCust = avgCookiesPurchPerCust;
  this.hoursOpen = 6;
  this.hoursClosed = 20;
  this.cookiesPurchPerHourArr = [];
}

Store.prototype.render = function () {
  this.calCookiesPurchPerHour();
  storesArr.push(this.cookiesPurchPerHourArr);
  this.renderTable();
};

Store.prototype.genHoursOfOperations = function () {
  for (let i = this.hoursOpen; i <= this.hoursClosed; i++) {
    if (i < 12 && i > 0) {
      hoursOfOperations.push(`${i}am`);
    } else if (i === 12) {
      hoursOfOperations.push(`${i}pm`);
    } else if (i > 12 && i <= 24) {
      hoursOfOperations.push(`${i - 12}pm`);
    }
  }
};

Store.prototype.calCookiesPurchPerHour = function () {
  let totalcookie = 0;

  if (hoursOfOperations.length === 0) this.genHoursOfOperations();

  this.cookiesPurchPerHourArr.push(this.location);

  for (let i = 0; i < hoursOfOperations.length; i++) {
    let randomCustPerHour = Math.floor(
      Math.random() * (this.custMax - this.custMin + 1) + this.custMin
    );

    let hourlyCookieAvg = Math.ceil(
      randomCustPerHour * this.avgCookiesPurchPerCust
    );

    this.cookiesPurchPerHourArr.push(hourlyCookieAvg);
    totalcookie += hourlyCookieAvg;
  }
  this.cookiesPurchPerHourArr.push(`Total: ${totalcookie}`);
};

Store.prototype.renderTable = function () {
  ////////////////////////// render Table Header ///////////////////////

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

function renderFooter() {
  let tFooter = document.createElement("tFoot");
  let tr = document.createElement("tr");
  let td = document.createElement("td");

  salesTable.appendChild(tFooter);
  tFooter.appendChild(tr);
  tr.appendChild(td);
  td.textContent = "All Stores total";

  console.log(hoursOfOperations);
  console.log(storesArr[0][1]);
  // console.log(stores[stores.length - 1].cookiesPurchPerHourArr);
  let allStoreTotal = 0;
  for (let i = 0; i < hoursOfOperations.length; i++) {
    let hourlyTotal = 0;
    console.log(hourlyTotal);
    for (let j = 0; j < storesArr.length; j++) {
      // console.log(stores);
      hourlyTotal += storesArr[i][j + 1];
      // console.log(hourlyTotal);
    }
  }
}

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
  renderFooter();
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
