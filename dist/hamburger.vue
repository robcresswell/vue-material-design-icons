<template>
  <div class="material-design-icon" id="hamburger-icon" role="img" aria-labelledby="hamburger-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="hamburger-title">Hamburger icon</title>
      <path d="M 2,16L 22,16L 22,18C 22,19.108 21.108,20 20,20L 4,20C 2.89199,20 2,19.108 2,18L 2,16 Z M 6,4L 18,4C 20.216,4 22,5.784 22,8L 22,10L 2,10L 2,8C 2,5.784 3.784,4 6,4 Z M 4,11L 15,11L 17,13L 19,11L 20,11C 21.108,11 22,11.892 22,13C 22,14.108 21.108,15 20,15L 4,15C 2.892,15 2,14.108 2,13C 2,11.892 2.892,11 4,11 Z "></path>
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
