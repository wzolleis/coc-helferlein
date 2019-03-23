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
  speed: number
  technicalSkill: number
  condition: number,
  anwesend: boolean
}

export interface Team {
  overallSkill: number,
  players: PlayerModel[]
}

export interface Match {
  teams: Team[]
  diff: number
}

export interface TeamState {
  players: PlayerModel[]
}