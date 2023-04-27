const { BrowserWindow } = require('electron');

class GUI {
  constructor(title, width, height) {
    this.title = title;
    this.width = width;
    this.height = height;
    this.components = [];
    this.window = null;
  }

  addComponent(component) {
    this.components.push(component);
  }

  removeComponent(component) {
    const index = this.components.indexOf(component);
    if (index > -1) {
      this.components.splice(index, 1);
    }
  }

  createWindow() {
    this.window = new BrowserWindow({
      width: this.width,
      height: this.height,
      title: this.title
    });

    // Load the app's main JavaScript file:
    this.window.loadFile('app.js');

    // Open DevTools for debugging:
    this.window.webContents.openDevTools();

    this.window.on('closed', () => {
      this.window = null;
    });
  }
}

module.exports = GUI;
