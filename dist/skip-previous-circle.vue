<template>
  <div class="material-design-icon" id="skip-previous-circle-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 12.0025,2.0025C 6.475,2.0025 2.0025,6.475 2.0025,12.0025C 2.0025,17.525 6.475,22.0025 12.0025,22.0025C 17.525,22.0025 22.0025,17.525 22.0025,12.0025C 22.0025,6.475 17.525,2.0025 12.0025,2.0025 Z M 7.9975,7.9975L 10,7.9975L 10,16.0012L 7.9975,16.0012M 16.0012,7.9975L 16.0012,16.0012L 11.0013,12.0025"></path>
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
