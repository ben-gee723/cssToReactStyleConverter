let testCss = `.bg-main {width: 100%; background-image: url("./bg-bluehex.jpg");background-position: top;background-repeat: no-repeat;background-size: cover;}`;

const cssToReactStyleOne = (string) => {
    let noSpaces = string.replace(/\s/g, '');
    let insertedDivisions = "";

    for(let i = 0; i < noSpaces.length; i++){
        noSpaces[i] === "{" ? insertedDivisions = [(noSpaces.slice(0, i) + " " + noSpaces.slice(i))].join('') : "";
    }
    let split = insertedDivisions.split(" ");
    let newObject = {};
    let secondHalf = split[1].slice(1).slice(0,-2).split(";").join(":").split(":")

    //
    // .map(x => {
    //     let y = x.split(":");
    //     newObject[y[0].trim()] = y[1].trim()
    //     return newObject;
    // })
    
    for(let i = 0; i < secondHalf.length; i+=2){newObject[secondHalf[i]] = secondHalf[i + 1]
        newObject[secondHalf[i]] = secondHalf[i + 1]
        if(i % 2 === 0) {
           
        } else {
            
        }
    }
    
    // newObject[split[0].slice(1)] = secondHalf;
    console.log(secondHalf)
    // console.log(newObject)
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
