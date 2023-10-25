AFRAME.registerComponent('rotate-penguin', {
  schema: { },
  init: function () {

    var penguin = this.el

    penguin.addEventListener('mouseenter', function () {
      penguin.setAttribute("animation-mixer",'clip: Slide'); 
    });
    penguin.addEventListener('mouseleave', function () {
      penguin.setAttribute("animation-mixer",'clip: Walk'); 
    });

    var flag = 'forward'
    function foo() {
      console.log(flag)
      if(flag == 'forward'){
        console.log('forward')
        penguin.emit('rotateForward')
        flag = 'backward'
      }else{
        console.log('backward')
        penguin.emit('rotateBackward')
        flag = 'forward'
      }
      setTimeout(foo, 10000);
    }
    foo(flag);
  }
});

AFRAME.registerComponent('spin-compass', {
  schema: { },
  init: function () {
    var button = document.querySelector('#button')
    var compass = this.el
    button.addEventListener('mouseenter', function () {
      console.log('buttonPressed');
      compass.emit('buttonPressed')
    });
  }
});