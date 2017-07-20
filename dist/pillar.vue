<template>
  <div class="material-design-icon" id="pillar-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 6,5L 18,5C 18.554,5 19,5.446 19,6C 19,6.554 18.554,7 18,7L 6,7C 5.446,7 5,6.554 5,6C 5,5.446 5.446,5 6,5 Z M 21,2L 21,4L 3,4L 3,2L 21,2 Z M 15,8L 17,8L 17,22L 15,22L 15,8 Z M 7,8L 9,8L 9,22L 7,22L 7,8 Z M 11,8L 13,8L 13,22L 11,22L 11,8 Z "></path>
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
