
const recorder = RecorderManager.create()

recordButton.disabled = false

recordButton.onclick = () => {

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
        console.log(`Identified Song -> "${data.identify}"`)
      })
      .catch(e => console.log('Error:', e))
  }, 7000)
}


