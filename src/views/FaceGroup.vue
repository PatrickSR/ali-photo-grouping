<template>
  <div>
    <!-- 头像 -->
    <Row class="avatar-group">
      <Avatar class="user-avatar" size="large">U</Avatar>
      <Avatar class="user-avatar" size="large">U</Avatar>
      <Avatar class="user-avatar" size="large">U</Avatar>
      <Avatar class="user-avatar" size="large">U</Avatar>
      <Avatar class="user-avatar" size="large">U</Avatar>
    </Row>


    <Row>
    </Row>

    <Row></Row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import FaceGroupHelper from '@/helper/face-group-helper'

@Component
export default class FaceGroup extends Vue {
  public faceGroupHelper: FaceGroupHelper | undefined

  public mounted() {
    this.faceGroupHelper = FaceGroupHelper.getInstance()
  }
}
</script>

<style>
.user-avatar {
  margin-right: 20px;
}


</style>
