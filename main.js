(()=>{"use strict";function e(e,t){const n=document.createElement("li");n.setAttribute("id",e);const o=document.createElement("a");return o.href="#",o.textContent=t,n.appendChild(o),n}function t(e){const t=document.createElement("section");return t.setAttribute("id",e),t}function n(e,t){const n=document.createElement("p");return n.setAttribute("id",e),n.textContent=t,n}function o(e){const t=document.createElement("section");return t.setAttribute("id",e),t}function c(e,t,n){const o=document.createElement("section");o.setAttribute("class","menu-item");const c=document.createElement("h3");c.textContent=e,o.appendChild(c);const d=document.createElement("h4");d.textContent=n,o.appendChild(d);const i=document.createElement("p");return i.textContent=t,o.appendChild(i),o}(function(){const t=document.getElementById("content"),n=function(e,t){const n=document.createElement("header");n.setAttribute("id","header");const o=document.createElement("h1"),c=document.createElement("a");return c.href="#",c.textContent="Arlo",o.appendChild(c),n.appendChild(o),n}();t.appendChild(n);const o=function(t){const n=document.createElement("ul");n.setAttribute("id","nav");const o=e("home","Home"),c=e("menu","Menu"),d=e("about","About");return n.appendChild(o),n.appendChild(c),n.appendChild(d),n}();n.appendChild(o);const c=function(e){const t=document.createElement("main");return t.setAttribute("id","main"),t}();t.appendChild(c);const d=function(e,t){const n=document.createElement("footer");n.setAttribute("id","footer");const o=document.createElement("h3");return o.textContent="Made by Rob",n.appendChild(o),n}();t.appendChild(d)})(),function(){const e=document.querySelector("#main"),o=t("details");e.appendChild(o);const c=function(e,t){const n=document.createElement("h2");return n.setAttribute("id","arlo"),n.textContent="Not Just Another Ramen Bar",n}();o.appendChild(c);const d=n("tagline","Tagline Goes Here!");o.appendChild(d);const i=function(e,t,n){const o=document.createElement("a");return o.setAttribute("id","order"),o.href="#",o.textContent="Order Now",o}();o.appendChild(i);const r=t("para");e.appendChild(r);const a=n("basicInfo","Inspired by American Cuisine. Built on the principle that food tastes better in larger quantities.  For the vibrant community of Portland.");r.appendChild(a)}(),function(){const e=document.querySelector("#main"),t=o("menu");e.appendChild(t);const n=o("menu-content");t.appendChild(n);const d=function(e,t){const n=document.createElement("h2");return n.setAttribute("id","menuTitle"),n.textContent="Arlo Menu",n}();n.appendChild(d);const i=c("Shoyu Ramen","A simple but elegant soup infused with fragrant soy sauce","$12.99");n.appendChild(i);const r=c("Shio Ramen","A clear, refined and gluten-free soup seasoned with roasted sea salt and charred green onions");n.appendChild(r)}()})();