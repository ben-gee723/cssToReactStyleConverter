// import { testCss1, testCss2 } from "dummyData.js";


const toCamelCase = (string) => {
    // ADD CHECK FOR SYMBOL
    let string1;
    string[0] === "." ? string1 = string.substring(1) : string1 = string;
    return string1.split("-").map((x, i) => i === 0 ? x : x[0].toUpperCase() + x.substring(1)).join("")
};

const arrayToObject = (array) => {
    let newObject = {};
    for (let i = 0; i < array.length; i += 2) {
        newObject[toCamelCase(array[i])] = array[i + 1];
    }
    return newObject;
}

const convertOneCssToReact = (string) => {
    if (typeof string !== "string") return "Not a string!"

    // remove - unecessary spaces
    let noSpaces = string.replace(/\s/g, '');

    // separate - first half and second half
    let insertedDivisions = "";
    for (let i = 0; i < noSpaces.length; i++) {
        noSpaces[i] === "{" ? insertedDivisions = [(noSpaces.slice(0, i) + " " + noSpaces.slice(i))].join('') : "";
    }

    // deconstruct - main key and main object
    let [firstHalf, secondHalf] = insertedDivisions.split(" ");

    // edit - key   
    // Remove "." --> toCamelCase()
    let newKey = toCamelCase(firstHalf.substring(1))

    // create - an array
    let newValue = secondHalf.slice(1).slice(0, -2).split(";").join(":").split(":");


    // convert - arrayToObject()
    let newObject = arrayToObject(newValue);

    // set - new array in to React CSS object format
    let reactCss = {};
    reactCss[newKey] = newObject;
    return reactCss;

    // 2nd Version
    // return [newKey, newObject];
}

// console.log(convertOneCssToReact(testCss1))
// console.log(convertOneCssToReact(1))


// convert multiple CSSs
// Vanilla JS
const convertMultipleCssToReact = () => {

    // Retrieve value from input field
    let incomingString = document.getElementById("cssInput").value;
    if (incomingString.length === 0) {
        document.getElementById("output").style.display = "block"
        return document.getElementById("output").innerText = 'Please insert CSS'
    }

    let newObject = {};
    if (incomingString.includes(",")) {
        // Multiple CSSs
        incomingString.split(",").map(x => {
            // loop through all CSSs
            // combine all objects together
            newObject[Object.keys(convertOneCssToReact(x))[0]] = Object.values(convertOneCssToReact(x))[0];

            // 2nd Version
            // return newObject[convertOneCssToReact(x)[0]] = convertOneCssToReact(x)[1]
        })
    } else {
        // Singular CSSs
        newObject[Object.keys(convertOneCssToReact(incomingString))[0]] = Object.values(convertOneCssToReact(incomingString))[0];
    }
    document.getElementById("output").style.display = "block"
    return document.getElementById("output").innerText = JSON.stringify(newObject, undefined, 2);
}
// console.log("Test 1 String", convertMultipleCssToReact(testCss1))
// console.log("Test 2 Strings", convertMultipleCssToReact(testCss2))


// Copy text to clipboard button function
// copyToClipboard()

const copyToClipboard = () => {
    // Retrieve innerText
    let incomingString = document.getElementById("output").innerText;

    // Test for string info
    if (incomingString.length === 0 || incomingString === "Please insert CSS") return document.getElementById("output").innerText = 'Please insert CSS';

    // output: display --> hidden until clicked
    // 
    navigator.clipboard.writeText(incomingString);
    alert("Copied text to clipboard")
};