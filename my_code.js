// my_code.js - Place your custom business logic here

async function runActualTask() {
  // Simulating background work (e.g. data calculation, API call, processing)
  let statusUpdates = [];
  statusUpdates.push("Initializing background task...");

  // Example: Doing some computational work
  let totalSum = 0;
  for (let i = 1; i <= 99; i++) {
    totalSum += i;
  }
  statusUpdates.push(`Computation finished: Sum of numbers from 1 to 99 is ${totalSum}`);

  // Simulating a short delay like a real background process
  await new Promise((resolve) => setTimeout(resolve, 800));

  statusUpdates.push("Task executed successfully with 0 errors.");
  
  // Return the final result to be shown in the UI
  return statusUpdates.join("\n");
}