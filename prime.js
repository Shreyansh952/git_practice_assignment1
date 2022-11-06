let n = 19;
checkprime = (number) => {
    if (number == 1) {
      return false;
    }
    for (let i = 2; i <= number ** 0.5; i++) {
      if (number % i == 0) {
        return false;
      }
    }
    return true;
  }
  let answer = checkprime(n);
  if (answer == true) {
    console.log(n, "is a prime number")
  } else {
    console.log(n, "is not a prime number")
  }


 

