<template>
  <div class="material-design-icon" id="person-box-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 5,3L 19,3C 20.1046,3 21,3.89543 21,5L 21,19C 21,20.1046 20.1046,21 19,21L 5,21C 3.89543,21 3,20.1046 3,19L 3,5C 3,3.89543 3.89543,3 5,3 Z M 12,6.00001C 10.3431,6.00001 9,7.34315 9,9C 9,10.6569 10.3431,12 12,12C 13.6569,12 15,10.6569 15,9C 15,7.34315 13.6569,6.00001 12,6.00001 Z M 12,14C 8.68629,14 6,15.3431 6,17L 6,18L 18,18L 18,17C 18,15.3431 15.3137,14 12,14 Z "> 
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
