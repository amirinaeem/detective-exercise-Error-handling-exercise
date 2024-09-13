function mysteryOperation() {
  const outcome = Math.floor(Math.random()); // Generates a random number between 0 and 1.

  if (outcome < 0.5) {
    console.log("The operation is completed successfully!");
  } else {
    throw new Error("The operation is failed mysteriously!");
  }
}

// variable for given number of day for operation
const numberOfOperations = 20;

// variable for given number of day on success
const daysOnSuccess = 13;

// variable for given number of day on failure
const daysOnFailure = 1;

// variable for given number of day on attendance
const daysOnAttendance = 3;

// variable for given number of day earned by operation
let daysEarned = 0;

// try block to operate the operation
try {
  for (let i = 0; i < numberOfOperations; i++) {
    mysteryOperation();
    daysEarned += daysOnSuccess;
  }
} catch (error) {
  // Catch block to catch error if operation failed
  daysEarned += daysOnFailure;
} finally {
  // finally block wether the operation failed or succeed
  daysEarned += daysOnAttendance;
}

console.log(daysEarned);
