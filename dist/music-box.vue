<template>
  <div class="material-design-icon" id="music-box-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 16,9L 13,9L 13,14.5C 13,15.88 11.88,17 10.5,17C 9.12,17 8,15.88 8,14.5C 8,13.12 9.12,12 10.5,12C 11.07,12 11.58,12.19 12,12.51L 12,7L 16,7M 19,3.00002L 4.99999,3.00002C 3.9,3.00002 3,3.90002 3,5.00002L 3,19C 3,20.1 3.9,21 4.99999,21L 19,21C 20.1,21 21,20.1 21,19L 21,5.00002C 21,3.90002 20.1,3.00002 19,3.00002 Z "></path>
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
