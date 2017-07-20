<template>
  <div class="material-design-icon" id="tooltip-edit-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 4,2L 20,2C 21.1046,2 22,2.89543 22,4L 22,16C 22,17.1046 21.1046,18 20,18L 16,18L 12,22L 8,18L 4,18C 2.89543,18 2,17.1046 2,16L 2,4C 2,2.89543 2.89543,2 4,2 Z M 18,14L 18,12L 12.5,12L 10.5,14L 18,14 Z M 5.99999,14L 8.47501,14L 15.353,7.12103C 15.549,6.92601 15.549,6.60901 15.353,6.41402L 13.586,4.64602C 13.39,4.45103 13.074,4.45103 12.878,4.64602L 5.99999,11.525L 5.99999,14 Z "></path>
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
