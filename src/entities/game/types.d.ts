type GameSourceType = {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  short_description: string;
  description: string;
  game_url: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  release_date: string;
  freetogame_profile_url: string;
  minimum_system_requirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  screenshots: Array<{ id: string; image: string }>;
};

type GameAdaptedType = {
  id: number;
  title: string;
  thumbnail: string;
  status: string;
  shortDescription: string;
  description: string;
  gameUrl: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  releaseDate: string;
  freetogameProfileUrl: string;
  minimumSystemRequirements: {
    os: string;
    processor: string;
    memory: string;
    graphics: string;
    storage: string;
  };
  screenshots: Array<{ id: string; image: string }>;
};

type GamesSourceType = Omit<
  GameSourceType,
  'status' | 'description' | 'minimum_system_requirements' | 'screenshots'
>;

type GamesAdaptedType = Omit<
  GameAdaptedType,
  'status' | 'description' | 'minimumSystemRequirements' | 'screenshots'
>;

type Params = {
  category?: typeof import('./const').tags[number];
  platform?: 'pc' | 'browser' | 'all';
  tags?: string;
  'sort-by'?: 'release-date' | 'popularity' | 'alphabetical' | 'relevance';
}
