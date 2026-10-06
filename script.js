// Placeholder values: we will update these with your actual GitHub username and repository name
const GITHUB_USERNAME = "SivaprakashAB";
const GITHUB_REPO = "sample-vscode-App";

const launchButton = document.getElementById("openVscodeBtn");

launchButton.addEventListener("click", () => {
  // Opens the repo directly inside Microsoft's vscode.dev in a new tab
  const vscodeUrl = `https://vscode.dev/github/${GITHUB_USERNAME}/${GITHUB_REPO}`;
  window.open(vscodeUrl, "_blank");
});