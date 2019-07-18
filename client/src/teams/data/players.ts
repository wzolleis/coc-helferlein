import { PlayerModel, SkillLevel } from '../models/teamTypes';


export const DEFAULT_PLAYER: PlayerModel = {
  id: '0',
  name: '',
  anwesend: true,
  condition: SkillLevel.MEDIUM,
  speed: SkillLevel.MEDIUM,
  technicalSkill: SkillLevel.MEDIUM
};

export const stammspieler: PlayerModel[] = [
  {
    ...DEFAULT_PLAYER,
    id: '1',
    name: 'Roland',
    condition: SkillLevel.HIGH,
    speed: SkillLevel.HIGH,
    technicalSkill: SkillLevel.MEDIUM
  },
  {
    ...DEFAULT_PLAYER,
    id: '2',
    name: 'Wolfgang',
    condition: SkillLevel.MEDIUM,
    speed: SkillLevel.MEDIUM,
    technicalSkill: SkillLevel.MEDIUM
  },
  {
    ...DEFAULT_PLAYER,
    id: '3',
    name: 'Heinz',
    condition: SkillLevel.MEDIUM,
    speed: SkillLevel.MEDIUM,
    technicalSkill: SkillLevel.HIGH
  },
  {
    ...DEFAULT_PLAYER,
    id: '4',
    name: 'Rudi',
    condition: SkillLevel.MEDIUM,
    speed: SkillLevel.MEDIUM,
    technicalSkill: SkillLevel.MEDIUM
  },
  {
    ...DEFAULT_PLAYER,
    id: '5',
    name: 'Armin',
    condition: SkillLevel.LOW,
    speed: SkillLevel.LOW,
    technicalSkill: SkillLevel.LOW
  },
  {
    ...DEFAULT_PLAYER,
    id: '6',
    name: 'Josef',
    condition: SkillLevel.MEDIUM,
    speed: SkillLevel.HIGH,
    technicalSkill: SkillLevel.HIGH
  },
  {
    ...DEFAULT_PLAYER,
    id: '7',
    name: 'Uli',
    condition: SkillLevel.HIGH,
    speed: SkillLevel.HIGH,
    technicalSkill: SkillLevel.HIGH
  },
  {
    ...DEFAULT_PLAYER,
    id: '8',
    name: 'Emil',
    condition: SkillLevel.MEDIUM,
    speed: SkillLevel.LOW,
    technicalSkill: SkillLevel.MEDIUM
  },
  /*
  {
    ...DEFAULT_PLAYER,
    id: '9',
    name: 'Tobi',
    condition: SkillLevel.HIGH,
    speed: SkillLevel.HIGH,
    technicalSkill: SkillLevel.HIGH
  },
  {
    ...DEFAULT_PLAYER,
    id: '10',
    name: 'Martin',
    condition: SkillLevel.PROFI,
    speed: SkillLevel.PROFI,
    technicalSkill: SkillLevel.PROFI
  }
   */
];

export const createPlayers = () => {
  return stammspieler;
};

