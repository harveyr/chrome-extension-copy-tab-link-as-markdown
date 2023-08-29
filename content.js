chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   console.log(
//     sender.tab
//       ? 'from a content script:' + sender.tab.url
//       : 'from the extension'
//   )
//   console.log('request', request)
  const { title, url } = request.tab
  const link = `[${title}](${url})`
  copyToClipboard(link)
  sendResponse({ ok: true, link })
})

function copyToClipboard(text) {
  // https://stackoverflow.com/questions/3436102/copy-to-clipboard-in-chrome-extension
  const copyFrom = document.createElement('textarea')
  copyFrom.textContent = text
  document.body.appendChild(copyFrom)
  copyFrom.select()
  document.execCommand('copy')
  copyFrom.blur()
  document.body.removeChild(copyFrom)
}