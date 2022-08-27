export function vectorHelper(selfX, selfY, tarX, tarY, vectorVal) {
    // do math
    const xDist = tarX-selfX
    const yDist = tarY-selfY
    const dist = (((xDist)**2+(yDist)**2)**(1/2))
    const ratio = vectorVal / dist
    const xv = xDist * ratio
    const yv = yDist * ratio
    // break down vector along x and y axis
    const v = {
        x: xv,
        y: yv
    }
    return v
}
export function EuDistance(x1,y1,x2,y2){
    var a = x1-x2
    var b = y1 -y2 
    return Math.sqrt(a*a+b*b)

} 
export function AStar(){
    
}
export function mapToCamX(mapX, cam) {
    return mapX - (cam.centerX-cam.width/2)
}

export function mapToCamY(mapY, cam) {
    return mapY - (cam.centerY-cam.height/2)
}

export function colArrToStr(colArr) {
    return `rgb(${colArr[0]}, ${colArr[1]}, ${colArr[2]})`
}

export function drawCircle(ctx, x, y, r, col, cam=null) {
    ctx.beginPath()
    if (cam == null) { // draw on map
        ctx.arc(x, y, r, 0, Math.PI*2, false)
    } else { // draw on camera
        ctx.arc(mapToCamX(x, cam), mapToCamY(y, cam), r, 0, Math.PI*2, false)
    }
    ctx.fillStyle = col
    ctx.fill()
}

export function drawGradientCircle(ctx, x, y, inR, ouR, inCol, ouCol, cam=null) {
    ctx.beginPath()
    let gd
    if (cam == null) {
        gd = ctx.createRadialGradient(x, y, inR, x, y, ouR)
    } else {
        gd = ctx.createRadialGradient(
            mapToCamX(x, cam), 
            mapToCamY(y, cam), 
            inR, 
            mapToCamX(x, cam), 
            mapToCamY(y, cam), 
            ouR
        )
    }
    gd.addColorStop(0, inCol)
    gd.addColorStop(1, ouCol)
    if (cam == null) {
        ctx.arc(x, y, 80, 0, Math.PI*2, false);
    } else {
        ctx.arc(mapToCamX(x, cam), mapToCamY(y, cam), ouR, 0, Math.PI*2, false);
    }
    ctx.fillStyle = gd
    ctx.fill()
}

export function drawLine(ctx, x1, y1, x2, y2, width, col, cam=null) {
    ctx.beginPath()
    if (cam == null) { // draw on map
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
    } else { // draw on camera
        ctx.moveTo(mapToCamX(x1, cam), mapToCamY(y1, cam))
        ctx.lineTo(mapToCamX(x2, cam), mapToCamY(y2, cam))
    }
    ctx.lineWidth = width
    ctx.strokeStyle = col
    ctx.stroke()
}

export function drawName(ctx, char, cam, col) {
    ctx.font = "25px Comic Sans MS"
    ctx.fillStyle = colArrToStr(col)
    ctx.textAlign = "center"
    ctx.fillText(`${char.name} (${char.col[0]})`, mapToCamX(char.x, cam), mapToCamY(char.y, cam)-char.r*1.5)
}
