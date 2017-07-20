<template>
  <div class="material-design-icon" id="shape-plus-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 2,1.99999L 11,1.99999L 11,11L 2,11L 2,1.99999 Z M 17.5,2.00001C 19.9853,2.00001 22,4.01473 22,6.50001C 22,8.98529 19.9853,11 17.5,11C 15.0147,11 13,8.98529 13,6.50001C 13,4.01473 15.0147,2.00001 17.5,2.00001 Z M 6.5,14L 11,22L 2,22L 6.5,14 Z M 19,17L 22,17L 22,19L 19,19L 19,22L 17,22L 17,19L 14,19L 14,17L 17,17L 17,14L 19,14L 19,17 Z "></path>
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
