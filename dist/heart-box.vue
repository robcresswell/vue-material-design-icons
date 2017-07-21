<template>
  <div class="material-design-icon" id="heart-box-icon" role="img" aria-labelledby="heart-box-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="heart-box-title">Heart box icon</title>
      <path d="M 5,3.00002L 19,3.00002C 20.1046,3.00002 21,3.89544 21,5.00001L 21,19C 21,20.1046 20.1046,21 19,21L 5,21C 3.89543,21 3,20.1046 3,19L 3,5.00001C 3,3.89544 3.89543,3.00002 5,3.00002 Z M 12,17L 12.7245,16.3415C 15.299,14.0055 17,12.462 17,10.574C 17,9.03201 15.792,7.82398 14.25,7.82398C 13.3795,7.82398 12.5455,8.228 12,8.86698C 11.4545,8.228 10.6205,7.82398 9.75,7.82398C 8.20799,7.82398 7,9.03201 7,10.574C 7,12.462 8.70099,14.0055 11.2755,16.3415L 12,17 Z "></path>
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
