(this["webpackJsonpmake-money-fast"]=this["webpackJsonpmake-money-fast"]||[]).push([[0],{17:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var o=n(1),s=n.n(o),a=n(10),i=n.n(a),r=(n(17),n(4)),l=n(5),c=n(7),u=n(6),h=(n(8),n(0)),p=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e;return 0==this.props.level&&(e="animate"),Object(h.jsxs)("div",{className:"heroBanner",children:[Object(h.jsx)("img",{className:"heroImg",src:this.props.img,alt:"heroImg"}),Object(h.jsxs)("div",{className:"hero-text",children:[Object(h.jsx)("h1",{className:e,children:this.props.title}),Object(h.jsx)("p",{children:this.props.desc}),Object(h.jsx)("button",{onClick:this.props.func,children:this.props.buttonTxt})]})]})}}]),n}(o.Component),m=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e="left",t="right",n="#F5F5F5";return 1===this.props.format&&(e="right",t="left",n="white"),Object(h.jsxs)("div",{class:"container",style:{background:n},children:[Object(h.jsx)("div",{class:e,children:Object(h.jsx)("img",{class:"contentImg",src:this.props.img})}),Object(h.jsxs)("div",{class:t,children:[Object(h.jsx)("h1",{class:"center",children:this.props.title}),Object(h.jsx)("p",{class:"center blockTxt",children:this.props.desc})]})]})}}]),n}(o.Component),g=n.p+"static/media/klepty.69e698e2.png",y=n(3),d=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={kleptySays:y.klepty.dialogue0,responses:y.klepty.response0,captcha:!1},e}return Object(l.a)(n,[{key:"chooseResponse",value:function(e){var t=this.state,n=(t.kleptySays,t.responses),o=n[e].nextDialogue,s=n[e].nextResponse;this.setState((function(e,t){return{kleptySays:y.klepty[o],responses:y.klepty[s]}}))}},{key:"loginPhase",value:function(){this.setState((function(e,t){return{kleptySays:y.klepty.dialogue5,responses:y.klepty.response5}}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.kleptySays,o=t.responses,s=t.captcha;2==this.props.level&&0==s&&this.setState((function(e,t){return{kleptySays:y.klepty.dialogue5,responses:y.klepty.response5,captcha:!0}}));for(var a=[],i=n,r=function(t){a.push(Object(h.jsx)("button",{onClick:function(){return e.chooseResponse(t)},children:o[t].txt}))},l=0;l<o.length;l++)r(l);return Object(h.jsxs)("div",{class:"klepty",children:[Object(h.jsx)("img",{class:"kleptyImg",src:g,alt:"kleptyImg"}),Object(h.jsxs)("div",{class:"kleptyText",children:[Object(h.jsx)("img",{class:"kleptySpeech",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA5gAAAKjBAMAAACKLL1UAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABJQTFRFAAAApKSkY2JiIx8gAQEB////NQH04gAAAAZ0Uk5TAFnB////leoFWgAAF9ZJREFUeJztndti4jgWReMkH1Ck4Z0knvdp7LxXl+kPgDD//yuDDPgCknVkjHW2stdrVxLhxdHleNv99EQIIYQQQgghI8kWJ97ePgyfn8WRanvLx3vsoZIu2aI2tjG+CosvQ2UTef5Pf8f+AD8XU28fHwPeRsDqnIvjjHmsvM+inE7eDX9if8iEOet7qL8+1a/YnzklMrNl+Zh08gySSZt386uuwUdXYFUVZz43H33a704V+1qgYhR+Tl2ER1e1n/fToWT3Pxlvl28S180Qfk2m0FTascZCnA3pPP/Wf2JfIATMUeLzrpm0qt3VNXe/u1t2+enPrGNfKb0cdzT3HCiKk73VI+zdcLbJTdANmTnTj/J3rL/3xxSfj2U9AE60F8zhPlxiZbYt71EE9jjV5jr2RYzPcWMTKjFeDbqo14MfvKM1He6gRbEqNu8zrYLB7H5saS7ePgNq0cykqqrQyvePK83suEMNcqhfYkP+c0rTnDPwJ9Mhdj+hNI+bVNHCWEHMpgPU55NUz5oL2Zx6rESo6dRJXZq/Y1/1yTkujZJqLD4g51MndWnGvvZTItJYbJIoxWvq0lzHNjAF5tTo1Whm1FXsa/448i1+T08yq6Zt8czefFLcLVDmvTtVbRS0TufCfGDI08nC11E9nhdXsa/uzJgtUPXf2GaCyHyrY6XhRkYM6nm2iO1HzNvwtHrcp65iX9GYmGtQApRmthj0WG0+VrEvZXzqeVZ3Um8xWI/Vj9ipyjD3Tiq9pTl4t6r6eXscD/Vao7E0F0Mei4/32BdOI2YGK8p1bHVdzvcd7Q+ymWk19jVTi1k0i0LNWTMbWCCPZ45V7Mulm3rRLEoNbaCBA2T1ww8dQna1zCLyFui4Y3Uuj9zmyDnJjDfPZu6sI+fVUPJ60Yw0zzpXSB47RnHaAc1/1Fy8uQqyYDdnLIda5rzz7MK11al47riL75PMciaPzrMHN6wTsD/tgOboGzhnVk6sE3E+mxS/Hysycxw+uNOZlLPMBy6amePwcZxZY3/41DjLfNAtatfUypn1IZxlPmDRdGxaObM+jvJcmdOeNDN7RfLs8VguMqcL0P6yr5EFC/Lh5GeZ0+yAHLtWzqzzkG/rrsEUOyB7Q4Ai5+NSmXf2gDKryIJL5KxcKvOOGyeLN4vI46Y19kf7eTSVuR5XkdZFklNrHC4yx5xNrIskd63xuBxNQruz1pYAGztxGSPTOrdSZHwamdKuQWYpSfbMdbC9yBR1DSxdOm5b9SCXWZfkVVVy26qKRqbniZPsZpmsKFIbjczhft6VSi6SKhHJzHqzK0+SWtme++xDMp87Jck7knrZbf1r5l9NSVKkanb+yry45AlEO3uvzLPLv2OPlHhpZTqm2ZfTUrmKPVDix1eZp73Pn9jDJBK+h2VmnGKB+B6eZnPj8p/YgyQyWpm23uwLXSJxGJKZcb2EopVpuZ9pJtkq9giJmCGZ9ST7n9gjJGKGZJZcMLFYumW+cJIFY9ncAft9LZOTLBptZV7LfOVOFo28qczrELRZMVexh0dCcMp84e4Hjkbm9Uu6chYmHK7KzFiYeDSB9qunwF65lcXDJbPkGROPrV2muSf9b+yxkUBamb0np83xM/bQSCgOmSUbBoDYZZq97FfsoZFQmm5e720jr5xlAWkD7T2ZOWdZQHb2yuReFpG2MrtJy4wdA0TsGWgumZDYn05YcslExB6bzdlkR8Quk/sfSKwyuf/BxBpof+b+BxJrbJabWUxcMnkvExCrTJ5MMHHJ5GYWkIMt0J5TJiRtoL0TzispExJr0pIyMbFmoBkzwMRamZSJScnKTAdrBpp9dkwoMyGsgXbuZjGhzISwZqApExOrTLbzMLFmoJeMACFiz0BTJiT2DDTvZ0LSViZjs/A4A+2UiYc90M4MECR7W9KSMjGxB9opExKnTOZm8fi2hfPq1+bFHhkJxv4eaMqExC6Tz5pA0sr8fSVzFXtoJBTKTAj7G9ozykTEGmjnw7aYLK2vDqZMSJbWl3pTJiSOl3ozBY1Ibn91MGUi4pbJRBccjje0M2uJiPs90JQJB2UmhEMmU9CIUGZC2F/qzbdaQmLNQDPSDok9A02ZkNifTmCkHZK2MvsymbUExDXNUiYg9kA7ZUJiz0AzBQ2JSyaDs4DYA+2UCYk9A02ZkNhjs4y0Q+KSmVEmHkMyV7EHR8I42MN5lIlIE2gv+zKfGJzFwx5op0xI7IF2yoTEEWhnChoRRwaaMhGhzIQo7eE8BmcRocyEcMpkcBYPRwaaMhFxZKCZgkbEKZPBWTwcsVnKBMSVtGQKGhBXoJ0yAXEF2vmWdkBamX9uZTIFjYUr0E6ZgLhlvlAmGq3Mf25lMp6HhSvQTpmAuALtTEED4orNUiYgwzJXsYdHQmhlXuW5mILG4+BKWlImHsOVyeAsFM5AO1PQeDgD7cxa4rF0xWYpEw9nBpoy8RiQyeAsGs7YLGXiQZkJUbqSlkxB4+GMzVImHpSZEM6kJVPQeAzLZNYSCmegnTLxcGagmYKGwx1oZ3AWDndsljLhoMyEcGegGZyFgzITwh1op0w4hmQyBQ1GK/M3ZaLjDrQzOAuHOzZLmXC4A+2UCYevMpmCBmIg0M5IOxoDGWjKRMMn8yv2AImcgQx0nbX8ij1AIid3x2YpEw2fTMbzgBgItDNricZAoJ0y0RjIQFMmGoMymYLGYiADTZloNDJvM9CUicZAbJYpaDQGK5MyoXC/1Jsy4fDKZAoah2GZfLE3FEMZaAZnwaDMhBjKQDM4CwZlJsRQoJ0ywRhKWjI4C0Yj05KBpkwwhivziTKRGK5MBmehOAwF2ikTi8EMNFPQWFBmQgzGZpmCxsIvk/E8GCgzIQYD7QzOYjEYaKdMLDwymbVEYjADTZlYDCYtKRMLf2UyawnDYKCdwVksmsq0JS0pE4rh2CxT0FBQZkLsBsN5jLRDMZyBZgoaCp9MZi2BaGX+pkx0hjPQlAmFT2ZGmThIZK5iD5LI8GSgKRMJT2yWkXYkPIF2pqCROAzHZikTiWVTmZQJjyfQzhQ0EsvhpCWDs0hQZkJ4Au0MziJBmQmRD2egKROJcjhpWWctKRMET2yWKWgkPIF2ykTCW5mvlAmDJ9DOFDQSnkA7ZSLhyUAzBQ2EL9DOFDQQrcyNWyYTXRj4MtCUCYRfJoOzMPgC7ZQJhC82yxQ0EK1MRziPMnFoZLqSlkxB4+ALtD8xBY2DTCazlhC0GWjKhKd9OmFNmeh4M9B8sTcO3tgsI+04UGZCCGQya4mCNzZLmThQZkIIZDIFjYLnDe1nmcxaQuB9OoEycaDMhPA+ncDgLA7epCVl4uANtFMmDoLKZAoaBH+gnTJh8L2h/SyTiS4EJDIZnAXBH2inTBj8gXbKhGHvD+cxBY0CZSaEP9DOSDsMggw0I+0oUGZCCDLQTEGj4H1D+1nmV+yBEj+iymRwFoODPzZLmSgIMtB8sTcKS384j8FZFCgzIQQZaMpEIfcnLRlpR6H0Jy0pEwVBBprvgkaBMhNCEGhncBYFQdKSMlEQBNopEwVBOI9vaUdBJJORdgxEMp8pEwFJoJ3BWRAkGWjKBEEmk8FZCCgzIfxvaL/IXMUeKvFBmQkheTrhiSloDERJS6agMRBloCkTA2FllpQJgLAymYJGQBRop0wMRIH2Omv5FXuoxIdcJuN56hEF2ikTA1GgncFZDCgzIURPJ/Bd0BiInk5gChoDUaCdMjEQxWYZnMVAFGinTAyElflCmQCIkpZMQWPQVCZl4iMK5zE4C8GOMtOBMhNiJ0paMgUNwV6WtKRMBGQZaMqEQCqTKWgAhIF2BmcREMZmKRMBykwIYWyWb2lHQCyTKWj9UGZChMhkPE85wgw0U9AIiGUyOKsfYQaaMhEQZqCZgkYgl2WgGZxFQJiBpkwESlnSkjIRCJHJ4KxyhIF2ykRAGJulTASEgXamoBEQVyZf7K0fcWVSpnqkGWimoAGQy2TWUj2UmRB7aWyWMvUjfTqBL/YGQF6ZjLSr51sam6VM/YTJZApaNQEy+WJv7TRJy4Iy4WkfNfHEZpmC1o84A83grH4oMyHEGWjK1M9SGs5jClo/S2lsljL1E1CZr5SpHPHTCQzO6kf4hnbKRECcgaZM/YTJZHBWNU3SckOZ8IifTmAKWj/iDDRl6kcczqNM/QTIZApaOwEymbVUjvSl3pQJAGUmhDwDTZnqCchA11nL2OMlA+zlSUumoLUTEJtlClo7lJkQrUxvOI8ytROQtGQKWjsBgfY6a/kVe8DETVBlUqZuDvIMNFPQ2gkItDM4qx3KTIiADDRlaifg6QRmLbUTEGinTO3k8tgsZWqHMhMiINBex/OYglZMKX3bLGXqp5RnoClTO+L3QBv4LmjdBDydwBS0dgIy0JSpnZBwHmXqZhcQm2VwVjkhgXbKVA5lJkTI0wlPTEHrJijQTpm6ocyECAq0MwWtm0CZTEFrJig2S5m6CQq0U6ZugjLQTEHrJlAms5aaocyEOIQkLSlTN0EZaL7YWzdBTydQpm7CZTI4q5agDDRl6iZcJrOWagmKzVKmbgJlMgWtmaCnE5iC1k1QBpoydROUgaZM3QTKZDxPM5SZDmGxWcpUDWUmxBiZq9iDJnYCY7MMzmqGMhMiWGbJFLRamgx0QZnwBL2hnTJ18x0WaOe7oDUTGGinTM0ExmYpUzOBsVk+n6CZQ1hslilozQRXJmXqJTA2yxS0ZgKfTmBwVjPLsNgsZWomMANNmZqhzIQIlskUtF4CA+21TGYtldLI/C2UyeCsXgKTlnx9sGa2oZX5RJlqCa5MhoD0Epi0fOI7uhQT9upgA++BaSU0A/1U3zZh10AlI2TyQXit7EJjszyb6GWETD5topXgQPtTvZ3lDkgjwRnoJ+6A1DJG5isXTZ0EB9qfTjsgPqGgkDbQLnZZN/S4aCokONBuWPIumEpGyXzhPKuS4Az0ZZ7lflYf42Tm3M9qJPhRk2ae5RZIHU0GehMi08yz3AKpIzjQfsL0Db5ij51cERybPZGxNBWSj5tm6y0QV01l5KEZ6DOmpccbYcoIDrR3S5OBA11sw97Q3mJWTe6BdBEem72w5ESrjN14mXVpckeriDtk1m0gLpuKaF+DKE5atuSsTVUc7pFpkl1Hm6vYH4KcaG9njpFZHzZ5a1MLTc8gIGl5a/PPKvDP7oL+9dtHl0VN4B/8EZT3yTydT+w6d/VFP1790x22bY+gTmD3B8tya6P+EJvNx/u7+aO3g/kRbO+U+dy5nh+1OOu1viFkZj7IfqXd8eY4qPef4bfJs4+V+bTsV4q9bu6TOd7lDaZ865n6YVc0Iu1mNiA22yOrhLXYZyUf4/eEMq8watNZf5fbe2U+/VUV0nLsEDDGEb99DFVRz8erR13qx9Psf8bLzMpCulCeLlq9FZIPcf8geQMUtdfHXfUHsW1ljnR53AOdfsP1FSnLwkEZ1DbK55fZUtXz8OOu/5R8bxuZQUnLPn9VLm12tiEyIxSmlep47NE9B7dLZljS8oo8WKa8Pb/sXtHygnjXPDmmVnVaNZfkfIXD8lx9MueM6pIpjsPvuhfS94vPoueyejziPFJOILttO8uGBg16PHuv81iZh97lC+fxduv595GWhBymkhlmcxvQzetethEub6iqyu7kbqext0qdWXbEvem+zVJcN2WAzHsL0zeU6cv2eKx5Xz1SmoPdtiNzzB2wLlkprRxz/b6EQyx7l+mhTFuxxxV13l1Sd5Yd25rt8CmsHSNI2Jr97l2euZhwJj4uqDM57V6i0Q2gbnEW3itelWWIzLxzXR6t0DrcabRWj596v3uX6H6XR94+jSnLJahayxvzT2Qfbd+7IFGZwmqxedy2t+zKvOeY2WPx8fF5SgS8Lc5c/QvTBpCNMO9eCUO7hFZdwo659zDBjql6xEmm/to33/f7TiZB5FKZ3YZBPdDy78Xb4v0UIvk0bDbFZ3uhry9bWZmW0YO03lmqx4PMakKZef07L9y7mQ2glMrsdvLqQXqnj1+/ftVzwfvZ9+ZcTp0vRVVNOmHf57TYTLM9+m6vUTHJZlbMVtiavS3MOwZ5jiMdBRe9Gp7I7V2z7/073rK5RvVgJlPlRyqz2zCoxzjpUnC223V7/5R8x5J6z+5o2VyjmnvumQRiHlERtWY7n/RUmBOcnpzUaluxd9braKfFmN79vr1GNTPuf4xMSTev2zCoL9Df84xvsTjusDZTWB27nlaB027Zlzkqzj6SZ6HM7sJWX5r5hngiM8X6eYlQjJ+CxzmV9xny8w80Mh85g13xKpN5U5gzft+uORarWVtPX6yRpTpKabXxG112vvDF3N96I/NL/H1rxjlZV+MOsoWZgE8z8MhKndzo5fzW/okZl8xapr812+3k1YW5nnGIPrJ6/j2dB8YU6ogqrRyz7uU73w5j1itlvkoD37SrL9xWUWHecFxUL2vqiEINV3qz1903G4v21855yqy7eV6Z3YZBPTvNuKiH82acjpt8w88wRVOii06ruv2Nc86ysm7edWHOOsKRmDPNZ12nwXNvcJFuPj57X4POt2M952feSmRejbNSXZh9jgvqqeBCld7R5u38pXlPcFtBBPrQH+dc/YIpqRtK5dWVFjBKZufnZ53DRG9QvBrn7P2Cyai3SMFGQ7uB3R9dz/nxTAPI12fvNAyq2Qf4ALLF+SQTMvPKjXZ/6by7fiPT12fvfIz5B/gwRi2mkoU0WmFKXgjeaRgkUZg9zJY3cCn11GjP/bwf5tUvM+8NdNrbmEo4Kq2LVH4udZZo90sxdwPbL/O6MIGOJWHU825QkVqM9n527p2iaQd8DcrsNAwKzGNJENnxDHM9Ww7idjn7gmTm0ME++64/UtxjSQhZ4LRbtd/2DrPvFI3MVUBhRryNOTdm2i3ls+5NZGn+BrY3z94vzESOJQGc2wzht2EifO+NpSGXh35hrmcfoAYuNRpitIzwvffJLH94YbZki8+QWTfCzQhfa/abhdnjvDPyN41i3FjytWbzbmEm2S8YgcmTeUq0WkcY18uwzH2vMJFuYz6ayzJqXy+juKwbQAN99n5h/qBjiQyzjFoaDNs/cb71Rqa7m7frF2aUEWrnpkS31XukoQzLXPYKcx1pjABkp1W0vlIf0Raj5ZDMfmH+5GOJCPNQzCLmtsIsil8umQcWJhSDrxrpFiaPJfoZas1+9wqTxxL1DHXzym5h8liinmxAZq8weSzRz5DMnIWJhWnNOvrs+25h8lgCwItb5rJbmOvYAyV+3K3ZHQsTDbfMbmHqfhqTnHF387qFyX4BBE6Zh05h8jYmBrlLZqcweSwBwfV+9u9uYcYeJJGxdfTZy05hrmMPksjY2vvs+05h8lgCQuaQmbMw8Xi2t2Z3ncLksQSFF7vMZacweSxBwd6a7RRm8k9jJoTp5t1GoA9tYfJYgoNdZqcw2S/AYWnrs3cKk8cSIHKbzPY1mzyWIGH7X2d+szAxscnMWZiYbG/77HsWJiiWPvuShYmJpTW7awuTjTwonm9ltoXJ4A8WltYsCxOV1xuZBxYmKrcym8Jkhx2Nm9Zs0zBgIg+O5bXMkoUJy3Vrds/CxOW6m5c3hclbX3Bs+zI7hRl7ZCSYK5lLFiYuWb/PvmNhApP1++yHpjDXsUdGgnnuy2wKk7e+AHnp9dlZmND0u3klCxOZnsxvFiY0y67MS8OAt74wMf4uDyfsm8JkIw+SvNNnZ2GCU7Z99h0LE5xON+/SyeNbZVHpyLwUZsHCxCRrZV4aBrwnjUqnz34pTHbYUXluZF4aBrz1BctL02cvWZjovF767HsWJjxNazZnYcJzac02hbmOPSIymktr9twwqHjrC5jyJHPHwkyA8tRnZ2GmwPbUZ2dhJkB2knlgYSbAuTV7if6sY4+H3EHdzfv33MmreOsLmlNr9pIw4K0vaOoG0AcLMwlety18HBOcZUcm70mDs2RhpkPeumRhotP+H6V56wuedpblPWl4WJgJ0bhkYcKTXWSyw47P80XmOvZIyN28sDDT4YWFmQ6vLMx0eGVhpsOpNctbX0mQ8550OpQszHRgYSYECzMheE86HTLe+kqHZ976SocXFmY6vLIw0+GVhZkOSxZmOuTr2CMgk1HEHgCZjnXsARBCCCGEEEKQ+T9vkotQ3twqQwAAAABJRU5ErkJggg==",alt:"speechBubble"}),Object(h.jsx)("div",{class:"kleptySays",children:Object(h.jsx)("p",{children:i})}),Object(h.jsx)("div",{class:"options",children:a})]})]})}}]),n}(o.Component),x=n(12),j=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"onChange",value:function(e){console.log("Captcha value:",e)}},{key:"render",value:function(){return Object(h.jsx)(x.a,{sitekey:"6Ldl24AaAAAAAKCkfzjpIcTDSkgf7ILJ0vE2deRm",onChange:this.onChange})}}]),n}(o.Component),k=n.p+"static/media/bankImage.d3285f40.jpg",b=n.p+"static/media/initHeroImg2.1268b583.jpg",f=n.p+"static/media/mad_desk.f02a8fd1.jpg",Z=n.p+"static/media/happy_desk.b30e6070.jpg",v=n.p+"static/media/bank_fustrated.a99bb14b.jpg",M=n.p+"static/media/bank_money.827840e2.jpg",T=n.p+"static/media/bank_safe.c21a2f49.jpg",D=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var o=arguments.length,s=new Array(o),a=0;a<o;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={hero:"",heroTitle:"",heroDesc:"",buttonTxt:"",contentNum:0,images:[],text:[],level:0,showKlepty:!1,showLogin:!1,username:"",password:""},e.startKlepty=function(t){var n=e.state,o=n.showKlepty,s=n.level;0==o&&0==s&&(window.confirm("Warning: You may regret this decision")?(window.alert("Ok well... We are not liable for anything that happens"),e.setState((function(e,t){return{showKlepty:!0}}))):window.alert("Good choice! You're probably not cut out for this anyways"))},e.showLogin=function(t){e.setState((function(e,t){return{showLogin:!0}}))},e}return Object(l.a)(n,[{key:"setStateValues",value:function(e){var t,n,o,s;switch(e){case 0:t=y.landing,n=b,o=[f,Z],s=0;break;case 1:t=y.bank,n=k,o=[v,M,T],s=1;break;default:t=y.landing,n=b,o=[f,Z],s=0}for(var a=t.heroTitle,i=t.heroDesc,r=t.contentNum,l=t.buttonTxt,c=[],u=0;u<r;u++){var h="content".concat(u);c.push(t[h])}return this.setState((function(e,t){return{hero:n,heroTitle:a,heroDesc:i,buttonTxt:l,contentNum:r,images:o,text:c,level:s}})),0}},{key:"componentWillUnmount",value:function(){}},{key:"componentDidMount",value:function(){this.setStateValues(0)}},{key:"componentWillMount",value:function(){}},{key:"adClicked",value:function(){this.state.showKlepty&&this.setStateValues(1)}},{key:"setUsername",value:function(e){this.setState((function(t,n){return{username:e}}))}},{key:"setPassword",value:function(e){this.setState((function(t,n){return{password:e}}))}},{key:"signIn",value:function(e){var t=this.state,n=t.username,o=t.password;"US.Gov"==n&&"BigMoney123!"==o&&this.setState((function(e,t){return{level:2,showLogin:!1}}))}},{key:"render",value:function(){var e,t=this,n=this.state,o=n.hero,s=n.heroTitle,a=n.heroDesc,i=n.contentNum,r=n.images,l=n.text,c=n.showKlepty,u=n.showLogin,g=n.level,x=n.buttonTxt,b=[];if(i>0&&g<2)for(var f=0;f<i;f++){var Z=f%2,v="content".concat(f);b.push(Object(h.jsx)(m,{format:Z,img:r[f],title:l[f].key,desc:l[f].val},v))}c&&(e=Object(h.jsx)(d,{level:g}));var M,T,D=y.landing.ad_txt[Math.floor(3*Math.random())],O=this.showLogin;return 0==g&&(M=Object(h.jsxs)("div",{class:"rightSidebarDiv",onClick:function(){return t.adClicked()},children:[" ",Object(h.jsx)("img",{class:"ad",src:k})," ",Object(h.jsxs)("p",{class:"ad_txt",children:[" ",D," "]})," "]}),O=this.startKlepty),u&&g<2&&(T=Object(h.jsxs)("div",{class:"loginContainer",children:[Object(h.jsx)("label",{for:"uname",children:Object(h.jsx)("b",{children:"Username"})}),Object(h.jsx)("input",{onChange:function(e){return t.setUsername(e.target.value)},type:"text",placeholder:"Enter Username",name:"uname",required:!0}),Object(h.jsx)("label",{for:"psw",children:Object(h.jsx)("b",{children:"Password"})}),Object(h.jsx)("input",{onChange:function(e){return t.setPassword(e.target.value)},type:"password",placeholder:"Enter Password",name:"psw",required:!0}),Object(h.jsx)("button",{onClick:function(e){return t.signIn(e)},type:"submit",children:"Login"})]})),g>=2&&(b.push(Object(h.jsx)("h1",{class:"center",children:"Hello Customer. Please prove you are human with the below Captcha"})),b.push(Object(h.jsx)("h1",{class:"center",children:"Hello Customer. Please prove you are human with the below Captcha"}))),Object(h.jsxs)("div",{className:"main",children:[Object(h.jsx)(p,{level:g,buttonTxt:x,title:s,desc:a,img:o,func:O}),Object(h.jsxs)("div",{className:"mainBody",children:[Object(h.jsx)(j,{}),T,b]}),Object(h.jsx)("div",{className:"leftSidebar",children:e}),Object(h.jsx)("div",{className:"rightSidebar",children:M})]})}}]),n}(o.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),s(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(D,{})}),document.getElementById("root")),O()},3:function(e){e.exports=JSON.parse('{"landing":{"heroImg":"./resources/initHeroImg2.jpg","heroTitle":"Earn More","heroDesc":"The Easy Way","buttonTxt":"Learn More","contentNum":2,"content0":{"key":"Tired of Working?","val":"Working a 9 to 5? Tired of having to earn a living? Tired of being subject to a ratrace that you did not agree to? Well look no further!"},"content1":{"key":"Make More Doing Less","val":"Don\'t work for your money, just let someone else do the work for you! Get all of the benefits of being upper management with slightly less work and slightly more stealing! Click the *Learn More* button above for more info"},"ad_txt":["Got money? We want it!","Big Money Needs Big Banks","Plz Gimmie your $$$"]},"bank":{"heroImg":"./resources/bankImage.jpg","heroTitle":"Bank & CO","heroDesc":"Centralized and Privatized","buttonTxt":"Sign In","contentNum":3,"content0":{"key":"Burdened By Wealth?","val":"Do you feel like you have too much money? Don\'t know where to put it? Well don\'t worry we have the solution for you!"},"content1":{"key":"Make More Doing Less","val":"Don\'t work for your money, just let someone else do the work for you! We will pay you to let us keep your money nice and safe."},"content2":{"key":"State of the Art Security","val":"Your money is safe with us. With the latest technology, we prevent any malicous activity at the source!"}},"klepty":{"dialogue0":"Hello! Are you ready to make money!","response0":[{"txt":"Who are you","nextDialogue":"dialogue00","nextResponse":"response00"},{"txt":"Gimmie money","nextDialogue":"dialogue1","nextResponse":"response1"}],"dialogue00":"I\'m Klepty silly. What, are you a cop or something?","response00":[{"txt":"What\'s it to you","nextDialogue":"dialogue10","nextResponse":"responseStop"},{"txt":"No","nextDialogue":"dialogue1","nextResponse":"response1"}],"dialogue1":"Good, have you ever heard of identity theft?","response1":[{"txt":"Of course","nextDialogue":"dialogue2","nextResponse":"response2"},{"txt":"No","nextDialogue":"dialogue11","nextResponse":"response11"}],"dialogue11":"It\'s like playing a game of pretend","response11":[{"txt":"Sounds fun","nextDialogue":"dialogue2","nextResponse":"response2"},{"txt":"You mean a crime","nextDialogue":"dialogue12","nextResponse":"responseStop"}],"dialogue2":"That\'s great! Does that mean I can count on you?","response2":[{"txt":"Sure","nextDialogue":"dialogue3","nextResponse":"response3"},{"txt":"That\'s vague","nextDialogue":"dialogue20","nextResponse":"response20"}],"dialogue20":"Vague is necessary in our line of work. You in or not?","response20":[{"txt":"I\'m in","nextDialogue":"dialogue3","nextResponse":"response3"},{"txt":"Fine","nextDialogue":"dialogue21","nextResponse":"responseStop"}],"dialogue3":"Ok, first things first, click the Ad on the right","response3":[{"txt":"What next","nextDialogue":"dialogue4","nextResponse":"response4"},{"txt":"An Ad?","nextDialogue":"dialogue30","nextResponse":"response30"}],"dialogue30":"Yes you\'re on the internet. you know what an Ad is","response30":[{"txt":"Ok whats next","nextDialogue":"dialogue4","nextResponse":"response4"}],"dialogue4":"Log In. Username: US.Gov Password: BigMoney123!","response4":[{"txt":"US.Gov? Really","nextDialogue":"dialogue40","nextResponse":"response40"}],"dialogue40":"It\'s just a username. Do you think my legal name is Klepty?","response40":[{"txt":"Fair enough","nextDialogue":"dialogue4","nextResponse":"responseStop"}],"dialogue5":"Piece of cake kid! Get through the captcha and you\'re home free. You are human right?","response5":[{"txt":"Of course","nextDialogue":"dialogue6","nextResponse":"responseStop"},{"txt":"A captcha?","nextDialogue":"dialogue50","nextResponse":"response50"}],"dialogue50":"Captchas, the greatest security known to all bot kind","response50":[{"txt":"Of course...","nextDialogue":"dialogue6","nextResponse":"responseStop"}],"dialogue6":"Work your magic kid","dialogue10":"That sounds like something a cop would say. Sorry kid you\'re done","dialogue12":"Crime is such a harsh word man. Stop ruining my vibe.","dialogue21":"I don\'t like your attitude. Come back when you fix that.","responseStop":[]}}')},8:function(e,t,n){}},[[23,1,2]]]);
//# sourceMappingURL=main.1bbfecdb.chunk.js.map