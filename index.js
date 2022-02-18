let testCss = `.bg-main {width: 100%; background-image: url("./bg-bluehex.jpg");background-position: top;background-repeat: no-repeat;background-size: cover;}`;

const cssToReactStyleOne = (string) => {
    let noSpaces = string.replace(/\s/g, '');
    let insertedDivisions = "";

    for(let i = 0; i < noSpaces.length; i++){
        noSpaces[i] === "{" ? insertedDivisions = [(noSpaces.slice(0, i) + " " + noSpaces.slice(i))].join('') : "";
    }
    let split = insertedDivisions.split(" ");
    let newObject = {};
    newObject[split[0].slice(1)] = split[1].slice(1).slice(0,-1);

    console.log(newObject)
}

cssToReactStyleOne(testCss)



// To think odd and even
const cssToReactStyleMultiple = (string) => {
    let noSpaces = string.replace(/\s/g, '');
    let insertedDivisions = "";

    for(let i = 0; i < noSpaces.length; i++){
        noSpaces[i] === "{" ? insertedDivisions = [(noSpaces.slice(0, i) + " " + noSpaces.slice(i))].join('') : "";
        // noSpaces[i] === "}" ? noSpaces = [noSpaces.slice(0, i + 1), " ", noSpaces.slice(i + 1)].join('')  : "";
    }
    let split = insertedDivisions.split(" ")
    console.log(split)
}
