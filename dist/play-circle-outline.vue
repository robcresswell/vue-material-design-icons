<template>
  <div class="material-design-icon" id="play-circle-outline-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 12,20C 7.589,20 4.00001,16.411 4.00001,12C 4.00001,7.589 7.589,4.00001 12,4.00001C 16.411,4.00001 20,7.589 20,12C 20,16.411 16.411,20 12,20 Z M 12,2.00001C 6.477,2.00001 2.00001,6.477 2.00001,12C 2.00001,17.523 6.477,22 12,22C 17.523,22 22,17.523 22,12C 22,6.477 17.523,2.00001 12,2.00001 Z M 10,16.5L 16,12L 10,7.50001L 10,16.5 Z "></path>
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
