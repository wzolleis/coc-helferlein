export enum SkillLevel {
  PROFI = 200, HIGH = 100, MEDIUM = 50, LOW = 20
}

export interface PlayerModel {
  id: string,
  name: string
  speed: number
  technicalSkill: number
  condition: number,
  anwesend: boolean
}

export interface MatchModel {
  team1: TeamModel
  team2: TeamModel
}

export interface TeamModel {
  overall: number,
  players: PlayerModel[]
}

export interface PlayerSkill {
  skill: number
}

export interface TeamState {
  players: PlayerModel[] // alle Spieler
}