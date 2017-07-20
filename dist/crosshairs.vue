<template>
  <div class="material-design-icon" id="crosshairs-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 3.05493,13L 1,13L 1,11L 3.05493,11C 3.51608,6.82839 6.82838,3.51608 11,3.05494L 11,1.00001L 13,1.00001L 13,3.05494C 17.1716,3.51609 20.4839,6.82839 20.9451,11L 23,11L 23,13L 20.9451,13C 20.4839,17.1716 17.1716,20.4839 13,20.9451L 13,23L 11,23L 11,20.9451C 6.82838,20.4839 3.51607,17.1716 3.05493,13 Z M 12,5.00001C 8.134,5.00001 5,8.13402 5,12C 5,15.866 8.134,19 12,19C 15.866,19 19,15.866 19,12C 19,8.13402 15.866,5.00001 12,5.00001 Z "></path>
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
