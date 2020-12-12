import "./style.scss";
import { permuteEls } from './core/utils';

document.addEventListener("DOMContentLoaded", (event) => {
    permuteEls('.numbers > li');
});