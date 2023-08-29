chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js'],
  })
})

// chrome.browserAction.onClicked.addListener(function () {
//   alert('hi')
// })

// function getLink() {
//   //   chrome.tabs.getSelected(null, (tab) => {
//   //     // null defaults to current window
//   //     var title = tab.title
//   //     // ...
//   //     alert(title)
//   //   })
//   chrome.tabs.query({ active: true, currentWindow: true }, (tab)  =>{
//     // do some other fanciful stuff here
//     alert(tab.title)
//   })
// }
