<template>
  <div class="material-design-icon" id="tooltip-text-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 4,2L 20,2C 21.1046,2 22,2.89543 22,4L 22,16C 22,17.1046 21.1046,18 20,18L 16,18L 12,22L 8,18L 4,18C 2.89543,18 2,17.1046 2,16L 2,4C 2,2.89543 2.89543,2 4,2 Z M 5,5.00001L 5,7.00001L 19,7.00001L 19,5.00001L 5,5.00001 Z M 5,9.00001L 5,11L 15,11L 15,9.00001L 5,9.00001 Z M 5,13L 5,15L 17,15L 17,13L 5,13 Z "> 
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
