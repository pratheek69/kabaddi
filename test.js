var _0xc41e = [
  "",
  "split",
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/",
  "slice",
  "indexOf",
  "",
  "",
  ".",
  "pow",
  "reduce",
  "reverse",
  "0",
];
function _0xe71c(w, G, N) {
  for (
    var s = _0xc41e[2][_0xc41e[1]](_0xc41e[0]),
      m = s[_0xc41e[3]](0, G),
      a = s[_0xc41e[3]](0, N),
      e = w[_0xc41e[1]](_0xc41e[0])
        [_0xc41e[10]]()
        [_0xc41e[9]](function (w, N, s) {
          if (-1 !== m[_0xc41e[4]](N))
            return w + m[_0xc41e[4]](N) * Math[_0xc41e[8]](G, s);
        }, 0),
      c = _0xc41e[0];
    e > 0;

  )
    (c = a[e % N] + c), (e = (e - (e % N)) / N);
  return c || _0xc41e[11];
}
eval(
  (function (w, G, N, s, m, a) {
    a = "";
    for (var e = 0, c = w.length; e < c; e++) {
      for (var r = ""; w[e] !== N[5]; ) (r += w[e]), e++;
      for (var x = 0; x < N.length; x++)
        r = r.replace(new RegExp(N[x], "g"), x);
      a += String.fromCharCode(_0xe71c(r, 5, 10) - 48);
    }
    var test= decodeURIComponent(escape(a));
    console.log(test);
  })
  (
    "wwsNGwwmaGwwasGwwwwGwsNsGwwmNGwsNNGwwaaGmamGmwaGwwsNGwwmaGwwasGwwwwGwsNsGwwmNGwsNNGwwaaGNmwGwwsmGwwmwGmwaGmaNGmmNGwwamGwsNNGwwaNGwwmsGwwasGmamGwwNwGmwsGwwssGwwsmGwwwwGwsNNGNwwGmwsGmwaGwwsaGwwaNGwwaNGwwasGwwamGNwwGmNsGmNsGwsNwGwwasGwwasGwwaaGwwwNGwsNmGNswGwwwwGwwsmGwwwmGwsNNGwsNsGwwaaGmmNGwsNsGwwwsGwsNsGwwwaGwsNsGwwsmGwwNsGwsNNGwsNmGmmNGwwwmGwsNNGwwaNGmNsGwsNwGwwasGwwwsGmmmGwwaNGwwmwGmNsGwwsmGwwaaGwsNmGwsNNGwwaNGwwwNGwsmmGwsNaGwwwNGwwwaGwsmmGNmsGwwsaGwsNsGwwwmGwwwmGwsNNGwwwwGwsmmGmNmGNswGmNaGmNsGwwwNGwwmsGwwaNGwwasGwwmsGwwaNGmNsGwwwaGwsNsGwwwmGwwsmGwwssGwsNNGwwamGwwaNGmmNGwwwaGwwasGwsNmGmwaGmmaGmwsGwwasGwwwNGwwamGwwsmGwwaNGwwsmGwwwNGwwwmGNwwGmwsGmaaGwsNwGwwwNGwwaNGwwaNGwwwNGwwwaGmaaGmmaGmwsGwwaNGwwmNGwwasGwsNNGNwwGmwsGmwaGwsNmGwsNsGwwamGwwsaGmwaGmmaGmwsGwsNmGwwaaGwwwaGNwwGmwsGwwNwGmwsGmwaGwsNaGwwwwGwsNNGwsNsGwwaaGwwwsGwsNNGwwmNGmwaGNwwGmwsGwwNwGmwsGmwaGwwwsGwsNNGwwmNGNNwGwsNmGmwaGNwwGmwsGmwaGwsNwGwsNaGNswGwsNNGwsNsGNwsGNswGmNmGNsaGNwsGNsNGNswGNswGmNNGwsNmGwsNsGwsNsGwsNwGwsNsGNsNGNswGNsmGNsNGNsmGmNwGmNwGmNaGwsNmGNsaGmNwGNwsGmNNGmwaGmmaGmwsGmwaGwwwsGwsNNGwwmNGmwaGNwwGmwsGmwaGmNmGwwssGNsmGwsNsGwwssGmNNGwwssGmNNGNssGmNmGwsNNGwsNwGNsaGNwsGmNwGNsNGNswGNsaGwsNNGwsNmGmNwGwsNNGNwsGwsNwGNsaGNssGNwsGNssGwsNwGNsNGwsNNGNssGmwaGmwsGwwNmGmwsGwwNmGawmGwwNmGmaNGNwaGmwsGwwsmGwwssGmwsGmamGwsNaGwwwNGwwwmGwwssGwwsmGwwaaGwwwaGmamGmwaGNNaGwwwNGwwsmGwwwmGmwsGwssaGwwmsGwwaaGmwsGwswaGwsNNGwwwwGwsNNGwwswGwwaaGwsNsGwwwaGmwsGNmsGwwsaGwsNsGwwwmGwwwmGwsNNGwwwwGmwsGNaaGwsNaGwwaaGwwsmGwsNaGwsmmGwwamGwwaNGwwaaGwsNNGwsNsGwwwaGwwsmGwwwmGwwswGmwaGmaNGmwsGNwNGNwNGmwsGwwaNGwwaaGwwmsGwsNNGmaNGmwsGwwNwGmwsGwwmaGwwsmGwwwmGwsNmGwwwNGwwmaGmmNGwwwNGwwasGwsNNGwwwmGmamGmwaGwwsaGwwaNGwwaNGwwasGwwamGNwwGmNsGmNsGwwaNGwsNNGwwwwGwsNNGwwswGwwaaGwsNsGwwwaGmmNGwwwaGwsNNGmNsGwsNaGwwaaGwwsmGwsNaGwsmmGwwamGwwaNGwwaaGwsNNGwsNsGwwwaGwwsmGwwwmGwwswGmNsGmwaGmmaGmwsGmaaGwsmmGwsNwGwwwwGwsNsGwwwmGwwwsGmaaGmaNGNwaGmwsGwwNmGawmG",
    0,
    "swamNGBdo",
    0,
    0,
    42
  )
);
{/* <script>jwplayer("jwplayerDiv").setup({ file: "https://bpprod5linear.akamaized.net/bpk-tv/irdeto_com_Channel_251/output/manifest.mpd", position: 'bottom', type: "dash", drm: { "clearkey": { "keyId": "bc5ea952698553daaba85787001d6093", "key": "2f7af3f342eb690856ed0e9b6494b8e4" } } }); if (confirm("Join Our Telegram Channel @cric_streaming") == true) { window.open("https://telegram.me/cric_streaming/", '_blank'); }</script> */}
