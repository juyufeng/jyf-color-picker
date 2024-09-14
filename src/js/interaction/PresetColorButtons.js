import JyfColorCrafter from "jyf-color-crafter";
import Widget from './Widget';

class PresetColorButtons extends Widget {
  constructor(ui){
    super(ui, '[widget="preset-buttons"]');
    this._addEvent()
  }

  _makeUiElement(){
    const domList = this._ui._option.presetColors.map( c =>{
      const hexColor = JyfColorCrafter(c).toHexString();
      return (
        `<div title="${hexColor}" style="background: ${hexColor};"></div>`
      )
    })
    this._element.innerHTML = domList.join('\n');
  }

  _addEvent(){
    this._events = {
      onClick: this.handleClick
    }
    this._element.addEventListener('click', this._events.onClick)
  }

  _removeEvent(){
    this._element.removeEventListener('click', this._events.onClick)
  }

  handleClick = (e)=> {
    if(e?.target?.title) {
      this.handleChange({
        hex: e.target.title,
        source: 'hex'
      })
    }
  }
}

export default PresetColorButtons