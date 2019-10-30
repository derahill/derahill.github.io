const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

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
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}
function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}
function selectOption(option) {
  const nextTextNodeId = option.nextText
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'You wake up in a strange place and you see something',
    options: [
      {
        text: 'Water',
        setState: { Water: true },
        nextText: 2
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
    text: "You're glad a water bottle somehow made it with you. Youre staying hydrated with clean water, for now.",
  },
  {
    id: 3,
    text: "Important for defending yourself and as a tool. You'll need it to find food, you're already feeling hungry.",
  },
  {
    id: 4,
    text: "These apples should come in handy when you start feeling hungry tomorrow.",
  },
  {
    id: 5,
    text: "At least you can see in the dark. A flashlight may help you find food or water - you're feeling hungry and thirsty already. ",
  },
  {
    id: 6,
    text: 'You wake up in a strange place and you see somethinge else',
    options: [
      {
        text: 'sword',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { Water: false, sword: true },
        nextText: 4
      },
      {
        text: 'shield',
        requiredState: (currentState) => currentState.blueGoo,
        setState: { Water: false, shield: true },
        nextText: 4
      },
      {
        text: 'leave',
        nextText: 4
      }
    ]
  }
]

startGame()
