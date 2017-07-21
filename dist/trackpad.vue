<template>
  <div class="material-design-icon" id="trackpad-icon" role="img" aria-labelledby="trackpad-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="trackpad-title">Trackpad icon</title>
      <path d="M 4,3L 20,3C 21.1046,3 22,3.89543 22,5L 22,19C 22,20.1046 21.1046,21 20,21L 4,21C 2.89543,21 2,20.1046 2,19L 2,5C 2,3.89543 2.89543,3 4,3 Z M 4,5.00001L 4,13L 20,13L 20,5.00001L 4,5.00001 Z M 4,19L 11,19L 11,15L 4,15L 4,19 Z M 20,19L 20,15L 13,15L 13,19L 20,19 Z "></path>
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
