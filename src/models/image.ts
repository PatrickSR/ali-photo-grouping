import FaceFrame from './face-frame';

/**
 * 单个图片信息
 */
export default class Image {
  public fileName: string
  public imageId: string
  public faces: FaceFrame[] = []

  public constructor(payload: any) {
    const {file_name, image_id, faces} = payload
    this.fileName = file_name
    this.imageId = image_id

    if (faces) {
      faces.forEach((face: any) => {
        this.faces.push(new FaceFrame(face))
      })
    }
  }

  /**
   * 检查这个相片里的人像有没有这个faceToken
   * @param faceToken
   */
  public checkFaceTokenisHere(faceToken: string): boolean {
    let result: boolean = false
    this.faces.forEach((faceFrame) => {
      if (faceFrame.matchFaceToken(faceToken)) {
        result = true
      }
    })
    return result
  }

  public getImageUrl() {
    return `./img/image_category/${this.fileName}`
  }
}
