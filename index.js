let testCss1 = `.bg-main {width: 100%; background-image: url("./bg-bluehex.jpg");background-position: top;background-repeat: no-repeat;background-size: cover;}`;


const toCamelCase = (string) => {
    return string.split("-").map((x, i) => i === 0 ? x : x[0].toUpperCase() + x.substring(1)).join("")
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
    // console.log(insertedDivisions.split(" "))

    // deconstruct - main key and main object
    let [firstHalf, secondHalf] = insertedDivisions.split(" ");

    // edit - key
    let newKey = ""

    // create - an array
    let newValue = secondHalf.slice(1).slice(0, -2).split(";").join(":").split(":");

    // convert - array to object
    let newObject = arrayToObject(newValue);

    // set - new array in to React CSS object format!
    let reactCss = {};
    reactCss[firstHalf] = newObject;
    return reactCss;

    // 2nd Version
    // return [newKey, newObject];
}

// console.log(convertOneCssToReact(testCss1))
// console.log(convertOneCssToReact(1))


let testCss2 = `.bg-main {width: 100%; background-image: url("./bg-bluehex.jpg");background-position: top;background-repeat: no-repeat;background-size: cover;},.apples {width: 100%; background-image: url("./bg-bluehex.jpg");background-position: top;background-repeat: no-repeat;background-size: cover;}`;


// To think odd and even
const cssToReactStyleMultiple = (string) => {
    let newObject = {};
    string.split(",").map(x => {
        // loop through all CSSs
        // combine all objects together
        newObject[Object.keys(convertOneCssToReact(x))[0]] = Object.values(convertOneCssToReact(x))[0];

        // 2nd Version
        // return newObject[convertOneCssToReact(x)[0]] = convertOneCssToReact(x)[1]
    })
    return newObject;
}
console.log(cssToReactStyleMultiple(testCss2))