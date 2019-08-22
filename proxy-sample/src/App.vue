<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :user-doc="readonlyUser" :editable-user-doc="editableUser" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Iuser } from "./models/user";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  readonlyUser: Iuser = {
    name: "test",
    age: 20,
    birthday: { seconds: 0, nanoseconds: 0 },
    work: { name: "es-cats", post: "" }
  };

  defaultValues: any = {
    birthday: { seconds: 0, nanoseconds: 0 },
    work: {}
  };

  handler: ProxyHandler<Iuser> = {
    get: (target: any, property: string) => {
      console.log('get', typeof target[property] === 'object' && target[property] !== null, target, property);
      if (typeof target[property] === 'object' && target[property] !== null) {
        return new Proxy(target[property], this.handler)
      } else {
        if (!target[property]) {
          target[property] = {};
        }
        return target[property];
      }
    },
    set: (target: any, property: string, value: any) => {
      console.log('set', property in target, target, property, value);
      target[property] = value;
      return true;
    },
    has(target: any, key: string) {
      return key in target;
    }
  };

  editableUser = new Proxy({}, this.handler);
  // editableUser = {
  //   birthday: {},
  //   work: {}
  // };
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
