<template>
  <div class="material-design-icon" id="help-icon" role="img" aria-labelledby="help-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="help-title">Help icon</title>
      <path d="M 10,19L 13,19L 13,22L 10,22L 10,19M 12,2C 17.3536,2.2231 19.6774,7.6179 16.5,11.67C 15.67,12.67 14.33,13.33 13.67,14.17C 13,15 13,16 13,17L 10,17C 10,15.33 10,13.92 10.67,12.92C 11.33,11.92 12.67,11.33 13.5,10.67C 15.9157,8.4301 15.32,5.2567 12,5C 10.3431,5 9,6.3431 9,8L 6,8C 6,4.6863 8.68629,2 12,2 Z "></path>
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
