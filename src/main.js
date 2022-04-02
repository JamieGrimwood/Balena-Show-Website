const { app, BrowserWindow, screen, webFrame } = require('electron')
const inDev = process.env.NODE_ENV !== 'production'

const website_url = process.env.WEBSITE_URL || "https://status.colournodes.com"

function createWindow() {

    const { width, height } = screen.getPrimaryDisplay().workArea

    const mainWindow = new BrowserWindow({
        width,
        height,
        autoHideMenuBar: true,
        kiosk: !inDev,
        backgroundColor: '#ffffff'
    })

    mainWindow.loadURL(website_url)
}

app.on('window-all-closed', () => app.quit())

app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})