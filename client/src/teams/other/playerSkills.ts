import { PlayerModel, PlayerSkill } from '../models/teamTypes';

export const calculateSkill = (player: PlayerModel): PlayerSkill => {
  const skill = player.condition + player.speed + player.technicalSkill;
  return { skill };
};