<template>
  <div>
    <div>名前<input type="text" v-model="userDoc.name" /></div>
    <div>年齢<input type="text" v-model="userDoc.age" /></div>
    <div>
      誕生日 UNIXTIME<input type="text" v-model="userDoc.birthday.seconds" />
    </div>
    <div>勤務先<input type="text" v-model="userDoc.work.name" /></div>
    <div>役職<input type="text" v-model="userDoc.work.post" /></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Iuser } from "../models/user";

@Component
export default class HelloWorld extends Vue {
  @Prop({ type: String }) msg!: string;
  @Prop({ type: Object }) userDoc!: Iuser;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
