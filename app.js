console.log("Hello World!\n==========\n");
console.log
let magicNumber = 21;

let guessNumber = prompt ("What is the magic number?");

if(guessNumber < magicNumber)
  console.log ("too low");
else if (guessNumber > magicNumber) 
  console.log("too high");
else
  console.Log ("Congratulations!!!");


let birthMonth = prompt ("What is your birth month?");

switch (birthMonth.toLowerCase()) {
  case "december": 
  case "january": 
  case "february":
    console.log("season is winter");

    break;
  case "march":
   case "april":
    case "may": 
    console.log("season is spring");
    
    break;
  case "june":
  case "july":
  case "august":
    console.log("season is summer");
    
    break;
  case "september":
    case "october":
      case "november":
    console.log("season is fall");

    break;

}

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;

    case "02":
      type = "T-Shirt";
      break;

      case "03":
        type = "Long Sleeve";
        break;

        case "04":
          type = "Sweat Shirt";
          break;
          default:
            type = "Other";
}

switch (colorId) {
  case "BL":
    //the exercise had a mistake and used "BL" twice for the if statements so i just 
    //condensed them this way 
    //exercise has
    /***
      if (colorId == "BL") {
         color = "Black";
      } else if (colorId == "BL") {
         color = "Blue";
      }
    */

    color = "Black";
    color = "Blue";
    break;

      case "RD":
        color = "Red";
        break;

        case "PU":
          color = "Purple";
          break;

          default:
            color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;

    case "M":
      size = "Medium";
    break;

    case "L":
      size = "Large";
      break;

      case "XL":
        size = "Extra Large";
        break;


  default:
    size = "One Size Fits All";
    break;
}

console.log (`Product: ${size} ${color} ${type}`);




