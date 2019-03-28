# Transition and animations

# 1. Let's have some button and div that will be toggled with animation 

# 2. We make to show and hide it with v-if

# 3. To add animation we wrap the div with `<transition>` - this is a special component and everything inside it can be animated

# 4. IMPORTANT!!! We can only animate one element with `<transition>` for multiple elements there is other component (show err in console with more than one el)

# 5. transition give us 6 classes:

### 5.1 `v-enter` - will be attach at the beginning animation

### 5.2 `v-enter-active` - this class will remain until the animation finishes <<element is visible>>

### 5.3 `v-enter-to` - Only available in versions `2.1.8+`. Ending state for enter. Added one frame after element is inserted (at the same time v-enter is removed), removed when transition/animation finishes.

### 5.4 `v-leave` - Starting state for leave. Added immediately when a leaving transition is triggered, removed after one frame.

### 5.5 `v-leave-active` - stay until it finish the leave animation

### 5.6 `v-leave-to` - Only available in versions `2.1.8+`. Ending state for leave. Added one frame after a leaving transition is triggered (at the same time v-leave is removed), removed when the transition/animation finishes.

# 6. We specify class by using the name attribute name="$nameWeSet"

# 7. We can also make animations using animation property
      
### 7.1 Add "forwards" when you want the element to stay in that position after the animation

# 8. We can use use v-show and it will behave the same

# 9. Maybe we want to animate some element when tha page is loaded first

### 9.1 To vuejs you want to animate the initial attaching to the dom you can add the appear attribute to the transtion component

# 10. How to set different class names

## 10.1 Let's use this css animation library - https://daneden.github.io/animate.css/

## 10.2 We will put some custom classes from it

## 10.3 We can put custom class as attributes in the transition component

```html
<transition 
        name="some-custom-classes"
        enter-class="custom-enter-class"
        enter-active-class="custom-enter-active-class animated bounceIn"
        enter-to-class="custom-enter-to-class"
        leave-class="custom-leave-class"
        leave-active-class="custom-leave-active-class animated bounceOutRight"
        leave-to-class="custom-leave-active-class">
        <div class="custom-el" v-show="toogleCustomClasses">
        <div class="space">
            This is some info
        </div>
        </div>
</transition>
```

## 10.4 We can also make this attributes dynamic.

## 10.5 In next example we create 2 variables for enter and leave class and we change them with 2 selects which holds all available Animate.css classes then we bind them dynamically in the `transition` component

```html
<transition 
    enter-class="animated animated-enter-class"
    :enter-active-class="'animated ' + enterActiveClass"
    enter-to-class="animated animated-enter-to-class"
    leave-class="animated animated-leave-class"
    :leave-active-class="'animated ' + leaveActiveClass"
    leave-to-class="animated animated-leave-to-class">
    <div class="custom-el" v-show="toogleSelectedClasses">
    <div class="space">
        This is some info
    </div>
    </div>
</transition>
```

# 11. Transition between elements

## 11.1 In this case it doesn't work with v-show we have to use v-if

## 11.2 We have to add unique key in the elements inside because vuejs will recognize them as one element

```html
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
```

# 12. Animate with Transition JavaScript Hooks

## 12.1 When using Transition JavaScript Hooks we don't have such timing like in css transtiion. If you do the animation with javascript script you need to call the `done()` function when the animation is done. You don't need to call `done()` if you use css animations

# 12.2 If you don't use css you can tell vuejs that you will not use css and it will skip the part that checks if we have css for better performance with add `:css="false"` to `<transition>` component. We add ":" because we want to pass "false" as boolean not as a string

## 12.3 The place to animate is the enter and the leave function

# 13. Animate multiple list items with Transition Group

## 13.1 IMPORTANT!!! For transition group we always have to key the elements

## 13.2 <transition-group> has extra class `v-move` when element has to change place 

## Link to DOCS: https://vuejs.org/v2/guide/transitions.html



