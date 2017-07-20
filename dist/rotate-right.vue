<template>
  <div class="material-design-icon" id="rotate-right-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 16.89,15.48L 18.31,16.89C 19.21,15.73 19.76,14.39 19.93,13L 17.91,13C 17.77,13.87 17.43,14.72 16.89,15.48 Z M 13,17.9L 13,19.92C 14.39,19.75 15.74,19.21 16.9,18.31L 15.46,16.87C 14.71,17.41 13.87,17.76 13,17.9 Z M 19.93,11C 19.76,9.61 19.21,8.27 18.31,7.11L 16.89,8.53C 17.43,9.28 17.77,10.13 17.91,11M 15.55,5.55L 11,1L 11,4.07C 7.06,4.56 4,7.92 4,12C 4,16.08 7.05,19.44 11,19.93L 11,17.91C 8.16,17.43 6,14.97 6,12C 6,9.03 8.16,6.57 11,6.09L 11,10L 15.55,5.55 Z "></path>
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
