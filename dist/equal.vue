<template>
  <div class="material-design-icon" id="equal-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 19,10L 5,10L 5,8L 19,8L 19,10 Z M 19,16L 5,16L 5,14L 19,14L 19,16 Z "> 
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
