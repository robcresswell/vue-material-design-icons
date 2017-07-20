<template>
  <div class="material-design-icon" id="calendar-range-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 9,10L 7,10L 7,12L 9,12L 9,10 Z M 13,10L 11,10L 11,12L 13,12L 13,10 Z M 17,10L 15,10L 15,12L 17,12L 17,10 Z M 19,3L 18,3L 18,0.999998L 16,0.999998L 16,3L 8,3L 8,0.999998L 6,0.999998L 6,3L 5,3C 3.89,3 3.01,3.9 3.01,5L 3,19C 3,20.1 3.89,21 5,21L 19,21C 20.1,21 21,20.1 21,19L 21,5C 21,3.9 20.1,3 19,3 Z M 19,19L 5,19L 5,8L 19,8L 19,19 Z "></path>
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
