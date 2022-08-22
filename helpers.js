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