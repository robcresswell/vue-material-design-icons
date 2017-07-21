<template>
  <div class="material-design-icon" id="image-icon" role="img" aria-labelledby="image-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="image-title">Image icon</title>
      <path d="M 18.9989,3L 4.9911,3C 3.886,3 3.00001,3.89551 3.00001,5L 3.00001,19C 3.00001,20.1045 3.886,21 4.9911,21L 18.9989,21C 20.104,21 21,20.1045 21,19L 21,5C 21,3.89551 20.104,3 18.9989,3 Z M 18.9989,15.5C 18.9989,15.7761 18.7749,16 18.4986,16L 5.49138,16C 5.21511,16 4.9911,15.7761 4.9911,15.5L 4.9911,8.5C 4.9911,8.22388 5.21511,8 5.49138,8L 18.4986,8C 18.7749,8 18.9989,8.22388 18.9989,8.5L 18.9989,15.5 Z "></path>
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
