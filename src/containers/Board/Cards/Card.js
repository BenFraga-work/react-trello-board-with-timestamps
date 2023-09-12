import React, { PropTypes } from 'react';

const propTypes = {
  item: PropTypes.object.isRequired,
  style: PropTypes.object
};

const galPng = require('../../../assets/images/gal.png');
const delPng = require('../../../assets/images/del.png');

function timeformat(timee) {
  let ftime = "";
  let past = false;
  if (timee < 0) {timee = 0-timee; past = true}
  if (timee/86400000 > 1) {ftime += Math.floor(timee/86400000) + 'd';};
  let ttime = timee%86400000;
  if (ttime/3600000 > 1) {ftime += Math.floor(ttime/3600000) + 'h';};
  ttime = ttime%3600000;
  if (ttime/60000 > 1) {ftime += Math.floor(ttime/60000) + 'm';};
  ttime = ttime%60000;
  ftime += Math.floor(ttime/1000) + 's '+ ["until","past"][Number(past)] + ' deadline';
  return ftime;
};
function test(tests) {return tests}

const Card = (props) => {
  const { style, item } = props;
  let styledate = {background: ['#ff8888','#ffff88','#88ff88'][Number(item.timedue > Date.now()) + Number(item.timedue - 86400000 > Date.now())]}
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
