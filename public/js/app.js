var TagObjList = []

for (let tag of tagsData) {
  let tagObj = {}
  tagObj.id = tag[0]
  tagObj.name = tag[1]
  tagObj.color = tag[2]

  TagObjList.push(tagObj)
}

var VideoList = []

var serialNo = 1
for (let videoItem of VideoSummary) {
  let videoAlbum = {}
  videoAlbum.sn = serialNo
  serialNo =  serialNo + 1
  videoAlbum.rate = videoItem[0]
  videoAlbum.no = videoItem[1]
  videoAlbum.episodeDesc = VideoEpisodes[videoAlbum.no]
  videoAlbum.name = videoItem[2]
  videoAlbum.actors = videoItem[3].split(',')
  videoAlbum.tags = videoItem[4].split(',')
  videoAlbum.desc = VideoDetail[videoAlbum.no]
  videoAlbum.cover = '/data/albums/' + videoAlbum.sn + '/0'

  const episodeList = []

  videoAlbum.episodeDesc.forEach((item, index) => {
    const episodeItem = {}
    const episodeIndex = index + 1
    episodeItem.videoURL = '/data/albums/' + videoAlbum.sn + '/' + episodeIndex
    episodeItem.desc = item
    episodeList.push(episodeItem)
  })

  videoAlbum.episodeList = episodeList

  VideoList.push(videoAlbum)
}

console.log("I'm here!")
