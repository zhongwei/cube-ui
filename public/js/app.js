var TagObjList = []

for (let tag of tagsData) {
  let tagObj = {}
  tagObj.id = tag[0]
  tagObj.name = tag[1]
  tagObj.color = tag[2]

  TagObjList.push(tagObj)
}

var VideoList = []

for (let videoItem of VideoSummary) {
  let videoAlbum = {}
  videoAlbum.sn = videoItem[0]
  videoAlbum.episode = videoItem[1]
  videoAlbum.rate = videoItem[2]
  videoAlbum.no = videoItem[3]
  videoAlbum.name = videoItem[4]
  videoAlbum.actors = videoItem[5].split(',')
  videoAlbum.tags = videoItem[6].split(',')
  videoAlbum.desc = VideoDetail[videoAlbum.no]
  videoAlbum.cover = '/data/albums/' + videoAlbum.sn + '/0'

  VideoList.push(videoAlbum)
}

console.log("I'm here!")
