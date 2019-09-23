import 'jspolyfill-array.prototype.findIndex';
import 'objectFitPolyfill';
import './js/StackBlur';
// CSS
import "./styles/global.scss";

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}
