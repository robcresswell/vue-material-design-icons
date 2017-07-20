<template>
  <div class="material-design-icon" id="cursor-pointer-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 10,2.00001C 11.1046,2.00001 12,2.89543 12,4L 12,8.50002C 12,8.50002 14,8.25002 14,9.25002C 14,9.25002 16,9.00002 16,10C 16,10 18,9.75002 18,10.75C 18,10.75 20,10.5 20,11.5L 20,15C 20,16 17,21 17,22L 9,22C 9,22 7,15 4,13C 4,13 3,7 8,12L 8,4C 8,2.89543 8.89543,2.00001 10,2.00001 Z "></path>
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
