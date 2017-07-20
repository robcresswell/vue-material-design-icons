<template>
  <div class="material-design-icon" id="lock-unlocked-icon">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path d="M 18,8C 19.104,8 20,8.896 20,10L 20,20C 20,21.104 19.104,22 18,22L 6,22C 4.895,22 4,21.104 4,20L 4,10C 4,8.896 4.895,8 6,8L 15,8.00009L 15,6.00009C 15,4.34323 13.6569,3.00009 12,3.00009C 10.3431,3.00009 9,4.34323 9,6.00009L 7,6C 7,3.23902 9.23899,1.00001 12,1.00001C 14.761,1.00001 17,3.23902 17,6L 17,8L 18,8 Z M 12,17C 13.104,17 14,16.104 14,15C 14,13.896 13.104,13 12,13C 10.895,13 10,13.896 10,15C 10,16.104 10.895,17 12,17 Z "></path>
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
