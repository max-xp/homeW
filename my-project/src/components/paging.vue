<template>
  <div class="paging">
    <span @click="back()">-</span>
    <span :class="{ current: a == 1 }" @click="a = 1">1</span>
    <span class="omit" :class="{ back: a > 4 }">...</span>
    <span
      class="none"
      v-for="(item, idx) in nav"
      :key="idx"
      @click="on(item)"
      :class="{ current: a == item.num, back: item.a == false }"
      >{{ item.num }}</span
    >
    <span class="omit" :class="{ back: a < number - 3 }">...</span>
    <span :class="{ current: a == this.number }" @click="a = number">{{
      this.number
    }}</span>
    <span @click="next()">+</span>
    <div>
      <span class="to">跳转至</span>
      <input type="text" name="" id="" @blur="jump()" v-model="jumpPage" />
    </div>
  </div>
</template>

<script>
export default {
  name: "choose",
  props: {
    msg: String,
    number: String,
  },
  data() {
    return {
      a: 1,
      jumpPage: "",
      nav: [],
    };
  },
  methods: {
    back() {
      if (this.a < 2) {
        this.a = 1;
      } else {
        this.a--;
      }
      this.check();
    },
    next() {
      if (this.a > this.number - 1) {
        this.a = this.number;
      } else {
        this.a++;
      }
      this.check();
    },
    on(item) {
      this.a = item.num;
      this.check();
    },
    jump() {
      this.a = this.jumpPage;
      this.check();
    },
    check() {
      if (this.a == 1) {
        this.initial();
        this.nav[0].a = false;
        this.nav[1].a = false;
      } else if (this.a == 2) {
        this.initial();
        this.nav[0].a = false;
        this.nav[1].a = false;
        this.nav[2].a = false;
      } else if (this.a == 3) {
        this.initial();
        this.nav[0].a = false;
        this.nav[1].a = false;
        this.nav[2].a = false;
        this.nav[3].a = false;
      } else if (this.a == this.number) {
        this.initial();
        this.nav[this.nav.length - 1].a = false;
        this.nav[this.nav.length - 2].a = false;
      } else if (this.a == this.number - 1) {
        this.initial();
        this.nav[this.nav.length - 1].a = false;
        this.nav[this.nav.length - 2].a = false;
        this.nav[this.nav.length - 3].a = false;
      } else if (this.a == this.number - 2) {
        this.initial();
        this.nav[this.nav.length - 1].a = false;
        this.nav[this.nav.length - 2].a = false;
        this.nav[this.nav.length - 3].a = false;
        this.nav[this.nav.length - 4].a = false;
      } else {
        this.initial();
        this.nav[this.a - 4].a = false;
        this.nav[this.a - 3].a = false;
        this.nav[this.a - 2].a = false;
        this.nav[this.a - 1].a = false;
        this.nav[this.a].a = false;
      }
    },
    initial() {
      for (var i = 0; i < this.nav.length; i++) {
        this.nav[i].a = true;
      }
    },
  },
  mounted() {
    for (var i = 2; i < this.number; i++) {
      this.nav.push({
        num: i,
        a: true,
      });
    }
    this.check();
  },
};
</script>

<style scoped>
.paging {
  margin-top: 20px;
  display: flex;
}
span {
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid black;
  text-align: center;
  margin-right: 5px;
}
.none {
  display: none;
}
.omit {
  border: none;
  padding-bottom: 0;
  display: none;
}
.back {
  display: block;
}
.current {
  color: red;
  border: 1px solid red;
}
.to {
  border: none;
  width: 50px;
}
input {
  width: 20px;
}
</style>
