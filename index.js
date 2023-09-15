// 1) Returns an array of thank you messages for each name provided to the function
function writeCards(names, eventName) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouMessages;
  }
  
  // 2) Invokes console.log once for each number, counting down from the number provided to zero
  // 3) Logs each number when counting down, starting from the number provided
  function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
      console.log(i);
    }
  }
  
  // Example usages:
  const names = ['Alice', 'Bob', 'Charlie'];
  const eventName = 'birthday';
  
  const thankYouMessages = writeCards(names, eventName);
  for (const message of thankYouMessages) {
    console.log(message);
  }
  
  countDown(5);
  
