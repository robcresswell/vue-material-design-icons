<template>
  <div class="material-design-icon" id="wall-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 3,16L 12,16L 12,21L 3,21L 3,16 Z M 2,10L 7.99999,10L 7.99999,15L 2,15L 2,10 Z M 8.99999,10L 15,10L 15,15L 8.99999,15L 8.99999,10 Z M 16,10L 22,10L 22,15L 16,15L 16,10 Z M 13,16L 21,16L 21,21L 13,21L 13,16 Z M 3,4L 11,4L 11,9L 3,9L 3,4 Z M 12,4L 21,4L 21,9.00001L 12,9L 12,4 Z "></path>
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
