<template>
  <div class="material-design-icon" id="magnet-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 3,7L 3,13C 3,17.971 7.029,22 12,22C 16.971,22 21,17.971 21,13L 21,7L 17,7L 17,13C 17,15.761 14.761,18 12,18C 9.239,18 7,15.761 7,13L 7,7M 17,5L 21,5L 21,2L 17,2M 3,5L 7,5L 7,2L 3,2"> 
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
