<template>
  <div>
    <div>
      <table border="1" width=auto class="cell">
        <tr>
          <td v-for="i in 25">{{time[i-1]}}</td>
        </tr>
        <tr v-for="i in 7">
          <td :key="'d' + (i - 1)">{{days[i-1]}}</td>
          <td v-for="j in 24" class="regular-cell" v-bind:key="'c' + (i - 1) + '-' + (j - 1)" v-bind:class="{selected: isSelected['c' + (i - 1) + '-' + (j - 1)]}" v-on:mousedown="isMouseDown = true; toggle(i - 1, j - 1, $event);" v-on:mouseover="toggle(i - 1, j - 1, $event)" v-on:mouseup="isMouseDown=false"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import {sprintf} from 'sprintf-js';

  export default {
    data() {
      var time = ['Day/Time'];
      for (var i = 0; i < 24; i++) {
        time.push(sprintf('%02d', i));
      }
      return {
        isSelected: {},
        isMouseDown: false,
        time: time,
        days: ['Monday', 'Tuesday', 'Wednesday ', 'Thursday', 'Friday', 'Saturday', 'Sunday']
      };
    },
    methods: {
      toggle(day, hour, event) {
        if (event) {
          event.preventDefault();
        }
        if (this.isMouseDown) {
          this.$set(
            this.isSelected,
            'c' + day + '-' + hour,
            !this.isSelected['c' + day + '-' + hour]
          );
        }
      }
    }
  };</script>

<style>
  .selected {
    background-color: red !important;
  }
  .regular-cell {
    height: 40px; background-color: #32CD32;
  }
  .cell {
    width: 80%;
  }
</style>
