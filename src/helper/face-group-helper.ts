import {originImage, result} from '@/data/face++_add_collection'
import Image from '@/models/image'

export default class FaceGroupHelper {
  public static instance: FaceGroupHelper | undefined

  public static getInstance() {
    if (!FaceGroupHelper.instance) {
      FaceGroupHelper.instance = new FaceGroupHelper()
    }
    return FaceGroupHelper.instance
  }

  private imageData: Image[] = []

  private constructor() {
    originImage.forEach((imageData) => {
      this.imageData.push(new Image(imageData))
    })
  }

  /**
   * name
   */
  public getOriginImage() {
    return this.imageData
  }


}
