<template>
  <div class="material-design-icon" id="select-all-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 9,9L 15,9L 15,15L 9,15M 7,17L 17,17L 17,7L 7,7M 15,5L 17,5L 17,3L 15,3M 15,21L 17,21L 17,19L 15,19M 19,17L 21,17L 21,15L 19,15M 19,9L 21,9L 21,7L 19,7M 19,21C 20.1,21 21,20.1 21,19L 19,19M 19,13L 21,13L 21,11L 19,11M 11,21L 13,21L 13,19L 11,19M 9,3L 7,3L 7,5L 9,5M 3,17L 5,17L 5,15L 3,15M 5,21L 5,19L 3,19C 3,20.1 3.9,21 5,21 Z M 19,3L 19,5L 21,5C 21,3.9 20.1,3 19,3 Z M 13,3L 11,3L 11,5L 13,5M 3,9L 5,9L 5,7L 3,7M 7,21L 9,21L 9,19L 7,19M 3,13L 5,13L 5,11L 3,11M 3,5L 5,5L 5,3C 3.9,3 3,3.9 3,5 Z "> 
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
