import Widget from './Widget';

class Preview extends Widget {
  constructor(ui){
    super(ui, '[widget="preview"]');
    this.render()
  }

  render() {
    const color = this._getTinyColor(this._ui.hsv)
    this._selector('[background]').style = `background: ${color.toRgbString()}`
  }
}

export default Preview