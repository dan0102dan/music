(this.webpackJsonpmusic=this.webpackJsonpmusic||[]).push([[0],{146:function(e,t,a){e.exports=a.p+"static/media/empty.0b939708.svg"},148:function(e,t,a){e.exports=a.p+"static/media/ava.d549df08.png"},201:function(e,t,a){e.exports=a(343)},309:function(e,t,a){},310:function(e,t,a){},311:function(e,t,a){e.exports=a.p+"static/media/Spotify.e359ad39.svg"},312:function(e,t,a){e.exports=a.p+"static/media/Yandex.deac2f88.svg"},313:function(e,t,a){e.exports=a.p+"static/media/error.6dd30fb5.png"},314:function(e,t,a){},340:function(e,t){},343:function(e,t,a){"use strict";a.r(t);a(202),a(228),a(230),a(231),a(233),a(234),a(235),a(236),a(237),a(238),a(239),a(240),a(242),a(243),a(244),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(253),a(254),a(255),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(267),a(268),a(269),a(270);var n=a(0),r=a.n(n),o=a(128),s=a.n(o),i=a(17),l=a.n(i),c=a(41),u=a(42),p=a(58),m=a(45),d=a(44),h=a(3),g=a(150),f=a.n(g),y=a(151),b=a.n(y),v=(a(289),a(27)),E=a.n(v),k=a(83),x=a(37),S=a(153),w=a(138),C=a.n(w),B=a(62),P=a.n(B),_=a(154),j=a(61),A=a(152),O=(a(309),function(e){var t=e.children,a=Object(j.a)(e,["children"]),o=Object(n.useState)(!1),s=Object(_.a)(o,2),i=s[0],l=s[1];return Object(A.a)((function(){l(window.scrollY>=50)})),r.a.createElement(r.a.Fragment,null,r.a.createElement(h.t,Object.assign({},a,{separator:!1,transparent:!i}),i&&t),r.a.createElement(h.h,{className:"MainEpicHeader__text"},t))}),I=a(59),N=a.n(I),T=a(143),z=a.n(T),M=a(142),D=a.n(M),W=a(141),V=a.n(W),K=(a(310),function(e){var t=Object(h.G)(),a=e.className,n=e.mode,o=e.imageTheme,s=e.size,i=e.before,l=e.asideMode,c=e.header,u=e.subheader,p=e.text,m=e.children,d=e.background,g=e.actions,f=e.onDismiss,y=Object(j.a)(e,["className","mode","imageTheme","size","before","asideMode","header","subheader","text","children","background","actions","onDismiss"]),b="expand"===l?h.A:"div";return r.a.createElement("div",Object.assign({},y,{className:Object(h.E)(Object(h.F)("Banner",t),"Banner--md-".concat(n),"Banner--sz-".concat(s),{"Banner--inverted":"image"===n&&"dark"===o},a)}),m,r.a.createElement(b,{className:"Banner__in"},"image"===n&&d&&r.a.createElement("div",{className:"Banner__bg"},d),i&&r.a.createElement("div",{className:"Banner__before"},i),r.a.createElement("div",{className:"Banner__content"},c&&r.a.createElement("div",{className:"Banner__header"},c),u&&r.a.createElement("div",{className:"Banner__subheader"},u),p&&r.a.createElement("div",{className:"Banner__text"},p),g&&r.a.createElement("div",{className:"Banner__actions"},g)),"expand"===l&&r.a.createElement("div",{className:"Banner__expand"},r.a.createElement(N.a,null)),"dismiss"===l&&r.a.createElement("div",{className:"Banner__dismiss"},r.a.createElement("div",{className:"Banner__dismissIcon",onClick:f},t===h.a&&r.a.createElement(V.a,null),t===h.n&&("image"===n?r.a.createElement(D.a,null):r.a.createElement(z.a,null))))))});K.defaultProps={mode:"tint",size:"s",imageTheme:"dark"};var R=K,H=a(144),L=a.n(H),q=a(145),F=a.n(q),Y={AppleMusic:a(49),Spotify:a(311),Yandex:a(312),Error:a(313)},U=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).goBack=function(){var e=n.state.history;"home"===n.state.activePanel&&l.a.send("VKWebAppDisableSwipeBack"),e.length>1&&(e.pop(),"home"===e[e.length-1]&&(n.props.socket.close(),n.props.setSongs([]),n.setState({count:0,link:""}),n.props.setModal(null),n.props.setTabbar(!0),document.documentElement.style.setProperty("--padding","calc(var(--safe-area-inset-bottom) + var(--tabbar_height))"),document.documentElement.style.setProperty("--bottom","calc(var(--tabbar_height) + var(--safe-area-inset-bottom))")),n.setState({activePanel:e[e.length-1]}))},n.state={activePanel:"home",history:["home"],snackbar:null,count:0,link:""},n}return Object(u.a)(a,[{key:"goToPage",value:function(e){window.history.pushState({panel:e},e),"home"===this.state.activePanel&&(l.a.send("VKWebAppEnableSwipeBack"),this.props.setTabbar(null),document.documentElement.style.setProperty("--padding","0"),document.documentElement.style.setProperty("--bottom","var(--safe-area-inset-bottom)")),this.setState({activePanel:e,history:[].concat(Object(S.a)(this.state.history),[e])})}},{key:"openSuccess",value:function(){var e=this;this.setState({snackbar:r.a.createElement(h.x,{layout:"vertical",onClose:function(){return e.setState({snackbar:null})},before:r.a.createElement(h.c,{size:24,style:{backgroundColor:"var(--accent)"}},r.a.createElement(L.a,{fill:"#fff",width:14,height:14}))},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u043b\u0438!")})}},{key:"openError",value:function(e){var t=this;this.setState({snackbar:r.a.createElement(h.x,{layout:"vertical",onClose:function(){return t.setState({snackbar:null})},before:r.a.createElement(h.c,{size:24,style:{backgroundImage:"linear-gradient(135deg, #fc7373, #cb5e5a)"}},r.a.createElement(F.a,{fill:"#fff",width:14,height:14}))},e)})}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("popstate",(function(){return e.goBack()}))}},{key:"render",value:function(){var e=this;return r.a.createElement(h.s,{id:this.id},r.a.createElement(h.g,{scheme:document.body.getAttribute("scheme")?document.body.getAttribute("scheme"):"bright_light"},r.a.createElement(h.D,{activePanel:this.state.activePanel,history:this.state.history,onSwipeBack:this.goBack},r.a.createElement(h.s,{id:"home"},r.a.createElement(O,null,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),r.a.createElement(R,{id:"Apple",mode:"image",background:r.a.createElement("div",{id:"BannerBackground",style:{backgroundImage:"linear-gradient(326deg, #9b2952 0%, #171428 74%)"}}),before:r.a.createElement(h.c,{style:{background:"none"},size:86,mode:"image",src:Y.AppleMusic}),header:"Apple Music",subheader:"\u041f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u043c\u0443\u0437\u044b\u043a\u0443 \u0438\u0437 \u0444\u0430\u0439\u043b\u0430 Apple.",onClick:function(){return document.getElementById("AppleInput").click()}},r.a.createElement("input",{style:{display:"none"},type:"file",accept:".txt",id:"AppleInput",onChange:function(t){e.props.setPopout(r.a.createElement(h.v,null));var a,n=new FileReader,o=[];n.readAsText(t.target.files[0],"UTF-8"),n.onload=function(t){a=t.target.result;var n=C.a.parse(a,{header:!0});if(!n.errors.length||n.data.length){n.data.pop();for(var r=0;n.data.length>r;r++){var s=n.data[r],i=Object.keys(s);if(!i.includes("Name")||!i.includes("Artist")||!i.includes("Album"))return void e.openError("\u041e\u0448\u0438\u0431\u043a\u0430");o.push({index:r,name:s.Name,artist:s.Artist,album:s.Album})}e.setState({count:o.length},(function(){return e.goToPage("transfer")})),e.props.setPlaylist(o),e.props.setPopout(null),e.props.socket.open(),e.props.socket.emit("AppleMusic",{playlist:o,sign:window.location.search.slice(1)})}else e.openError("\u041e\u0448\u0438\u0431\u043a\u0430")}}})),r.a.createElement(R,{id:"Spotify",mode:"image",background:r.a.createElement("div",{id:"BannerBackground",style:{backgroundImage:"linear-gradient(326deg, #000000 0%, #313131 74%)"}}),before:r.a.createElement(h.c,{style:{background:"none"},size:86,mode:"image",src:Y.Spotify}),header:"Spotify",subheader:"\u041f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u043c\u0443\u0437\u044b\u043a\u0443 \u0438\u0437 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u0430 Spotify.",onClick:function(){return e.props.setPopout(r.a.createElement(h.b,{actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,mode:"cancel"},{title:"\u0414\u0430\u043b\u0435\u0435",autoclose:!0,action:function(){var t=Object(x.a)(E.a.mark((function t(){var a,n,o,s,i,l;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.props.setPopout(r.a.createElement(h.v,null)),t.prev=1,!(e.state.link.search(/playlist/i)>-1)){t.next=7;break}a=e.state.link.split("playlist/")[1].split("?")[0],console.log(a),t.next=10;break;case 7:return e.props.setPopout(null),e.openError("\u041d\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430"),t.abrupt("return");case 10:n=[],o={next:"https://api.spotify.com/v1/playlists/".concat(a,"/tracks")};case 11:if(!o.next){t.next=20;break}return t.next=14,P.a.get(o.next,{headers:{Authorization:"Bearer BQA5O4ZFQkgni0aodHl1cUlzSH2c6PqpyE_6BHhMlcTPS7dU3VR8MUOstKTsL9XT5VQ0riDHH8ow7NilhNnCy5ptmnprS09tdH3IwTyIZEk5X0SUQ7WBWLJkT9rXl24agB_wc_abkkD7rRxb7qLOfpn9_diadKwqM4QN9tGmZWYjpCSkgNcW8_TXNGWnSlH3E6E"}});case 14:o=t.sent,console.log(o),s=Object(k.a)(o.data.items);try{for(s.s();!(i=s.n()).done;)l=i.value,console.log(l),n.push({name:l.track.name,artist:l.track.artists,album:l.track.album.name})}catch(c){s.e(c)}finally{s.f()}t.next=11;break;case 20:e.setState({count:n.length},(function(){return e.goToPage("transfer")})),e.props.setPlaylist(n),e.props.setPopout(null),e.props.socket.open(),e.props.socket.emit("Spotify",{playlist:n,sign:window.location.search.slice(1)}),t.next=31;break;case 27:t.prev=27,t.t0=t.catch(1),e.props.setPopout(null),e.openError("\u041e\u0448\u0438\u0431\u043a\u0430");case 31:case"end":return t.stop()}}),t,null,[[1,27]])})));return function(){return t.apply(this,arguments)}}()}],onClose:function(){return e.props.setPopout(null)}},r.a.createElement("h2",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443"),r.a.createElement("p",null,"\u0414\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442"),r.a.createElement(h.o,{style:{marginTop:16,marginBottom:-7},onChange:function(t){e.setState({link:t.target.value})},type:"text"})))}}),r.a.createElement(R,{id:"Yandex",mode:"image",background:r.a.createElement("div",{id:"BannerBackground",style:{backgroundImage:"linear-gradient(326deg, #29539B 0%, #1E3B70 74%)"}}),before:r.a.createElement(h.c,{style:{background:"none"},size:86,mode:"image",src:Y.Yandex}),header:"\u042f\u043d\u0434\u0435\u043a\u0441 \u041c\u0443\u0437\u044b\u043a\u0430",subheader:"\u041f\u0435\u0440\u0435\u043d\u0435\u0441\u0442\u0438 \u043c\u0443\u0437\u044b\u043a\u0443 \u0438\u0437 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u0430 \u042f\u043d\u0434\u0435\u043a\u0441 \u041c\u0443\u0437\u044b\u043a\u0438.",onClick:function(){return e.props.setPopout(r.a.createElement(h.b,{actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,mode:"cancel"},{title:"\u0414\u0430\u043b\u0435\u0435",autoclose:!0,action:function(){var t=Object(x.a)(E.a.mark((function t(){var a,n,o,s,i;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.props.setPopout(r.a.createElement(h.v,null)),t.prev=1,!(e.state.link.search(/playlist/i)>-1)){t.next=11;break}o=e.state.link.split("playlist"),n=Number(o[1].replace(/[^\d]/g,"")),o.splice(1,1),o=(o=o[0]).split("users"),a=o[1].replace(/\//g,""),t.next=14;break;case 11:return e.props.setPopout(null),e.openError("\u041d\u0435\u0432\u0435\u0440\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430"),t.abrupt("return");case 14:return s=[],t.next=17,P.a.get("https://cors-anywhere.herokuapp.com/https://music.yandex.ru/handlers/playlist.jsx?owner=".concat(a,"&kinds=").concat(n,"&light=true&madeFor=&withLikesCount=true&lang=ru&external-domain=music.yandex.ru&overembed=false"));case 17:return i=(i=t.sent).data.playlist.trackIds.toString(),t.next=21,P.a.post("https://cors-anywhere.herokuapp.com/https://music.yandex.ru/handlers/track-entries.jsx",{entries:i}).then(function(){var e=Object(x.a)(E.a.mark((function e(t){var a,n,r;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=Object(k.a)(t.data),e.prev=1,a.s();case 3:if((n=a.n()).done){e.next=14;break}r=n.value,e.prev=5,s.push({name:r.title,artist:r.artists[0].name,album:r.albums[0].title}),e.next=12;break;case 9:return e.prev=9,e.t0=e.catch(5),e.abrupt("continue",12);case 12:e.next=3;break;case 14:e.next=19;break;case 16:e.prev=16,e.t1=e.catch(1),a.e(e.t1);case 19:return e.prev=19,a.f(),e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[1,16,19,22],[5,9]])})));return function(t){return e.apply(this,arguments)}}());case 21:e.setState({count:s.length},(function(){return e.goToPage("transfer")})),e.props.setPlaylist(s),e.props.setPopout(null),e.props.socket.open(),e.props.socket.emit("YandexMusic",{playlist:s,sign:window.location.search.slice(1)}),t.next=32;break;case 28:t.prev=28,t.t0=t.catch(1),e.props.setPopout(null),e.openError("\u041e\u0448\u0438\u0431\u043a\u0430");case 32:case"end":return t.stop()}}),t,null,[[1,28]])})));return function(){return t.apply(this,arguments)}}()}],onClose:function(){return e.props.setPopout(null)}},r.a.createElement("h2",null,"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443"),r.a.createElement("p",null,"\u0414\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u044b\u0439 \u043f\u043b\u0435\u0439\u043b\u0438\u0441\u0442"),r.a.createElement(h.o,{style:{marginTop:16,marginBottom:-7},onChange:function(t){e.setState({link:t.target.value})},type:"text"})))}}),this.state.snackbar),r.a.createElement(h.s,{id:"transfer"},r.a.createElement(h.t,{left:r.a.createElement(h.u,{style:{cursor:"pointer"},onClick:function(){return e.goBack()}})},"error"===this.props.songs?"\u041e\u0448\u0438\u0431\u043a\u0430!":"\u041d\u0430\u0439\u0434\u0435\u043d\u043e ".concat(this.props.songs.length,"/").concat(this.state.count)),"error"===this.props.songs?r.a.createElement("div",null,r.a.createElement("img",{alt:"error",style:{display:"flex",marginLeft:"auto",marginRight:"auto",width:"80vw",height:"80vh",objectFit:"contain"},src:Y.Error})):this.props.songs?this.props.songs.map((function(e){return r.a.createElement(h.w,{className:"SongCell",key:e.id,before:r.a.createElement(h.c,{mode:"image",src:e.image}),description:e.artist,after:Math.floor(e.duration/60)+":"+"".concat(e.duration%60).padEnd(2,"0"),onClick:Object(x.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(1);case 1:case"end":return e.stop()}}),e)})))},e.title)})):null,this.state.snackbar))))}}]),a}(r.a.Component),Q=a(147),G=a.n(Q),X=a(146),J=a.n(X),Z=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={activePanel:"profile",snackbar:null},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(x.a)(E.a.mark((function e(){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.props.socket.open(),this.props.socket.emit("Profile",{sign:window.location.search.slice(1)});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(h.s,{id:this.id,snackbar:this.state.snackbar},r.a.createElement(h.D,{activePanel:this.state.activePanel},r.a.createElement(h.s,{id:"profile"},r.a.createElement(O,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement(h.k,{separator:"hide",header:r.a.createElement(h.l,{aside:r.a.createElement(h.p,null,"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435")},"\u041f\u043b\u0435\u0439\u043b\u0438\u0441\u0442\u044b")},this.props.profilePlaylists.length>0?r.a.createElement(h.f,null,this.props.profilePlaylists.map((function(e){return r.a.createElement(h.e,{size:"s",key:e.access_key,onClick:function(){var t=document.createElement("a");t.href="https://vk.com/music/playlist/".concat(e.owner_id,"_").concat(e.id,"_").concat(e.access_key),t.target="_blank",t.click()}},r.a.createElement("div",{style:{width:154,height:210,cursor:"pointer",lineHeight:0}},(null===e||void 0===e?void 0:e.thumbs)?e.thumbs.length>1?e.thumbs.map((function(e,t){return r.a.createElement("img",{key:t,style:{width:77,height:77,borderTopLeftRadius:0===t?8:0,borderTopRightRadius:1===t?8:0,borderBottomLeftRadius:2===t?8:0,borderBottomRightRadius:3===t?8:0},src:e.photo_1200,alt:""})})):r.a.createElement("img",{style:{width:154,height:154,borderRadius:8},src:e.thumbs[0].photo_1200,alt:""}):r.a.createElement("img",{style:{width:154,height:154,borderRadius:8},src:J.a,alt:""}),r.a.createElement("div",{style:{width:154,height:34,marginTop:7}},r.a.createElement(h.m,{weight:"semibold"},e.title),r.a.createElement(h.B,{style:{marginBottom:-2},weight:"regular"},e.count," ",[1].includes(e.count)?"\u0442\u0440\u0435\u043a":[2,3,4].includes(e.count)?"\u0442\u0440\u0435\u043a\u0430":"\u0442\u0440\u0435\u043a\u043e\u0432"),r.a.createElement(h.B,{weight:"regular"},new Date(1e3*e.update_time).toLocaleString("ru",{day:"numeric",month:"long",year:"numeric"})))))}))):null),r.a.createElement(h.k,null,r.a.createElement(h.d,{style:{cursor:"pointer"},mode:"tertiary",size:"xl",before:r.a.createElement(G.a,null),onClick:function(){return l.a.send("VKWebAppShare",{link:"https://vk.com/app7647010"})}},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c")),this.state.snackbar)))}}]),a}(r.a.Component),$=(a(314),a(148)),ee=a.n($),te=a(49),ae=a.n(te),ne=a(149),re=a.n(ne)()("https://music.dan0102dan.ru"),oe=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={activeStory:"profile",popout:null,tabbar:!0,modal:null,playlist:[],songs:[],profilePlaylists:[]},n.onStoryChange=n.onStoryChange.bind(Object(p.a)(n)),n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;l.a.subscribe((function(t){var a=t.detail,n=a.type;a.data;"VKWebAppViewHide"===n&&e.setState({popout:null})})),l.a.send("VKWebAppStorageGet",{keys:["greeting"]}).then((function(t){var a;console.log("haveshown",t),""===(null===t||void 0===t||null===(a=t.keys[0])||void 0===a?void 0:a.value)&&(e.setState({activeStory:"greeting",tabbar:null}),document.documentElement.style.setProperty("--padding","0"))})).catch((function(e){return console.log("e",e)})),this.startSocket()}},{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story}),l.a.send("VKWebAppTapticSelectionChanged",{})}},{key:"returnCaptcha",value:function(e,t,a){re.emit(a,{playlist:this.state.playlist,sign:window.location.search.slice(1),captcha:{key:e,captcha_sid:t}}),this.setState({modal:null})}},{key:"openCaptcha",value:function(e,t,a,n){var o=this;this.setState({modal:r.a.createElement(h.r,{activeModal:"Captcha",onClose:this.setState({modal:null})},r.a.createElement(h.q,{id:"Captcha",onClose:function(){return o.setState({modal:null})},header:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u0430\u043f\u0447\u0443",actions:[{title:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",mode:"primary",action:function(){return o.returnCaptcha(e,t,a)}}]},r.a.createElement("img",{alt:"error",style:{margin:"auto",display:"block",width:"60%",borderRadius:8,marginTop:10,marginBottom:10},src:n}),r.a.createElement(h.o,{defaultValue:"",onChange:function(t){return e=t.target.value},onKeyDown:function(n){"Enter"===n.key&&o.returnCaptcha(e,t,a)}})))})}},{key:"startSocket",value:function(){var e=this;re.on("message",(function(t){if(console.log(t),"Profile"===(null===t||void 0===t?void 0:t.method))e.setState({profilePlaylists:t.playlists.reverse()});else if(null===t||void 0===t?void 0:t.error)if("Captcha needed"===t.error){var a=e.state.playlist.splice(e.state.playlist.findIndex((function(e){return e.name===t.description.request_params[t.description.request_params.findIndex((function(e){return"q"===e.key}))].value})));e.setState({playlist:a});e.openCaptcha("",t.description.captcha_sid,t.method,t.description.captcha_img)}else e.setState({playlist:"error"});else{var n=e.state.songs;n.unshift(t),e.setState({songs:n})}}))}},{key:"render",value:function(){var e=this;return r.a.createElement(h.i,{activeStory:this.state.activeStory,tabbar:this.state.tabbar?r.a.createElement(h.y,null,r.a.createElement(h.z,{style:{cursor:"pointer"},onClick:this.onStoryChange,selected:"home"===this.state.activeStory,"data-story":"home",text:"home"===this.state.activeStory?"\u0413\u043b\u0430\u0432\u043d\u0430\u044f":null},"home"===this.state.activeStory?null:r.a.createElement(f.a,null)),r.a.createElement(h.z,{style:{cursor:"pointer"},onClick:this.onStoryChange,selected:"profile"===this.state.activeStory,"data-story":"profile",text:"profile"===this.state.activeStory?"\u0420\u0430\u0437\u043d\u043e\u0435":null},"profile"===this.state.activeStory?null:r.a.createElement(b.a,null))):null},r.a.createElement(h.D,{id:"home",activePanel:"home",popout:this.state.popout,modal:this.state.modal},r.a.createElement(U,{songs:this.state.songs,setSongs:function(t){return e.setState({songs:t})},setPlaylist:function(t){return e.setState({playlist:t})},socket:re,setPopout:function(t){return e.setState({popout:t})},setTabbar:function(t){return e.setState({tabbar:t})},id:"home",setModal:function(t){return e.setState({modal:t})}})),r.a.createElement(h.D,{id:"profile",activePanel:"profile"},r.a.createElement(Z,{profilePlaylists:this.state.profilePlaylists,socket:re,id:"profile"})),r.a.createElement(h.D,{id:"greeting",activePanel:"greeting"},r.a.createElement(h.s,{id:"greeting",style:{position:"fixed"}},r.a.createElement(h.j,{slideWidth:"100%",align:"center",style:{height:"100vh"},slideIndex:this.state.slideIndex,onChange:function(t){return e.setState({slideIndex:t})},bullets:"light"},r.a.createElement("div",{style:{backgroundColor:"#520097",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},r.a.createElement("img",{className:"IntroImg",src:ee.a,alt:"",style:{width:"300px",height:"300px",marginBottom:64}}),r.a.createElement(h.C,{level:"1",weight:"heavy",style:{color:"#fff",marginBottom:16,fontSize:"2.5em",textAlign:"center"}},"\u041f\u0435\u0440\u0435\u043d\u043e\u0441 \u043c\u0443\u0437\u044b\u043a\u0438"),r.a.createElement(h.C,{level:"3",weight:"semibold",style:{color:"#fff",marginBottom:4,textAlign:"center"}},"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u0441\u0435\u0440\u0432\u0438\u0441 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0430 \u043c\u0435\u0434\u0438\u0430\u0442\u0438\u043a\u0438 \u0432 VK!"),r.a.createElement(h.C,{level:"5",weight:"semibold",style:{color:"#fff",textAlign:"center",marginBottom:48,padding:"0 10px"}},"\u0421\u0432\u0430\u0439\u043f\u043d\u0438 \u0432\u043b\u0435\u0432\u043e, \u0447\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435."),r.a.createElement(h.h,null,r.a.createElement(h.d,{style:{cursor:"pointer"},size:"xl",mode:"commerce",onClick:function(){l.a.send("VKWebAppStorageSet",{key:"greeting",value:"true"}),e.setState({activeStory:"home",tabbar:!0}),document.documentElement.style.setProperty("--padding","calc(var(--safe-area-inset-bottom) + var(--tabbar_height))")}},"\u041f\u0440\u043e\u043f\u0443\u0441\u0442\u0438\u0442\u044c"))),r.a.createElement("div",{style:{backgroundColor:"#9b2952",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},r.a.createElement("img",{className:"IntroImg",src:ae.a,alt:"",style:{width:"300px",height:"300px",marginBottom:64}}),r.a.createElement(h.C,{level:"1",weight:"heavy",style:{color:"#fff",marginBottom:16,fontSize:"2.5em",textAlign:"center"}},"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c"),r.a.createElement(h.C,{level:"3",weight:"semibold",style:{color:"#fff",marginBottom:48,textAlign:"center",padding:"0 10px"}},"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0441\u0430\u043c\u044b\u0435 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043c\u0443\u0437\u044b\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u044b, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a Apple Music, Spotify, \u042f\u043d\u0434\u0435\u043a\u0441 \u041c\u0443\u0437\u044b\u043a\u0430 \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435..."),r.a.createElement(h.h,null,r.a.createElement(h.d,{style:{cursor:"pointer"},size:"xl",mode:"commerce",onClick:function(){return e.setState({slideIndex:2})}},"\u0412\u0430\u0443"))),r.a.createElement("div",{style:{backgroundColor:"#29539B",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},r.a.createElement("img",{className:"IntroImg",src:ae.a,alt:"",style:{width:"300px",height:"300px",marginBottom:64}}),r.a.createElement(h.C,{level:"1",weight:"heavy",style:{color:"#fff",marginBottom:16,fontSize:"2.5em",textAlign:"center"}},"\u0411\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c"),r.a.createElement(h.C,{level:"3",weight:"semibold",style:{color:"#fff",marginBottom:48,textAlign:"center",padding:"0 10px"}},"\u0412\u0441\u0451 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0438 \u0431\u0435\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b."),r.a.createElement(h.h,null,r.a.createElement(h.d,{style:{cursor:"pointer"},size:"xl",mode:"commerce",onClick:function(){l.a.send("VKWebAppStorageSet",{key:"greeting",value:"true"}),e.setState({activeStory:"home",tabbar:!0}),document.documentElement.style.setProperty("--padding","calc(var(--safe-area-inset-bottom) + var(--tabbar_height))")}},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0441\u0435\u0440\u0432\u0438\u0441!")))))))}}]),a}(r.a.Component);s.a.render(r.a.createElement(oe,null),document.getElementById("root")),l.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var r=document.createAttribute("scheme");r.value=n.scheme?n.scheme:"bright_light",document.body.attributes.setNamedItem(r)}})),l.a.send("VKWebAppInit")},49:function(e,t,a){e.exports=a.p+"static/media/AppleMusic.cd5eac42.svg"}},[[201,1,2]]]);