function generateRandomNumber(num) {
   return Math.floor(Math.random() * num);
}

const collectiveWisdom = {
   signInfo: ['star', 'moon', 'sun', 'comet'],
   fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
   advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
};

function getRandomMessage(property) {
   const options = collectiveWisdom[property];
   const randomIndex = generateRandomNumber(options.length);
   return options[randomIndex];
}

function formatAndDisplayMessage(property) {
   const message = getRandomMessage(property);
   console.log(`You ${property === 'signInfo' ? 'Your sign right now is a' : 'are having'}: "${message}".`);
}

function generatePersonalWisdom() {
   for (let prop in collectiveWisdom) {
      formatAndDisplayMessage(prop);
   }
}

generatePersonalWisdom();
