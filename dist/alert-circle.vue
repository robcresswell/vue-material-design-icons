<template>
  <div class="material-design-icon" id="alert-circle-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 12.9994,12.998L 10.9994,12.998L 10.9994,6.99805L 12.9994,6.99805M 12.9994,16.998L 10.9994,16.998L 10.9994,14.998L 12.9994,14.998M 11.9994,1.99805C 6.47639,1.99805 1.99939,6.47504 1.99939,11.998C 1.99939,17.5211 6.47639,21.998 11.9994,21.998C 17.5224,21.998 21.9994,17.5211 21.9994,11.998C 21.9994,6.47504 17.5224,1.99805 11.9994,1.99805 Z "></path>
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
