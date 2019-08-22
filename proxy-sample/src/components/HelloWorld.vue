<template>
  <div>
    <div>
      名前<input
        type="text"
        :value="userDoc.name"
        @input="editableUserDoc.name = $event.target.value"
      />
    </div>
    <div>
      年齢<input
        type="text"
        :value="userDoc.age"
        @input="editableUserDoc.age = Number($event.target.value)"
      />
    </div>
    <div>
      誕生日 UNIXTIME<input
        type="text"
        :value="userDoc.birthday.seconds"
        @input="editableUserDoc.birthday.seconds = Number($event.target.value)"
      />
    </div>
    <div>
      勤務先<input
        type="text"
        :value="userDoc.work.name"
        @input="editableUserDoc.work.name = $event.target.value"
      />
    </div>
    <div>
      役職<input
        type="text"
        :value="userDoc.work.post"
        @input="editableUserDoc.work.post = $event.target.value"
      />
    </div>
    <div>
      部署<input
        type="text"
        value="defaultValue"
        @input="editableUserDoc.work.section = $event.target.value"
      />
    </div>
    <div>
      <button type="button" @click="onClick">click me</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Iuser } from "../models/user";

@Component
export default class HelloWorld extends Vue {
  @Prop({ type: Object }) userDoc!: Iuser;
  @Prop({ type: Object }) editableUserDoc!: Iuser;

  onClick() {
    console.log(this.userDoc, this.editableUserDoc);
  }
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
