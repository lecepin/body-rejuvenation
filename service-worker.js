if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const a=s=>l(s,r),t={module:{uri:r},exports:u,require:a};e[r]=Promise.all(i.map((s=>t[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-d249b2c8"],(function(s){"use strict";self.skipWaiting(),s.precacheAndRoute([{url:"404.html",revision:"f3084b378be25761276533df479830d3"},{url:"assets/1.6ef53845.png",revision:null},{url:"assets/1.788091e5.jpg",revision:null},{url:"assets/1.a7bde3bd.jpeg",revision:null},{url:"assets/1.d1c4de31.jpg",revision:null},{url:"assets/10.0a82d686.jpg",revision:null},{url:"assets/10.6d7b891c.jpg",revision:null},{url:"assets/11.23cba830.jpg",revision:null},{url:"assets/11.b1dacb11.jpg",revision:null},{url:"assets/12.78be9cea.jpg",revision:null},{url:"assets/12.7c7b4e74.jpg",revision:null},{url:"assets/13.1919e54f.jpg",revision:null},{url:"assets/13.e8668701.jpg",revision:null},{url:"assets/14.b2ca2da3.jpg",revision:null},{url:"assets/15.db72a3d4.jpg",revision:null},{url:"assets/16.dd2cc3d7.jpg",revision:null},{url:"assets/17.75dd91b2.jpg",revision:null},{url:"assets/18.0df76954.jpg",revision:null},{url:"assets/19.a6f7ec7b.jpg",revision:null},{url:"assets/2.1fd52290.jpg",revision:null},{url:"assets/2.76e89b08.png",revision:null},{url:"assets/2.d41e1f14.png",revision:null},{url:"assets/20.ba93b27f.jpg",revision:null},{url:"assets/21.50b46c46.jpg",revision:null},{url:"assets/22.49b5afc3.jpg",revision:null},{url:"assets/23.44ed9b59.jpg",revision:null},{url:"assets/24.5bb143db.jpg",revision:null},{url:"assets/25.822dfabd.jpg",revision:null},{url:"assets/26.2bc7fe6f.jpg",revision:null},{url:"assets/27.20cd362b.jpg",revision:null},{url:"assets/28.25eb8931.jpg",revision:null},{url:"assets/29.3cc8e76f.jpg",revision:null},{url:"assets/3.4ada8c76.png",revision:null},{url:"assets/3.fcdee385.jpg",revision:null},{url:"assets/30.dd3caebc.jpg",revision:null},{url:"assets/4.13da3a12.png",revision:null},{url:"assets/4.7124b40e.jpg",revision:null},{url:"assets/404.fa7f976c.js",revision:null},{url:"assets/404.html.93146c89.js",revision:null},{url:"assets/404.html.ec2de998.js",revision:null},{url:"assets/5.6ad42aa6.jpg",revision:null},{url:"assets/5.bdce7b16.jpg",revision:null},{url:"assets/6.2dbac638.jpg",revision:null},{url:"assets/6.7f539216.jpg",revision:null},{url:"assets/7.78a4101b.jpg",revision:null},{url:"assets/7.a2962cc6.jpg",revision:null},{url:"assets/8.5892e772.jpg",revision:null},{url:"assets/8.b92bcbc3.jpg",revision:null},{url:"assets/9.03459913.jpg",revision:null},{url:"assets/9.dc0b10da.jpg",revision:null},{url:"assets/app.b47fc471.js",revision:null},{url:"assets/back-to-top.8efcbe56.svg",revision:null},{url:"assets/index.0e8935cb.js",revision:null},{url:"assets/index.html.0ddfca0d.js",revision:null},{url:"assets/index.html.15605340.js",revision:null},{url:"assets/index.html.309714e0.js",revision:null},{url:"assets/index.html.3d35460d.js",revision:null},{url:"assets/index.html.6f4b8c2b.js",revision:null},{url:"assets/index.html.77b4347e.js",revision:null},{url:"assets/index.html.98f9d0c2.js",revision:null},{url:"assets/index.html.9d4b6304.js",revision:null},{url:"assets/index.html.acb512c0.js",revision:null},{url:"assets/index.html.bc311208.js",revision:null},{url:"assets/index.html.bd54ea03.js",revision:null},{url:"assets/index.html.cc5c4778.js",revision:null},{url:"assets/index.html.cd603aea.js",revision:null},{url:"assets/index.html.ee33d2c4.js",revision:null},{url:"assets/index.html.eefab6fe.js",revision:null},{url:"assets/index.html.febb64c5.js",revision:null},{url:"assets/Layout.87994e9a.js",revision:null},{url:"assets/PC.html.1c08f299.js",revision:null},{url:"assets/PC.html.9ce0188e.js",revision:null},{url:"assets/style.18dbf06d.css",revision:null},{url:"assets/早衰.html.7e8d5277.js",revision:null},{url:"assets/早衰.html.91e3a90e.js",revision:null},{url:"assets/肾虚腰痛.html.290ce491.js",revision:null},{url:"assets/肾虚腰痛.html.46f3adc1.js",revision:null},{url:"assets/臀肌.html.25f816b1.js",revision:null},{url:"assets/臀肌.html.9dc1acec.js",revision:null},{url:"assets/遗精.html.260ebc85.js",revision:null},{url:"assets/遗精.html.ed8ab167.js",revision:null},{url:"diet/index.html",revision:"7a85ffbdde856ef66be1d3a41650d731"},{url:"diet/早衰.html",revision:"7e4a9325932b6dc5ab1e08d5f44689c1"},{url:"diet/肾虚腰痛.html",revision:"192ce87e88dbd9752a81a85316610a71"},{url:"diet/遗精.html",revision:"9514e4b3965a4e0deb65e33f1328637f"},{url:"fitness/index.html",revision:"349eaa2bd52f783d35b037d0c86dab38"},{url:"fitness/PC.html",revision:"44eca1b7b1f509a2869585ce3e72794f"},{url:"fitness/臀肌.html",revision:"97e0508d3bfd3a1c96f713ddf351cb1e"},{url:"guide/16h-fasting/index.html",revision:"111dcf9df72960468a3aa9ba53a0706c"},{url:"guide/control-inflammation/index.html",revision:"de5de11472315c57de7ac587b7683f35"},{url:"guide/index.html",revision:"03490a555033f24c618dde86e14fd4ae"},{url:"guide/kidney/index.html",revision:"368cf02a82e73cc21e31a04b4c277d2e"},{url:"guide/sleep/index.html",revision:"db6ae3cd7f82c7da89dc9c578eae9755"},{url:"icons/128.png",revision:"6e16621ec2a072c114e7000f149ad662"},{url:"icons/144.png",revision:"1fd6ff061f0036bd2505396bc5504b79"},{url:"icons/192.png",revision:"7b5b71c793f9ca169e31bec8a1d42209"},{url:"icons/256.png",revision:"bef0838595720d758a1d36350307dca2"},{url:"icons/512.png",revision:"8bd22d6649a0d4d13b461147aa8ce52f"},{url:"index.html",revision:"cdd14f1510cf638ae33a8f66389a7a2d"},{url:"logo.png",revision:"6e16621ec2a072c114e7000f149ad662"},{url:"reg.sw.js",revision:"baa548617846f633299a638e31b57c2e"}],{})}));
