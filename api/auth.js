module.exports = (req, res) => {
  if (req.query.key == '!pUpsbAcke99LP') {
    res.end(`#EXTM3U\n#EXT-X-VERSION:3\n#EXT-X-MEDIA-SEQUENCE:0\n#EXT-X-ALLOW-CACHE:YES\n#EXT-X-TARGETDURATION:7\n#EXTINF:6.600000,\nhttps://schoeller.now.sh/output/aP7vLxG_460svvp9.webm_00000.ts\n#EXT-X-ENDLIST`);
  } else {
    res.status(403).end('Incorrect password.');
  }
}
