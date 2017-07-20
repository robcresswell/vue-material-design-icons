<template>
  <div class="material-design-icon" id="power-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 16.56,5.44L 15.11,6.89C 16.84,7.94 18,9.83 18,12C 18,15.31 15.31,18 12,18C 8.69,18 6,15.31 6,12C 6,9.83 7.16,7.94 8.88,6.88L 7.44,5.44C 5.36,6.88 4,9.28 4,12C 4,16.42 7.58,20 12,20C 16.42,20 20,16.42 20,12C 20,9.28 18.64,6.88 16.56,5.44 Z M 13,3.00001L 11,3.00001L 11,13L 13,13"></path>
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
