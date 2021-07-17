<template>
  <div class="all">
    <div class="box1">
      <ul>
        <li>
          <input type="checkbox" name="" id="" @click="allO()" :checked="!a"/>
          <span>全选</span>
        </li>
        <li v-for="(item, idx) in box1" :key="idx">
          <input type="checkbox" @click="boxO(item)" :checked="!item.a" />
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <div class="ginseng">
      <span @click="go_right()">往右</span>
      <span @click="go_left()">往左</span>
    </div>
    <div class="box2">
      <ul>
        <li>
          <input type="checkbox" name="" id="" @click="allT()" :checked="!b"/>
          <span>全选</span>
        </li>
        <li v-for="(item, idx) in box2" :key="idx">
          <input type="checkbox" @click="boxO(item)" :checked="!item.a" />
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "transmission",
  props: {
    msg: String,
  },
  data() {
    return {
      a: true,
      b: true,
      box1: [],
      box2: [],
    };
  },
  methods: {
    allO() {
      this.a = !this.a;
      if (this.a) {
        for (var i = 0; i < this.box1.length; i++) {
          this.box1[i].a = true;
        }
      } else {
        for (var j = 0; j < this.box1.length; j++) {
          this.box1[j].a = false;
        }
      }
    },
    allT() {
      this.b = !this.b;
      if (this.b) {
        for (var i = 0; i < this.box2.length; i++) {
          this.box2[i].a = true;
        }
      } else {
        for (var j = 0; j < this.box2.length; j++) {
          this.box2[j].a = false;
        }
      }
    },
    boxO(item) {
      if (event.target.checked) {
        item.a = false;
      } else {
        item.a = true;
      }
    },
    go_right() {
      for (var i = this.box1.length - 1; i >= 0; i--) {
        if (!this.box1[i].a) {
          this.box1[i].a = !this.box1[i].a;
          this.box2.push(this.box1[i]);
          this.box1.splice(i, 1);
        }
      }
    },
    go_left() {
      for (var i = this.box2.length - 1; i >= 0; i--) {
        if (!this.box2[i].a) {
          this.box2[i].a = !this.box2[i].a;
          this.box1.push(this.box2[i]);
          this.box2.splice(i, 1);
        }
      }
    },
  },
  mounted() {
    for (var i = 0; i < 10; i++) {
      this.box1.push({
        name: "box1-" + i,
        a: true,
      });
      this.box2.push({
        name: "box2-" + i,
        a: true,
      });
    }
  },
};
</script>

<style scoped>
.all {
  display: flex;
  margin-top: 50px;
}
.box1 {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-y: scroll;
  display: flex;
}
.box2 {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  margin-left: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-y: scroll;
  display: flex;
}
.ginseng {
  margin-top: 30px;
  margin-left: 20px;
}
.ginseng span {
  display: block;
  border: 1px solid black;
}

ul,
li {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
