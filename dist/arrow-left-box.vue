<template>
  <div class="material-design-icon" id="arrow-left-box-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 19,3.00001C 20.104,3.00001 21,3.894 21,5.00001L 21,19C 21,20.1035 20.104,21 19,21L 5,21C 3.896,21 3,20.1035 3,19L 3,5.00001C 3,3.894 3.896,3.00001 5,3.00001L 19,3.00001 Z M 18,11L 9.48958,11L 12.9948,7.49483L 11.5805,6.08061L 5.66116,12L 11.5805,17.9194L 12.9948,16.5052L 9.48958,13L 18,13L 18,11 Z "></path>
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
