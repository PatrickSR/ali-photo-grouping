/**
 * 脸框的信息
 */
export default class FaceFrame {
  public width: number
  public top: number
  public height: number
  public left: number

  public faceToken: string
  public constructor(payload: any) {
    const {face_rectangle, face_token} = payload
    this.faceToken = face_token
    this.width = face_rectangle.width
    this.top = face_rectangle.top
    this.height = face_rectangle.height
    this.left = face_rectangle.left
  }

  /**
   * 匹配facetoken是否一致
   */
  public matchFaceToken(token: string): boolean {
    return token === this.faceToken
  }

  public matchFaceTokens(tokens: string[]): boolean {
    return tokens.some((token) => token === this.faceToken)
  }
}
