import JyfColorCrafter from "jyf-color-crafter";

export const calculateChange = (e, rgb) => {
  let data = e.target.value;
  let label = e.target.nextElementSibling.innerText.toLowerCase();

  if (label === 'hex' && JyfColorCrafter(data).isValid()){
     return {
      hex: data,
      source: 'hex',
     }

  } else if('rgb'.includes(label)){

    if(data < 0) {
      data = 0
    }
    if(data > 255) {
      data = 255
    }

    return Object.assign(
      {
        r: rgb.r,
        g: rgb.g,
        b: rgb.b,
        a: rgb.a,
        source: 'rgb',
      }, {
        [label]: data
      })
      
  } else {
    
    if(data<0) {
      data = 0
    }
    if(data>100) {
      data = 100
    }
    return{
        r: rgb.r,
        g: rgb.g,
        b: rgb.b,
        a: data/100,
        source: 'rgb',
    }
  }
}