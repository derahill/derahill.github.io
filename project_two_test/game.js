const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

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

function startGame() {
  state = {}
  showTextNode(1)

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
    // for(let i = 0; i < textNodes.length i++){
    //
    //   let childArray = myArray[i];
    //
    //   for(let j = 0; j < childArray.length [i]; j++){
    //     if (showOption(option)) {
    //       const button = document.createElement('button')
    //       button.innerText = option.text
    //       button.background = option.image
    //       button.classList.add('btn')
    //       button.classList.add('button1')
    //       button.addEventListener('click', () => selectOption(option))
    //       optionButtonsElement.appendChild(button)
    //     }
    //   }
    // }

    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.background = option.image
      button.classList.add('btn')
      // button.classList.add('button1')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }


  })
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
  var col=document.getElementById("btn");
// left off with this, idk why its not working, but its a variable that gets the css class of the button w the tag, but cant change color.
  // var hope = document.getElementsByClassName('btn');
  col.style.backgroundColor = 'blue'; //this for some reason has to be one for the buttons to appear
  // button.addEventListener('click', () => selectOption(option))
  if (showTextNode(2)){
    col.classList.add('button1');

    // document.button.style.background = blue;
    // col.Element.style.backgroundColor="#f47121";
  }
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}
function selectOption(option) {
  const nextTextNodeId = option.nextText
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

//
// var FT = Food(true);
// var FF = Food(false);
var hasfood = false;

// on click, check id, if
// constant
const textNodes = [
  {
    id: 1,
    // hasfood = false,
    text: "Night 1: \n \n You've found yourself abandoned and alone in a foreign place, surrounded only by nature and beautiful mountain landscapes. \n You don't know where you are and what you'll find in the nights to come. All you know is that you must survive. \n You're having trouble trying to sleep - so you walk around under the stars. What do you find around you? Keep in mind - your decisions now are crucial to surviving in the wilderness. Choose wisely what you need most.",
    options: [
      {
        text: 'Water',
        image: 'assets/knifenounproject.png', //not working:/
        setState: { Water: true },
        nextText: 2

        // counter1 +- 1;

      },
      {
        text: 'Knife',
        setState: { Knife: true },
        nextText: 3
      },
      {
        text: 'Apples',
        setState: { Food: true },
        nextText: 4
      },
      {
        text: 'Torch',
        setState: { Light: true },
        nextText: 5
      }
    ]
  },
  {
    id: 2,
    text: "Night 1: \n \n You're glad a water bottle somehow made it with you. Youre staying hydrated with clean water, for now.",
    options: [
      {
        text: 'Continue',
        requiredState: (currentState) => currentState.Water,
        nextText: 6
      }
    ]
  },
  {
    id: 3,
    text: "Night 1: \n \n Important for defending yourself and as a tool. You'll need it to find food, you're already feeling hungry.",
    options: [
      {
        text: 'Continue',
        requiredState: (currentState) => currentState.Knife,
        nextText: 6
      }
    ]
  },
  {
    id: 4,
    text: "Night 1: \n \n These apples should come in handy when you start feeling hungry tomorrow.",
    options: [
      {
        text: 'Continue',
        requiredState: (currentState) => currentState.Food,
        nextText: 6
      }
    ]
  },
  {
    id: 5,
    text: "Night 1: \n \n At least you can see in the dark. A flashlight may help you find food or water - you're feeling hungry and thirsty already. ",
    options: [
      {
        text: 'Continue',
        requiredState: (currentState) => currentState.Light,
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    text: 'Day 1: \n \n After a long night without shelter, you find yourself wandering around looking for somewhere to find shelter. After many hours, you finally find traces of human activity. You follow the trail for some time when you see three hooded men approaching your position. These men dont look friendly. You dont have much time. What do you do?',
    options: [
      {
        text: 'Run',
        requiredState: (currentState) => currentState.Food || currentState.Water,
        nextText: 7
        // if ({Food:true}) {
        //     {nextText: 7};
        // },
        // else ({ Knife:true }) {
        //     {nextText: 8};
        // },
        // if ({ Light:true }) {
        //     {nextText: 9};
        // },
      },
      {
        text: 'Run',
        requiredState: (currentState) => currentState.Light || currentState.Knife,
        nextText: 8
      },
      {
        text: 'Hide',
        requiredState: (currentState) => currentState.Food || currentState.Water,
        nextText: 9
      },
      {
        text: 'Hide',
        requiredState: (currentState) => currentState.Knife || currentState.Light,
        nextText: 10
      },
      {
        text: 'Fight',
        // requiredState: (currentState) => currentState.Knife || currentState.Light || currentState.Food || currentState.Water,
        nextText: 11
      },
    ]
  },
  {
    id: 7,
    text: "Day 1: \n \n The three hooded men saw you take off from the path! You feel plenty hydrated to keep on going at a steady pace for many miles.  After a mile, they finally lost your track. You kept running just to make sure they were no where near where you'd set up camp for the night.",
    options: [
      {
        text: "Continue",
        nextText: 14
      }
    ]
  },
  {
    id: 8,
    text: "Day 1: \n \n The three hooded men saw you take off from the path! As you run away from them, you begin to feel weary because you haven't eaten or had anything to drink since you've been in this wilderness. You lose energy and the men quickly catch up to you.  You surrender to them. ",
    options: [
        {
          text: "Continue",
          nextText: 12
        }
    ]
  },
  {
    id: 9,
    text: "Day 1: \n \n You wait them out, they never find you",
    options: [
        {
          text: "Continue",
          nextText: 14
        }
    ]
  },
  {
    id: 10,
    text: "Day 1: \n \n They find you bc your stomach growled",
    options: [
        {
          text: "Continue",
          nextText: 12
        }
    ]
  },
  {
    id: 11,
    text: "Day 1: \n \n Never a wise idea to fight three on one",
    options: [
        {
          text: "Return",
          nextText: 6
        }
    ]
  },
  {
    id: 12,
    text: "Night 2: \n \n The other two men wander off and you are left with one man guarding you. He doesn’t seem to be as aggressive as the others, but you’ve haven’t been treated with much sympathy. Should you try and escape your bonds, or try an scare away the man?",
    options: [
      {
         text: "Scare",
         nextText: 13
      },
      {
        text: "Escape",
        nextText: 13
      }
    ]
  },
  {
    id: 13,
    text: "Night 2: \n \n You managed to escape the men. It was a close call - next time be more careful around strangers!",
    options: [
      {
          text: "Continue",
          nextText: 14
      }
    ]
  },
  {
    id: 14,
    text: "Day 2: \n \n Today, you look up at the sun and notice a halo or glow around it. You remember that this means it is likely to rain in the next day. You need to find shelter for tonight, especially if it's going to rain. Theres some larger bushes in a meadow nearby, a decent sized rocky outcropping, or space underneath a downed tree that you could use to build your shelter. Which do you choose?",
    options: [
      {
        text: "Bushes",
        nextText: 15
      },
      {
        text: "Rocks",
        nextText: 16
      },
      {
        text: "Tree",
        nextText: 17
      }
    ]
  },
  {
    id: 15,
    text: "Night 3: \n \n By nightfall, it had already begun to rain. You were never going to survive the cold night drenched in water in bushes. The most common way to die in the wild is hypothermia - try another shelter",
    options: [
      {
        text: "Return",
        nextText: 14
      }
    ]
  },
  {
    id: 16,
    text: "Night 3: \n \n By nightfall, it had already begun to rain, and for the most part, the rocky outcropping kept you dry. Good survival choice. ",
  },
  {
    id: 17,
    text: "Night 3: \n \n By nightfall, it had already begun to rain, and for the most part, your downed-tree shelter kept you dry. Good survival choice. ",
  },



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

startGame()
