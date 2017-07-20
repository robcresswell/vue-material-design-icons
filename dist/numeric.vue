<template>
  <div class="material-design-icon" id="numeric-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 4,17L 4,9L 2,9L 2,7L 6,7L 6,17L 4,17 Z M 22,15C 22,16.11 21.1,17 20,17L 16,17L 16,15L 20,15L 20,13L 18,13L 18,11L 20,11L 20,9L 16,9L 16,7.00001L 20,7.00001C 21.1,7.00001 22,7.89001 22,9L 22,10.5C 22,11.33 21.3301,12 20.5,12C 21.3301,12 22,12.67 22,13.5L 22,15 Z M 14,15L 14,17L 8,17L 8,13C 8,11.89 8.9,11 10,11L 12,11L 12,9L 8,9L 8,7L 12,7C 13.1,7 14,7.89 14,9L 14,11C 14,12.11 13.1,13 12,13L 10,13L 10,15L 14,15 Z "></path>
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
