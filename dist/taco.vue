<template>
  <div class="material-design-icon" id="taco-icon" role="img" aria-labelledby="taco-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="taco-title">Taco icon</title>
      <path d="M 19,18L 5.00001,18C 2.79087,18 1.00001,16.2091 1.00001,14C 1,9.58172 4.58172,5.99999 9,5.99999C 10.0609,5.99999 11.0736,6.2065 12,6.58151C 12.9264,6.2065 13.9391,5.99999 15,5.99999C 19.4183,5.99999 23,9.58172 23,14C 23,16.2091 21.2091,18 19,18 Z M 3,14C 3,15.1046 3.89543,16 5,16C 6.10457,16 7,15.1046 7,14C 7,11.6305 8.03018,9.50154 9.66709,8.03667L 8.99999,8C 5.68629,8 3,10.6863 3,14 Z M 19,16C 20.1046,16 21,15.1046 21,14C 21,10.6863 18.3137,8 15,8C 11.6863,8 9,10.6863 9,14C 9,14.7286 8.80521,15.4117 8.46487,16L 19,16 Z "></path>
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
