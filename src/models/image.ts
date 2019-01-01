import FaceFrame from './face-frame';

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
}
