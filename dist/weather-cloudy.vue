<template>
  <div class="material-design-icon" id="weather-cloudy-icon" role="img" aria-labelledby="weather-cloudy-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="weather-cloudy-title">Weather cloudy icon</title>
      <path d="M 6,19C 3.23858,19 1,16.7614 1,14C 1,11.2392 3.23758,9.00099 5.99817,9C 6.97773,6.65105 9.29605,5 12,5C 15.4328,5 18.2441,7.66115 18.4835,11.033L 19,11C 21.2091,11 23,12.7909 23,15C 23,17.2091 21.2091,19 19,19L 6,19 Z M 19,13L 17,13L 17,12C 17,9.23858 14.7614,7 12,7C 9.51284,7 7.44982,8.81599 7.06456,11.1944C 6.73372,11.0688 6.37489,11 6,11C 4.34315,11 3,12.3431 3,14C 3,15.6569 4.34315,17 6,17L 19,17C 20.1046,17 21,16.1046 21,15C 21,13.8954 20.1046,13 19,13 Z "></path>
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
