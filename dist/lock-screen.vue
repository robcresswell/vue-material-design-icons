<template>
  <div class="material-design-icon" id="lock-screen-icon" role="img" aria-labelledby="lock-screen-title">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <title id="lock-screen-title">Lock screen icon</title>
      <path d="M 7,3C 9.20914,3 11,4.79086 11,7C 11,8.86384 9.72523,10.4299 8,10.874L 8,13.126C 8.37006,13.2213 8.71939,13.3681 9.03986,13.5585L 13.5585,9.03987C 13.2037,8.44261 13,7.7451 13,7.00001C 13,4.79086 14.7909,3.00001 17,3.00001C 19.2091,3.00001 21,4.79086 21,7.00001C 21,9.20915 19.2091,11 17,11C 16.2615,11 15.5697,10.7999 14.9759,10.4509L 10.4508,14.9759C 10.7999,15.5697 11,16.2615 11,17C 11,19.2091 9.20914,21 7,21C 4.79086,21 3,19.2091 3,17C 3,15.1362 4.27477,13.5701 6,13.126L 6,10.874C 4.27477,10.4299 3,8.86384 3,7C 3,4.79086 4.79086,3 7,3 Z M 17,13C 19.2091,13 21,14.7909 21,17C 21,19.2091 19.2091,21 17,21C 14.7909,21 13,19.2091 13,17C 13,14.7909 14.7909,13 17,13 Z M 17,15C 15.8954,15 15,15.8954 15,17C 15,18.1046 15.8954,19 17,19C 18.1046,19 19,18.1046 19,17C 19,15.8954 18.1046,15 17,15 Z "></path>
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
