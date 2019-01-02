<template>
  <div>
    <!-- 头像 -->
    <Row class="avatar-group">
      <Avatar v-for="(face, index) in faceResult" :key="face.group_id" class="user-avatar" size="large" @click.native="findImages(index)">{{face.group_id}}</Avatar>
    </Row>


    <Row class="preview-imgs">
      <img v-for="(image, index) in displayImages" :key="index" :src="image.getImageUrl()" @click="previewImages(index)"/>
    </Row>

    <Row class="preview" v-if="previewImg">
      <img :src="previewImg.getImageUrl()" alt="" @load="previewReady" :style="{width: `${previewWidth}`}">
      <div v-for="(face, index) in previewImg.faces" :key="index" v-if="face.matchFaceTokens(currFaceTokens)" class="red-frame" :style="{top: `${face.top * previewRatio}px`, left: `${face.left * previewRatio}px`, width: `${face.width * previewRatio}px`, height: `${face.height * previewRatio}px`}"></div>
    </Row>
  </div>
</template>

<script lang="ts">
import { Vue, Component  } from 'vue-property-decorator'
import FaceGroupHelper from '@/helper/face-group-helper'
import Image from '@/models/image';
import FaceResult from '@/data/face++_face_category_result'

@Component
export default class FaceGroup extends Vue {
  public faceGroupHelper: FaceGroupHelper | undefined
  public imageData: Image[] = []

  public faceResult: any[] = []

  public currFaceTokens: any[] = []

  public displayImages: Image[] = []

  // 预览图片地址
  public previewImg: Image | any = ''
  public previewRatio: number = 1
  public previewWidth: string = ''

  public mounted() {
    this.faceResult = FaceResult
    this.faceGroupHelper = FaceGroupHelper.getInstance()
  }

  public findImages(index: number): void {
    this.resetPreview()
    this.currFaceTokens = this.faceResult[index].face_token
    if (this.faceGroupHelper) {
      this.displayImages = this.faceGroupHelper.findFaceTokenInWhichImages(this.currFaceTokens)
    }
  }

  public previewImages(index: number): void {
    this.resetPreview()
    this.previewImg = this.displayImages[index]
  }

  public previewReady(e: any) {
    const MAX_WIDTH = 1280
    this.previewRatio = MAX_WIDTH / e.currentTarget.width
    this.previewWidth = `${MAX_WIDTH}px`
  }

  private resetPreview() {
    this.previewWidth = 'auto'
    this.previewImg = ''
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

.preview {
  margin-top: 20px;
  position: relative;
}

.preview img {
}

.red-frame{
  border: 3px solid red;
  position: absolute
}

</style>

