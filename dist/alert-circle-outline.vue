<template>
  <div class="material-design-icon" id="alert-circle-outline-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 11,15L 13,15L 13,17L 11,17L 11,15 Z M 11,7L 13,7L 13,13L 11,13L 11,7 Z M 11.99,2C 6.47,2 2,6.48 2,12C 2,17.52 6.47,22 11.99,22C 17.52,22 22,17.52 22,12C 22,6.48 17.52,2 11.99,2 Z M 12,20C 7.58,20 4,16.42 4,12C 4,7.58 7.58,4 12,4C 16.42,4 20,7.58 20,12C 20,16.42 16.42,20 12,20 Z "></path>
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
