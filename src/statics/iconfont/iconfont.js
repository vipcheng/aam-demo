import { createGlobalStyle} from 'styled-components'

export const IconGlobal= createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1587532334924'); /* IE9 */
    src: url('./iconfont.eot?t=1587532334924#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1587532334924') format('woff'),
    url('./iconfont.ttf?t=1587532334924') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1587532334924#iconfont') format('svg'); /* iOS 4.1- */
  }

.iconfont {
  font-family: "iconfont" !important;
  font-size: 18px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   margin-right: 12px;
}`;

