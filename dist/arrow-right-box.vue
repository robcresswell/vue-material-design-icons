<template>
  <div class="material-design-icon" id="arrow-right-box-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 5,21C 3.89599,21 3,20.106 3,19L 3,5.00001C 3,3.8965 3.89599,3.00001 5,3.00001L 19,3.00001C 20.104,3.00001 21,3.8965 21,5.00001L 21,19C 21,20.106 20.104,21 19,21L 5,21 Z M 6,13L 14.5104,13L 11.0052,16.5052L 12.4194,17.9194L 18.3388,12L 12.4194,6.08059L 11.0052,7.4948L 14.5104,11L 6,11L 6,13 Z "></path>
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
