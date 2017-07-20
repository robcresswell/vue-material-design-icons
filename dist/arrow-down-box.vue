<template>
  <div class="material-design-icon" id="arrow-down-box-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 3,5C 3,3.896 3.894,3 5,3L 19,3C 20.1035,3 21,3.896 21,5L 21,19C 21,20.104 20.1035,21 19,21L 5,21C 3.894,21 3,20.104 3,19L 3,5 Z M 11,6.00001L 11,14.5104L 7.49482,11.0052L 6.0806,12.4195L 12,18.3388L 17.9194,12.4195L 16.5052,11.0052L 13,14.5104L 13,6.00001L 11,6.00001 Z "></path>
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
