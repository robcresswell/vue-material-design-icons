<template>
  <div class="material-design-icon" id="coins-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 15,4C 19.42,4 23,7.58 23,12C 23,16.42 19.42,20 15,20C 10.58,20 7,16.42 7,12C 7,7.58 10.58,4 15,4 Z M 15,18C 18.31,18 21,15.31 21,12C 21,8.69 18.31,6 15,6C 11.69,6 9,8.69 9,12C 9,15.31 11.69,18 15,18 Z M 3,12C 3,14.61 4.67,16.83 7,17.65L 7,19.74C 3.55,18.85 1,15.73 1,12C 1,8.27 3.55,5.15 7,4.26L 7,6.35C 4.67,7.17 3,9.39 3,12 Z "></path>
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
