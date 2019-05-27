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
  teams: TeamModel[]
  diff: number,
  home: () => TeamModel,
  away: () => TeamModel
}

export interface TeamModel {
  overallSkill: number,
  players: PlayerModel[],
}

export interface TeamState {
  players: PlayerModel[] // alle Spieler
}