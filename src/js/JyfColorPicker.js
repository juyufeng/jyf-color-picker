import UI from '@/js/interaction/UI';
import JyfColorCrafter from "jyf-color-crafter";
const PRESET_COLORS = [
  '#d0021b',
  '#f5a623',
  '#f8e71c',
  '#8b572a',
  '#7ed321',
  '#417505',
  '#bd10e0',
  '#9013fe',
  '#4a90e2',
  '#50e3c2',
  '#b8e986',
  '#000000',
  '#4a4a4a',
  '#9b9b9b',
  '#ffffff'
]

class JyfColorPicker {
  constructor(wrapper, option={
    color: 'rgb(0,0,255)'
  }){
    this._option = option;
    this._initColor(option.color);
    this.ui = new UI(wrapper, {
      presetColors: PRESET_COLORS,
      hsv: this.hsv,
      onChange: this.handleHsvChange
    })
    
  }

  // 
  _initColor(originalColor) {
    const color = JyfColorCrafter(originalColor);
    if(!color.isValid()) {
      throw Error('option.color 不是一个有效的颜色值, 你可以传入 #ff0000 rgba(255,255,255,0.5) ...')
    }
    this.hsv = color.toHsv();
  }

  _isVisible = false

  get visible(){
    return this._isVisible;
  }

  set visible(val){
    this._isVisible = val;
    if(val) {
      this.ui.show();
    } else {
      this.ui.hide();
    }
  }

  handleHsvChange = (color)=> {
    this.color = JyfColorCrafter(color);
    this.hsv = this.color.toHsv();
    if(this._option?.onChange) {
      this._option.onChange(color)
    }
  }

  destroy(){
    this.ui.destroy();
    this.ui = null;
    this._option = null;
  }
}

export default JyfColorPicker;