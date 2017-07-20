<template>
  <div class="material-design-icon" id="tooltip-image-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 4,2L 20,2C 21.1046,2 22,2.89543 22,4L 22,16C 22,17.1046 21.1046,18 20,18L 16,18L 12,22L 8,18L 4,18C 2.89543,18 2,17.1046 2,16L 2,4C 2,2.89543 2.89543,2 4,2 Z M 19,15L 19,7.00001L 15,11L 13,9.00001L 7,15L 19,15 Z M 7,5C 5.89543,5 5,5.89543 5,7C 5,8.10457 5.89543,9 7,9C 8.10457,9 9,8.10457 9,7C 9,5.89543 8.10457,5 7,5 Z "></path>
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
