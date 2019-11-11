const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const optionsdictionary = {
  // "Start Game": {value: 0, color:"#DF9DB5", backgroundColor:"#DF9DB5"},
  // "Author": {value: 0, color:"#DF9DB5", backgroundColor:"#DF9DB5"}

}
// var button1 = document.getElementById("green");
// var button2 = document.getElementById("red");
// var button3 = document.getElementById("gold");
// var button4 = document.getElementById("green");
// counter for good survival choices

// counter for aggressive survival choices
// var str_counter_1 = count++;
// // counter for bad survival choices
// var str_counter_2 = count++;
// var hope = document.getElementById("btn");
var counter = 0;

function add() {
  counter += 1;
  return counter;
}
function add3() {
  counter += 3;
  console.log("fuck em")
  return counter;
}
function add5() {
  counter += 5;
  return counter;
}
//
// if (showTextNode(34)) {
//
//     // if (counter <= 20) {
//     //     showTextNode(37)
//     // }
//     //
// }



  // }
  // if (showTextNode(34) && (counter >= 40 )) {
  //   showTextNode(37)
  // }
  // if (showTextNode(34) && (20 < counter < 40)) {
  //   showTextNode(38)
  // }


function startGame() {
  state = {}
  showTextNode(36)


}


function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id ===
  textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild)
  {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }


  textNode.options.forEach(option => {

    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.style = option.image
      button.classList.add('btn')
      // button.classList.add('button1')
      button.addEventListener('click', () => selectOption(option, option.text))
      optionButtonsElement.appendChild(button)
      button.style.backgroundColor = optionsdictionary[option.text].color
      // var shit = optionsdictionary[option.text].color
      // var x = document.getElementsByClassName("btn:hover")
      // Array.from(x).forEach(function(mybutton, shit) {
      //   // mybutton.style.backgroundColor = shit
      //   // mybutton.style.color = shit
      //   console.log("print")
      // })
      //
      // document.getElementsByClassName("contain").style.color.forEach(button => {
      //   contain.style.color = optionsdictionary[option.text].color;
      // }
        }
        // optionsdictionary[option.text].color);
      // forEach(button) in optionButtonsElements {
      //   document.getElementsByClassName("contain").style.color = optionsdictionary[option.text].color;
      // }
      document.getElementById("box").style.opacity = optionsdictionary[option.text].opacity
      // document.getElementById("box").style["boxShadow"] = optionsdictionary[option.text].color
      document.getElementById("box").style.background = optionsdictionary[option.text].backgroundColor
      // document.getElementById("hope").style.background = optionsdictionary[option.text].color
      // document.getElementById("box").style.background = optionsdictionary[option.text].color
      // var shit = optionsdictionary[option.text].color
      // var x = document.getElementsByClassName("btn:hover")
      // console.log(x)
      //
      // Array.from(x).forEach(function(mybutton, shit) {
      //   // mybutton.style.backgroundColor = shit
      //   // mybutton.style.color = shit
      //   console.log("print")
      // })
      // document.getElementById("box").style.background = optionsdictionary[option.text].color

      // document.getElementById("hope").style["box-shadow"] = optionsdictionary[option.text].color

      // if (option.text == "Water") {
      //   button.style.backgroundColor = 'blue';
      //   button.imageSrc =
      // }

    // for (button) in optionButtonsElement {
    //     document.getElementById("btn").style["box-shadow"].color = optionsdictionary[option.text].color

    // }
  })
  //
  // forEach(button) {
  //   document.getElementById("btn").style["box-shadow"].color = optionsdictionary[option.text].color
  //
  // }
  //
  // var comhope = window.getComputedStyle(element, null);
  // hope.addEventListener("click",function(){
  //     if(showTextNode(3)) {
  //         // toggle = true;
  //         hope.style.border = "10px solid #FF0000";
  //         hope.style.backgroundColor = "#AA3030";
  //     } else {
  //         // toggle = false;
  //         hope.style.border = "10px solid #9676E8";
  //         hope.style.backgroundColor = "#B299F2";
  //     }
  // })
  // var col=document.getElementById("btn");
// // left off with this, idk why its not working, but its a variable that gets the css class of the button w the tag, but cant change color.
//   // var hope = document.getElementsByClassName('btn');
    // col.style.backgroundColor = 'blue'; //this for some reason has to be one for the buttons to appear
//   // button.addEventListener('click', () => selectOption(option))
  // if (showTextNode(2)){
  //   add();
    // const col.classList.add('button1');
//
//     // document.button.style.background = blue;
//     // col.Element.style.backgroundColor="#f47121";
  // }
}


function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}
function selectOption(option, optionText) {
  const nextTextNodeId = option.nextText
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
  if (optionText == "Water") {
    // document.getElementById('counter')
    add()
    console.log("test")
    // console.log("counter");
  }
  console.log(optionText);
}
//
// var FT = Food(true);
// var FF = Food(false);
// var hasfood = false;

// on click, check id, if
// constant
var textNodes = [
{
  id: 36,
  timeofday: "night",
  text: "\n \n \n A text-based survival game to teach basic survival skills",
  options: [
    {
      text: 'Start Game',

    },
    {
      text: 'Author',

    }
  ]
}


  // {
  //
  //   id: 7,
  //   text: "The three hooded men saw you take off from the path! As you run away from them, you begin to feel weary because you haven't eaten or had anything to drink since you've been in this wilderness. You lose energy and the men quickly catch up to you.  you surrender to them.",
  //   requiredState: (currentState) => currentState.Light,
  //   options: [
  //     {
  //         text: 'Continue'
  //     }
  //   ]
  // },
  // {
  //   id: 8,
  //   text: "The three hooded men saw you take off from the path! You feel plenty hydrated to keep on going at a steady pace for many miles.  After a mile, they finally lost your track. You kept running just to make sure they were no where near where you'd set up camp for the night.",
  //   requiredState: (currentState) => currentState.Food,
  //   options: [
  //       {
  //         text: 'Continue'
  //       }
  //   ]
  // },
  // {
  //   id: 9,
  //   text: 'The three hooded men saw you take off from the path! As you run away from them, you begin to feel weary because you havent eaten or had anything to drink since youve been in this wilderness. You lose energy and the men quickly catch up to you.  you surrender to them.',
  //   requiredState: (currentState) => currentState.Knife,
  //   options: [
  //     {
  //           text: 'Continue'
  //     }
  // },
  // {
  //   id: 10,
  //   text: '',
  //   options: [
  //     {
  //         text: 'Continue'
  //     }
  // }
]
// }

startGame()
