chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
  alert(tab.title)
})
