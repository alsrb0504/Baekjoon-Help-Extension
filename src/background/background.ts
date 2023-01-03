// SET : 언어 설정
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "SET_SETTING") {
    const { data } = request;

    chrome.storage.local.set({ lang: data }, () => {});
  }
});

// GET : 언어 설정
// sendResponse가 필요한 경우, return true; 필요.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "GET_SETTING") {
    chrome.storage.local.get("lang", (data) => {
      sendResponse({ lang: data.lang });
    });
  }

  return true;
});
