<template>
  <div class="material-design-icon" id="cancel-icon" role="img" aria-labelledby="cancel-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="cancel-title">Cancel icon</title>
      <path d="M 12,2C 17.5228,2 22,6.47716 22,12C 22,17.5228 17.5228,22 12,22C 6.47715,22 2,17.5228 2,12C 2,6.47716 6.47715,2 12,2 Z M 12,4C 7.58172,4 4,7.58173 4,12C 4,13.8487 4.62708,15.551 5.68014,16.9056L 16.9056,5.68015C 15.551,4.62709 13.8487,4 12,4 Z M 12,20C 16.4183,20 20,16.4183 20,12C 20,10.1513 19.3729,8.44905 18.3199,7.09436L 7.09436,18.3199C 8.44904,19.3729 10.1513,20 12,20 Z "></path>
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
