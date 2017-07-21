<template>
  <div class="material-design-icon" id="brush-icon" role="img" aria-labelledby="brush-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="brush-title">Brush icon</title>
      <path d="M 20.71,4.63L 19.37,3.29C 18.98,2.9 18.35,2.9 17.96,3.29L 9,12.25L 11.75,15L 20.71,6.04C 21.1,5.65 21.1,5.02 20.71,4.63 Z M 7,14C 5.34,14 4,15.34 4,17C 4,18.31 2.84,19 2,19C 2.92,20.22 4.49,21 6,21C 8.21,21 10,19.21 10,17C 10,15.34 8.66,14 7,14 Z "></path>
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
