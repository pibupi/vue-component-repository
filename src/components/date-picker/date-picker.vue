<template>
  <div class="z-date-picker-wrap" v-click-out-side>
    <input type="text" :value="formadate" />
    <div v-if="isVisible" class="pannel">
      <div class="pannel-nav">
        <span>&lt;</span>
        <span @click="prevMonth">&lt;&lt;</span>
        <span>{{ time.year }}:年</span>
        <span>{{ time.month + 1 }}:月</span>
        <span @click="nextMonth">&gt;&gt;</span>
        <span>&gt;</span>
      </div>
      <div class="pannel-content">
        <div class="days">
          <span v-for="j in 7" :key="`_` + j" class="cell">
            {{ weekDays[j - 1] }}
          </span>
          <div v-for="i in 6" :key="i">
            <span
              v-for="j in 7"
              :key="j"
              class="cell cell-days"
              @click="chooseDate(visibleDays[(i - 1) * 7 + (j - 1)])"
              :class="[
                {
                  notCurrentMonth: !isCurrentMonth(
                    visibleDays[(i - 1) * 7 + (j - 1)]
                  )
                },
                {
                  today: isToday(visibleDays[(i - 1) * 7 + (j - 1)])
                },
                {
                  select: isSelect(visibleDays[(i - 1) * 7 + (j - 1)])
                }
              ]"
            >
              {{ visibleDays[(i - 1) * 7 + (j - 1)].getDate() }}
            </span>
          </div>
        </div>
      </div>
      <div class="pannel-footer">今天</div>
    </div>
  </div>
</template>
<script>
import * as utils from "../../utils";
export default {
  name: "ZDatePicker",
  data() {
    let { year, month } = utils.getYearMonthDay(this.value);
    return {
      weekDays: ["日", "一", "二", "三", "四", "五", "六"],
      time: { year, month },
      isVisible: false
    };
  },
  props: {
    value: {
      type: Date,
      default: () => new Date()
    }
  },
  directives: {
    clickOutSide: {
      bind(el, bindings, vnode) {
        // 利用事件委托
        let handler = e => {
          // 判断点击得是否是当前盒子的里面
          if (el.contains(e.target)) {
            // 判断当前面板是否已经显示出来了
            if (!vnode.context.isVisible) {
              vnode.context.focus();
              console.log("是里面");
            }
          } else {
            if (vnode.context.isVisible) {
              vnode.context.blur();
              console.log("不是里面");
            }
          }
        };
        el.handler = handler;
        document.addEventListener("click", handler);
      },
      unbind(el) {
        document.removeEventListener("click", el.handler);
      }
    }
  },
  computed: {
    formadate() {
      let { year, month, day } = utils.getYearMonthDay(this.value);
      return `${year}-${month + 1}-${day}`;
    },
    visibleDays() {
      // 先获取当前是周几
      let { year, month } = utils.getYearMonthDay(
        utils.getDate(this.time.year, this.time.month, 1)
      );
      // 获取当前月份的第一天
      let currentFirstDay = utils.getDate(year, month, 1);
      let week = currentFirstDay.getDay();
      // 当前开始的天数
      let startDay = currentFirstDay - week * 60 * 60 * 1000 * 24;
      // 循环42天
      let arr = [];
      for (let i = 0; i < 42; i++) {
        arr.push(new Date(startDay + i * 60 * 60 * 1000 * 24));
      }
      return arr;
    }
  },
  methods: {
    focus() {
      this.isVisible = true;
    },
    blur() {
      this.isVisible = false;
    },
    isCurrentMonth(date) {
      let { year, month } = utils.getYearMonthDay(
        utils.getDate(this.time.year, this.time.month, 1)
      );
      let { year: y, month: m } = utils.getYearMonthDay(date);
      return year === y && month === m;
    },
    isToday(date) {
      let { year, month, day } = utils.getYearMonthDay(new Date());
      let { year: y, month: m, day: d } = utils.getYearMonthDay(date);
      return year === y && month === m && day === d;
    },
    chooseDate(date) {
      this.time = utils.getYearMonthDay(date);
      this.$emit("input", date);
      this.blur();
    },
    isSelect(date) {
      let { year, month, day } = utils.getYearMonthDay(this.value);
      let { year: y, month: m, day: d } = utils.getYearMonthDay(date);
      return year === y && month === m && day === d;
    },
    prevMonth() {
      let d = utils.getDate(this.time.year, this.time.month, 1);
      d.setMonth(d.getMonth() - 1);
      this.time = utils.getYearMonthDay(d);
    },
    nextMonth() {
      let d = utils.getDate(this.time.year, this.time.month, 1);
      d.setMonth(d.getMonth() + 1);
      this.time = utils.getYearMonthDay(d);
    }
  }
};
</script>
<style lang="scss" scoped>
.pannel {
  width: 32 * 7px;
  position: absolute;
  background-color: #fff;
  box-shadow: 2px 2px 2px pink, -2px -2px 2px pink;
  .pannel-nav {
    height: 30px;
    display: flex;
    justify-content: space-around;
    span {
      cursor: pointer;
      user-select: none; // 禁止文本选中
    }
  }
  .pannel-content {
    .cell {
      width: 32px;
      height: 32px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-weight: bolder;
    }
    .cell-days:hover,
    .select {
      border: 1px solid pink;
      box-sizing: border-box;
    }
  }
  .pannel-footer {
    height: 30px;
    text-align: center;
  }
}
.notCurrentMonth {
  color: gray;
}
.today {
  background: red;
  color: #fff;
  border-radius: 4px;
}
</style>
