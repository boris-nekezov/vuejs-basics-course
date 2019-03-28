<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <h1>Transitions and Animations</h1>
        <hr>
        <h2>1. Set up animation with transition property</h2>

        <button 
          class="btn btn-primary" 
          @click="toogleTransition = !toogleTransition">Show Alert</button>

        <br><br>

        <transition name="fade">
          <div class="alert alert-primary" v-if="toogleTransition">This is some info</div>
        </transition>

        <hr>

        <h2>7. Set up animation with animation property</h2>

        <button 
          class="btn btn-success" 
          @click="toggleAnimation = !toggleAnimation">Show Alert</button>

        <br><br>

        <transition name="slide">
          <div class="alert alert-success slide-el" v-show="toggleAnimation">
            <div class="space">
              This is some info
            </div>
          </div>
        </transition>

        <hr>

        <h2>9. Animate on initial load</h2>

        <transition name="fade" appear>
          <div class="alert alert-warning slide-el" v-show="initialLoad">
            <div class="space">
              This is some info
            </div>
          </div>
        </transition>

        <transition name="slide" appear>
          <div class="alert alert-warning slide-el" v-show="initialLoad">
            <div class="space">
              This is some info
            </div>
          </div>
        </transition>

        <hr>

        <h2>10. How to set different class names</h2>

          <button 
            class="btn btn-success" 
            @click="toogleCustomClasses = !toogleCustomClasses">Show Alert</button>

        <br><br>

        <transition 
          enter-class="custom-enter-class"
          enter-active-class="custom-enter-active-class animated bounceInDown"
          enter-to-class="custom-enter-to-class"
          leave-class="custom-leave-class"
          leave-active-class="custom-leave-active-class animated zoomOut"
          leave-to-class="custom-leave-to-class">
          <div class="custom-el" v-show="toogleCustomClasses">
            <div class="space">
              This is some info
            </div>
          </div>
        </transition>

        <hr>

        <h3>Choose Enter Class from Animate.css</h3>
        
        <select class="form-control" v-model="enterActiveClass">

          <optgroup label="Attention Seekers">
            <option value="bounce">bounce</option>
            <option value="flash">flash</option>
            <option value="pulse">pulse</option>
            <option value="rubberBand">rubberBand</option>
            <option value="shake">shake</option>
            <option value="swing">swing</option>
            <option value="tada">tada</option>
            <option value="wobble">wobble</option>
            <option value="jello">jello</option>
            <option value="heartBeat">heartBeat</option>
          </optgroup>

          <optgroup label="Bouncing Entrances">
            <option value="bounceIn">bounceIn</option>
            <option value="bounceInDown">bounceInDown</option>
            <option value="bounceInLeft">bounceInLeft</option>
            <option value="bounceInRight">bounceInRight</option>
            <option value="bounceInUp">bounceInUp</option>
          </optgroup>

          <optgroup label="Bouncing Exits">
            <option value="bounceOut">bounceOut</option>
            <option value="bounceOutDown">bounceOutDown</option>
            <option value="bounceOutLeft">bounceOutLeft</option>
            <option value="bounceOutRight">bounceOutRight</option>
            <option value="bounceOutUp">bounceOutUp</option>
          </optgroup>

          <optgroup label="Fading Entrances">
            <option value="fadeIn">fadeIn</option>
            <option value="fadeInDown">fadeInDown</option>
            <option value="fadeInDownBig">fadeInDownBig</option>
            <option value="fadeInLeft">fadeInLeft</option>
            <option value="fadeInLeftBig">fadeInLeftBig</option>
            <option value="fadeInRight">fadeInRight</option>
            <option value="fadeInRightBig">fadeInRightBig</option>
            <option value="fadeInUp">fadeInUp</option>
            <option value="fadeInUpBig">fadeInUpBig</option>
          </optgroup>

          <optgroup label="Fading Exits">
            <option value="fadeOut">fadeOut</option>
            <option value="fadeOutDown">fadeOutDown</option>
            <option value="fadeOutDownBig">fadeOutDownBig</option>
            <option value="fadeOutLeft">fadeOutLeft</option>
            <option value="fadeOutLeftBig">fadeOutLeftBig</option>
            <option value="fadeOutRight">fadeOutRight</option>
            <option value="fadeOutRightBig">fadeOutRightBig</option>
            <option value="fadeOutUp">fadeOutUp</option>
            <option value="fadeOutUpBig">fadeOutUpBig</option>
          </optgroup>

          <optgroup label="Flippers">
            <option value="flip">flip</option>
            <option value="flipInX">flipInX</option>
            <option value="flipInY">flipInY</option>
            <option value="flipOutX">flipOutX</option>
            <option value="flipOutY">flipOutY</option>
          </optgroup>

          <optgroup label="Lightspeed">
            <option value="lightSpeedIn">lightSpeedIn</option>
            <option value="lightSpeedOut">lightSpeedOut</option>
          </optgroup>

          <optgroup label="Rotating Entrances">
            <option value="rotateIn">rotateIn</option>
            <option value="rotateInDownLeft">rotateInDownLeft</option>
            <option value="rotateInDownRight">rotateInDownRight</option>
            <option value="rotateInUpLeft">rotateInUpLeft</option>
            <option value="rotateInUpRight">rotateInUpRight</option>
          </optgroup>

          <optgroup label="Rotating Exits">
            <option value="rotateOut">rotateOut</option>
            <option value="rotateOutDownLeft">rotateOutDownLeft</option>
            <option value="rotateOutDownRight">rotateOutDownRight</option>
            <option value="rotateOutUpLeft">rotateOutUpLeft</option>
            <option value="rotateOutUpRight">rotateOutUpRight</option>
          </optgroup>

          <optgroup label="Sliding Entrances">
            <option value="slideInUp">slideInUp</option>
            <option value="slideInDown">slideInDown</option>
            <option value="slideInLeft">slideInLeft</option>
            <option value="slideInRight">slideInRight</option>

          </optgroup>
          <optgroup label="Sliding Exits">
            <option value="slideOutUp">slideOutUp</option>
            <option value="slideOutDown">slideOutDown</option>
            <option value="slideOutLeft">slideOutLeft</option>
            <option value="slideOutRight">slideOutRight</option>
            
          </optgroup>

          <optgroup label="Zoom Entrances">
            <option value="zoomIn">zoomIn</option>
            <option value="zoomInDown">zoomInDown</option>
            <option value="zoomInLeft">zoomInLeft</option>
            <option value="zoomInRight">zoomInRight</option>
            <option value="zoomInUp">zoomInUp</option>
          </optgroup>

          <optgroup label="Zoom Exits">
            <option value="zoomOut">zoomOut</option>
            <option value="zoomOutDown">zoomOutDown</option>
            <option value="zoomOutLeft">zoomOutLeft</option>
            <option value="zoomOutRight">zoomOutRight</option>
            <option value="zoomOutUp">zoomOutUp</option>
          </optgroup>

          <optgroup label="Specials">
            <option value="hinge">hinge</option>
            <option value="jackInTheBox">jackInTheBox</option>
            <option value="rollIn">rollIn</option>
            <option value="rollOut">rollOut</option>
          </optgroup>

        </select>

        <br>
        
        <h3>Choose Leave Class from Animate.css</h3>
        
        <select class="form-control" v-model="leaveActiveClass">
          <optgroup label="Attention Seekers">
            <option value="bounce">bounce</option>
            <option value="flash">flash</option>
            <option value="pulse">pulse</option>
            <option value="rubberBand">rubberBand</option>
            <option value="shake">shake</option>
            <option value="swing">swing</option>
            <option value="tada">tada</option>
            <option value="wobble">wobble</option>
            <option value="jello">jello</option>
            <option value="heartBeat">heartBeat</option>
          </optgroup>

          <optgroup label="Bouncing Entrances">
            <option value="bounceIn">bounceIn</option>
            <option value="bounceInDown">bounceInDown</option>
            <option value="bounceInLeft">bounceInLeft</option>
            <option value="bounceInRight">bounceInRight</option>
            <option value="bounceInUp">bounceInUp</option>
          </optgroup>

          <optgroup label="Bouncing Exits">
            <option value="bounceOut">bounceOut</option>
            <option value="bounceOutDown">bounceOutDown</option>
            <option value="bounceOutLeft">bounceOutLeft</option>
            <option value="bounceOutRight">bounceOutRight</option>
            <option value="bounceOutUp">bounceOutUp</option>
          </optgroup>

          <optgroup label="Fading Entrances">
            <option value="fadeIn">fadeIn</option>
            <option value="fadeInDown">fadeInDown</option>
            <option value="fadeInDownBig">fadeInDownBig</option>
            <option value="fadeInLeft">fadeInLeft</option>
            <option value="fadeInLeftBig">fadeInLeftBig</option>
            <option value="fadeInRight">fadeInRight</option>
            <option value="fadeInRightBig">fadeInRightBig</option>
            <option value="fadeInUp">fadeInUp</option>
            <option value="fadeInUpBig">fadeInUpBig</option>
          </optgroup>

          <optgroup label="Fading Exits">
            <option value="fadeOut">fadeOut</option>
            <option value="fadeOutDown">fadeOutDown</option>
            <option value="fadeOutDownBig">fadeOutDownBig</option>
            <option value="fadeOutLeft">fadeOutLeft</option>
            <option value="fadeOutLeftBig">fadeOutLeftBig</option>
            <option value="fadeOutRight">fadeOutRight</option>
            <option value="fadeOutRightBig">fadeOutRightBig</option>
            <option value="fadeOutUp">fadeOutUp</option>
            <option value="fadeOutUpBig">fadeOutUpBig</option>
          </optgroup>

          <optgroup label="Flippers">
            <option value="flip">flip</option>
            <option value="flipInX">flipInX</option>
            <option value="flipInY">flipInY</option>
            <option value="flipOutX">flipOutX</option>
            <option value="flipOutY">flipOutY</option>
          </optgroup>

          <optgroup label="Lightspeed">
            <option value="lightSpeedIn">lightSpeedIn</option>
            <option value="lightSpeedOut">lightSpeedOut</option>
          </optgroup>

          <optgroup label="Rotating Entrances">
            <option value="rotateIn">rotateIn</option>
            <option value="rotateInDownLeft">rotateInDownLeft</option>
            <option value="rotateInDownRight">rotateInDownRight</option>
            <option value="rotateInUpLeft">rotateInUpLeft</option>
            <option value="rotateInUpRight">rotateInUpRight</option>
          </optgroup>

          <optgroup label="Rotating Exits">
            <option value="rotateOut">rotateOut</option>
            <option value="rotateOutDownLeft">rotateOutDownLeft</option>
            <option value="rotateOutDownRight">rotateOutDownRight</option>
            <option value="rotateOutUpLeft">rotateOutUpLeft</option>
            <option value="rotateOutUpRight">rotateOutUpRight</option>
          </optgroup>

          <optgroup label="Sliding Entrances">
            <option value="slideInUp">slideInUp</option>
            <option value="slideInDown">slideInDown</option>
            <option value="slideInLeft">slideInLeft</option>
            <option value="slideInRight">slideInRight</option>

          </optgroup>
          <optgroup label="Sliding Exits">
            <option value="slideOutUp">slideOutUp</option>
            <option value="slideOutDown">slideOutDown</option>
            <option value="slideOutLeft">slideOutLeft</option>
            <option value="slideOutRight">slideOutRight</option>
            
          </optgroup>
          
          <optgroup label="Zoom Entrances">
            <option value="zoomIn">zoomIn</option>
            <option value="zoomInDown">zoomInDown</option>
            <option value="zoomInLeft">zoomInLeft</option>
            <option value="zoomInRight">zoomInRight</option>
            <option value="zoomInUp">zoomInUp</option>
          </optgroup>
          
          <optgroup label="Zoom Exits">
            <option value="zoomOut">zoomOut</option>
            <option value="zoomOutDown">zoomOutDown</option>
            <option value="zoomOutLeft">zoomOutLeft</option>
            <option value="zoomOutRight">zoomOutRight</option>
            <option value="zoomOutUp">zoomOutUp</option>
          </optgroup>

          <optgroup label="Specials">
            <option value="hinge">hinge</option>
            <option value="jackInTheBox">jackInTheBox</option>
            <option value="rollIn">rollIn</option>
            <option value="rollOut">rollOut</option>
          </optgroup>
        </select>  

        <br>

        <button 
          class="btn btn-warning" 
          @click="toogleSelectedClasses = !toogleSelectedClasses">Show div</button>

        <br><br>

        <transition 
          enter-class="animated animated-enter-class"
          :enter-active-class="'animated ' + enterActiveClass"
          enter-to-class="animated animated-enter-to-class"
          leave-class="animated animated-leave-class"
          :leave-active-class="'animated ' + leaveActiveClass"
          leave-to-class="animated animated-leave-to-class">
          <div class="custom-el" v-show="toogleSelectedClasses">
            <div class="space">
              This is div that is animated with Animate.css and you can choose the effects from the selects above
            </div>
          </div>
        </transition>

        <hr>

        <h2>11. Transition between elements</h2>

        <button 
          class="btn btn-primary" 
          @click="toggleBetweenELs = !toggleBetweenELs">Toggle between elements</button>

        <br><br>

        <transition name="fade" mode="out-in">

          <div 
            class="alert alert-primary" 
            v-if="toggleBetweenELs"
            key="primary">This is primary alert
          </div>

          <div 
            class="alert alert-success" 
            v-else
            key="success">This is success alert
          </div>

        </transition>

        <hr>

        <h2>12. Animate with Transition JavaScript Hooks</h2>

        <button class="btn btn-info" @click="toggle = !toggle">Load / Remove Element</button>
        
        <br><br>
        
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false">
          <div 
            style="width: 300px; height: 100px; background-color: #17a2b8"
            v-if="toggle"></div>
        </transition>

        <hr>

        <h2>13. Animate multiple list items with Transition Group</h2>
        <button class="btn btn-success" @click="addItem">Add Item</button>
        <br><br>
        <ul class="list-group">
          <transition-group name="slide">
            <li 
              class="list-group-item" 
              v-for="(number, index) in numbers" 
              @click="removeItem(index)"
              :key="number"
              style="cursor: pointer;padding: 0!important;">
                <div class="space">
                  {{ number }}
                </div>
            </li>
          </transition-group>  
        </ul>

        <br><br><br><br><br><br><br><br><br><br>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      toogleTransition: false,
      toggleAnimation: false,
      initialLoad: true,
      toogleCustomClasses: false,
      toogleSelectedClasses: false,
      enterActiveClass: 'fadeIn',
      leaveActiveClass: 'fadeOut',
      toggleBetweenELs: true,
      toggle: true,
      elementWidth: 100,
      numbers: [1,2,3,4,5]
    }
  },
  methods: {
    beforeEnter(el){
      console.log('beforeEnter');
      // reset the with to 100 before re-adding it to DOM   
      this.elementWidth = 100;
      el.style.width = this.elementWidth + 'px';
    },
    
    enter(el, done){
      console.log('enter');
   
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + 'px';
        round++;
        if (round > 20){
          clearInterval(interval);
          done();
        }
      }, 20);
    },

    afterEnter(el){
      console.log('afterEnter');
    },

    enterCancelled(el){
      console.log('enterCancelled');
    },

    beforeLeave(el){
      console.log('beforeLeave');
      this.elementWidth = 300;
      el.style.width = this.elementWidth + 'px';
    },

    leave(el, done){
      console.log('leave');
         
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + 'px';
        round++;
        if (round > 20){
          clearInterval(interval);
          done();
        }
      }, 20);

    },

    afterLeave(el){
      console.log('afterLeave');
    },

    leaveCancelled(el){
      console.log('leaveCancelled');
    },

    addItem(){
      const position = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(position, 0, this.numbers.length + 1);
    },
    removeItem(index){
      this.numbers.splice(index, 1);
    }

  }
};


</script>

<style lang="scss">

  // fade
  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    transition: opacity 1s;
  }

  .fade-enter-to {

  }

  .fade-leave {
    /* opacity: 1; we don't need to set this up it's by default 1 */
  }

  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }

  .fade-leave-to {

  }

  // slide
  .slide-el {
    overflow: hidden;
    padding: 0;
  }
  .space {
    padding: 10px;
  }

  .slide-enter {
    height: 0;
  }

  .slide-enter-active {
    animation: slide-in 1s linear forwards;
  }

  .slide-leave {

  }

  .slide-leave-active {
    animation: slide-out 1s linear forwards; 
  }

  @keyframes slide-in {
    from {
      max-height: 0px;
    }
    to {
      max-height: 100px;
    }
  }

  @keyframes slide-out {
    from {
      max-height: 100px;
    }
    to {
      max-height: 0px;
    }
  }

  .custom-el {
    overflow: hidden;
    padding: 0;
    background: yellowgreen;
    border-radius: 3px;
    border: 3px solid #000;
  }
</style>
