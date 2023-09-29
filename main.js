const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = async () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
    })
    await window.loadFile(path.join(__dirname, "client", 'html', 'mainPage.html'))
}

app.on('ready', () => {
    createWindow()
    console.log('Electron started!')
})
