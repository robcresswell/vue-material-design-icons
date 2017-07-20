<template>
  <div class="material-design-icon" id="ghost-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 12,2C 7.02944,2 3,6.0294 3,11L 3,22L 6,19L 9,22L 12,19L 15,22L 18,19L 21,22L 21,11C 21,6.0294 16.9706,2 12,2 Z M 9,8C 10.1046,8 11,8.8954 11,10C 11,11.1046 10.1046,12 9,12C 7.89543,12 7,11.1046 7,10C 7,8.8954 7.89543,8 9,8 Z M 15,8C 16.1046,8 17,8.8954 17,10C 17,11.1046 16.1046,12 15,12C 13.8954,12 13,11.1046 13,10C 13,8.8954 13.8954,8 15,8 Z "></path>
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
