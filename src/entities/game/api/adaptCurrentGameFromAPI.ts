import dayjs from 'dayjs';
import { DATE_FORMAT } from '../const';

export const adaptCurrentGameFromAPI = (game: CurrentGameSourceType): CurrentGameAdaptedType => {
  const adaptedGame = {
    ...game,
    shortDescription: game.short_description,
    gameUrl: game.game_url,
    releaseDate: dayjs(game.release_date).format(DATE_FORMAT),
    freetogameProfileUrl: game.freetogame_profile_url,
    minimumSystemRequirements: game.minimum_system_requirements
  };

  delete (adaptedGame as Partial<CurrentGameSourceType>).short_description;
  delete (adaptedGame as Partial<CurrentGameSourceType>).game_url;
  delete (adaptedGame as Partial<CurrentGameSourceType>).release_date;
  delete (adaptedGame as Partial<CurrentGameSourceType>).freetogame_profile_url;
  delete (adaptedGame as Partial<CurrentGameSourceType>).minimum_system_requirements;

  return adaptedGame as CurrentGameAdaptedType;
};
