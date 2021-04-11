import Header from './header.js';
import Sidebar from './sidebar.js';
import avatar from './avatar.jpeg';
import './index.scss'
import './iconfont.css'
//CommonJs
// var Header = require('./header');
// var Sidebar = require('./sidebar');
// var avatar = require('./aa.jpeg');
console.log(avatar);

var img = new Image();
img.src = avatar;
img.classList.add('avatar', 'avatar1')
document.body.append(img);

var root = document.getElementById('root');
root.innerHTML = '<div class="iconfont iconmugua"></div>';



new Header()
new Sidebar()