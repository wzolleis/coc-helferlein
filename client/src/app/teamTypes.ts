export enum PlayerSpeed {
  HIGH = 100, MEDIUM = 50, LOW = 20
}

export enum PlayerTechnicalSkill {
  HIGH = 100, MEDIUM = 50, LOW = 20
}

export enum PlayerCondition {
  HIGH = 100, MEDIUM = 50, LOW = 20
}

export interface PlayerModel {
  id: string,
  name: string
  speed: PlayerSpeed
  techicalSkill: PlayerTechnicalSkill
  condition: PlayerCondition,
  anwesend: boolean
}

export interface PlayerSkill {
  skill: number
}

export interface TeamState {
  players: PlayerModel[]
}