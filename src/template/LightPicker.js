export default ({
  prefix
}) => `
<div class="${prefix}">
  <div class="${prefix}__jyfpad" widget="jyfpad">
    <div class="${prefix}__jyfpad—saturation"></div>
    <div class="${prefix}__jyfpad—value"></div>
    <div class="${prefix}__circle-handler" handler></div>
  </div>

  <div class="${prefix}__flexbox">

    <div style="padding: 4px 0px; flex: 1 1 0%;">

      <div class="${prefix}__hue" widget="hue-slider">
        <div class="${prefix}__hue-bg" background>
          <div class="${prefix}__handler" handler></div>
        </div>
      </div>

      <div class="${prefix}__transparency" widget="alpha-slider">
        <div class="${prefix}__transparency-bg" background>
          <div class="${prefix}__handler" handler></div>
        </div>
      </div>

    </div>

    <div class="${prefix}__color" widget="preview">
      <div class="${prefix}__color-bg" background></div>
    </div>

  </div>

  <div class="${prefix}__gridbox" style="padding-top: 4px;" widget="editable-input">
    <div class="${prefix}__color-Hex ${prefix}_input">
        <input type="text"/>
        <label>hex</label>
    </div>
    <div class="${prefix}__color-R ${prefix}_input">
      <input type="text"/>
      <label>r</label>
    </div>
    <div class="${prefix}__color-G ${prefix}_input">
      <input type="text"/>
      <label>g</label>
    </div>
    <div class="${prefix}__color-B ${prefix}_input">
      <input type="text"/>
      <label>b</label>
    </div>
    <div class="${prefix}__color-A ${prefix}_input">
      <input type="text"/>
      <label>a</label>
    </div>
  </div>

<div class="${prefix}__flexbox ${prefix}__preset" widget="preset-buttons"></div>
</div>
`