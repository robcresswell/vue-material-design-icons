<template>
  <div class="material-design-icon" id="flag-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 14.4,6L 14,4L 5,4L 5,21L 7,21L 7,14L 12.6,14L 13,16L 20,16L 20,6L 14.4,6 Z "></path>
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
