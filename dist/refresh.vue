<template>
  <div class="material-design-icon" id="refresh-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 17.65,6.35C 16.2,4.9 14.21,4 12,4C 7.58,4 4.01,7.58 4.01,12C 4.01,16.42 7.58,20 12,20C 15.73,20 18.84,17.45 19.73,14L 17.65,14C 16.83,16.33 14.61,18 12,18C 8.69,18 6,15.31 6,12C 6,8.69 8.69,6 12,6C 13.66,6 15.14,6.69 16.22,7.78L 13,11L 20,11L 20,4L 17.65,6.35 Z "></path>
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
