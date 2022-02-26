/* global chrome */
export default function check() {
  const EXTENSION_ID = "pjmlkdacmaejhkdcflncbpcpidkggoio";

  chrome.runtime.sendMessage(EXTENSION_ID, "0.1.20", (response) => {
    if (!response) {
      console.log("No extension");
      return false;
    }
    console.log("Extension version: ", response.version);
    return true;
  });
}
