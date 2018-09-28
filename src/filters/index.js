
// 
const restTime = value => {
  let time = new Date(value).getTime() - new Date().getTime()
  if(time < 0) {
    return '已截止'
  }
  let s = time / 1000
  let days = parseInt(s / 3600 / 24)
  let hours = parseInt(s / 3600) % 24
  let mins = parseInt(s / 60) % 60
  let seconds = s % 60
  return `${days}天${hours}小时${mins}分`
}

const changeToColumn = value => {
  return (value / 8400).toFixed(2)
}

export default {
  restTime,
  changeToColumn
}