import React, { PropTypes } from 'react';

const propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object
};

const galPng = require('../../../assets/images/gal.png');
const delPng = require('../../../assets/images/del.png');

const DAY = 86400000;
const HOUR = 3600000;
const MINUTE = 60000;
const SECOND = 1000;

export function timeformat(timee) {
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

const COLOR_OK = '#88ff88';
const COLOR_WARN = '#ffff88';
const COLOR_OVERDUE = '#ff8888';

export function getcolorfromtime(timee) {return {background: [COLOR_OVERDUE, COLOR_WARN, COLOR_OK][Number(timee > Date.now()) + Number(timee - DAY > Date.now())]}}

const Card = (props) => {
  const { style, item } = props;
  let styledate = getcolorfromtime(item.timedue)
  return (
    <div style={style} className="item" id={style ? item.id : null}>
      <div className="item-name">{item.title}</div>
      <div className="item-container">
        <div className="item-avatar-wrap">
          <img src={`https://randomuser.me/api/portraits/med/men/${item.id}.jpg`} alt="" />
        </div>
        <div className="item-content">
          <div className="item-author">{`${item.firstName} ${item.lastName}`}</div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, banditos.</p>
        </div>
      </div>
      <div className="item-deadline" style={styledate}>
        <p>{timeformat(item.timedue-Date.now())}</p> {/*String(new Date(item.timedue)).split(' ').slice(0,5).join(' ') /n this is the worst way to do comments*/}
      </div>
      <div className="item-perfomers">
        <div className="add-perfomers">
          <a href="#"><img src={galPng} alt="Add perfomers" /></a>
          <div className="perfomer">
            <img
              src={`https://randomuser.me/api/portraits/thumb/men/${item.id + 1}.jpg`}
              alt="Perfomer"
            />
          </div>
          <div className="perfomer">
            <img
              src={`https://randomuser.me/api/portraits/thumb/men/${item.id + 2}.jpg`}
              alt="Perfomer"
            />
          </div>
          <div className="perfomer">
            <img
              src={`https://randomuser.me/api/portraits/thumb/men/${item.id + 3}.jpg`}
              alt="Perfomer"
            />
          </div>
        </div>
        <div className="delete-perfomers">
          <a href="#"><img src={delPng} alt="Delete perfomers" /></a>
          <div className="perfomer">
            <img
              src={`https://randomuser.me/api/portraits/thumb/men/${item.id + 4}.jpg`}
              alt="Perfomer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = propTypes;

export default Card;
