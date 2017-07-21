<template>
  <div class="material-design-icon" id="pause-circle-icon" role="img" aria-labelledby="pause-circle-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="pause-circle-title">Pause circle icon</title>
      <path d="M 15,16L 13,16L 13,7.99999L 15,7.99999M 11,16L 9,16L 9,7.99999L 11,7.99999M 12,1.99999C 6.47699,1.99999 2,6.47698 2,12C 2,17.524 6.47699,22 12,22C 17.523,22 22,17.524 22,12C 22,6.47698 17.523,1.99999 12,1.99999 Z "></path>
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
