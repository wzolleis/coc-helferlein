/**
 * @param {*[]} comboOptions
 * @param {number} comboLength
 * @return {*[]}
 */
import { PlayerModel } from '../app/teamTypes';

export default function combineWithoutRepetitions(comboOptions: PlayerModel[], comboLength: number): PlayerModel[][] {
  // If the length of the combination is 1 then each element of the original array
  // is a combination itself.
  if (comboLength === 1) {
    return comboOptions.map(comboOption => [comboOption]);
  }

  // Init combinations array.
  const combos: PlayerModel[][] = [];

  // Extract characters one by one and concatenate them to combinations of smaller lengths.
  // We need to extract them because we don't want to have repetitions after concatenation.
  comboOptions.forEach((currentOption, optionIndex) => {
    // Generate combinations of smaller size.
    const smallerCombos: PlayerModel[][] = combineWithoutRepetitions(
      comboOptions.slice(optionIndex + 1),
      comboLength - 1
    );

    // Concatenate currentOption with all combinations of smaller size.
    smallerCombos.forEach((smallerCombo) => {
      combos.push([currentOption].concat(smallerCombo));
    });
  });

  return combos;
}