/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
  csv: ",",
  ssv: " ",
  tsv: "\t",
  pipes: "|",
};

/**
*
* @export
* @interface FetchAPI
*/
export interface FetchAPI {
  (url: string, init?: any): Promise<Response>;
}

/**
*
* @export
* @interface FetchArgs
*/
export interface FetchArgs {
  url: string;
  options: any;
}

/**
*
* @export
* @class BaseAPI
*/
export class BaseAPI {
  protected configuration: Configuration;

  constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = isomorphicFetch) {
      if (configuration) {
          this.configuration = configuration;
          this.basePath = configuration.basePath || this.basePath;
      }
  }
};

/**
*
* @export
* @class RequiredError
* @extends {Error}
*/
export class RequiredError extends Error {
  name: "RequiredError"
  constructor(public field: string, msg?: string) {
      super(msg);
  }
}

/**
*
* @export
* @interface AccountLink
*/
export interface AccountLink {
  /**
   *
   * @type {number}
   * @memberof AccountLink
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof AccountLink
   */
  steamID?: string;
  /**
   *
   * @type {number}
   * @memberof AccountLink
   */
  oculusID?: number;
  /**
   *
   * @type {string}
   * @memberof AccountLink
   */
  pcOculusID?: string;
}
/**
*
* @export
* @interface AccuracyTracker
*/
export interface AccuracyTracker {
  /**
   *
   * @type {number}
   * @memberof AccuracyTracker
   */
  accRight?: number;
  /**
   *
   * @type {number}
   * @memberof AccuracyTracker
   */
  accLeft?: number;
  /**
   *
   * @type {number}
   * @memberof AccuracyTracker
   */
  leftPreswing?: number;
  /**
   *
   * @type {number}
   * @memberof AccuracyTracker
   */
  rightPreswing?: number;
  /**
   *
   * @type {number}
   * @memberof AccuracyTracker
   */
  averagePreswing?: number;
  /**
   *
   * @type {number}
   * @memberof AccuracyTracker
   */
  leftPostswing?: number;
  /**
   *
   * @type {number}
   * @memberof AccuracyTracker
   */
  rightPostswing?: number;
  /**
   *
   * @type {number}
   * @memberof AccuracyTracker
   */
  leftTimeDependence?: number;
  /**
   *
   * @type {number}
   * @memberof AccuracyTracker
   */
  rightTimeDependence?: number;
  /**
   *
   * @type {Array<number>}
   * @memberof AccuracyTracker
   */
  leftAverageCut?: Array<number>;
  /**
   *
   * @type {Array<number>}
   * @memberof AccuracyTracker
   */
  rightAverageCut?: Array<number>;
  /**
   *
   * @type {Array<number>}
   * @memberof AccuracyTracker
   */
  gridAcc?: Array<number>;
  /**
   *
   * @type {number}
   * @memberof AccuracyTracker
   */
  fcAcc?: number;
}
/**
*
* @export
* @interface Achievement
*/
export interface Achievement {
  /**
   *
   * @type {number}
   * @memberof Achievement
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof Achievement
   */
  playerId?: string;
  /**
   *
   * @type {Player}
   * @memberof Achievement
   */
  player?: Player;
  /**
   *
   * @type {number}
   * @memberof Achievement
   */
  achievementDescriptionId?: number;
  /**
   *
   * @type {AchievementDescription}
   * @memberof Achievement
   */
  achievementDescription?: AchievementDescription;
  /**
   *
   * @type {AchievementLevel}
   * @memberof Achievement
   */
  level?: AchievementLevel;
  /**
   *
   * @type {number}
   * @memberof Achievement
   */
  timeset?: number;
  /**
   *
   * @type {number}
   * @memberof Achievement
   */
  count?: number;
}
/**
*
* @export
* @interface AchievementDescription
*/
export interface AchievementDescription {
  /**
   *
   * @type {number}
   * @memberof AchievementDescription
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof AchievementDescription
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof AchievementDescription
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof AchievementDescription
   */
  link?: string;
  /**
   *
   * @type {Array<Achievement>}
   * @memberof AchievementDescription
   */
  achievements?: Array<Achievement>;
  /**
   *
   * @type {Array<AchievementLevel>}
   * @memberof AchievementDescription
   */
  levels?: Array<AchievementLevel>;
}
/**
*
* @export
* @interface AchievementLevel
*/
export interface AchievementLevel {
  /**
   *
   * @type {number}
   * @memberof AchievementLevel
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof AchievementLevel
   */
  image?: string;
  /**
   *
   * @type {string}
   * @memberof AchievementLevel
   */
  smallImage?: string;
  /**
   *
   * @type {string}
   * @memberof AchievementLevel
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof AchievementLevel
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof AchievementLevel
   */
  detailedDescription?: string;
  /**
   *
   * @type {string}
   * @memberof AchievementLevel
   */
  color?: string;
  /**
   *
   * @type {number}
   * @memberof AchievementLevel
   */
  value?: number;
  /**
   *
   * @type {number}
   * @memberof AchievementLevel
   */
  level?: number;
  /**
   *
   * @type {number}
   * @memberof AchievementLevel
   */
  achievementDescriptionId?: number;
}
/**
*
* @export
* @interface AveragePosition
*/
export interface AveragePosition {
  /**
   *
   * @type {number}
   * @memberof AveragePosition
   */
  x?: number;
  /**
   *
   * @type {number}
   * @memberof AveragePosition
   */
  y?: number;
  /**
   *
   * @type {number}
   * @memberof AveragePosition
   */
  z?: number;
}
/**
*
* @export
* @interface Badge
*/
export interface Badge {
  /**
   *
   * @type {number}
   * @memberof Badge
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof Badge
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof Badge
   */
  image?: string;
  /**
   *
   * @type {string}
   * @memberof Badge
   */
  link?: string;
}
/**
*
* @export
* @interface Ban
*/
export interface Ban {
  /**
   *
   * @type {number}
   * @memberof Ban
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof Ban
   */
  playerId?: string;
  /**
   *
   * @type {string}
   * @memberof Ban
   */
  bannedBy?: string;
  /**
   *
   * @type {string}
   * @memberof Ban
   */
  banReason?: string;
  /**
   *
   * @type {number}
   * @memberof Ban
   */
  timeset?: number;
  /**
   *
   * @type {number}
   * @memberof Ban
   */
  duration?: number;
}
/**
*
* @export
* @interface BanReturn
*/
export interface BanReturn {
  /**
   *
   * @type {string}
   * @memberof BanReturn
   */
  reason?: string;
  /**
   *
   * @type {number}
   * @memberof BanReturn
   */
  timeset?: number;
  /**
   *
   * @type {number}
   * @memberof BanReturn
   */
  duration?: number;
}
/**
*
* @export
* @interface Clan
*/
export interface Clan {
  /**
   *
   * @type {number}
   * @memberof Clan
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof Clan
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Clan
   */
  color?: string;
  /**
   *
   * @type {string}
   * @memberof Clan
   */
  icon?: string;
  /**
   *
   * @type {string}
   * @memberof Clan
   */
  tag?: string;
  /**
   *
   * @type {string}
   * @memberof Clan
   */
  leaderID?: string;
  /**
   *
   * @type {string}
   * @memberof Clan
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof Clan
   */
  bio?: string;
  /**
   *
   * @type {number}
   * @memberof Clan
   */
  playersCount?: number;
  /**
   *
   * @type {number}
   * @memberof Clan
   */
  pp?: number;
  /**
   *
   * @type {number}
   * @memberof Clan
   */
  averageRank?: number;
  /**
   *
   * @type {number}
   * @memberof Clan
   */
  averageAccuracy?: number;
  /**
   *
   * @type {Array<Player>}
   * @memberof Clan
   */
  players?: Array<Player>;
  /**
   *
   * @type {Array<User>}
   * @memberof Clan
   */
  requests?: Array<User>;
  /**
   *
   * @type {Array<User>}
   * @memberof Clan
   */
  banned?: Array<User>;
}
/**
*
* @export
* @interface ClanResponse
*/
export interface ClanResponse {
  /**
   *
   * @type {number}
   * @memberof ClanResponse
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof ClanResponse
   */
  tag?: string;
  /**
   *
   * @type {string}
   * @memberof ClanResponse
   */
  color?: string;
}
/**
*
* @export
* @interface ClanResponseWithMetadata
*/
export interface ClanResponseWithMetadata {
  /**
   *
   * @type {Metadata}
   * @memberof ClanResponseWithMetadata
   */
  metadata?: Metadata;
  /**
   *
   * @type {Array<Clan>}
   * @memberof ClanResponseWithMetadata
   */
  data?: Array<Clan>;
}
/**
*
* @export
* @interface ClanReturn
*/
export interface ClanReturn {
  /**
   *
   * @type {number}
   * @memberof ClanReturn
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof ClanReturn
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ClanReturn
   */
  color?: string;
  /**
   *
   * @type {string}
   * @memberof ClanReturn
   */
  icon?: string;
  /**
   *
   * @type {string}
   * @memberof ClanReturn
   */
  tag?: string;
  /**
   *
   * @type {string}
   * @memberof ClanReturn
   */
  leaderID?: string;
  /**
   *
   * @type {number}
   * @memberof ClanReturn
   */
  playersCount?: number;
  /**
   *
   * @type {number}
   * @memberof ClanReturn
   */
  pp?: number;
  /**
   *
   * @type {number}
   * @memberof ClanReturn
   */
  averageRank?: number;
  /**
   *
   * @type {number}
   * @memberof ClanReturn
   */
  averageAccuracy?: number;
  /**
   *
   * @type {Array<string>}
   * @memberof ClanReturn
   */
  players?: Array<string>;
  /**
   *
   * @type {Array<string>}
   * @memberof ClanReturn
   */
  pendingInvites?: Array<string>;
}
/**
*
* @export
* @interface CompactLeaderboard
*/
export interface CompactLeaderboard {
  /**
   *
   * @type {string}
   * @memberof CompactLeaderboard
   */
  songHash?: string;
  /**
   *
   * @type {number}
   * @memberof CompactLeaderboard
   */
  difficulty?: number;
}
/**
*
* @export
* @interface CompactScore
*/
export interface CompactScore {
  /**
   *
   * @type {number}
   * @memberof CompactScore
   */
  baseScore?: number;
  /**
   *
   * @type {number}
   * @memberof CompactScore
   */
  modifiedScore?: number;
  /**
   *
   * @type {number}
   * @memberof CompactScore
   */
  maxCombo?: number;
  /**
   *
   * @type {number}
   * @memberof CompactScore
   */
  missedNotes?: number;
  /**
   *
   * @type {number}
   * @memberof CompactScore
   */
  badCuts?: number;
  /**
   *
   * @type {HMD}
   * @memberof CompactScore
   */
  hmd?: HMD;
  /**
   *
   * @type {number}
   * @memberof CompactScore
   */
  epochTime?: number;
}
/**
*
* @export
* @interface CompactScoreResponse
*/
export interface CompactScoreResponse {
  /**
   *
   * @type {CompactScore}
   * @memberof CompactScoreResponse
   */
  score?: CompactScore;
  /**
   *
   * @type {CompactLeaderboard}
   * @memberof CompactScoreResponse
   */
  leaderboard?: CompactLeaderboard;
}
/**
*
* @export
* @interface CompactScoreResponseResponseWithMetadata
*/
export interface CompactScoreResponseResponseWithMetadata {
  /**
   *
   * @type {Metadata}
   * @memberof CompactScoreResponseResponseWithMetadata
   */
  metadata?: Metadata;
  /**
   *
   * @type {Array<CompactScoreResponse>}
   * @memberof CompactScoreResponseResponseWithMetadata
   */
  data?: Array<CompactScoreResponse>;
}
/**
*
* @export
* @enum {string}
*/
export enum ControllerEnum {
  NUMBER_0 = <any> 0,
  NUMBER_1 = <any> 1,
  NUMBER_2 = <any> 2,
  NUMBER_4 = <any> 4,
  NUMBER_8 = <any> 8,
  NUMBER_9 = <any> 9,
  NUMBER_10 = <any> 10,
  NUMBER_16 = <any> 16,
  NUMBER_33 = <any> 33,
  NUMBER_34 = <any> 34,
  NUMBER_35 = <any> 35,
  NUMBER_37 = <any> 37,
  NUMBER_44 = <any> 44,
  NUMBER_61 = <any> 61,
  NUMBER_62 = <any> 62,
  NUMBER_63 = <any> 63,
  NUMBER_64 = <any> 64,
  NUMBER_65 = <any> 65,
  NUMBER_66 = <any> 66,
  NUMBER_67 = <any> 67,
  NUMBER_68 = <any> 68,
  NUMBER_69 = <any> 69,
  NUMBER_70 = <any> 70,
  NUMBER_71 = <any> 71,
  NUMBER_72 = <any> 72,
  NUMBER_73 = <any> 73,
  NUMBER_74 = <any> 74,
  NUMBER_75 = <any> 75,
  NUMBER_76 = <any> 76,
  NUMBER_77 = <any> 77,
  NUMBER_128 = <any> 128,
  NUMBER_256 = <any> 256
}
/**
*
* @export
* @interface CriteriaCommentary
*/
export interface CriteriaCommentary {
  /**
   *
   * @type {number}
   * @memberof CriteriaCommentary
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof CriteriaCommentary
   */
  playerId?: string;
  /**
   *
   * @type {number}
   * @memberof CriteriaCommentary
   */
  timeset?: number;
  /**
   *
   * @type {string}
   * @memberof CriteriaCommentary
   */
  value?: string;
  /**
   *
   * @type {number}
   * @memberof CriteriaCommentary
   */
  editTimeset?: number;
  /**
   *
   * @type {boolean}
   * @memberof CriteriaCommentary
   */
  edited?: boolean;
  /**
   *
   * @type {number}
   * @memberof CriteriaCommentary
   */
  rankQualificationId?: number;
  /**
   *
   * @type {RankQualification}
   * @memberof CriteriaCommentary
   */
  rankQualification?: RankQualification;
  /**
   *
   * @type {string}
   * @memberof CriteriaCommentary
   */
  discordMessageId?: string;
}
/**
*
* @export
* @interface DiffCheckResult
*/
export interface DiffCheckResult {
  /**
   *
   * @type {DiffCriteriaReport}
   * @memberof DiffCheckResult
   */
  criteriaReport?: DiffCriteriaReport;
  /**
   *
   * @type {string}
   * @memberof DiffCheckResult
   */
  diff?: string;
  /**
   *
   * @type {string}
   * @memberof DiffCheckResult
   */
  characteristic?: string;
}
/**
*
* @export
* @interface DiffCriteriaReport
*/
export interface DiffCriteriaReport {
  /**
   *
   * @type {Array<string>}
   * @memberof DiffCriteriaReport
   */
  modsRequired?: Array<string>;
  /**
   *
   * @type {Array<MapNote>}
   * @memberof DiffCriteriaReport
   */
  noteHotStarts?: Array<MapNote>;
  /**
   *
   * @type {Array<MapObstacle>}
   * @memberof DiffCriteriaReport
   */
  wallHotStarts?: Array<MapObstacle>;
  /**
   *
   * @type {Array<MapNote>}
   * @memberof DiffCriteriaReport
   */
  noteColdEnds?: Array<MapNote>;
  /**
   *
   * @type {Array<MapObstacle>}
   * @memberof DiffCriteriaReport
   */
  wallColdEnds?: Array<MapObstacle>;
  /**
   *
   * @type {Array<MapNote>}
   * @memberof DiffCriteriaReport
   */
  noteIntersections?: Array<MapNote>;
  /**
   *
   * @type {Array<MapObstacle>}
   * @memberof DiffCriteriaReport
   */
  wallIntersections?: Array<MapObstacle>;
  /**
   *
   * @type {Array<MapNote>}
   * @memberof DiffCriteriaReport
   */
  noteOutOfRange?: Array<MapNote>;
  /**
   *
   * @type {Array<MapObstacle>}
   * @memberof DiffCriteriaReport
   */
  wallOutOfRange?: Array<MapObstacle>;
  /**
   *
   * @type {Array<MapNote>}
   * @memberof DiffCriteriaReport
   */
  noteFailSwings?: Array<MapNote>;
  /**
   *
   * @type {Array<number>}
   * @memberof DiffCriteriaReport
   */
  errors?: Array<number>;
}
/**
*
* @export
* @interface DiffModResponse
*/
export interface DiffModResponse {
  /**
   *
   * @type {string}
   * @memberof DiffModResponse
   */
  difficultyName?: string;
  /**
   *
   * @type {string}
   * @memberof DiffModResponse
   */
  modeName?: string;
  /**
   *
   * @type {number}
   * @memberof DiffModResponse
   */
  stars?: number;
  /**
   *
   * @type {DifficultyStatus}
   * @memberof DiffModResponse
   */
  status?: DifficultyStatus;
  /**
   *
   * @type {number}
   * @memberof DiffModResponse
   */
  type?: number;
  /**
   *
   * @type {Array<number>}
   * @memberof DiffModResponse
   */
  votes?: Array<number>;
  /**
   *
   * @type {ModifiersMap}
   * @memberof DiffModResponse
   */
  modifierValues?: ModifiersMap;
  /**
   *
   * @type {ModifiersRating}
   * @memberof DiffModResponse
   */
  modifiersRating?: ModifiersRating;
  /**
   *
   * @type {number}
   * @memberof DiffModResponse
   */
  passRating?: number;
  /**
   *
   * @type {number}
   * @memberof DiffModResponse
   */
  accRating?: number;
  /**
   *
   * @type {number}
   * @memberof DiffModResponse
   */
  techRating?: number;
}
/**
*
* @export
* @interface DifficultyDescription
*/
export interface DifficultyDescription {
  /**
   *
   * @type {number}
   * @memberof DifficultyDescription
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof DifficultyDescription
   */
  value?: number;
  /**
   *
   * @type {number}
   * @memberof DifficultyDescription
   */
  mode?: number;
  /**
   *
   * @type {string}
   * @memberof DifficultyDescription
   */
  difficultyName?: string;
  /**
   *
   * @type {string}
   * @memberof DifficultyDescription
   */
  modeName?: string;
  /**
   *
   * @type {DifficultyStatus}
   * @memberof DifficultyDescription
   */
  status?: DifficultyStatus;
  /**
   *
   * @type {ModifiersMap}
   * @memberof DifficultyDescription
   */
  modifierValues?: ModifiersMap;
  /**
   *
   * @type {ModifiersRating}
   * @memberof DifficultyDescription
   */
  modifiersRating?: ModifiersRating;
  /**
   *
   * @type {number}
   * @memberof DifficultyDescription
   */
  nominatedTime?: number;
  /**
   *
   * @type {number}
   * @memberof DifficultyDescription
   */
  qualifiedTime?: number;
  /**
   *
   * @type {number}
   * @memberof DifficultyDescription
   */
  rankedTime?: number;
  /**
   *
   * @type {number}
   * @memberof DifficultyDescription
   */
  stars?: number;
  /**
   *
   * @type {number}
   * @memberof DifficultyDescription
   */
  predictedAcc?: number;
  /**
   *
   * @type {number}
   * @memberof DifficultyDescription
   */
  passRating?: number;
  /**
   *
   * @type {number}
   * @memberof DifficultyDescription
   */
  accRating?: number;
  /**
   *
   * @type {number}
   * @memberof DifficultyDescription
   */
  techRating?: number;
  /**
   *
   * @type {number}
   * @memberof DifficultyDescription
   */
  type?: number;
  /**
   *
   * @type {number}
   * @memberof DifficultyDescription
   */
  njs?: number;
  /**
   *
   * @type {number}
   * @memberof DifficultyDescription
   */
  nps?: number;
  /**
   *
   * @type {number}
   * @memberof DifficultyDescription
   */
  notes?: number;
  /**
   *
   * @type {number}
   * @memberof DifficultyDescription
   */
  bombs?: number;
  /**
   *
   * @type {number}
   * @memberof DifficultyDescription
   */
  walls?: number;
  /**
   *
   * @type {number}
   * @memberof DifficultyDescription
   */
  maxScore?: number;
  /**
   *
   * @type {number}
   * @memberof DifficultyDescription
   */
  duration?: number;
  /**
   *
   * @type {Requirements}
   * @memberof DifficultyDescription
   */
  requirements?: Requirements;
}
/**
*
* @export
* @enum {string}
*/
export enum DifficultyStatus {
  NUMBER_0 = <any> 0,
  NUMBER_1 = <any> 1,
  NUMBER_2 = <any> 2,
  NUMBER_3 = <any> 3,
  NUMBER_4 = <any> 4,
  NUMBER_5 = <any> 5,
  NUMBER_6 = <any> 6
}
/**
*
* @export
* @enum {string}
*/
export enum EndType {
  NUMBER_0 = <any> 0,
  NUMBER_1 = <any> 1,
  NUMBER_2 = <any> 2,
  NUMBER_3 = <any> 3,
  NUMBER_4 = <any> 4
}
/**
*
* @export
* @interface EventPlayer
*/
export interface EventPlayer {
  /**
   *
   * @type {number}
   * @memberof EventPlayer
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof EventPlayer
   */
  eventId?: number;
  /**
   *
   * @type {string}
   * @memberof EventPlayer
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof EventPlayer
   */
  playerId?: string;
  /**
   *
   * @type {string}
   * @memberof EventPlayer
   */
  country?: string;
  /**
   *
   * @type {number}
   * @memberof EventPlayer
   */
  rank?: number;
  /**
   *
   * @type {number}
   * @memberof EventPlayer
   */
  countryRank?: number;
  /**
   *
   * @type {number}
   * @memberof EventPlayer
   */
  pp?: number;
}
/**
*
* @export
* @interface EventRanking
*/
export interface EventRanking {
  /**
   *
   * @type {number}
   * @memberof EventRanking
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof EventRanking
   */
  name?: string;
  /**
   *
   * @type {number}
   * @memberof EventRanking
   */
  endDate?: number;
  /**
   *
   * @type {number}
   * @memberof EventRanking
   */
  playlistId?: number;
  /**
   *
   * @type {string}
   * @memberof EventRanking
   */
  image?: string;
  /**
   *
   * @type {Array<Leaderboard>}
   * @memberof EventRanking
   */
  leaderboards?: Array<Leaderboard>;
  /**
   *
   * @type {Array<EventPlayer>}
   * @memberof EventRanking
   */
  players?: Array<EventPlayer>;
}
/**
*
* @export
* @interface EventResponse
*/
export interface EventResponse {
  /**
   *
   * @type {number}
   * @memberof EventResponse
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof EventResponse
   */
  name?: string;
  /**
   *
   * @type {number}
   * @memberof EventResponse
   */
  endDate?: number;
  /**
   *
   * @type {number}
   * @memberof EventResponse
   */
  playlistId?: number;
  /**
   *
   * @type {string}
   * @memberof EventResponse
   */
  image?: string;
  /**
   *
   * @type {number}
   * @memberof EventResponse
   */
  playerCount?: number;
  /**
   *
   * @type {PlayerResponse}
   * @memberof EventResponse
   */
  leader?: PlayerResponse;
}
/**
*
* @export
* @interface EventResponseResponseWithMetadata
*/
export interface EventResponseResponseWithMetadata {
  /**
   *
   * @type {Metadata}
   * @memberof EventResponseResponseWithMetadata
   */
  metadata?: Metadata;
  /**
   *
   * @type {Array<EventResponse>}
   * @memberof EventResponseResponseWithMetadata
   */
  data?: Array<EventResponse>;
}
/**
*
* @export
* @interface FailedScore
*/
export interface FailedScore {
  /**
   *
   * @type {number}
   * @memberof FailedScore
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof FailedScore
   */
  baseScore?: number;
  /**
   *
   * @type {number}
   * @memberof FailedScore
   */
  modifiedScore?: number;
  /**
   *
   * @type {number}
   * @memberof FailedScore
   */
  accuracy?: number;
  /**
   *
   * @type {string}
   * @memberof FailedScore
   */
  playerId?: string;
  /**
   *
   * @type {number}
   * @memberof FailedScore
   */
  pp?: number;
  /**
   *
   * @type {number}
   * @memberof FailedScore
   */
  weight?: number;
  /**
   *
   * @type {number}
   * @memberof FailedScore
   */
  rank?: number;
  /**
   *
   * @type {number}
   * @memberof FailedScore
   */
  countryRank?: number;
  /**
   *
   * @type {string}
   * @memberof FailedScore
   */
  replay?: string;
  /**
   *
   * @type {string}
   * @memberof FailedScore
   */
  modifiers?: string;
  /**
   *
   * @type {number}
   * @memberof FailedScore
   */
  badCuts?: number;
  /**
   *
   * @type {number}
   * @memberof FailedScore
   */
  missedNotes?: number;
  /**
   *
   * @type {number}
   * @memberof FailedScore
   */
  bombCuts?: number;
  /**
   *
   * @type {number}
   * @memberof FailedScore
   */
  wallsHit?: number;
  /**
   *
   * @type {number}
   * @memberof FailedScore
   */
  pauses?: number;
  /**
   *
   * @type {boolean}
   * @memberof FailedScore
   */
  fullCombo?: boolean;
  /**
   *
   * @type {HMD}
   * @memberof FailedScore
   */
  hmd?: HMD;
  /**
   *
   * @type {string}
   * @memberof FailedScore
   */
  timeset?: string;
  /**
   *
   * @type {Player}
   * @memberof FailedScore
   */
  player?: Player;
  /**
   *
   * @type {Leaderboard}
   * @memberof FailedScore
   */
  leaderboard?: Leaderboard;
  /**
   *
   * @type {string}
   * @memberof FailedScore
   */
  error?: string;
}
/**
*
* @export
* @interface FailedScoreResponseWithMetadata
*/
export interface FailedScoreResponseWithMetadata {
  /**
   *
   * @type {Metadata}
   * @memberof FailedScoreResponseWithMetadata
   */
  metadata?: Metadata;
  /**
   *
   * @type {Array<FailedScore>}
   * @memberof FailedScoreResponseWithMetadata
   */
  data?: Array<FailedScore>;
}
/**
*
* @export
* @interface FriendActivity
*/
export interface FriendActivity {
  /**
   *
   * @type {PlayerResponse}
   * @memberof FriendActivity
   */
  player?: PlayerResponse;
  /**
   *
   * @type {FriendActivityType}
   * @memberof FriendActivity
   */
  type?: FriendActivityType;
  /**
   *
   * @type {any}
   * @memberof FriendActivity
   */
  activityObject?: any;
}
/**
*
* @export
* @interface FriendActivityResponseWithMetadata
*/
export interface FriendActivityResponseWithMetadata {
  /**
   *
   * @type {Metadata}
   * @memberof FriendActivityResponseWithMetadata
   */
  metadata?: Metadata;
  /**
   *
   * @type {Array<FriendActivity>}
   * @memberof FriendActivityResponseWithMetadata
   */
  data?: Array<FriendActivity>;
}
/**
*
* @export
* @enum {string}
*/
export enum FriendActivityType {
  NUMBER_1 = <any> 1,
  NUMBER_2 = <any> 2,
  NUMBER_3 = <any> 3,
  NUMBER_4 = <any> 4
}
/**
*
* @export
* @interface GraphResponse
*/
export interface GraphResponse {
  /**
   *
   * @type {string}
   * @memberof GraphResponse
   */
  leaderboardId?: string;
  /**
   *
   * @type {string}
   * @memberof GraphResponse
   */
  diff?: string;
  /**
   *
   * @type {string}
   * @memberof GraphResponse
   */
  mode?: string;
  /**
   *
   * @type {string}
   * @memberof GraphResponse
   */
  modifiers?: string;
  /**
   *
   * @type {string}
   * @memberof GraphResponse
   */
  songName?: string;
  /**
   *
   * @type {string}
   * @memberof GraphResponse
   */
  mapper?: string;
  /**
   *
   * @type {number}
   * @memberof GraphResponse
   */
  acc?: number;
  /**
   *
   * @type {string}
   * @memberof GraphResponse
   */
  timeset?: string;
  /**
   *
   * @type {number}
   * @memberof GraphResponse
   */
  stars?: number;
}
/**
*
* @export
* @enum {string}
*/
export enum HMD {
  NUMBER_0 = <any> 0,
  NUMBER_1 = <any> 1,
  NUMBER_2 = <any> 2,
  NUMBER_4 = <any> 4,
  NUMBER_8 = <any> 8,
  NUMBER_16 = <any> 16,
  NUMBER_32 = <any> 32,
  NUMBER_33 = <any> 33,
  NUMBER_34 = <any> 34,
  NUMBER_35 = <any> 35,
  NUMBER_36 = <any> 36,
  NUMBER_37 = <any> 37,
  NUMBER_38 = <any> 38,
  NUMBER_39 = <any> 39,
  NUMBER_40 = <any> 40,
  NUMBER_41 = <any> 41,
  NUMBER_42 = <any> 42,
  NUMBER_43 = <any> 43,
  NUMBER_44 = <any> 44,
  NUMBER_45 = <any> 45,
  NUMBER_46 = <any> 46,
  NUMBER_47 = <any> 47,
  NUMBER_48 = <any> 48,
  NUMBER_49 = <any> 49,
  NUMBER_50 = <any> 50,
  NUMBER_51 = <any> 51,
  NUMBER_52 = <any> 52,
  NUMBER_53 = <any> 53,
  NUMBER_54 = <any> 54,
  NUMBER_55 = <any> 55,
  NUMBER_56 = <any> 56,
  NUMBER_57 = <any> 57,
  NUMBER_58 = <any> 58,
  NUMBER_59 = <any> 59,
  NUMBER_60 = <any> 60,
  NUMBER_61 = <any> 61,
  NUMBER_62 = <any> 62,
  NUMBER_63 = <any> 63,
  NUMBER_64 = <any> 64,
  NUMBER_65 = <any> 65,
  NUMBER_128 = <any> 128,
  NUMBER_256 = <any> 256
}
/**
*
* @export
* @interface HitTracker
*/
export interface HitTracker {
  /**
   *
   * @type {number}
   * @memberof HitTracker
   */
  maxCombo?: number;
  /**
   *
   * @type {number}
   * @memberof HitTracker
   */
  maxStreak?: number;
  /**
   *
   * @type {number}
   * @memberof HitTracker
   */
  leftTiming?: number;
  /**
   *
   * @type {number}
   * @memberof HitTracker
   */
  rightTiming?: number;
  /**
   *
   * @type {number}
   * @memberof HitTracker
   */
  leftMiss?: number;
  /**
   *
   * @type {number}
   * @memberof HitTracker
   */
  rightMiss?: number;
  /**
   *
   * @type {number}
   * @memberof HitTracker
   */
  leftBadCuts?: number;
  /**
   *
   * @type {number}
   * @memberof HitTracker
   */
  rightBadCuts?: number;
  /**
   *
   * @type {number}
   * @memberof HitTracker
   */
  leftBombs?: number;
  /**
   *
   * @type {number}
   * @memberof HitTracker
   */
  rightBombs?: number;
}
/**
*
* @export
* @interface Leaderboard
*/
export interface Leaderboard {
  /**
   *
   * @type {string}
   * @memberof Leaderboard
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof Leaderboard
   */
  songId?: string;
  /**
   *
   * @type {Song}
   * @memberof Leaderboard
   */
  song?: Song;
  /**
   *
   * @type {DifficultyDescription}
   * @memberof Leaderboard
   */
  difficulty?: DifficultyDescription;
  /**
   *
   * @type {Array<Score>}
   * @memberof Leaderboard
   */
  scores?: Array<Score>;
  /**
   *
   * @type {RankQualification}
   * @memberof Leaderboard
   */
  qualification?: RankQualification;
  /**
   *
   * @type {RankUpdate}
   * @memberof Leaderboard
   */
  reweight?: RankUpdate;
  /**
   *
   * @type {number}
   * @memberof Leaderboard
   */
  timestamp?: number;
  /**
   *
   * @type {LeaderboardGroup}
   * @memberof Leaderboard
   */
  leaderboardGroup?: LeaderboardGroup;
  /**
   *
   * @type {Array<LeaderboardChange>}
   * @memberof Leaderboard
   */
  changes?: Array<LeaderboardChange>;
  /**
   *
   * @type {Array<PlayerLeaderboardStats>}
   * @memberof Leaderboard
   */
  playerStats?: Array<PlayerLeaderboardStats>;
  /**
   *
   * @type {Array<EventRanking>}
   * @memberof Leaderboard
   */
  events?: Array<EventRanking>;
  /**
   *
   * @type {number}
   * @memberof Leaderboard
   */
  plays?: number;
  /**
   *
   * @type {number}
   * @memberof Leaderboard
   */
  playCount?: number;
  /**
   *
   * @type {number}
   * @memberof Leaderboard
   */
  positiveVotes?: number;
  /**
   *
   * @type {number}
   * @memberof Leaderboard
   */
  starVotes?: number;
  /**
   *
   * @type {number}
   * @memberof Leaderboard
   */
  negativeVotes?: number;
  /**
   *
   * @type {number}
   * @memberof Leaderboard
   */
  voteStars?: number;
}
/**
*
* @export
* @interface LeaderboardChange
*/
export interface LeaderboardChange {
  /**
   *
   * @type {number}
   * @memberof LeaderboardChange
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof LeaderboardChange
   */
  timeset?: number;
  /**
   *
   * @type {string}
   * @memberof LeaderboardChange
   */
  playerId?: string;
  /**
   *
   * @type {number}
   * @memberof LeaderboardChange
   */
  oldRankability?: number;
  /**
   *
   * @type {number}
   * @memberof LeaderboardChange
   */
  oldStars?: number;
  /**
   *
   * @type {number}
   * @memberof LeaderboardChange
   */
  oldAccRating?: number;
  /**
   *
   * @type {number}
   * @memberof LeaderboardChange
   */
  oldPassRating?: number;
  /**
   *
   * @type {number}
   * @memberof LeaderboardChange
   */
  oldTechRating?: number;
  /**
   *
   * @type {number}
   * @memberof LeaderboardChange
   */
  oldType?: number;
  /**
   *
   * @type {number}
   * @memberof LeaderboardChange
   */
  oldCriteriaMet?: number;
  /**
   *
   * @type {ModifiersMap}
   * @memberof LeaderboardChange
   */
  oldModifiers?: ModifiersMap;
  /**
   *
   * @type {number}
   * @memberof LeaderboardChange
   */
  newRankability?: number;
  /**
   *
   * @type {number}
   * @memberof LeaderboardChange
   */
  newStars?: number;
  /**
   *
   * @type {number}
   * @memberof LeaderboardChange
   */
  newAccRating?: number;
  /**
   *
   * @type {number}
   * @memberof LeaderboardChange
   */
  newPassRating?: number;
  /**
   *
   * @type {number}
   * @memberof LeaderboardChange
   */
  newTechRating?: number;
  /**
   *
   * @type {number}
   * @memberof LeaderboardChange
   */
  newType?: number;
  /**
   *
   * @type {number}
   * @memberof LeaderboardChange
   */
  newCriteriaMet?: number;
  /**
   *
   * @type {ModifiersMap}
   * @memberof LeaderboardChange
   */
  newModifiers?: ModifiersMap;
}
/**
*
* @export
* @interface LeaderboardGroup
*/
export interface LeaderboardGroup {
  /**
   *
   * @type {number}
   * @memberof LeaderboardGroup
   */
  id?: number;
  /**
   *
   * @type {Array<Leaderboard>}
   * @memberof LeaderboardGroup
   */
  leaderboards?: Array<Leaderboard>;
}
/**
*
* @export
* @interface LeaderboardGroupEntry
*/
export interface LeaderboardGroupEntry {
  /**
   *
   * @type {string}
   * @memberof LeaderboardGroupEntry
   */
  id?: string;
  /**
   *
   * @type {DifficultyStatus}
   * @memberof LeaderboardGroupEntry
   */
  status?: DifficultyStatus;
  /**
   *
   * @type {number}
   * @memberof LeaderboardGroupEntry
   */
  timestamp?: number;
}
/**
*
* @export
* @interface LeaderboardInfoResponse
*/
export interface LeaderboardInfoResponse {
  /**
   *
   * @type {string}
   * @memberof LeaderboardInfoResponse
   */
  id?: string;
  /**
   *
   * @type {Song}
   * @memberof LeaderboardInfoResponse
   */
  song?: Song;
  /**
   *
   * @type {DifficultyDescription}
   * @memberof LeaderboardInfoResponse
   */
  difficulty?: DifficultyDescription;
  /**
   *
   * @type {number}
   * @memberof LeaderboardInfoResponse
   */
  plays?: number;
  /**
   *
   * @type {number}
   * @memberof LeaderboardInfoResponse
   */
  positiveVotes?: number;
  /**
   *
   * @type {number}
   * @memberof LeaderboardInfoResponse
   */
  starVotes?: number;
  /**
   *
   * @type {number}
   * @memberof LeaderboardInfoResponse
   */
  negativeVotes?: number;
  /**
   *
   * @type {number}
   * @memberof LeaderboardInfoResponse
   */
  voteStars?: number;
  /**
   *
   * @type {ScoreResponseWithAcc}
   * @memberof LeaderboardInfoResponse
   */
  myScore?: ScoreResponseWithAcc;
  /**
   *
   * @type {RankQualification}
   * @memberof LeaderboardInfoResponse
   */
  qualification?: RankQualification;
  /**
   *
   * @type {RankUpdate}
   * @memberof LeaderboardInfoResponse
   */
  reweight?: RankUpdate;
}
/**
*
* @export
* @interface LeaderboardInfoResponseResponseWithMetadata
*/
export interface LeaderboardInfoResponseResponseWithMetadata {
  /**
   *
   * @type {Metadata}
   * @memberof LeaderboardInfoResponseResponseWithMetadata
   */
  metadata?: Metadata;
  /**
   *
   * @type {Array<LeaderboardInfoResponse>}
   * @memberof LeaderboardInfoResponseResponseWithMetadata
   */
  data?: Array<LeaderboardInfoResponse>;
}
/**
*
* @export
* @interface LeaderboardResponse
*/
export interface LeaderboardResponse {
  /**
   *
   * @type {string}
   * @memberof LeaderboardResponse
   */
  id?: string;
  /**
   *
   * @type {Song}
   * @memberof LeaderboardResponse
   */
  song?: Song;
  /**
   *
   * @type {DifficultyDescription}
   * @memberof LeaderboardResponse
   */
  difficulty?: DifficultyDescription;
  /**
   *
   * @type {Array<ScoreResponse>}
   * @memberof LeaderboardResponse
   */
  scores?: Array<ScoreResponse>;
  /**
   *
   * @type {Array<LeaderboardChange>}
   * @memberof LeaderboardResponse
   */
  changes?: Array<LeaderboardChange>;
  /**
   *
   * @type {RankQualification}
   * @memberof LeaderboardResponse
   */
  qualification?: RankQualification;
  /**
   *
   * @type {RankUpdate}
   * @memberof LeaderboardResponse
   */
  reweight?: RankUpdate;
  /**
   *
   * @type {Array<LeaderboardGroupEntry>}
   * @memberof LeaderboardResponse
   */
  leaderboardGroup?: Array<LeaderboardGroupEntry>;
  /**
   *
   * @type {number}
   * @memberof LeaderboardResponse
   */
  plays?: number;
}
/**
*
* @export
* @interface LeaderboardVoting
*/
export interface LeaderboardVoting {
  /**
   *
   * @type {number}
   * @memberof LeaderboardVoting
   */
  rankability?: number;
  /**
   *
   * @type {number}
   * @memberof LeaderboardVoting
   */
  stars?: number;
  /**
   *
   * @type {Array<number>}
   * @memberof LeaderboardVoting
   */
  type?: Array<number>;
}
/**
*
* @export
* @interface LeaderboardsInfoResponse
*/
export interface LeaderboardsInfoResponse {
  /**
   *
   * @type {string}
   * @memberof LeaderboardsInfoResponse
   */
  id?: string;
  /**
   *
   * @type {DifficultyDescription}
   * @memberof LeaderboardsInfoResponse
   */
  difficulty?: DifficultyDescription;
  /**
   *
   * @type {RankQualification}
   * @memberof LeaderboardsInfoResponse
   */
  qualification?: RankQualification;
  /**
   *
   * @type {RankUpdate}
   * @memberof LeaderboardsInfoResponse
   */
  reweight?: RankUpdate;
}
/**
*
* @export
* @interface LeaderboardsResponse
*/
export interface LeaderboardsResponse {
  /**
   *
   * @type {Song}
   * @memberof LeaderboardsResponse
   */
  song?: Song;
  /**
   *
   * @type {Array<LeaderboardsInfoResponse>}
   * @memberof LeaderboardsResponse
   */
  leaderboards?: Array<LeaderboardsInfoResponse>;
}
/**
*
* @export
* @interface MapCheckResult
*/
export interface MapCheckResult {
  /**
   *
   * @type {Array<DiffCheckResult>}
   * @memberof MapCheckResult
   */
  diffs?: Array<DiffCheckResult>;
  /**
   *
   * @type {Array<ProfanityCheckResult>}
   * @memberof MapCheckResult
   */
  profanityCheck?: Array<ProfanityCheckResult>;
}
/**
*
* @export
* @interface MapNote
*/
export interface MapNote {
  /**
   *
   * @type {number}
   * @memberof MapNote
   */
  time?: number;
  /**
   *
   * @type {number}
   * @memberof MapNote
   */
  lineIndex?: number;
  /**
   *
   * @type {number}
   * @memberof MapNote
   */
  lineLayer?: number;
  /**
   *
   * @type {NoteType}
   * @memberof MapNote
   */
  type?: NoteType;
  /**
   *
   * @type {NoteCutDirection}
   * @memberof MapNote
   */
  cutDirection?: NoteCutDirection;
  /**
   *
   * @type {number}
   * @memberof MapNote
   */
  realTime?: number;
}
/**
*
* @export
* @interface MapObstacle
*/
export interface MapObstacle {
  /**
   *
   * @type {number}
   * @memberof MapObstacle
   */
  time?: number;
  /**
   *
   * @type {number}
   * @memberof MapObstacle
   */
  lineIndex?: number;
  /**
   *
   * @type {ObstacleType}
   * @memberof MapObstacle
   */
  type?: ObstacleType;
  /**
   *
   * @type {number}
   * @memberof MapObstacle
   */
  duration?: number;
  /**
   *
   * @type {number}
   * @memberof MapObstacle
   */
  width?: number;
  /**
   *
   * @type {number}
   * @memberof MapObstacle
   */
  realTime?: number;
}
/**
*
* @export
* @enum {string}
*/
export enum MapQuality {
  NUMBER_1 = <any> 1,
  NUMBER_2 = <any> 2,
  NUMBER_3 = <any> 3
}
/**
*
* @export
* @interface Metadata
*/
export interface Metadata {
  /**
   *
   * @type {number}
   * @memberof Metadata
   */
  itemsPerPage?: number;
  /**
   *
   * @type {number}
   * @memberof Metadata
   */
  page?: number;
  /**
   *
   * @type {number}
   * @memberof Metadata
   */
  total?: number;
}
/**
*
* @export
* @interface MiniRankingPlayer
*/
export interface MiniRankingPlayer {
  /**
   *
   * @type {string}
   * @memberof MiniRankingPlayer
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof MiniRankingPlayer
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof MiniRankingPlayer
   */
  country?: string;
  /**
   *
   * @type {number}
   * @memberof MiniRankingPlayer
   */
  rank?: number;
  /**
   *
   * @type {number}
   * @memberof MiniRankingPlayer
   */
  countryRank?: number;
  /**
   *
   * @type {number}
   * @memberof MiniRankingPlayer
   */
  pp?: number;
}
/**
*
* @export
* @interface MiniRankingResponse
*/
export interface MiniRankingResponse {
  /**
   *
   * @type {Array<MiniRankingPlayer>}
   * @memberof MiniRankingResponse
   */
  global?: Array<MiniRankingPlayer>;
  /**
   *
   * @type {Array<MiniRankingPlayer>}
   * @memberof MiniRankingResponse
   */
  country?: Array<MiniRankingPlayer>;
}
/**
*
* @export
* @interface ModifiersMap
*/
export interface ModifiersMap {
  /**
   *
   * @type {number}
   * @memberof ModifiersMap
   */
  modifierId?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersMap
   */
  da?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersMap
   */
  fs?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersMap
   */
  sf?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersMap
   */
  ss?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersMap
   */
  gn?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersMap
   */
  na?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersMap
   */
  nb?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersMap
   */
  nf?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersMap
   */
  no?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersMap
   */
  pm?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersMap
   */
  sc?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersMap
   */
  sa?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersMap
   */
  op?: number;
}
/**
*
* @export
* @interface ModifiersRating
*/
export interface ModifiersRating {
  /**
   *
   * @type {number}
   * @memberof ModifiersRating
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersRating
   */
  fsPredictedAcc?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersRating
   */
  fsPassRating?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersRating
   */
  fsAccRating?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersRating
   */
  fsTechRating?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersRating
   */
  fsStars?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersRating
   */
  ssPredictedAcc?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersRating
   */
  ssPassRating?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersRating
   */
  ssAccRating?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersRating
   */
  ssTechRating?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersRating
   */
  ssStars?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersRating
   */
  sfPredictedAcc?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersRating
   */
  sfPassRating?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersRating
   */
  sfAccRating?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersRating
   */
  sfTechRating?: number;
  /**
   *
   * @type {number}
   * @memberof ModifiersRating
   */
  sfStars?: number;
}
/**
*
* @export
* @enum {string}
*/
export enum MyType {
  NUMBER_0 = <any> 0,
  NUMBER_1 = <any> 1,
  NUMBER_2 = <any> 2,
  NUMBER_3 = <any> 3,
  NUMBER_4 = <any> 4,
  NUMBER_5 = <any> 5
}
/**
*
* @export
* @enum {string}
*/
export enum NoteCutDirection {
  NUMBER_0 = <any> 0,
  NUMBER_1 = <any> 1,
  NUMBER_2 = <any> 2,
  NUMBER_3 = <any> 3,
  NUMBER_4 = <any> 4,
  NUMBER_5 = <any> 5,
  NUMBER_6 = <any> 6,
  NUMBER_7 = <any> 7,
  NUMBER_8 = <any> 8
}
/**
*
* @export
* @enum {string}
*/
export enum NoteType {
  NUMBER_0 = <any> 0,
  NUMBER_1 = <any> 1,
  NUMBER_3 = <any> 3
}
/**
*
* @export
* @interface OauthClientInfo
*/
export interface OauthClientInfo {
  /**
   *
   * @type {string}
   * @memberof OauthClientInfo
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof OauthClientInfo
   */
  icon?: string;
}
/**
*
* @export
* @enum {string}
*/
export enum ObstacleType {
  NUMBER_0 = <any> 0,
  NUMBER_1 = <any> 1
}
/**
*
* @export
* @interface OculusUser
*/
export interface OculusUser {
  /**
   *
   * @type {string}
   * @memberof OculusUser
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof OculusUser
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof OculusUser
   */
  avatar?: string;
  /**
   *
   * @type {boolean}
   * @memberof OculusUser
   */
  migrated?: boolean;
  /**
   *
   * @type {string}
   * @memberof OculusUser
   */
  migratedId?: string;
}
/**
*
* @export
* @enum {string}
*/
export enum Operation {
  NUMBER_0 = <any> 0,
  NUMBER_1 = <any> 1,
  NUMBER_2 = <any> 2
}
/**
*
* @export
* @enum {string}
*/
export enum Order {
  NUMBER_0 = <any> 0,
  NUMBER_1 = <any> 1
}
/**
*
* @export
* @interface PatreonFeatures
*/
export interface PatreonFeatures {
  /**
   *
   * @type {number}
   * @memberof PatreonFeatures
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof PatreonFeatures
   */
  bio?: string;
  /**
   *
   * @type {string}
   * @memberof PatreonFeatures
   */
  message?: string;
  /**
   *
   * @type {string}
   * @memberof PatreonFeatures
   */
  leftSaberColor?: string;
  /**
   *
   * @type {string}
   * @memberof PatreonFeatures
   */
  rightSaberColor?: string;
}
/**
*
* @export
* @interface Player
*/
export interface Player {
  /**
   *
   * @type {string}
   * @memberof Player
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof Player
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Player
   */
  platform?: string;
  /**
   *
   * @type {string}
   * @memberof Player
   */
  avatar?: string;
  /**
   *
   * @type {string}
   * @memberof Player
   */
  country?: string;
  /**
   *
   * @type {string}
   * @memberof Player
   */
  role?: string;
  /**
   *
   * @type {number}
   * @memberof Player
   */
  mapperId?: number;
  /**
   *
   * @type {number}
   * @memberof Player
   */
  pp?: number;
  /**
   *
   * @type {number}
   * @memberof Player
   */
  accPp?: number;
  /**
   *
   * @type {number}
   * @memberof Player
   */
  techPp?: number;
  /**
   *
   * @type {number}
   * @memberof Player
   */
  passPp?: number;
  /**
   *
   * @type {number}
   * @memberof Player
   */
  rank?: number;
  /**
   *
   * @type {number}
   * @memberof Player
   */
  countryRank?: number;
  /**
   *
   * @type {number}
   * @memberof Player
   */
  lastWeekPp?: number;
  /**
   *
   * @type {number}
   * @memberof Player
   */
  lastWeekRank?: number;
  /**
   *
   * @type {number}
   * @memberof Player
   */
  lastWeekCountryRank?: number;
  /**
   *
   * @type {boolean}
   * @memberof Player
   */
  banned?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Player
   */
  inactive?: boolean;
  /**
   *
   * @type {string}
   * @memberof Player
   */
  externalProfileUrl?: string;
  /**
   *
   * @type {PlayerScoreStats}
   * @memberof Player
   */
  scoreStats?: PlayerScoreStats;
  /**
   *
   * @type {Array<Clan>}
   * @memberof Player
   */
  clans?: Array<Clan>;
  /**
   *
   * @type {Array<PlayerFriends>}
   * @memberof Player
   */
  friends?: Array<PlayerFriends>;
  /**
   *
   * @type {Array<Badge>}
   * @memberof Player
   */
  badges?: Array<Badge>;
  /**
   *
   * @type {PatreonFeatures}
   * @memberof Player
   */
  patreonFeatures?: PatreonFeatures;
  /**
   *
   * @type {ProfileSettings}
   * @memberof Player
   */
  profileSettings?: ProfileSettings;
  /**
   *
   * @type {Array<PlayerChange>}
   * @memberof Player
   */
  changes?: Array<PlayerChange>;
  /**
   *
   * @type {Array<PlayerScoreStatsHistory>}
   * @memberof Player
   */
  history?: Array<PlayerScoreStatsHistory>;
  /**
   *
   * @type {Array<EventPlayer>}
   * @memberof Player
   */
  eventsParticipating?: Array<EventPlayer>;
  /**
   *
   * @type {Array<PlayerSocial>}
   * @memberof Player
   */
  socials?: Array<PlayerSocial>;
  /**
   *
   * @type {Array<Achievement>}
   * @memberof Player
   */
  achievements?: Array<Achievement>;
}
/**
*
* @export
* @interface PlayerChange
*/
export interface PlayerChange {
  /**
   *
   * @type {number}
   * @memberof PlayerChange
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerChange
   */
  timestamp?: number;
  /**
   *
   * @type {string}
   * @memberof PlayerChange
   */
  playerId?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerChange
   */
  oldName?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerChange
   */
  newName?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerChange
   */
  oldCountry?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerChange
   */
  newCountry?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerChange
   */
  changer?: string;
}
/**
*
* @export
* @interface PlayerFriends
*/
export interface PlayerFriends {
  /**
   *
   * @type {string}
   * @memberof PlayerFriends
   */
  id?: string;
  /**
   *
   * @type {Array<Player>}
   * @memberof PlayerFriends
   */
  friends?: Array<Player>;
}
/**
*
* @export
* @interface PlayerLeaderboardStats
*/
export interface PlayerLeaderboardStats {
  /**
   *
   * @type {number}
   * @memberof PlayerLeaderboardStats
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof PlayerLeaderboardStats
   */
  playerId?: string;
  /**
   *
   * @type {EndType}
   * @memberof PlayerLeaderboardStats
   */
  type?: EndType;
  /**
   *
   * @type {number}
   * @memberof PlayerLeaderboardStats
   */
  timeset?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerLeaderboardStats
   */
  time?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerLeaderboardStats
   */
  score?: number;
  /**
   *
   * @type {string}
   * @memberof PlayerLeaderboardStats
   */
  leaderboardId?: string;
  /**
   *
   * @type {Leaderboard}
   * @memberof PlayerLeaderboardStats
   */
  leaderboard?: Leaderboard;
}
/**
*
* @export
* @interface PlayerLeaderboardStatsResponseWithMetadata
*/
export interface PlayerLeaderboardStatsResponseWithMetadata {
  /**
   *
   * @type {Metadata}
   * @memberof PlayerLeaderboardStatsResponseWithMetadata
   */
  metadata?: Metadata;
  /**
   *
   * @type {Array<PlayerLeaderboardStats>}
   * @memberof PlayerLeaderboardStatsResponseWithMetadata
   */
  data?: Array<PlayerLeaderboardStats>;
}
/**
*
* @export
* @interface PlayerResponse
*/
export interface PlayerResponse {
  /**
   *
   * @type {string}
   * @memberof PlayerResponse
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerResponse
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerResponse
   */
  platform?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerResponse
   */
  avatar?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerResponse
   */
  country?: string;
  /**
   *
   * @type {number}
   * @memberof PlayerResponse
   */
  pp?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerResponse
   */
  rank?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerResponse
   */
  countryRank?: number;
  /**
   *
   * @type {string}
   * @memberof PlayerResponse
   */
  role?: string;
  /**
   *
   * @type {Array<PlayerSocial>}
   * @memberof PlayerResponse
   */
  socials?: Array<PlayerSocial>;
  /**
   *
   * @type {PatreonFeatures}
   * @memberof PlayerResponse
   */
  patreonFeatures?: PatreonFeatures;
  /**
   *
   * @type {ProfileSettings}
   * @memberof PlayerResponse
   */
  profileSettings?: ProfileSettings;
  /**
   *
   * @type {Array<ClanResponse>}
   * @memberof PlayerResponse
   */
  clans?: Array<ClanResponse>;
}
/**
*
* @export
* @interface PlayerResponseClanResponseWithMetadataAndContainer
*/
export interface PlayerResponseClanResponseWithMetadataAndContainer {
  /**
   *
   * @type {Metadata}
   * @memberof PlayerResponseClanResponseWithMetadataAndContainer
   */
  metadata?: Metadata;
  /**
   *
   * @type {Array<PlayerResponse>}
   * @memberof PlayerResponseClanResponseWithMetadataAndContainer
   */
  data?: Array<PlayerResponse>;
  /**
   *
   * @type {Clan}
   * @memberof PlayerResponseClanResponseWithMetadataAndContainer
   */
  container?: Clan;
}
/**
*
* @export
* @interface PlayerResponseFull
*/
export interface PlayerResponseFull {
  /**
   *
   * @type {string}
   * @memberof PlayerResponseFull
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerResponseFull
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerResponseFull
   */
  platform?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerResponseFull
   */
  avatar?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerResponseFull
   */
  country?: string;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseFull
   */
  pp?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseFull
   */
  rank?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseFull
   */
  countryRank?: number;
  /**
   *
   * @type {string}
   * @memberof PlayerResponseFull
   */
  role?: string;
  /**
   *
   * @type {Array<PlayerSocial>}
   * @memberof PlayerResponseFull
   */
  socials?: Array<PlayerSocial>;
  /**
   *
   * @type {PatreonFeatures}
   * @memberof PlayerResponseFull
   */
  patreonFeatures?: PatreonFeatures;
  /**
   *
   * @type {ProfileSettings}
   * @memberof PlayerResponseFull
   */
  profileSettings?: ProfileSettings;
  /**
   *
   * @type {Array<ClanResponse>}
   * @memberof PlayerResponseFull
   */
  clans?: Array<ClanResponse>;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseFull
   */
  accPp?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseFull
   */
  passPp?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseFull
   */
  techPp?: number;
  /**
   *
   * @type {PlayerScoreStats}
   * @memberof PlayerResponseFull
   */
  scoreStats?: PlayerScoreStats;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseFull
   */
  lastWeekPp?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseFull
   */
  lastWeekRank?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseFull
   */
  lastWeekCountryRank?: number;
  /**
   *
   * @type {Array<EventPlayer>}
   * @memberof PlayerResponseFull
   */
  eventsParticipating?: Array<EventPlayer>;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseFull
   */
  mapperId?: number;
  /**
   *
   * @type {boolean}
   * @memberof PlayerResponseFull
   */
  banned?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof PlayerResponseFull
   */
  inactive?: boolean;
  /**
   *
   * @type {Ban}
   * @memberof PlayerResponseFull
   */
  banDescription?: Ban;
  /**
   *
   * @type {string}
   * @memberof PlayerResponseFull
   */
  externalProfileUrl?: string;
  /**
   *
   * @type {Array<PlayerScoreStatsHistory>}
   * @memberof PlayerResponseFull
   */
  history?: Array<PlayerScoreStatsHistory>;
  /**
   *
   * @type {Array<Badge>}
   * @memberof PlayerResponseFull
   */
  badges?: Array<Badge>;
  /**
   *
   * @type {Array<ScoreResponseWithMyScore>}
   * @memberof PlayerResponseFull
   */
  pinnedScores?: Array<ScoreResponseWithMyScore>;
  /**
   *
   * @type {Array<PlayerChange>}
   * @memberof PlayerResponseFull
   */
  changes?: Array<PlayerChange>;
}
/**
*
* @export
* @interface PlayerResponseWithFriends
*/
export interface PlayerResponseWithFriends {
  /**
   *
   * @type {string}
   * @memberof PlayerResponseWithFriends
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerResponseWithFriends
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerResponseWithFriends
   */
  platform?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerResponseWithFriends
   */
  avatar?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerResponseWithFriends
   */
  country?: string;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseWithFriends
   */
  pp?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseWithFriends
   */
  rank?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseWithFriends
   */
  countryRank?: number;
  /**
   *
   * @type {string}
   * @memberof PlayerResponseWithFriends
   */
  role?: string;
  /**
   *
   * @type {Array<PlayerSocial>}
   * @memberof PlayerResponseWithFriends
   */
  socials?: Array<PlayerSocial>;
  /**
   *
   * @type {PatreonFeatures}
   * @memberof PlayerResponseWithFriends
   */
  patreonFeatures?: PatreonFeatures;
  /**
   *
   * @type {ProfileSettings}
   * @memberof PlayerResponseWithFriends
   */
  profileSettings?: ProfileSettings;
  /**
   *
   * @type {Array<ClanResponse>}
   * @memberof PlayerResponseWithFriends
   */
  clans?: Array<ClanResponse>;
  /**
   *
   * @type {Array<string>}
   * @memberof PlayerResponseWithFriends
   */
  friends?: Array<string>;
}
/**
*
* @export
* @interface PlayerResponseWithStats
*/
export interface PlayerResponseWithStats {
  /**
   *
   * @type {string}
   * @memberof PlayerResponseWithStats
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerResponseWithStats
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerResponseWithStats
   */
  platform?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerResponseWithStats
   */
  avatar?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerResponseWithStats
   */
  country?: string;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseWithStats
   */
  pp?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseWithStats
   */
  rank?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseWithStats
   */
  countryRank?: number;
  /**
   *
   * @type {string}
   * @memberof PlayerResponseWithStats
   */
  role?: string;
  /**
   *
   * @type {Array<PlayerSocial>}
   * @memberof PlayerResponseWithStats
   */
  socials?: Array<PlayerSocial>;
  /**
   *
   * @type {PatreonFeatures}
   * @memberof PlayerResponseWithStats
   */
  patreonFeatures?: PatreonFeatures;
  /**
   *
   * @type {ProfileSettings}
   * @memberof PlayerResponseWithStats
   */
  profileSettings?: ProfileSettings;
  /**
   *
   * @type {Array<ClanResponse>}
   * @memberof PlayerResponseWithStats
   */
  clans?: Array<ClanResponse>;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseWithStats
   */
  accPp?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseWithStats
   */
  passPp?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseWithStats
   */
  techPp?: number;
  /**
   *
   * @type {PlayerScoreStats}
   * @memberof PlayerResponseWithStats
   */
  scoreStats?: PlayerScoreStats;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseWithStats
   */
  lastWeekPp?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseWithStats
   */
  lastWeekRank?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerResponseWithStats
   */
  lastWeekCountryRank?: number;
  /**
   *
   * @type {Array<EventPlayer>}
   * @memberof PlayerResponseWithStats
   */
  eventsParticipating?: Array<EventPlayer>;
}
/**
*
* @export
* @interface PlayerResponseWithStatsResponseWithMetadata
*/
export interface PlayerResponseWithStatsResponseWithMetadata {
  /**
   *
   * @type {Metadata}
   * @memberof PlayerResponseWithStatsResponseWithMetadata
   */
  metadata?: Metadata;
  /**
   *
   * @type {Array<PlayerResponseWithStats>}
   * @memberof PlayerResponseWithStatsResponseWithMetadata
   */
  data?: Array<PlayerResponseWithStats>;
}
/**
*
* @export
* @interface PlayerScoreStats
*/
export interface PlayerScoreStats {
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  totalScore?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  totalUnrankedScore?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  totalRankedScore?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  lastScoreTime?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  lastUnrankedScoreTime?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  lastRankedScoreTime?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  averageRankedAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  averageWeightedRankedAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  averageUnrankedAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  averageAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  medianRankedAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  medianAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  topRankedAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  topUnrankedAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  topAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  topPp?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  topBonusPP?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  topPassPP?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  topAccPP?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  topTechPP?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  peakRank?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  rankedMaxStreak?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  unrankedMaxStreak?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  maxStreak?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  averageLeftTiming?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  averageRightTiming?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  rankedPlayCount?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  unrankedPlayCount?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  totalPlayCount?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  averageRankedRank?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  averageWeightedRankedRank?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  averageUnrankedRank?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  averageRank?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  sspPlays?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  ssPlays?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  spPlays?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  sPlays?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  aPlays?: number;
  /**
   *
   * @type {string}
   * @memberof PlayerScoreStats
   */
  topPlatform?: string;
  /**
   *
   * @type {HMD}
   * @memberof PlayerScoreStats
   */
  topHMD?: HMD;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  dailyImprovements?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  authorizedReplayWatched?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  anonimusReplayWatched?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStats
   */
  watchedReplays?: number;
}
/**
*
* @export
* @interface PlayerScoreStatsHistory
*/
export interface PlayerScoreStatsHistory {
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  timestamp?: number;
  /**
   *
   * @type {string}
   * @memberof PlayerScoreStatsHistory
   */
  playerId?: string;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  pp?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  rank?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  countryRank?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  totalScore?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  totalUnrankedScore?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  totalRankedScore?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  lastScoreTime?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  lastUnrankedScoreTime?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  lastRankedScoreTime?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  averageRankedAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  averageWeightedRankedAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  averageUnrankedAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  averageAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  medianRankedAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  medianAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  topRankedAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  topUnrankedAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  topAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  topPp?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  topBonusPP?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  peakRank?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  maxStreak?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  averageLeftTiming?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  averageRightTiming?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  rankedPlayCount?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  unrankedPlayCount?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  totalPlayCount?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  averageRankedRank?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  averageWeightedRankedRank?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  averageUnrankedRank?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  averageRank?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  sspPlays?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  ssPlays?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  spPlays?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  sPlays?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  aPlays?: number;
  /**
   *
   * @type {string}
   * @memberof PlayerScoreStatsHistory
   */
  topPlatform?: string;
  /**
   *
   * @type {HMD}
   * @memberof PlayerScoreStatsHistory
   */
  topHMD?: HMD;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  dailyImprovements?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  replaysWatched?: number;
  /**
   *
   * @type {number}
   * @memberof PlayerScoreStatsHistory
   */
  watchedReplays?: number;
}
/**
*
* @export
* @interface PlayerSocial
*/
export interface PlayerSocial {
  /**
   *
   * @type {number}
   * @memberof PlayerSocial
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof PlayerSocial
   */
  service?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerSocial
   */
  link?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerSocial
   */
  user?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerSocial
   */
  userId?: string;
  /**
   *
   * @type {string}
   * @memberof PlayerSocial
   */
  playerId?: string;
}
/**
*
* @export
* @interface Playlist
*/
export interface Playlist {
  /**
   *
   * @type {number}
   * @memberof Playlist
   */
  id?: number;
  /**
   *
   * @type {boolean}
   * @memberof Playlist
   */
  isShared?: boolean;
  /**
   *
   * @type {string}
   * @memberof Playlist
   */
  link?: string;
  /**
   *
   * @type {string}
   * @memberof Playlist
   */
  ownerId?: string;
}
/**
*
* @export
* @interface PrevQualification
*/
export interface PrevQualification {
  /**
   *
   * @type {number}
   * @memberof PrevQualification
   */
  time?: number;
}
/**
*
* @export
* @interface ProfanityCheckResult
*/
export interface ProfanityCheckResult {
  /**
   *
   * @type {string}
   * @memberof ProfanityCheckResult
   */
  type?: string;
  /**
   *
   * @type {string}
   * @memberof ProfanityCheckResult
   */
  intensity?: string;
  /**
   *
   * @type {string}
   * @memberof ProfanityCheckResult
   */
  value?: string;
  /**
   *
   * @type {string}
   * @memberof ProfanityCheckResult
   */
  line?: string;
}
/**
*
* @export
* @interface ProfileSettings
*/
export interface ProfileSettings {
  /**
   *
   * @type {number}
   * @memberof ProfileSettings
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof ProfileSettings
   */
  bio?: string;
  /**
   *
   * @type {string}
   * @memberof ProfileSettings
   */
  message?: string;
  /**
   *
   * @type {string}
   * @memberof ProfileSettings
   */
  effectName?: string;
  /**
   *
   * @type {string}
   * @memberof ProfileSettings
   */
  profileAppearance?: string;
  /**
   *
   * @type {number}
   * @memberof ProfileSettings
   */
  hue?: number;
  /**
   *
   * @type {number}
   * @memberof ProfileSettings
   */
  saturation?: number;
  /**
   *
   * @type {string}
   * @memberof ProfileSettings
   */
  leftSaberColor?: string;
  /**
   *
   * @type {string}
   * @memberof ProfileSettings
   */
  rightSaberColor?: string;
  /**
   *
   * @type {string}
   * @memberof ProfileSettings
   */
  profileCover?: string;
  /**
   *
   * @type {string}
   * @memberof ProfileSettings
   */
  starredFriends?: string;
}
/**
*
* @export
* @interface QualificationChange
*/
export interface QualificationChange {
  /**
   *
   * @type {number}
   * @memberof QualificationChange
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof QualificationChange
   */
  timeset?: number;
  /**
   *
   * @type {string}
   * @memberof QualificationChange
   */
  playerId?: string;
  /**
   *
   * @type {number}
   * @memberof QualificationChange
   */
  oldRankability?: number;
  /**
   *
   * @type {number}
   * @memberof QualificationChange
   */
  oldStars?: number;
  /**
   *
   * @type {number}
   * @memberof QualificationChange
   */
  oldAccRating?: number;
  /**
   *
   * @type {number}
   * @memberof QualificationChange
   */
  oldPassRating?: number;
  /**
   *
   * @type {number}
   * @memberof QualificationChange
   */
  oldTechRating?: number;
  /**
   *
   * @type {number}
   * @memberof QualificationChange
   */
  oldType?: number;
  /**
   *
   * @type {number}
   * @memberof QualificationChange
   */
  oldCriteriaMet?: number;
  /**
   *
   * @type {string}
   * @memberof QualificationChange
   */
  oldCriteriaCommentary?: string;
  /**
   *
   * @type {ModifiersMap}
   * @memberof QualificationChange
   */
  oldModifiers?: ModifiersMap;
  /**
   *
   * @type {number}
   * @memberof QualificationChange
   */
  newRankability?: number;
  /**
   *
   * @type {number}
   * @memberof QualificationChange
   */
  newStars?: number;
  /**
   *
   * @type {number}
   * @memberof QualificationChange
   */
  newAccRating?: number;
  /**
   *
   * @type {number}
   * @memberof QualificationChange
   */
  newPassRating?: number;
  /**
   *
   * @type {number}
   * @memberof QualificationChange
   */
  newTechRating?: number;
  /**
   *
   * @type {number}
   * @memberof QualificationChange
   */
  newType?: number;
  /**
   *
   * @type {number}
   * @memberof QualificationChange
   */
  newCriteriaMet?: number;
  /**
   *
   * @type {string}
   * @memberof QualificationChange
   */
  newCriteriaCommentary?: string;
  /**
   *
   * @type {ModifiersMap}
   * @memberof QualificationChange
   */
  newModifiers?: ModifiersMap;
}
/**
*
* @export
* @interface QualificationCommentary
*/
export interface QualificationCommentary {
  /**
   *
   * @type {number}
   * @memberof QualificationCommentary
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof QualificationCommentary
   */
  playerId?: string;
  /**
   *
   * @type {number}
   * @memberof QualificationCommentary
   */
  timeset?: number;
  /**
   *
   * @type {string}
   * @memberof QualificationCommentary
   */
  value?: string;
  /**
   *
   * @type {number}
   * @memberof QualificationCommentary
   */
  editTimeset?: number;
  /**
   *
   * @type {boolean}
   * @memberof QualificationCommentary
   */
  edited?: boolean;
  /**
   *
   * @type {number}
   * @memberof QualificationCommentary
   */
  rankQualificationId?: number;
  /**
   *
   * @type {RankQualification}
   * @memberof QualificationCommentary
   */
  rankQualification?: RankQualification;
  /**
   *
   * @type {string}
   * @memberof QualificationCommentary
   */
  discordMessageId?: string;
}
/**
*
* @export
* @interface QualificationVote
*/
export interface QualificationVote {
  /**
   *
   * @type {number}
   * @memberof QualificationVote
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof QualificationVote
   */
  playerId?: string;
  /**
   *
   * @type {number}
   * @memberof QualificationVote
   */
  timeset?: number;
  /**
   *
   * @type {MapQuality}
   * @memberof QualificationVote
   */
  value?: MapQuality;
  /**
   *
   * @type {number}
   * @memberof QualificationVote
   */
  editTimeset?: number;
  /**
   *
   * @type {boolean}
   * @memberof QualificationVote
   */
  edited?: boolean;
  /**
   *
   * @type {number}
   * @memberof QualificationVote
   */
  rankQualificationId?: number;
  /**
   *
   * @type {RankQualification}
   * @memberof QualificationVote
   */
  rankQualification?: RankQualification;
  /**
   *
   * @type {string}
   * @memberof QualificationVote
   */
  discordRTMessageId?: string;
}
/**
*
* @export
* @interface RankQualification
*/
export interface RankQualification {
  /**
   *
   * @type {number}
   * @memberof RankQualification
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof RankQualification
   */
  timeset?: number;
  /**
   *
   * @type {string}
   * @memberof RankQualification
   */
  rtMember?: string;
  /**
   *
   * @type {number}
   * @memberof RankQualification
   */
  criteriaTimeset?: number;
  /**
   *
   * @type {number}
   * @memberof RankQualification
   */
  criteriaMet?: number;
  /**
   *
   * @type {string}
   * @memberof RankQualification
   */
  criteriaChecker?: string;
  /**
   *
   * @type {string}
   * @memberof RankQualification
   */
  criteriaCommentary?: string;
  /**
   *
   * @type {boolean}
   * @memberof RankQualification
   */
  mapperAllowed?: boolean;
  /**
   *
   * @type {string}
   * @memberof RankQualification
   */
  mapperId?: string;
  /**
   *
   * @type {boolean}
   * @memberof RankQualification
   */
  mapperQualification?: boolean;
  /**
   *
   * @type {number}
   * @memberof RankQualification
   */
  approvalTimeset?: number;
  /**
   *
   * @type {boolean}
   * @memberof RankQualification
   */
  approved?: boolean;
  /**
   *
   * @type {string}
   * @memberof RankQualification
   */
  approvers?: string;
  /**
   *
   * @type {string}
   * @memberof RankQualification
   */
  criteriaCheck?: string;
  /**
   *
   * @type {ModifiersMap}
   * @memberof RankQualification
   */
  modifiers?: ModifiersMap;
  /**
   *
   * @type {ModifiersRating}
   * @memberof RankQualification
   */
  modifiersRating?: ModifiersRating;
  /**
   *
   * @type {Array<QualificationChange>}
   * @memberof RankQualification
   */
  changes?: Array<QualificationChange>;
  /**
   *
   * @type {Array<QualificationCommentary>}
   * @memberof RankQualification
   */
  comments?: Array<QualificationCommentary>;
  /**
   *
   * @type {Array<CriteriaCommentary>}
   * @memberof RankQualification
   */
  criteriaComments?: Array<CriteriaCommentary>;
  /**
   *
   * @type {number}
   * @memberof RankQualification
   */
  qualityVote?: number;
  /**
   *
   * @type {Array<QualificationVote>}
   * @memberof RankQualification
   */
  votes?: Array<QualificationVote>;
  /**
   *
   * @type {string}
   * @memberof RankQualification
   */
  discordChannelId?: string;
  /**
   *
   * @type {string}
   * @memberof RankQualification
   */
  discordRTChannelId?: string;
}
/**
*
* @export
* @interface RankUpdate
*/
export interface RankUpdate {
  /**
   *
   * @type {number}
   * @memberof RankUpdate
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof RankUpdate
   */
  timeset?: number;
  /**
   *
   * @type {string}
   * @memberof RankUpdate
   */
  rtMember?: string;
  /**
   *
   * @type {boolean}
   * @memberof RankUpdate
   */
  keep?: boolean;
  /**
   *
   * @type {number}
   * @memberof RankUpdate
   */
  stars?: number;
  /**
   *
   * @type {number}
   * @memberof RankUpdate
   */
  passRating?: number;
  /**
   *
   * @type {number}
   * @memberof RankUpdate
   */
  techRating?: number;
  /**
   *
   * @type {number}
   * @memberof RankUpdate
   */
  predictedAcc?: number;
  /**
   *
   * @type {number}
   * @memberof RankUpdate
   */
  type?: number;
  /**
   *
   * @type {number}
   * @memberof RankUpdate
   */
  criteriaMet?: number;
  /**
   *
   * @type {string}
   * @memberof RankUpdate
   */
  criteriaCommentary?: string;
  /**
   *
   * @type {boolean}
   * @memberof RankUpdate
   */
  finished?: boolean;
  /**
   *
   * @type {ModifiersMap}
   * @memberof RankUpdate
   */
  modifiers?: ModifiersMap;
  /**
   *
   * @type {ModifiersRating}
   * @memberof RankUpdate
   */
  modifiersRating?: ModifiersRating;
  /**
   *
   * @type {Array<RankUpdateChange>}
   * @memberof RankUpdate
   */
  changes?: Array<RankUpdateChange>;
}
/**
*
* @export
* @interface RankUpdateChange
*/
export interface RankUpdateChange {
  /**
   *
   * @type {number}
   * @memberof RankUpdateChange
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof RankUpdateChange
   */
  timeset?: number;
  /**
   *
   * @type {string}
   * @memberof RankUpdateChange
   */
  playerId?: string;
  /**
   *
   * @type {boolean}
   * @memberof RankUpdateChange
   */
  oldKeep?: boolean;
  /**
   *
   * @type {number}
   * @memberof RankUpdateChange
   */
  oldStars?: number;
  /**
   *
   * @type {number}
   * @memberof RankUpdateChange
   */
  oldType?: number;
  /**
   *
   * @type {number}
   * @memberof RankUpdateChange
   */
  oldCriteriaMet?: number;
  /**
   *
   * @type {string}
   * @memberof RankUpdateChange
   */
  oldCriteriaCommentary?: string;
  /**
   *
   * @type {ModifiersMap}
   * @memberof RankUpdateChange
   */
  oldModifiers?: ModifiersMap;
  /**
   *
   * @type {boolean}
   * @memberof RankUpdateChange
   */
  newKeep?: boolean;
  /**
   *
   * @type {number}
   * @memberof RankUpdateChange
   */
  newStars?: number;
  /**
   *
   * @type {number}
   * @memberof RankUpdateChange
   */
  newType?: number;
  /**
   *
   * @type {number}
   * @memberof RankUpdateChange
   */
  newCriteriaMet?: number;
  /**
   *
   * @type {string}
   * @memberof RankUpdateChange
   */
  newCriteriaCommentary?: string;
  /**
   *
   * @type {ModifiersMap}
   * @memberof RankUpdateChange
   */
  newModifiers?: ModifiersMap;
}
/**
*
* @export
* @interface RankVoting
*/
export interface RankVoting {
  /**
   *
   * @type {number}
   * @memberof RankVoting
   */
  scoreId?: number;
  /**
   *
   * @type {string}
   * @memberof RankVoting
   */
  playerId?: string;
  /**
   *
   * @type {string}
   * @memberof RankVoting
   */
  hash?: string;
  /**
   *
   * @type {string}
   * @memberof RankVoting
   */
  diff?: string;
  /**
   *
   * @type {string}
   * @memberof RankVoting
   */
  mode?: string;
  /**
   *
   * @type {number}
   * @memberof RankVoting
   */
  rankability?: number;
  /**
   *
   * @type {number}
   * @memberof RankVoting
   */
  stars?: number;
  /**
   *
   * @type {number}
   * @memberof RankVoting
   */
  type?: number;
  /**
   *
   * @type {number}
   * @memberof RankVoting
   */
  timeset?: number;
  /**
   *
   * @type {Array<VoterFeedback>}
   * @memberof RankVoting
   */
  feedbacks?: Array<VoterFeedback>;
}
/**
*
* @export
* @interface ReplayOffsets
*/
export interface ReplayOffsets {
  /**
   *
   * @type {number}
   * @memberof ReplayOffsets
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof ReplayOffsets
   */
  frames?: number;
  /**
   *
   * @type {number}
   * @memberof ReplayOffsets
   */
  notes?: number;
  /**
   *
   * @type {number}
   * @memberof ReplayOffsets
   */
  walls?: number;
  /**
   *
   * @type {number}
   * @memberof ReplayOffsets
   */
  heights?: number;
  /**
   *
   * @type {number}
   * @memberof ReplayOffsets
   */
  pauses?: number;
}
/**
*
* @export
* @enum {string}
*/
export enum Requirements {
  NUMBER_0 = <any> 0,
  NUMBER_2 = <any> 2,
  NUMBER_4 = <any> 4,
  NUMBER_8 = <any> 8,
  NUMBER_16 = <any> 16,
  NUMBER_32 = <any> 32,
  NUMBER_MINUS_1 = <any> -1
}
/**
*
* @export
* @interface SaverScoreResponse
*/
export interface SaverScoreResponse {
  /**
   *
   * @type {number}
   * @memberof SaverScoreResponse
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof SaverScoreResponse
   */
  baseScore?: number;
  /**
   *
   * @type {number}
   * @memberof SaverScoreResponse
   */
  modifiedScore?: number;
  /**
   *
   * @type {number}
   * @memberof SaverScoreResponse
   */
  accuracy?: number;
  /**
   *
   * @type {number}
   * @memberof SaverScoreResponse
   */
  pp?: number;
  /**
   *
   * @type {number}
   * @memberof SaverScoreResponse
   */
  rank?: number;
  /**
   *
   * @type {string}
   * @memberof SaverScoreResponse
   */
  modifiers?: string;
  /**
   *
   * @type {string}
   * @memberof SaverScoreResponse
   */
  leaderboardId?: string;
  /**
   *
   * @type {string}
   * @memberof SaverScoreResponse
   */
  timeset?: string;
  /**
   *
   * @type {number}
   * @memberof SaverScoreResponse
   */
  timepost?: number;
  /**
   *
   * @type {string}
   * @memberof SaverScoreResponse
   */
  player?: string;
}
/**
*
* @export
* @interface SaverScoreResponseResponseWithMetadata
*/
export interface SaverScoreResponseResponseWithMetadata {
  /**
   *
   * @type {Metadata}
   * @memberof SaverScoreResponseResponseWithMetadata
   */
  metadata?: Metadata;
  /**
   *
   * @type {Array<SaverScoreResponse>}
   * @memberof SaverScoreResponseResponseWithMetadata
   */
  data?: Array<SaverScoreResponse>;
}
/**
*
* @export
* @interface Score
*/
export interface Score {
  /**
   *
   * @type {number}
   * @memberof Score
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  baseScore?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  modifiedScore?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  accuracy?: number;
  /**
   *
   * @type {string}
   * @memberof Score
   */
  playerId?: string;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  pp?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  bonusPp?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  passPP?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  accPP?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  techPP?: number;
  /**
   *
   * @type {boolean}
   * @memberof Score
   */
  qualification?: boolean;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  weight?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  rank?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  countryRank?: number;
  /**
   *
   * @type {string}
   * @memberof Score
   */
  replay?: string;
  /**
   *
   * @type {string}
   * @memberof Score
   */
  modifiers?: string;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  badCuts?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  missedNotes?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  bombCuts?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  wallsHit?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  pauses?: number;
  /**
   *
   * @type {boolean}
   * @memberof Score
   */
  fullCombo?: boolean;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  maxCombo?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  fcAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  fcPp?: number;
  /**
   *
   * @type {HMD}
   * @memberof Score
   */
  hmd?: HMD;
  /**
   *
   * @type {ControllerEnum}
   * @memberof Score
   */
  controller?: ControllerEnum;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  accRight?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  accLeft?: number;
  /**
   *
   * @type {string}
   * @memberof Score
   */
  timeset?: string;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  timepost?: number;
  /**
   *
   * @type {string}
   * @memberof Score
   */
  platform?: string;
  /**
   *
   * @type {Player}
   * @memberof Score
   */
  player?: Player;
  /**
   *
   * @type {string}
   * @memberof Score
   */
  leaderboardId?: string;
  /**
   *
   * @type {Leaderboard}
   * @memberof Score
   */
  leaderboard?: Leaderboard;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  authorizedReplayWatched?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  anonimusReplayWatched?: number;
  /**
   *
   * @type {ReplayOffsets}
   * @memberof Score
   */
  replayOffsets?: ReplayOffsets;
  /**
   *
   * @type {string}
   * @memberof Score
   */
  country?: string;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  maxStreak?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  playCount?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  leftTiming?: number;
  /**
   *
   * @type {number}
   * @memberof Score
   */
  rightTiming?: number;
  /**
   *
   * @type {ScoreImprovement}
   * @memberof Score
   */
  scoreImprovement?: ScoreImprovement;
  /**
   *
   * @type {boolean}
   * @memberof Score
   */
  banned?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Score
   */
  suspicious?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Score
   */
  ignoreForStats?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Score
   */
  migrated?: boolean;
  /**
   *
   * @type {RankVoting}
   * @memberof Score
   */
  rankVoting?: RankVoting;
  /**
   *
   * @type {ScoreMetadata}
   * @memberof Score
   */
  metadata?: ScoreMetadata;
}
/**
*
* @export
* @interface ScoreGraphTracker
*/
export interface ScoreGraphTracker {
  /**
   *
   * @type {Array<number>}
   * @memberof ScoreGraphTracker
   */
  graph?: Array<number>;
}
/**
*
* @export
* @interface ScoreImprovement
*/
export interface ScoreImprovement {
  /**
   *
   * @type {number}
   * @memberof ScoreImprovement
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof ScoreImprovement
   */
  timeset?: string;
  /**
   *
   * @type {number}
   * @memberof ScoreImprovement
   */
  score?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreImprovement
   */
  accuracy?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreImprovement
   */
  pp?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreImprovement
   */
  bonusPp?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreImprovement
   */
  rank?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreImprovement
   */
  accRight?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreImprovement
   */
  accLeft?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreImprovement
   */
  averageRankedAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreImprovement
   */
  totalPp?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreImprovement
   */
  totalRank?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreImprovement
   */
  badCuts?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreImprovement
   */
  missedNotes?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreImprovement
   */
  bombCuts?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreImprovement
   */
  wallsHit?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreImprovement
   */
  pauses?: number;
}
/**
*
* @export
* @interface ScoreMetadata
*/
export interface ScoreMetadata {
  /**
   *
   * @type {number}
   * @memberof ScoreMetadata
   */
  id?: number;
  /**
   *
   * @type {ScoreStatus}
   * @memberof ScoreMetadata
   */
  status?: ScoreStatus;
  /**
   *
   * @type {number}
   * @memberof ScoreMetadata
   */
  priority?: number;
  /**
   *
   * @type {string}
   * @memberof ScoreMetadata
   */
  description?: string;
  /**
   *
   * @type {string}
   * @memberof ScoreMetadata
   */
  linkService?: string;
  /**
   *
   * @type {string}
   * @memberof ScoreMetadata
   */
  linkServiceIcon?: string;
  /**
   *
   * @type {string}
   * @memberof ScoreMetadata
   */
  link?: string;
}
/**
*
* @export
* @interface ScoreResponse
*/
export interface ScoreResponse {
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  baseScore?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  modifiedScore?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  accuracy?: number;
  /**
   *
   * @type {string}
   * @memberof ScoreResponse
   */
  playerId?: string;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  pp?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  bonusPp?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  passPP?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  accPP?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  techPP?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  rank?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  countryRank?: number;
  /**
   *
   * @type {string}
   * @memberof ScoreResponse
   */
  country?: string;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  fcAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  fcPp?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  weight?: number;
  /**
   *
   * @type {string}
   * @memberof ScoreResponse
   */
  replay?: string;
  /**
   *
   * @type {string}
   * @memberof ScoreResponse
   */
  modifiers?: string;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  badCuts?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  missedNotes?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  bombCuts?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  wallsHit?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  pauses?: number;
  /**
   *
   * @type {boolean}
   * @memberof ScoreResponse
   */
  fullCombo?: boolean;
  /**
   *
   * @type {string}
   * @memberof ScoreResponse
   */
  platform?: string;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  maxCombo?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  maxStreak?: number;
  /**
   *
   * @type {HMD}
   * @memberof ScoreResponse
   */
  hmd?: HMD;
  /**
   *
   * @type {ControllerEnum}
   * @memberof ScoreResponse
   */
  controller?: ControllerEnum;
  /**
   *
   * @type {string}
   * @memberof ScoreResponse
   */
  leaderboardId?: string;
  /**
   *
   * @type {string}
   * @memberof ScoreResponse
   */
  timeset?: string;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  timepost?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  replaysWatched?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponse
   */
  playCount?: number;
  /**
   *
   * @type {PlayerResponse}
   * @memberof ScoreResponse
   */
  player?: PlayerResponse;
  /**
   *
   * @type {ScoreImprovement}
   * @memberof ScoreResponse
   */
  scoreImprovement?: ScoreImprovement;
  /**
   *
   * @type {RankVoting}
   * @memberof ScoreResponse
   */
  rankVoting?: RankVoting;
  /**
   *
   * @type {ScoreMetadata}
   * @memberof ScoreResponse
   */
  metadata?: ScoreMetadata;
  /**
   *
   * @type {ReplayOffsets}
   * @memberof ScoreResponse
   */
  offsets?: ReplayOffsets;
}
/**
*
* @export
* @interface ScoreResponseResponseWithMetadataAndSelection
*/
export interface ScoreResponseResponseWithMetadataAndSelection {
  /**
   *
   * @type {Metadata}
   * @memberof ScoreResponseResponseWithMetadataAndSelection
   */
  metadata?: Metadata;
  /**
   *
   * @type {Array<ScoreResponse>}
   * @memberof ScoreResponseResponseWithMetadataAndSelection
   */
  data?: Array<ScoreResponse>;
  /**
   *
   * @type {ScoreResponse}
   * @memberof ScoreResponseResponseWithMetadataAndSelection
   */
  selection?: ScoreResponse;
}
/**
*
* @export
* @interface ScoreResponseWithAcc
*/
export interface ScoreResponseWithAcc {
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  baseScore?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  modifiedScore?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  accuracy?: number;
  /**
   *
   * @type {string}
   * @memberof ScoreResponseWithAcc
   */
  playerId?: string;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  pp?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  bonusPp?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  passPP?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  accPP?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  techPP?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  rank?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  countryRank?: number;
  /**
   *
   * @type {string}
   * @memberof ScoreResponseWithAcc
   */
  country?: string;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  fcAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  fcPp?: number;
  /**
   *
   * @type {string}
   * @memberof ScoreResponseWithAcc
   */
  replay?: string;
  /**
   *
   * @type {string}
   * @memberof ScoreResponseWithAcc
   */
  modifiers?: string;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  badCuts?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  missedNotes?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  bombCuts?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  wallsHit?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  pauses?: number;
  /**
   *
   * @type {boolean}
   * @memberof ScoreResponseWithAcc
   */
  fullCombo?: boolean;
  /**
   *
   * @type {string}
   * @memberof ScoreResponseWithAcc
   */
  platform?: string;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  maxCombo?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  maxStreak?: number;
  /**
   *
   * @type {HMD}
   * @memberof ScoreResponseWithAcc
   */
  hmd?: HMD;
  /**
   *
   * @type {ControllerEnum}
   * @memberof ScoreResponseWithAcc
   */
  controller?: ControllerEnum;
  /**
   *
   * @type {string}
   * @memberof ScoreResponseWithAcc
   */
  leaderboardId?: string;
  /**
   *
   * @type {string}
   * @memberof ScoreResponseWithAcc
   */
  timeset?: string;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  timepost?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  replaysWatched?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  playCount?: number;
  /**
   *
   * @type {PlayerResponse}
   * @memberof ScoreResponseWithAcc
   */
  player?: PlayerResponse;
  /**
   *
   * @type {ScoreImprovement}
   * @memberof ScoreResponseWithAcc
   */
  scoreImprovement?: ScoreImprovement;
  /**
   *
   * @type {RankVoting}
   * @memberof ScoreResponseWithAcc
   */
  rankVoting?: RankVoting;
  /**
   *
   * @type {ScoreMetadata}
   * @memberof ScoreResponseWithAcc
   */
  metadata?: ScoreMetadata;
  /**
   *
   * @type {ReplayOffsets}
   * @memberof ScoreResponseWithAcc
   */
  offsets?: ReplayOffsets;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  weight?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  accLeft?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithAcc
   */
  accRight?: number;
}
/**
*
* @export
* @interface ScoreResponseWithMyScore
*/
export interface ScoreResponseWithMyScore {
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  id?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  baseScore?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  modifiedScore?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  accuracy?: number;
  /**
   *
   * @type {string}
   * @memberof ScoreResponseWithMyScore
   */
  playerId?: string;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  pp?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  bonusPp?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  passPP?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  accPP?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  techPP?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  rank?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  countryRank?: number;
  /**
   *
   * @type {string}
   * @memberof ScoreResponseWithMyScore
   */
  country?: string;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  fcAccuracy?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  fcPp?: number;
  /**
   *
   * @type {string}
   * @memberof ScoreResponseWithMyScore
   */
  replay?: string;
  /**
   *
   * @type {string}
   * @memberof ScoreResponseWithMyScore
   */
  modifiers?: string;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  badCuts?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  missedNotes?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  bombCuts?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  wallsHit?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  pauses?: number;
  /**
   *
   * @type {boolean}
   * @memberof ScoreResponseWithMyScore
   */
  fullCombo?: boolean;
  /**
   *
   * @type {string}
   * @memberof ScoreResponseWithMyScore
   */
  platform?: string;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  maxCombo?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  maxStreak?: number;
  /**
   *
   * @type {HMD}
   * @memberof ScoreResponseWithMyScore
   */
  hmd?: HMD;
  /**
   *
   * @type {ControllerEnum}
   * @memberof ScoreResponseWithMyScore
   */
  controller?: ControllerEnum;
  /**
   *
   * @type {string}
   * @memberof ScoreResponseWithMyScore
   */
  leaderboardId?: string;
  /**
   *
   * @type {string}
   * @memberof ScoreResponseWithMyScore
   */
  timeset?: string;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  timepost?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  replaysWatched?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  playCount?: number;
  /**
   *
   * @type {PlayerResponse}
   * @memberof ScoreResponseWithMyScore
   */
  player?: PlayerResponse;
  /**
   *
   * @type {ScoreImprovement}
   * @memberof ScoreResponseWithMyScore
   */
  scoreImprovement?: ScoreImprovement;
  /**
   *
   * @type {RankVoting}
   * @memberof ScoreResponseWithMyScore
   */
  rankVoting?: RankVoting;
  /**
   *
   * @type {ScoreMetadata}
   * @memberof ScoreResponseWithMyScore
   */
  metadata?: ScoreMetadata;
  /**
   *
   * @type {ReplayOffsets}
   * @memberof ScoreResponseWithMyScore
   */
  offsets?: ReplayOffsets;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  weight?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  accLeft?: number;
  /**
   *
   * @type {number}
   * @memberof ScoreResponseWithMyScore
   */
  accRight?: number;
  /**
   *
   * @type {ScoreResponseWithAcc}
   * @memberof ScoreResponseWithMyScore
   */
  myScore?: ScoreResponseWithAcc;
  /**
   *
   * @type {LeaderboardResponse}
   * @memberof ScoreResponseWithMyScore
   */
  leaderboard?: LeaderboardResponse;
}
/**
*
* @export
* @interface ScoreResponseWithMyScoreResponseWithMetadata
*/
export interface ScoreResponseWithMyScoreResponseWithMetadata {
  /**
   *
   * @type {Metadata}
   * @memberof ScoreResponseWithMyScoreResponseWithMetadata
   */
  metadata?: Metadata;
  /**
   *
   * @type {Array<ScoreResponseWithMyScore>}
   * @memberof ScoreResponseWithMyScoreResponseWithMetadata
   */
  data?: Array<ScoreResponseWithMyScore>;
}
/**
*
* @export
* @interface ScoreStatistic
*/
export interface ScoreStatistic {
  /**
   *
   * @type {HitTracker}
   * @memberof ScoreStatistic
   */
  hitTracker?: HitTracker;
  /**
   *
   * @type {AccuracyTracker}
   * @memberof ScoreStatistic
   */
  accuracyTracker?: AccuracyTracker;
  /**
   *
   * @type {WinTracker}
   * @memberof ScoreStatistic
   */
  winTracker?: WinTracker;
  /**
   *
   * @type {ScoreGraphTracker}
   * @memberof ScoreStatistic
   */
  scoreGraphTracker?: ScoreGraphTracker;
}
/**
*
* @export
* @enum {string}
*/
export enum ScoreStatus {
  NUMBER_0 = <any> 0,
  NUMBER_1 = <any> 1
}
/**
*
* @export
* @interface SigninApproveBody
*/
export interface SigninApproveBody {
  /**
   *
   * @type {string}
   * @memberof SigninApproveBody
   */
  returnUrl?: string;
}
/**
*
* @export
* @interface SigninBody
*/
export interface SigninBody {
  /**
   *
   * @type {string}
   * @memberof SigninBody
   */
  provider?: string;
  /**
   *
   * @type {string}
   * @memberof SigninBody
   */
  returnUrl?: string;
  /**
   *
   * @type {string}
   * @memberof SigninBody
   */
  oauthState?: string;
}
/**
*
* @export
* @interface SigninmigrateBody
*/
export interface SigninmigrateBody {
  /**
   *
   * @type {string}
   * @memberof SigninmigrateBody
   */
  provider?: string;
  /**
   *
   * @type {string}
   * @memberof SigninmigrateBody
   */
  returnUrl?: string;
}
/**
*
* @export
* @interface SigninmigrateOculuspcBody
*/
export interface SigninmigrateOculuspcBody {
  /**
   *
   * @type {string}
   * @memberof SigninmigrateOculuspcBody
   */
  provider?: string;
  /**
   *
   * @type {string}
   * @memberof SigninmigrateOculuspcBody
   */
  returnUrl?: string;
  /**
   *
   * @type {string}
   * @memberof SigninmigrateOculuspcBody
   */
  token?: string;
}
/**
*
* @export
* @interface SigninoculusBody
*/
export interface SigninoculusBody {
  /**
   *
   * @type {string}
   * @memberof SigninoculusBody
   */
  oauthState?: string;
}
/**
*
* @export
* @interface SigninoculusOculuspcBody
*/
export interface SigninoculusOculuspcBody {
  /**
   *
   * @type {string}
   * @memberof SigninoculusOculuspcBody
   */
  token?: string;
  /**
   *
   * @type {string}
   * @memberof SigninoculusOculuspcBody
   */
  returnUrl?: string;
}
/**
*
* @export
* @interface Song
*/
export interface Song {
  /**
   *
   * @type {string}
   * @memberof Song
   */
  id?: string;
  /**
   *
   * @type {string}
   * @memberof Song
   */
  hash?: string;
  /**
   *
   * @type {string}
   * @memberof Song
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof Song
   */
  subName?: string;
  /**
   *
   * @type {string}
   * @memberof Song
   */
  author?: string;
  /**
   *
   * @type {string}
   * @memberof Song
   */
  mapper?: string;
  /**
   *
   * @type {number}
   * @memberof Song
   */
  mapperId?: number;
  /**
   *
   * @type {string}
   * @memberof Song
   */
  coverImage?: string;
  /**
   *
   * @type {string}
   * @memberof Song
   */
  fullCoverImage?: string;
  /**
   *
   * @type {string}
   * @memberof Song
   */
  downloadUrl?: string;
  /**
   *
   * @type {number}
   * @memberof Song
   */
  bpm?: number;
  /**
   *
   * @type {number}
   * @memberof Song
   */
  duration?: number;
  /**
   *
   * @type {string}
   * @memberof Song
   */
  tags?: string;
  /**
   *
   * @type {number}
   * @memberof Song
   */
  uploadTime?: number;
  /**
   *
   * @type {Array<DifficultyDescription>}
   * @memberof Song
   */
  difficulties?: Array<DifficultyDescription>;
}
/**
*
* @export
* @enum {string}
*/
export enum SortBy {
  NUMBER_0 = <any> 0,
  NUMBER_1 = <any> 1,
  NUMBER_2 = <any> 2,
  NUMBER_3 = <any> 3,
  NUMBER_4 = <any> 4,
  NUMBER_5 = <any> 5,
  NUMBER_6 = <any> 6,
  NUMBER_7 = <any> 7,
  NUMBER_8 = <any> 8,
  NUMBER_9 = <any> 9,
  NUMBER_10 = <any> 10,
  NUMBER_11 = <any> 11,
  NUMBER_12 = <any> 12
}
/**
*
* @export
* @interface StringResponseWithMetadata
*/
export interface StringResponseWithMetadata {
  /**
   *
   * @type {Metadata}
   * @memberof StringResponseWithMetadata
   */
  metadata?: Metadata;
  /**
   *
   * @type {Array<string>}
   * @memberof StringResponseWithMetadata
   */
  data?: Array<string>;
}
/**
*
* @export
* @enum {string}
*/
export enum Type {
  NUMBER_0 = <any> 0,
  NUMBER_1 = <any> 1,
  NUMBER_2 = <any> 2,
  NUMBER_3 = <any> 3,
  NUMBER_4 = <any> 4,
  NUMBER_5 = <any> 5,
  NUMBER_6 = <any> 6,
  NUMBER_7 = <any> 7,
  NUMBER_8 = <any> 8
}
/**
*
* @export
* @interface User
*/
export interface User {
  /**
   *
   * @type {string}
   * @memberof User
   */
  id?: string;
  /**
   *
   * @type {Player}
   * @memberof User
   */
  player?: Player;
  /**
   *
   * @type {Array<Clan>}
   * @memberof User
   */
  clanRequest?: Array<Clan>;
  /**
   *
   * @type {Array<Clan>}
   * @memberof User
   */
  bannedClans?: Array<Clan>;
  /**
   *
   * @type {Array<Playlist>}
   * @memberof User
   */
  playlists?: Array<Playlist>;
}
/**
*
* @export
* @interface UserChangeLoginBody
*/
export interface UserChangeLoginBody {
  /**
   *
   * @type {string}
   * @memberof UserChangeLoginBody
   */
  newLogin?: string;
}
/**
*
* @export
* @interface UserChangePasswordBody
*/
export interface UserChangePasswordBody {
  /**
   *
   * @type {string}
   * @memberof UserChangePasswordBody
   */
  login?: string;
  /**
   *
   * @type {string}
   * @memberof UserChangePasswordBody
   */
  oldPassword?: string;
  /**
   *
   * @type {string}
   * @memberof UserChangePasswordBody
   */
  newPassword?: string;
}
/**
*
* @export
* @interface UserMigrateBody
*/
export interface UserMigrateBody {
  /**
   *
   * @type {string}
   * @memberof UserMigrateBody
   */
  login?: string;
  /**
   *
   * @type {string}
   * @memberof UserMigrateBody
   */
  password?: string;
}
/**
*
* @export
* @interface UserResetPasswordBody
*/
export interface UserResetPasswordBody {
  /**
   *
   * @type {string}
   * @memberof UserResetPasswordBody
   */
  login?: string;
  /**
   *
   * @type {string}
   * @memberof UserResetPasswordBody
   */
  newPassword?: string;
}
/**
*
* @export
* @interface UserReturn
*/
export interface UserReturn {
  /**
   *
   * @type {PlayerResponseFull}
   * @memberof UserReturn
   */
  player?: PlayerResponseFull;
  /**
   *
   * @type {ClanReturn}
   * @memberof UserReturn
   */
  clan?: ClanReturn;
  /**
   *
   * @type {BanReturn}
   * @memberof UserReturn
   */
  ban?: BanReturn;
  /**
   *
   * @type {Array<Clan>}
   * @memberof UserReturn
   */
  clanRequest?: Array<Clan>;
  /**
   *
   * @type {Array<Clan>}
   * @memberof UserReturn
   */
  bannedClans?: Array<Clan>;
  /**
   *
   * @type {Array<Playlist>}
   * @memberof UserReturn
   */
  playlists?: Array<Playlist>;
  /**
   *
   * @type {Array<PlayerResponseFull>}
   * @memberof UserReturn
   */
  friends?: Array<PlayerResponseFull>;
  /**
   *
   * @type {string}
   * @memberof UserReturn
   */
  login?: string;
  /**
   *
   * @type {boolean}
   * @memberof UserReturn
   */
  migrated?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof UserReturn
   */
  patreoned?: boolean;
}
/**
*
* @export
* @interface UserUnlinkBody
*/
export interface UserUnlinkBody {
  /**
   *
   * @type {string}
   * @memberof UserUnlinkBody
   */
  provider?: string;
  /**
   *
   * @type {string}
   * @memberof UserUnlinkBody
   */
  returnUrl?: string;
}
/**
*
* @export
* @enum {string}
*/
export enum VoteStatus {
  NUMBER_1 = <any> 1,
  NUMBER_2 = <any> 2,
  NUMBER_3 = <any> 3
}
/**
*
* @export
* @interface VoterFeedback
*/
export interface VoterFeedback {
  /**
   *
   * @type {number}
   * @memberof VoterFeedback
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof VoterFeedback
   */
  rtMember?: string;
  /**
   *
   * @type {number}
   * @memberof VoterFeedback
   */
  value?: number;
}
/**
*
* @export
* @interface WinTracker
*/
export interface WinTracker {
  /**
   *
   * @type {boolean}
   * @memberof WinTracker
   */
  won?: boolean;
  /**
   *
   * @type {number}
   * @memberof WinTracker
   */
  endTime?: number;
  /**
   *
   * @type {number}
   * @memberof WinTracker
   */
  nbOfPause?: number;
  /**
   *
   * @type {number}
   * @memberof WinTracker
   */
  totalPauseDuration?: number;
  /**
   *
   * @type {number}
   * @memberof WinTracker
   */
  jumpDistance?: number;
  /**
   *
   * @type {number}
   * @memberof WinTracker
   */
  averageHeight?: number;
  /**
   *
   * @type {AveragePosition}
   * @memberof WinTracker
   */
  averageHeadPosition?: AveragePosition;
  /**
   *
   * @type {number}
   * @memberof WinTracker
   */
  totalScore?: number;
  /**
   *
   * @type {number}
   * @memberof WinTracker
   */
  maxScore?: number;
}
