<template>
  <div class="material-design-icon" id="open-in-new-icon" role="img" aria-labelledby="open-in-new-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="open-in-new-title">Open in new icon</title>
      <path d="M 14,3L 14,5L 17.59,5L 7.76,14.83L 9.17,16.24L 19,6.41L 19,10L 21,10L 21,3M 19,19L 5,19L 5,5L 12,5L 12,3L 5,3C 3.89,3 3,3.9 3,5L 3,19C 3,20.1 3.89,21 5,21L 19,21C 20.1,21 21,20.1 21,19L 21,12L 19,12L 19,19 Z "></path>
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
