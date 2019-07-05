let intervalID

function changeSection(section) {
  var sectionNames = [".index", ".listening", ".result"]
  document.querySelector(sectionNames[section]).style.opacity = 1;

  document.querySelector('.index').style.zIndex = 5
  document.querySelector('.listening').style.zIndex = 5
  document.querySelector('.result').style.zIndex = 5


  document.querySelector(sectionNames[section]).style.zIndex = 11
}

document.querySelector("#explore-other").onclick = function () {
  changeSection(0)
}

changeSection(0)
// document.querySelector("#track").innerHTML = "data.identify"

const recorder = RecorderManager.create()

recordButton.disabled = false

recordButton.onclick = () => {

  changeSection(1)

  intervalID = setInterval(function () {
    var randomFactor = Math.random() * 2
    document.querySelector(".c1").style.transform = `scale(${randomFactor})`
    document.querySelector(".c2").style.transform = `scale(${randomFactor + 0.3})`
    document.querySelector(".c3").style.transform = `scale(${randomFactor + 0.6})`
  }, 800)

  recorder
    .start()
    .then(() => {
      console.log("Started recording")
      // TODO - start recording animation
    })
    .catch(e => console.log('Error:', e))


  setTimeout(() => {
    recorder
      .stop()
      .then(({ url, blob }) => {
        // TODO - stop recording animation
        console.log(`Done! stopped recording. ${url}`)
        console.log(`Identifying song....`)
        return uploadToCloudIdentifier(blob)
      })
      .then(data => {
        changeSection(2)
        document.querySelector("#track").innerHTML = data.identify
        console.log(`Identified Song -> "${data.identify}"`)

        setTimeout(() => {
          clearInterval(intervalID)
        })
      })
      .catch(e => console.log('Error:', e))
  }, 7000)
}


