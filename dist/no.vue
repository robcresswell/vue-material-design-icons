<template>
  <div class="material-design-icon" id="no-icon" role="img" aria-labelledby="no-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="no-title">No icon</title>
      <path d="M 12,2C 17.5228,2 22,6.47716 22,12C 22,17.5228 17.5228,22 12,22C 6.47715,22 2,17.5228 2,12C 2,6.47716 6.47715,2 12,2 Z M 12,4C 10.1513,4 8.44904,4.62708 7.09436,5.68015L 18.3199,16.9056C 19.3729,15.551 20,13.8487 20,12C 20,7.58173 16.4183,4 12,4 Z M 4,12C 4,16.4183 7.58172,20 12,20C 13.8487,20 15.551,19.3729 16.9056,18.3199L 5.68014,7.09436C 4.62708,8.44904 4,10.1513 4,12 Z "></path>
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
