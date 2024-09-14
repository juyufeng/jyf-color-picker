import JyfColorCrafter from "jyf-color-crafter";

class Widget {
  constructor(ui, selector) {
    this._ui = ui;
    this._element = ui._selector(selector)
    this._events = null;
    this._makeUiElement()
  }

  handleChange(hsv){
    hsv && this._ui._handleHsvChange(hsv)
  }

  _getTinyColor(color){
    return JyfColorCrafter(color)
  }

  _selector(selector, _element=this._element){
    if(!_element) throw Error('请先声明_element！')
    return _element.querySelector(selector)
  }

  _selectorAll(selector){
    return this._element.querySelectorAll(selector)
  }

  _makeUiElement(){}

  _addEvent(){}

  _removeEvent(){}

  render() {}

  destroy(){
    this._removeEvent()
    this._handler = null;
    this._events = null;
    this._element = null;
    this._ui = null;
  }
}

export default Widget;