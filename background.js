chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['content.js'],
  })

  sendTabData().catch((err) => {
    console.error(err)
  })
})

async function sendTabData() {
  const [tab] = await chrome.tabs.query({
    active: true,
    lastFocusedWindow: true,
  })
  const { title, url } = tab
  const dat = {
    tab: {
      url,
      title,
    },
  }

  console.log('Sending', dat)

  // https://developer.chrome.com/docs/extensions/mv3/messaging/
  const response = await chrome.tabs.sendMessage(tab.id, dat)
  // do something with response here, not outside the function
  console.log('response', response)
  chrome.notifications.create('', {
    title: 'Copied',
    message: 'Tab link copied to clipboard',
    iconUrl: '/icon.png',
    type: 'basic',
    silent: true,
    requireInteraction: false,
  })
}
