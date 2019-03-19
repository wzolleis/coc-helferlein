import { PlayerCondition, PlayerModel, PlayerSpeed, PlayerTechnicalSkill } from '../app/teamTypes';


const DEFAULT_PLAYER: PlayerModel = {
  id: '0',
  name: '',
  anwesend: false,
  condition: PlayerCondition.MEDIUM,
  speed: PlayerSpeed.MEDIUM,
  technicalSkill: PlayerTechnicalSkill.MEDIUM
};

export const stammspieler: PlayerModel[] = [
  {
    ...DEFAULT_PLAYER,
    id: '1',
    name: 'Roland',
    condition: PlayerCondition.HIGH,
    speed: PlayerSpeed.HIGH,
    technicalSkill: PlayerTechnicalSkill.MEDIUM
  },
  {
    ...DEFAULT_PLAYER,
    id: '2',
    name: 'Wolfgang',
    condition: PlayerCondition.MEDIUM,
    speed: PlayerSpeed.MEDIUM,
    technicalSkill: PlayerTechnicalSkill.MEDIUM
  },
  {
    ...DEFAULT_PLAYER,
    id: '3',
    name: 'Heinz',
    condition: PlayerCondition.MEDIUM,
    speed: PlayerSpeed.MEDIUM,
    technicalSkill: PlayerTechnicalSkill.HIGH
  },
  {
    ...DEFAULT_PLAYER,
    id: '4',
    name: 'Rudi',
    condition: PlayerCondition.MEDIUM,
    speed: PlayerSpeed.MEDIUM,
    technicalSkill: PlayerTechnicalSkill.MEDIUM
  },
  {
    ...DEFAULT_PLAYER,
    id: '5',
    name: 'Armin',
    condition: PlayerCondition.LOW,
    speed: PlayerSpeed.LOW,
    technicalSkill: PlayerTechnicalSkill.LOW
  },
  {
    ...DEFAULT_PLAYER,
    id: '6',
    name: 'Josef',
    condition: PlayerCondition.MEDIUM,
    speed: PlayerSpeed.HIGH,
    technicalSkill: PlayerTechnicalSkill.HIGH
  },
  {
    ...DEFAULT_PLAYER,
    id: '7',
    name: 'Uli',
    condition: PlayerCondition.HIGH,
    speed: PlayerSpeed.HIGH,
    technicalSkill: PlayerTechnicalSkill.HIGH
  },
  {
    ...DEFAULT_PLAYER,
    id: '8',
    name: 'Emil',
    condition: PlayerCondition.MEDIUM,
    speed: PlayerSpeed.LOW,
    technicalSkill: PlayerTechnicalSkill.MEDIUM
  }
];

export const createPlayers = () => {
  return stammspieler;
};

