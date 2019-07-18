import { Field } from 'formik';
import { AnimatedCheckbox } from './animatedCheckbox';
import { Link } from 'react-router-dom';
import React from 'react';
import '../../css/checkbox.css';
import { PlayerModel } from '../models/teamTypes';

interface PlayerAttribute {
  key: string,
  name: string,
  value: number,
  attributeClass: string,
  icon: string
}

const Attribute = (props) => {
  const { attribute } = props;
  const cardClass = `card border-${attribute.attributeClass} shadow text-info p-3 my-card`;
  const borderClass = `card border-${attribute.attributeClass} mx-sm-1 p-3`;
  const textContainerClass = `text-${attribute.attributeClass} text-center mt-3`;
  const textClass = `text-${attribute.attributeClass} text-center mt-2`;

  return (
    <div>
      <div className={borderClass}>
        <div className={cardClass}>
          <span className={attribute.icon} aria-hidden='true'/>
        </div>
        <div className={textContainerClass}><h4>{attribute.name}</h4></div>
        <div className={textClass}>
          <h1>
            {attribute.value}
          </h1>
        </div>
      </div>
    </div>
  );
};


const renderAttribute = (attribute: PlayerAttribute) => {
  return <Attribute key={attribute.key} attribute={attribute}/>;
};

export const renderPlayer = (player: PlayerModel, index) => {
  const condition: PlayerAttribute = {
    key: `players.${index}.condition`,
    value: player.condition,
    name: 'Kondition',
    icon: 'fa fa-heart',
    attributeClass: 'info'
  };
  const technicalSkill: PlayerAttribute = {
    key: `players.${index}.technicalSkill`,
    value: player.technicalSkill,
    name: 'Technik',
    icon: 'fa fa-random',
    attributeClass: 'danger'
  };
  const speed: PlayerAttribute = {
    key: `players.${index}.speed`,
    value: player.speed,
    name: 'Speed',
    icon: 'fa fa-tachometer-alt',
    attributeClass: 'warning'
  };

  const attributes: PlayerAttribute[] = [condition, technicalSkill, speed];

  return (
    <div key={index} className='card'>
      <h5 className='card-header'>
        <Field name={`players.${index}.anwesend`} component={AnimatedCheckbox}/>
        <a data-toggle='collapse' href={'#player-' + index} aria-expanded='true'
           id={`players.${index}.collapse`} className='d-block collapsed'>
          <i className='fa fa-chevron-down pull-right'/>
          <label>{player.name}</label>
        </a>
      </h5>
      <div id={'player-' + index} className='collapse' aria-labelledby={`players.${index}.collapse`}>
        <div className='card-body'>
          <h5 className='card-title player-title'>
            <Field name={`players.${index}.anwesend`} component={AnimatedCheckbox}/>
            <Field readOnly={true} name={`players.${index}.name`}/>
          </h5>
          <div className='card-text'>
            <div className='jumbotron'>
              <div className='player-attributes-container'>
                {attributes.map(renderAttribute)}
              </div>
            </div>
          </div>
          <Link className={'btn btn-primary ml-auto'} to={`/players/${player.id}`}>Edit</Link>
        </div>
      </div>
    </div>
  );
};
