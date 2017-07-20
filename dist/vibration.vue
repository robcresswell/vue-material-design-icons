<template>
  <div class="material-design-icon" id="vibration-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 16,19L 8,19L 8,5L 16,5M 16.5,3L 7.5,3C 6.67,3 6,3.67 6,4.5L 6,19.5C 6,20.33 6.67,21 7.5,21L 16.5,21C 17.33,21 18,20.33 18,19.5L 18,4.5C 18,3.67 17.33,3 16.5,3 Z M 19,17L 21,17L 21,7L 19,7M 22,9L 22,15L 24,15L 24,9M 3,17L 5,17L 5,7L 3,7M 0,15L 2,15L 2,9L 0,9L 0,15 Z "> 
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
