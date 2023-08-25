export const adaptGamesFromAPI = (games: GamesSourceType[]): GamesAdaptedType[] => games.map((game) => {
  const adaptedGame = {
    ...game,
    shortDescription: game.short_description,
    gameUrl: game.game_url,
    releaseDate: game.release_date,
    freetogameProfileUrl: game.freetogame_profile_url
  };

  delete (adaptedGame as Partial<GamesSourceType>).short_description;
  delete (adaptedGame as Partial<GamesSourceType>).game_url;
  delete (adaptedGame as Partial<GamesSourceType>).release_date;
  delete (adaptedGame as Partial<GamesSourceType>).freetogame_profile_url;

  return adaptedGame as GamesAdaptedType;
});
