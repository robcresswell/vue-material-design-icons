<template>
  <div class="material-design-icon" id="close-circle-icon" role="img" aria-labelledby="close-circle-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="close-circle-title">Close circle icon</title>
      <path d="M 12,2C 17.53,2 22,6.47 22,12C 22,17.53 17.53,22 12,22C 6.47,22 2,17.53 2,12C 2,6.47 6.47,2 12,2 Z M 15.59,7.00002L 12,10.59L 8.40999,7.00002L 6.99999,8.41002L 10.59,12L 6.99999,15.59L 8.40999,17L 12,13.41L 15.59,17L 17,15.59L 13.41,12L 17,8.41002L 15.59,7.00002 Z "></path>
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
