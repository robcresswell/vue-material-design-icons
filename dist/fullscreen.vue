<template>
  <div class="material-design-icon" id="fullscreen-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 5,5L 10,5L 10,7L 7,7L 7,10L 5,10L 5,5 Z M 14,5.00001L 19,5.00001L 19,10L 17,10L 17,7.00001L 14,7.00001L 14,5.00001 Z M 17,14L 19,14L 19,19L 14,19L 14,17L 17,17L 17,14 Z M 10,17L 10,19L 5,19L 5,14L 7,14L 7,17L 10,17 Z "> 
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
