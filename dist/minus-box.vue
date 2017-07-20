<template>
  <div class="material-design-icon" id="minus-box-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 16.9994,12.998L 6.99936,12.998L 6.99936,10.998L 16.9994,10.998M 18.9994,2.99805L 4.99936,2.99805C 3.89336,2.99805 2.99936,3.89404 2.99936,4.99805L 2.99936,18.998C 2.99936,20.1021 3.89336,20.998 4.99936,20.998L 18.9994,20.998C 20.1024,20.998 20.9994,20.1021 20.9994,18.998L 20.9994,4.99805C 20.9994,3.89404 20.1024,2.99805 18.9994,2.99805 Z "></path>
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
