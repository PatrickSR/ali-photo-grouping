<template>
  <div>
    <!-- 头像 -->
    <Row class="avatar-group">
      <Avatar class="user-avatar" size="large" @click.native="findImages">U</Avatar>
      <Avatar class="user-avatar" size="large">U</Avatar>
      <Avatar class="user-avatar" size="large">U</Avatar>
      <Avatar class="user-avatar" size="large">U</Avatar>
      <Avatar class="user-avatar" size="large">U</Avatar>
    </Row>


    <Row class="preview-imgs">
      <img src="http://localhost:8080/img/image_category/test1.jpg" alt="" srcset="">
      <img src="http://localhost:8080/img/image_category/test1.jpg" alt="" srcset="">
      <img src="http://localhost:8080/img/image_category/test1.jpg" alt="" srcset="">
      <img src="http://localhost:8080/img/image_category/test1.jpg" alt="" srcset="">
      <img src="http://localhost:8080/img/image_category/test1.jpg" alt="" srcset="">
      <img src="http://localhost:8080/img/image_category/test1.jpg" alt="" srcset="">
      <img src="http://localhost:8080/img/image_category/test1.jpg" alt="" srcset="">
      <img src="http://localhost:8080/img/image_category/test1.jpg" alt="" srcset="">
      <img src="http://localhost:8080/img/image_category/test1.jpg" alt="" srcset="">
    </Row>

    <Row></Row>
  </div>
</template>

<script lang="ts">
import { Vue, Component  } from 'vue-property-decorator'
import FaceGroupHelper from '@/helper/face-group-helper'
import Image from '@/models/image';

@Component
export default class FaceGroup extends Vue {
  public faceGroupHelper: FaceGroupHelper | undefined
  public imageData: Image[] = []


  public mounted() {
    this.faceGroupHelper = FaceGroupHelper.getInstance()
  }

  // public findImages(): void {
  // }

  get displayImages(): Image[] {
    if (this.faceGroupHelper) {
      return this.faceGroupHelper.getOriginImage()
    } else {
      return []
    }
  }

}
</script>

<style>
.user-avatar {
  margin-right: 20px;
}

.preview-imgs {
  width: 100%;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
}

.preview-imgs img{
  width: 100px;
  height: 100px;
  margin-right: 10px;
  object-fit: cover;
}


</style>

