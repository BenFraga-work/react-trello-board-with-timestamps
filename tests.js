const DAY = 86400000
const HOUR = 3600000
const MINUTE = 60000
const SECOND = 1000

function timeformat(timee) {
  let ftime = "";
  let past = false;
  if (timee < 0) {timee = 0-timee; past = true};
  if (timee/DAY > 1) {ftime += Math.floor(timee/DAY) + 'd';};
  let ttime = timee%DAY;
  if (ttime/HOUR > 1) {ftime += Math.floor(ttime/HOUR) + 'h';};
  ttime = ttime%HOUR;
  if (ttime/MINUTE > 1) {ftime += Math.floor(ttime/MINUTE) + 'm';};
  ttime = ttime%MINUTE;
  ftime += Math.floor(ttime/SECOND) + 's '+ ["until","past"][Number(past)] + ' deadline';
  return ftime;
};

const COLOR_OK = '#88ff88'
const COLOR_WARN = '#ffff88'
const COLOR_OVERDUE = '#ff8888'

function getcolorfromtime(timee) {return {background: [COLOR_OVERDUE, COLOR_WARN, COLOR_OK][Number(timee > Date.now()) + Number(timee - DAY > Date.now())]}}

module.exports = [timeformat, getcolorfromtime]