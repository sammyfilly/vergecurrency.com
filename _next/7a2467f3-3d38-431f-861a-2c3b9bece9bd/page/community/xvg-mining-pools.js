
          window.__NEXT_REGISTER_PAGE('/community/xvg-mining-pools', function() {
            var comp = module.exports=webpackJsonp([13],{3:function(e,t,l){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=l(0),o=r(a),n=l(4),u=r(n);t.default=function(e){var t=e.children;return o.default.createElement("div",{className:"row center-xs"},o.default.createElement("div",{className:"col-xs-11 col-sm-3 start-xs pt-xs"},o.default.createElement(u.default,null)),o.default.createElement("div",{className:"col-xs-11 col-sm-8 start-xs"},o.default.createElement("div",{className:"learnmore__content pt-small pb-small"},t)))}},323:function(e,t,l){e.exports=l(324)},324:function(e,t,l){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=l(15),o=r(a),n=l(11),u=r(n),s=l(12),c=r(s),d=l(16),f=r(d),i=l(17),p=r(i),m=l(0),h=r(m),v=l(2),g=r(v),E=l(3),y=r(E),k=l(325),b=r(k),w=function(e){function t(){(0,u.default)(this,t);var e=(0,f.default)(this,(t.__proto__||(0,o.default)(t)).call(this));return e.state={filter:""},e.updateSearch=e.updateSearch.bind(e),e.renderAlgoDropdown=e.renderAlgoDropdown.bind(e),e}return(0,p.default)(t,e),(0,c.default)(t,[{key:"getFilteredPool",value:function(){var e=this.state.filter;return""===e?b.default:b.default.filter(function(t){return t.supportedAlgos.toLocaleLowerCase().includes(e.toLocaleLowerCase())})}},{key:"updateSearch",value:function(e){this.setState({filter:e})}},{key:"renderAlgoDropdown",value:function(e){var t=this.state.filter;return h.default.createElement("select",{onChange:e,value:t},h.default.createElement("option",{value:""},"All"),h.default.createElement("option",{value:"Scrypt"},"Scrypt"),h.default.createElement("option",{value:"Groestl"},"Myr-Groestl"),h.default.createElement("option",{value:"x17"},"X17"),h.default.createElement("option",{value:"Lyra2Rev2"},"Lyra2Rev2"),h.default.createElement("option",{value:"Blake2s"},"Blake2S"))}},{key:"render",value:function(){var e=this;return h.default.createElement(g.default,null,h.default.createElement("div",{className:"container learnmore"},h.default.createElement(y.default,null,h.default.createElement("div",{className:"row center-xs pt-small pb"},h.default.createElement("div",{className:"col-xs-10 start-xs exchanges bb"},h.default.createElement("div",{className:"start-sm pb-small"},this.renderAlgoDropdown(function(t){return e.updateSearch(t.target.value)}),h.default.createElement("div",{className:"minerpools-grid"},this.getFilteredPool().map(function(e,t){return h.default.createElement("a",{key:t,target:"_blank",href:e.poollink},h.default.createElement("div",{className:"pool-item card"},h.default.createElement("h1",null,e.poolname),h.default.createElement("h5",null,"Algorithms:"),h.default.createElement("code",null,e.supportedAlgos)))}))))))))}}]),t}(h.default.Component);t.default=w},325:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{poollink:"https://coinminerz.com/",poolname:"CoinMinerz",hardfork:!0,supportedAlgos:"Scrypt, Groestl, Lyra2Rev2, Blake2s, x17"},{poollink:"http://zergpool.com/site/mining",poolname:"ZergPool",hardfork:!0,supportedAlgos:"Scrypt, Groestl, Lyra2Rev2, Blake2s, x17"},{poollink:"https://www.f2pool.com/",poolname:"F2Pool",hardfork:!1,supportedAlgos:"Scrypt, Groestl, Lyra2Rev2, Blake2s, x17"},{poollink:"https://www.mining-dutch.nl",poolname:"Mining Dutch",hardfork:!0,supportedAlgos:"Scrypt, Groestl, Lyra2Rev2, Blake2s, x17"},{poollink:"https://cryptopools.aod-tech.com/",poolname:"AOD-Tech Pools",hardfork:!0,supportedAlgos:"Scrypt, Groestl, Lyra2Rev2, Blake2s, x17"},{poollink:"http://blockmasters.co",poolname:"Block Masters",hardfork:!1,supportedAlgos:"Scrypt"},{poollink:"https://prohashing.com/",poolname:"ProHashing",hardfork:!1,supportedAlgos:"Scrypt, Groestl, Lyra2Rev2, Blake2s, x17"},{poollink:"http://www.zpool.ca/site/mining",poolname:"ZPool",hardfork:!0,supportedAlgos:"Scrypt, Lyra2Rev2, Blake2s, x17"},{poollink:"http://xvg.mastermining.net/index.php?page=statistics&action=pool",poolname:"MasterMining",hardfork:!0,supportedAlgos:"Scrypt"},{poollink:"http://xvg-mg.idcray.com/",poolname:"IDcray",hardfork:!1,supportedAlgos:"Groestl, Lyra2Rev2"},{poollink:"http://nlpool.nl",poolname:"NLpool",hardfork:!0,supportedAlgos:"Blake2s, x17"},{poollink:"https://hash-to-coins.com/",poolname:"Hash to Coins",hardfork:!1,supportedAlgos:"Scrypt, Groestl, Lyra2Rev2, Blake2s, x17"},{poollink:"https://www.ahashpool.com/",poolname:"A Hash Pool",hardfork:!1,supportedAlgos:"Scrypt, Groestl, Lyra2Rev2, Blake2s, x17"}]},4:function(e,t,l){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=l(0),o=r(a),n=l(5),u=r(n),s=l(1),c=r(s);t.default=function(){return o.default.createElement("div",{className:"sidebar pt-small pb-xs"},o.default.createElement("h6",null,"FAQ"),o.default.createElement("ul",null,o.default.createElement("li",null,o.default.createElement(u.default,{href:"/faq"},"General")),o.default.createElement("li",null,o.default.createElement(u.default,{href:"/faq/privacy"},"Privacy")),o.default.createElement("li",null,o.default.createElement(u.default,{href:"/faq/wallets"},"Wallets")),o.default.createElement("li",null,o.default.createElement(u.default,{href:"/faq/mining"},"Mining")),o.default.createElement("li",null,o.default.createElement(u.default,{href:"/faq/legal"},"Legal"))),o.default.createElement("h6",null,"Community"),o.default.createElement("ul",null,o.default.createElement("li",null,o.default.createElement(u.default,{href:"/community/get-involved"},"Get involved")),o.default.createElement("li",null,o.default.createElement(u.default,{href:"/community/xvg-mining-pools"},"Mining pools")),o.default.createElement("li",null,o.default.createElement(u.default,{href:"/community/mining"},"How to mine?"))),o.default.createElement("h6",null,"Developers"),o.default.createElement("ul",null,o.default.createElement("li",null,o.default.createElement(u.default,{href:"/developers"},"How to install RubyGems")),o.default.createElement("li",null,o.default.createElement(u.default,{href:"/developers/github-desktop"},"GitHub Desktop")),o.default.createElement("li",null,o.default.createElement(u.default,{href:"/developers/vergecurrency-repositories"},"Our GitHub repositories")),o.default.createElement("li",null,o.default.createElement(u.default,{href:"/developers/wallet-setup-instructions"},"Wallet setup instructions")),o.default.createElement("li",null,o.default.createElement(c.default,{href:"https://github.com/vergecurrency/php-verge"},o.default.createElement("a",{href:"https://github.com/vergecurrency/php-verge",rel:"noopener noreferrer",target:"_blank",style:{color:"rgb(51, 51, 51)"}},"PHP Library for Verge wallet"))),o.default.createElement("li",null,o.default.createElement(c.default,{href:"https://github.com/vergecurrency/verge-ruby"},o.default.createElement("a",{href:"https://github.com/vergecurrency/verge-ruby",rel:"noopener noreferrer",target:"_blank",style:{color:"rgb(51, 51, 51)"}},"Ruby wrapped gem for interacting with Verge wallet")))))}},5:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=l(0),a=function(e){return e&&e.__esModule?e:{default:e}}(r),o=l(10),n=function(e){var t=e.children,l=e.router,r=e.href,o={color:l.pathname===r?"#0f9dc1":"#333333"},n=function(e){e.preventDefault(),l.push(r)};return a.default.createElement("a",{href:r,onClick:n,style:o},t)};t.default=(0,o.withRouter)(n)}},[323]);
            return { page: comp.default }
          })
        