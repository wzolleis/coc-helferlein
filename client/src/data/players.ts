import { PlayerCondition, PlayerModel, PlayerSpeed, PlayerTechnicalSkill } from '../app/teamTypes';


const DEFAULT_PLAYER: PlayerModel = {
  id: '0',
  name: '',
  anwesend: false,
  condition: PlayerCondition.MEDIUM,
  speed: PlayerSpeed.MEDIUM,
  techicalSkill: PlayerTechnicalSkill.MEDIUM
};

export const stammspieler: PlayerModel[] = [
  {
    ...DEFAULT_PLAYER,
    id: '1',
    name: 'Roland',
    condition: PlayerCondition.HIGH,
    speed: PlayerSpeed.HIGH,
    techicalSkill: PlayerTechnicalSkill.MEDIUM
  },
  {
    ...DEFAULT_PLAYER,
    id: '2',
    name: 'Wolfgang',
    condition: PlayerCondition.MEDIUM,
    speed: PlayerSpeed.MEDIUM,
    techicalSkill: PlayerTechnicalSkill.MEDIUM
  },
  {
    ...DEFAULT_PLAYER,
    id: '3',
    name: 'Heinz',
    condition: PlayerCondition.MEDIUM,
    speed: PlayerSpeed.MEDIUM,
    techicalSkill: PlayerTechnicalSkill.HIGH
  },
  {
    ...DEFAULT_PLAYER,
    id: '4',
    name: 'Rudi',
    condition: PlayerCondition.MEDIUM,
    speed: PlayerSpeed.MEDIUM,
    techicalSkill: PlayerTechnicalSkill.MEDIUM
  },
  {
    ...DEFAULT_PLAYER,
    id: '5',
    name: 'Armin',
    condition: PlayerCondition.LOW,
    speed: PlayerSpeed.LOW,
    techicalSkill: PlayerTechnicalSkill.LOW
  },
  {
    ...DEFAULT_PLAYER,
    id: '6',
    name: 'Josef',
    condition: PlayerCondition.MEDIUM,
    speed: PlayerSpeed.HIGH,
    techicalSkill: PlayerTechnicalSkill.HIGH
  },
  {
    ...DEFAULT_PLAYER,
    id: '7',
    name: 'Uli',
    condition: PlayerCondition.HIGH,
    speed: PlayerSpeed.HIGH,
    techicalSkill: PlayerTechnicalSkill.HIGH
  },
  {
    ...DEFAULT_PLAYER,
    id: '8',
    name: 'Emil',
    condition: PlayerCondition.MEDIUM,
    speed: PlayerSpeed.LOW,
    techicalSkill: PlayerTechnicalSkill.MEDIUM
  }
];

export const createPlayers = () => {
  const gaeste: PlayerModel[] = [];
  // Gastspieler hinzufuegen
  for (let i = 1; i < 5; i++) {
    gaeste.push(
      {
        ...DEFAULT_PLAYER,
        name: `Gast ${i}`,
        id: `${i}`,
        speed: PlayerSpeed.MEDIUM,
        condition: PlayerCondition.MEDIUM,
        techicalSkill: PlayerTechnicalSkill.MEDIUM
      }
    );
  }

  return stammspieler.concat(gaeste);
};

