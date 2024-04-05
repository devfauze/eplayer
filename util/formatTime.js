export function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainSeconds = Math.floor(seconds % 60)

    const formatMinutes = String(minutes).padStart(2, "0")
    const formatSeconds = String(remainSeconds).padStart(2, "0")

    return `${formatMinutes}:${formatSeconds}`

}