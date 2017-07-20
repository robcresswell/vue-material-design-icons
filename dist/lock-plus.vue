<template>
  <div class="material-design-icon" id="lock-plus-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 18,8L 17,8L 17,6C 17,3.24 14.76,1 12,1C 9.24,1 7,3.24 7,6L 7,8L 6,8C 4.9,8 4,8.9 4,10L 4,20C 4,21.1 4.9,22 6,22L 18,22C 19.1,22 20,21.1 20,20L 20,10C 20,8.9 19.1,8 18,8 Z M 8.9,6C 8.9,4.29 10.29,2.9 12,2.9C 13.71,2.9 15.1,4.29 15.1,6L 15.1,8L 8.9,8L 8.9,6 Z M 16,16L 13,16L 13,19L 11,19L 11,16L 8,16L 8,14L 11,14L 11,11L 13,11L 13,14L 16,14L 16,16 Z "></path>
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
