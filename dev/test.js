"use strict";

import CSV from "/src/csv.js";

//tests
(async function() {
    const compatreArrays = function(arr1, arr2) {
        return JSON.stringify(arr1) === JSON.stringify(arr2);
    };
    let res;
    let resInvert;
    let testString;
    let testResult;

    // Test simple CSV
    console.log("Test 1...");
    testString = "1,2,3,4,5\n1,2,3,4,5";
    testResult = [
        ["1", "2", "3", "4", "5"],
        ["1", "2", "3", "4", "5"]
    ];
    res = CSV.toArray(testString, ",");
    resInvert = CSV.toString(res, ",");
    if (compatreArrays(res, testResult) === false || compatreArrays(resInvert, testString) === false) {
        throw new Error("Unexpected");
    }
    console.log("Test 1... done");

    // Test simple CSV multiple separators
    console.log("Test 2...");
    testString = "1,,2,,3,,4,,5\n1,,2,,3,,4,,5";
    testResult = [
        ["1", "", "2", "", "3", "", "4", "", "5"],
        ["1", "", "2", "", "3", "", "4", "", "5"]
    ];
    res = CSV.toArray(testString, ",");
    resInvert = CSV.toString(res, ",");
    if (compatreArrays(res, testResult) === false || compatreArrays(resInvert, testString) === false) {
        throw new Error("Unexpected");
    }
    console.log("Test 2... done");

    // Test simple CSV multicharacter separators
    console.log("Test 3...");
    testString = "1,,2,,3,,4,,5\n1,,2,,3,,4,,5";
    testResult = [
        ["1", "2", "3", "4", "5"],
        ["1", "2", "3", "4", "5"]
    ];
    res = CSV.toArray(testString, ",,");
    resInvert = CSV.toString(res, ",,");
    if (compatreArrays(res, testResult) === false || compatreArrays(resInvert, testString) === false) {
        throw new Error("Unexpected");
    }
    console.log("Test 3... done");


    // Test non rectangular CSV
    console.log("Test 4...");
    testString = "1,2,3,4\n1,2,3,4,5";
    testResult = [
        ["1", "2", "3", "4"],
        ["1", "2", "3", "4", "5"]
    ];
    res = CSV.toArray(testString, ",");
    resInvert = CSV.toString(res, ",");
    if (compatreArrays(res, testResult) === false || compatreArrays(resInvert, testString) === false) {
        throw new Error("Unexpected");
    }
    console.log("Test 4... done");


    // Test escaped CSV
    console.log("Test 5...");
    testString = `1,"test->""<-quote"\n2,"test->""""<-doublequote"`;
    testResult = [
        ["1", "test->\"<-quote"],
        ["2", "test->\"\"<-doublequote"],
    ];
    res = CSV.toArray(testString, ",");
    resInvert = CSV.toString(res, ",");
    if (compatreArrays(res, testResult) === false || compatreArrays(resInvert, testString) === false) {
        throw new Error("Unexpected");
    }
    console.log("Test 5... done");

    // Test quoted CSV
    console.log("Test 6...");
    testString = `1,"test->,<-quote"\n2,"test->,,<-doublequote"`;
    testResult = [
        ["1", "test->,<-quote"],
        ["2", "test->,,<-doublequote"],
    ];
    res = CSV.toArray(testString, ",");
    resInvert = CSV.toString(res, ",");
    if (compatreArrays(res, testResult) === false || compatreArrays(resInvert, testString) === false) {
        throw new Error("Unexpected");
    }
    console.log("Test 6... done");


    // Test empty lines CSV
    console.log("Test 7...");
    testString = `1,"test->,<-quote"\n\n\n2,"test->,,<-doublequote"`;
    testResult = [
        ["1", "test->,<-quote"],
        [""],
        [""],
        ["2", "test->,,<-doublequote"],
    ];
    res = CSV.toArray(testString, ",");
    resInvert = CSV.toString(res, ",");
    if (compatreArrays(res, testResult) === false || compatreArrays(resInvert, testString) === false) {
        throw new Error("Unexpected");
    }
    console.log("Test 7... done");


    // Test quoted newlines CSV
    console.log("Test 8...");
    testString = `1,"test->,<-quote\n\n"\n2,"test->,,<-doublequote"`;
    testResult = [
        ["1", "test->,<-quote\n\n"],
        ["2", "test->,,<-doublequote"],
    ];
    res = CSV.toArray(testString, ",");
    resInvert = CSV.toString(res, ",");
    if (compatreArrays(res, testResult) === false || compatreArrays(resInvert, testString) === false) {
        throw new Error("Unexpected");
    }
    console.log("Test 8... done");

})();