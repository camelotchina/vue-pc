import html2Canvas from 'html2canvas'
import JsPDF from 'jspdf'

/**
 *   @Author : lizhi@camelotchina.com
 *   @Date   : 2018/12/23
 *   @Param  ： { 'el':'元素'}
 *   @description html2canvas html转换成canvas
 */
export const htmlToCanvas = options => {
  return new Promise((resolve, reject) => {
    if (options.el) {
      html2Canvas(document.querySelector(`#${options.el}`), {
        allowTaint: true
      }).then(function (canvas) {
        resolve(canvas)
      })
    }
  })
}

/**
 *   @Author : lizhi@camelotchina.com
 *   @Date   : 2018/12/23
 *   @Param  ： { 'canvas':'对象', 'title':'名称'}
 *   @description jsToPdf 将对象转换成Pdf
 */
export const jsToPdf = options => {
  if (!options.canvas) return false
  let canvas = options.canvas
  let contentWidth = canvas.width
  let contentHeight = canvas.height
  let pageHeight = contentWidth / 592.28 * 841.89
  let leftHeight = contentHeight
  let position = 0
  let imgWidth = 595.28
  let imgHeight = 592.28 / contentWidth * contentHeight
  let pageData = canvas.toDataURL('image/jpeg', 1.0)
  let PDF = new JsPDF('', 'pt', 'a4')
  if (leftHeight < pageHeight) {
    PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
  } else {
    while (leftHeight > 0) {
      PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
      leftHeight -= pageHeight
      position -= 841.89
      if (leftHeight > 0) {
        PDF.addPage()
      }
    }
  }
  PDF.save(options.title ? options.title : 'pdf' + '.pdf')
}
