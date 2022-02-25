var frames = []
frames[frames.length] = `

`

var fps = 60, current = 0

var render = () => {
    
    process.stdout.write(frames[current++])
}
setInterval(render, 1000 / fps)
