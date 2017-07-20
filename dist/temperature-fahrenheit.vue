<template>
  <div class="material-design-icon" id="temperature-fahrenheit-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 11,20L 11,5L 20,5L 20,8L 14,8L 14,11L 19,11L 19,14L 14,14L 14,20L 11,20 Z M 6,3C 7.65685,3 9,4.34315 9,6C 9,7.65686 7.65685,9 6,9C 4.34314,9 3,7.65686 3,6C 3,4.34315 4.34315,3 6,3 Z M 6,5C 5.44771,5 5,5.44772 5,6C 5,6.55229 5.44771,7 6,7C 6.55228,7 7,6.55229 7,6C 7,5.44772 6.55228,5 6,5 Z "> 
    </svg>
  </div>
</template>

<style>
  .material-design-icon {
    display: inline-flex;
    align-self: center;
    position: relative;
    height: 1em;
    width: 1em;

    > svg {
      height: 1em;
      width: 1em;
      bottom: -0.125em;
      position: absolute;
      fill: currentColor;
    }
  }
</style>
