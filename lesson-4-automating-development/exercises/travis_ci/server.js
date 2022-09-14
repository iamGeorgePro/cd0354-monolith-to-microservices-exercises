function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log('Containers rule!');
    await sleep(5000);
  }
}

main(); 

const password = process.env.DOCKER_PASSWORD;
console.log(`My favorite food is ${password}`);
