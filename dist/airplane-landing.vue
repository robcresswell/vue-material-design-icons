<template>
  <div class="material-design-icon" id="airplane-landing-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 2.5,19L 21.5,19L 21.5,21L 2.5,21L 2.5,19 Z M 9.68,13.27L 14.03,14.43L 19.34,15.85C 20.14,16.06 20.96,15.59 21.18,14.79C 21.39,13.99 20.92,13.17 20.12,12.95L 14.81,11.53L 12.05,2.51L 10.12,2L 10.12,10.28L 5.15,8.95L 4.22,6.63L 2.77,6.24L 2.77,11.41L 4.37,11.84L 9.68,13.27 Z "></path>
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
