// Copyright (c) 2022 Emmanuel-Fofeyin rights reserved
//
// Created by: Emmanuel-Fofeyin
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit5-07-HTML/sw.js", {
    scope: "/ICS20-Unit5-07-HTML/",
  })
}

;("use·strict")

/**
 * This function calculates if you get free admission
 */
function myButtonClicked() {
  // input
  var firstInteger = document.getElementById("integer-one").value

  // process and output
  var total = 0
  if (firstInteger < 0) {
    document.getElementById("loop").innerHTML =
      "Please input a positive number."
  } else {
    for (let counter = 0; counter <= firstInteger; counter++) {
      total += counter
    }
  }
  document.getElementById("loop").innerHTML = "The number is " + total
}
