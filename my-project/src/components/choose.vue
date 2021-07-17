<template>
  <div class="choose">
    <div class="box" v-for="(item, idx) in nav" :key="idx">
      <span :class="{ current: item.a == false }" @click="check(item)"></span>
    </div>

    <div class="allbox">
      <span @click="allcheck()" :class="{ current: this.c == false }"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "choose",
  props: {
    msg: String,
  },
  data() {
    return {
      num: "",
      c: true,
      nav: [
        {
          a: true,
        },
        {
          a: true,
        },
        {
          a: true,
        },
      ],
    };
  },
  methods: {
    check(item) {
      item.a = !item.a;
      if (item.a) {
        this.c = true;
      }
      this.num = 0;
      for (var i = 0; i < this.nav.length; i++) {
        if (!this.nav[i].a) {
          this.num++;
        }
      }
      if (this.num == 3) {
        this.c = false;
      }
    },
    allcheck() {
      this.c = !this.c;
      if (!this.c) {
        for (var i = 0; i < this.nav.length; i++) {
          this.nav[i].a = false;
        }
      } else {
        for (var j = 0; j < this.nav.length; j++) {
          this.nav[j].a = true;
        }
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 20px;
  height: 20px;
  background: #f2f2f2;
  border-radius: 50%;

  position: relative;
}
.box span {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  background: #cccccc;
  border-radius: 50%;
}
.box .current {
  background: #c30d23;
}
.allbox {
  margin-top: 20px;
  width: 20px;
  height: 20px;
  background: #f2f2f2;
  border-radius: 50%;

  position: relative;
}
.allbox span {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  background: #cccccc;
  border-radius: 50%;
}
.allbox p {
  display: block;
  font-size: 12px;
  margin-left: 20px;
}
.allbox .current {
  background: #c30d23;
}
</style>
