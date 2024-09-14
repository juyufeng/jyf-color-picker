import Widget from './Widget';
import * as helpers from '@/js/helpers/color'

class EditableInput extends Widget {
  constructor(ui){
    super(ui, '[widget="editable-input"]');
    this.handler = this._selectorAll('input');
    this._addEvent()
    this.render()
  }

  render() {
    const color = this._getTinyColor(this._ui.hsv)
    this._originalValue = Object.assign({
      hex: this._getTinyColor(this._ui.hsv).toHexString()
    }, color.toRgb())

    this._originalValue.a *= 100

    this.handler.forEach((input)=>{
      const label = input.nextElementSibling.innerText.toLowerCase().trim();
      input.value = this._originalValue[label]
    })
  }

  _addEvent(){
    this.handler.forEach((input)=>{
      input.addEventListener('change', this._onInputChange)
    })
  }

  _onInputChange = (e)=>{
    this.handleChange(helpers.calculateChange(e, this._originalValue))
  }
}

export default EditableInput;