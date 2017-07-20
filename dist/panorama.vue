<template>
  <div class="material-design-icon" id="panorama-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 8.5,12.5L 11,15.51L 14.5,11L 19,17L 5,17M 23,18L 23,6C 23,4.9 22.1,4 21,4L 3,4C 1.9,4 1,4.9 1,6L 1,18C 1,19.1 1.9,20 3,20L 21,20C 22.1,20 23,19.1 23,18 Z "></path>
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
