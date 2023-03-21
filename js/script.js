// Copyright (c) 2023 Santiago Hewett All rights reserved
//
// Created by: Santiago Hewett
// Created on: March 2023
// This file contains the JS functions for index.html

"use strict";
/**
 * This function calculates area of triangle.
 */
function calculate () {
  // Data being collected 
  let base = parseFloat(document.getElementById('base-of-triangle').value);
  let height = parseFloat(document.getElementById('height-of-triangle').value);

  // Data being processed
  let area = base * height / 2;

  // Data being shown
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}