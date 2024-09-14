import Widget from './Widget';
import * as helpers from '@/js/helpers/alpha'
import * as utils from '@/js/helpers/utils'

class AlphaSlider extends Widget {
  constructor(ui){
    super(ui, '[widget="alpha-slider"]');
    this._handler = this._selector('[handler]');
    this._addEvent()
    this.render()
  }

  render() {
    const {h, a} = this._ui.hsv;
    
    this._selector('[background]').style = `background: linear-gradient(to right, hsl(0deg,100%,50%,0), hsl(${h}deg,100%,50%,1))`

    this._handler.style = `
      left: ${a*100}%;
    `
  }

  // 绑定事件
  _addEvent(){
    this._events = {
      handleMouseDown: (e)=>{
        this._events.handleChange(e);
        document.addEventListener('mousemove', this._events.handleChange)
        document.addEventListener('mouseup', this._events.handleMouseUp)
      },
      handleChange: utils.throttle((e)=>{
        const hsv = helpers.calculateChange(e, this._ui.hsv, this._element)
        this.handleChange(hsv);
      }, 50),
      handleMouseUp: ()=>{
        document.removeEventListener('mousemove', this._events.handleChange)
        document.removeEventListener('mouseup', this._events.handleMouseUp)
      }
    }
    this._element.addEventListener('mousedown', this._events.handleMouseDown)
  }

  // 移除事件
  _removeEvent(){
    this._element.removeEventListener('mousedown', this._events.handleMouseDown)
  }
}

export default AlphaSlider