module.exports = (req, res) => {
  res.end(`#EXTM3U
#EXT-X-VERSION:3
#EXT-X-MEDIA-SEQUENCE:0
#EXT-X-ALLOW-CACHE:YES
#EXT-X-TARGETDURATION:7
#EXTINF:6.600000,
https://schoeller.now.sh/output/aP7vLxG_460svvp9.webm_00000.ts
#EXT-X-ENDLIST`);
}
