/**
 * Bungie.Net API
 * These endpoints constitute the functionality exposed by Bungie.net, both for more traditional website functionality and for connectivity to Bungie video games and their related functionality.
 *
 * OpenAPI spec version: 2.16.0
 * Contact: support@bungie.com
 *
 * NOTE: This class is auto generated by the bungie-api-typedef code generator program,
 * adapted from {@link https://github.com/DestinyItemManager/bungie-api-ts}
 * Repository: {@link https://github.com/owensimpson/oodestiny}
 * Do not edit these files manually.
 */
/** @see {@link https://bungie-net.github.io/#/components/schemas/Exceptions.PlatformErrorCodes} */
export declare const enum PlatformErrorCodes {
    None = 0,
    Success = 1,
    TransportException = 2,
    UnhandledException = 3,
    NotImplemented = 4,
    SystemDisabled = 5,
    FailedToLoadAvailableLocalesConfiguration = 6,
    ParameterParseFailure = 7,
    ParameterInvalidRange = 8,
    BadRequest = 9,
    AuthenticationInvalid = 10,
    DataNotFound = 11,
    InsufficientPrivileges = 12,
    Duplicate = 13,
    /** Deprecated, please do not check for this value anywhere. */
    UnknownSqlResult = 14,
    ValidationError = 15,
    ValidationMissingFieldError = 16,
    ValidationInvalidInputError = 17,
    InvalidParameters = 18,
    ParameterNotFound = 19,
    UnhandledHttpException = 20,
    NotFound = 21,
    WebAuthModuleAsyncFailed = 22,
    InvalidReturnValue = 23,
    UserBanned = 24,
    InvalidPostBody = 25,
    MissingPostBody = 26,
    ExternalServiceTimeout = 27,
    ValidationLengthError = 28,
    ValidationRangeError = 29,
    JsonDeserializationError = 30,
    ThrottleLimitExceeded = 31,
    ValidationTagError = 32,
    ValidationProfanityError = 33,
    ValidationUrlFormatError = 34,
    ThrottleLimitExceededMinutes = 35,
    ThrottleLimitExceededMomentarily = 36,
    ThrottleLimitExceededSeconds = 37,
    ExternalServiceUnknown = 38,
    ValidationWordLengthError = 39,
    ValidationInvisibleUnicode = 40,
    ValidationBadNames = 41,
    ExternalServiceFailed = 42,
    ServiceRetired = 43,
    UnknownSqlException = 44,
    UnsupportedLocale = 45,
    InvalidPageNumber = 46,
    MaximumPageSizeExceeded = 47,
    ServiceUnsupported = 48,
    ValidationMaximumUnicodeCombiningCharacters = 49,
    ValidationMaximumSequentialCarriageReturns = 50,
    PerEndpointRequestThrottleExceeded = 51,
    AuthContextCacheAssertion = 52,
    ExPlatformStringValidationError = 53,
    PerApplicationThrottleExceeded = 54,
    PerApplicationAnonymousThrottleExceeded = 55,
    PerApplicationAuthenticatedThrottleExceeded = 56,
    PerUserThrottleExceeded = 57,
    PayloadSignatureVerificationFailure = 58,
    InvalidServiceAuthContext = 59,
    ObsoleteCredentialType = 89,
    UnableToUnPairMobileApp = 90,
    UnableToPairMobileApp = 91,
    CannotUseMobileAuthWithNonMobileProvider = 92,
    MissingDeviceCookie = 93,
    FacebookTokenExpired = 94,
    AuthTicketRequired = 95,
    CookieContextRequired = 96,
    UnknownAuthenticationError = 97,
    BungieNetAccountCreationRequired = 98,
    WebAuthRequired = 99,
    ContentUnknownSqlResult = 100,
    ContentNeedUniquePath = 101,
    ContentSqlException = 102,
    ContentNotFound = 103,
    ContentSuccessWithTagAddFail = 104,
    ContentSearchMissingParameters = 105,
    ContentInvalidId = 106,
    ContentPhysicalFileDeletionError = 107,
    ContentPhysicalFileCreationError = 108,
    ContentPerforceSubmissionError = 109,
    ContentPerforceInitializationError = 110,
    ContentDeploymentPackageNotReadyError = 111,
    ContentUploadFailed = 112,
    ContentTooManyResults = 113,
    ContentInvalidState = 115,
    ContentNavigationParentNotFound = 116,
    ContentNavigationParentUpdateError = 117,
    DeploymentPackageNotEditable = 118,
    ContentValidationError = 119,
    ContentPropertiesValidationError = 120,
    ContentTypeNotFound = 121,
    DeploymentPackageNotFound = 122,
    ContentSearchInvalidParameters = 123,
    ContentItemPropertyAggregationError = 124,
    DeploymentPackageFileNotFound = 125,
    ContentPerforceFileHistoryNotFound = 126,
    ContentAssetZipCreationFailure = 127,
    ContentAssetZipCreationBusy = 128,
    ContentProjectNotFound = 129,
    ContentFolderNotFound = 130,
    ContentPackagesInconsistent = 131,
    ContentPackagesInvalidState = 132,
    ContentPackagesInconsistentType = 133,
    ContentCannotDeletePackage = 134,
    ContentLockedForChanges = 135,
    ContentFileUploadFailed = 136,
    ContentNotReviewed = 137,
    ContentPermissionDenied = 138,
    ContentInvalidExternalUrl = 139,
    ContentExternalFileCannotBeImportedLocally = 140,
    ContentTagSaveFailure = 141,
    ContentPerforceUnmatchedFileError = 142,
    ContentPerforceChangelistResultNotFound = 143,
    ContentPerforceChangelistFileItemsNotFound = 144,
    ContentPerforceInvalidRevisionError = 145,
    ContentUnloadedSaveResult = 146,
    ContentPropertyInvalidNumber = 147,
    ContentPropertyInvalidUrl = 148,
    ContentPropertyInvalidDate = 149,
    ContentPropertyInvalidSet = 150,
    ContentPropertyCannotDeserialize = 151,
    ContentRegexValidationFailOnProperty = 152,
    ContentMaxLengthFailOnProperty = 153,
    ContentPropertyUnexpectedDeserializationError = 154,
    ContentPropertyRequired = 155,
    ContentCannotCreateFile = 156,
    ContentInvalidMigrationFile = 157,
    ContentMigrationAlteringProcessedItem = 158,
    ContentPropertyDefinitionNotFound = 159,
    ContentReviewDataChanged = 160,
    ContentRollbackRevisionNotInPackage = 161,
    ContentItemNotBasedOnLatestRevision = 162,
    ContentUnauthorized = 163,
    ContentCannotCreateDeploymentPackage = 164,
    ContentUserNotFound = 165,
    ContentLocalePermissionDenied = 166,
    ContentInvalidLinkToInternalEnvironment = 167,
    ContentInvalidBlacklistedContent = 168,
    ContentMacroMalformedNoContentId = 169,
    ContentMacroMalformedNoTemplateType = 170,
    ContentIllegalBNetMembershipId = 171,
    ContentLocaleDidNotMatchExpected = 172,
    ContentBabelCallFailed = 173,
    ContentEnglishPostLiveForbidden = 174,
    ContentLocaleEditPermissionDenied = 175,
    ContentStackUnknownError = 176,
    ContentStackNotFound = 177,
    ContentStackRateLimited = 178,
    ContentStackTimeout = 179,
    ContentStackServiceError = 180,
    ContentStackDeserializationFailure = 181,
    UserNonUniqueName = 200,
    UserManualLinkingStepRequired = 201,
    UserCreateUnknownSqlResult = 202,
    UserCreateUnknownSqlException = 203,
    UserMalformedMembershipId = 204,
    UserCannotFindRequestedUser = 205,
    UserCannotLoadAccountCredentialLinkInfo = 206,
    UserInvalidMobileAppType = 207,
    UserMissingMobilePairingInfo = 208,
    UserCannotGenerateMobileKeyWhileUsingMobileCredential = 209,
    UserGenerateMobileKeyExistingSlotCollision = 210,
    UserDisplayNameMissingOrInvalid = 211,
    UserCannotLoadAccountProfileData = 212,
    UserCannotSaveUserProfileData = 213,
    UserEmailMissingOrInvalid = 214,
    UserTermsOfUseRequired = 215,
    UserCannotCreateNewAccountWhileLoggedIn = 216,
    UserCannotResolveCentralAccount = 217,
    UserInvalidAvatar = 218,
    UserMissingCreatedUserResult = 219,
    UserCannotChangeUniqueNameYet = 220,
    UserCannotChangeDisplayNameYet = 221,
    UserCannotChangeEmail = 222,
    UserUniqueNameMustStartWithLetter = 223,
    UserNoLinkedAccountsSupportFriendListings = 224,
    UserAcknowledgmentTableFull = 225,
    UserCreationDestinyMembershipRequired = 226,
    UserFriendsTokenNeedsRefresh = 227,
    UserEmailValidationUnknown = 228,
    UserEmailValidationLimit = 229,
    TransactionEmailSendFailure = 230,
    MailHookPermissionFailure = 231,
    MailServiceRateLimit = 232,
    UserEmailMustBeVerified = 233,
    UserMustAllowCustomerServiceEmails = 234,
    NonTransactionalEmailSendFailure = 235,
    UnknownErrorSettingGlobalDisplayName = 236,
    DuplicateGlobalDisplayName = 237,
    ErrorRunningNameValidationChecks = 238,
    ErrorDatabaseGlobalName = 239,
    ErrorNoAvailableNameChanges = 240,
    ErrorNameAlreadySetToInput = 241,
    MessagingUnknownError = 300,
    MessagingSelfError = 301,
    MessagingSendThrottle = 302,
    MessagingNoBody = 303,
    MessagingTooManyUsers = 304,
    MessagingCanNotLeaveConversation = 305,
    MessagingUnableToSend = 306,
    MessagingDeletedUserForbidden = 307,
    MessagingCannotDeleteExternalConversation = 308,
    MessagingGroupChatDisabled = 309,
    MessagingMustIncludeSelfInPrivateMessage = 310,
    MessagingSenderIsBanned = 311,
    MessagingGroupOptionalChatExceededMaximum = 312,
    PrivateMessagingRequiresDestinyMembership = 313,
    AddSurveyAnswersUnknownSqlException = 400,
    ForumBodyCannotBeEmpty = 500,
    ForumSubjectCannotBeEmptyOnTopicPost = 501,
    ForumCannotLocateParentPost = 502,
    ForumThreadLockedForReplies = 503,
    ForumUnknownSqlResultDuringCreatePost = 504,
    ForumUnknownTagCreationError = 505,
    ForumUnknownSqlResultDuringTagItem = 506,
    ForumUnknownExceptionCreatePost = 507,
    ForumQuestionMustBeTopicPost = 508,
    ForumExceptionDuringTagSearch = 509,
    ForumExceptionDuringTopicRetrieval = 510,
    ForumAliasedTagError = 511,
    ForumCannotLocateThread = 512,
    ForumUnknownExceptionEditPost = 513,
    ForumCannotLocatePost = 514,
    ForumUnknownExceptionGetOrCreateTags = 515,
    ForumEditPermissionDenied = 516,
    ForumUnknownSqlResultDuringTagIdRetrieval = 517,
    ForumCannotGetRating = 518,
    ForumUnknownExceptionGetRating = 519,
    ForumRatingsAccessError = 520,
    ForumRelatedPostAccessError = 521,
    ForumLatestReplyAccessError = 522,
    ForumUserStatusAccessError = 523,
    ForumAuthorAccessError = 524,
    ForumGroupAccessError = 525,
    ForumUrlExpectedButMissing = 526,
    ForumRepliesCannotBeEmpty = 527,
    ForumRepliesCannotBeInDifferentGroups = 528,
    ForumSubTopicCannotBeCreatedAtThisThreadLevel = 529,
    ForumCannotCreateContentTopic = 530,
    ForumTopicDoesNotExist = 531,
    ForumContentCommentsNotAllowed = 532,
    ForumUnknownSqlResultDuringEditPost = 533,
    ForumUnknownSqlResultDuringGetPost = 534,
    ForumPostValidationBadUrl = 535,
    ForumBodyTooLong = 536,
    ForumSubjectTooLong = 537,
    ForumAnnouncementNotAllowed = 538,
    ForumCannotShareOwnPost = 539,
    ForumEditNoOp = 540,
    ForumUnknownDatabaseErrorDuringGetPost = 541,
    ForumExceeedMaximumRowLimit = 542,
    ForumCannotSharePrivatePost = 543,
    ForumCannotCrossPostBetweenGroups = 544,
    ForumIncompatibleCategories = 555,
    ForumCannotUseTheseCategoriesOnNonTopicPost = 556,
    ForumCanOnlyDeleteTopics = 557,
    ForumDeleteSqlException = 558,
    ForumDeleteSqlUnknownResult = 559,
    ForumTooManyTags = 560,
    ForumCanOnlyRateTopics = 561,
    ForumBannedPostsCannotBeEdited = 562,
    ForumThreadRootIsBanned = 563,
    ForumCannotUseOfficialTagCategoryAsTag = 564,
    ForumAnswerCannotBeMadeOnCreatePost = 565,
    ForumAnswerCannotBeMadeOnEditPost = 566,
    ForumAnswerPostIdIsNotADirectReplyOfQuestion = 567,
    ForumAnswerTopicIdIsNotAQuestion = 568,
    ForumUnknownExceptionDuringMarkAnswer = 569,
    ForumUnknownSqlResultDuringMarkAnswer = 570,
    ForumCannotRateYourOwnPosts = 571,
    ForumPollsMustBeTheFirstPostInTopic = 572,
    ForumInvalidPollInput = 573,
    ForumGroupAdminEditNonMember = 574,
    ForumCannotEditModeratorEditedPost = 575,
    ForumRequiresDestinyMembership = 576,
    ForumUnexpectedError = 577,
    ForumAgeLock = 578,
    ForumMaxPages = 579,
    ForumMaxPagesOldestFirst = 580,
    ForumCannotApplyForumIdWithoutTags = 581,
    ForumCannotApplyForumIdToNonTopics = 582,
    ForumCannotDownvoteCommunityCreations = 583,
    ForumTopicsMustHaveOfficialCategory = 584,
    ForumRecruitmentTopicMalformed = 585,
    ForumRecruitmentTopicNotFound = 586,
    ForumRecruitmentTopicNoSlotsRemaining = 587,
    ForumRecruitmentTopicKickBan = 588,
    ForumRecruitmentTopicRequirementsNotMet = 589,
    ForumRecruitmentTopicNoPlayers = 590,
    ForumRecruitmentApproveFailMessageBan = 591,
    ForumRecruitmentGlobalBan = 592,
    ForumUserBannedFromThisTopic = 593,
    ForumRecruitmentFireteamMembersOnly = 594,
    ForumRequiresDestiny2Progress = 595,
    ForumRequiresDestiny2EntitlementPurchase = 596,
    GroupMembershipApplicationAlreadyResolved = 601,
    GroupMembershipAlreadyApplied = 602,
    GroupMembershipInsufficientPrivileges = 603,
    GroupIdNotReturnedFromCreation = 604,
    GroupSearchInvalidParameters = 605,
    GroupMembershipPendingApplicationNotFound = 606,
    GroupInvalidId = 607,
    GroupInvalidMembershipId = 608,
    GroupInvalidMembershipType = 609,
    GroupMissingTags = 610,
    GroupMembershipNotFound = 611,
    GroupInvalidRating = 612,
    GroupUserFollowingAccessError = 613,
    GroupUserMembershipAccessError = 614,
    GroupCreatorAccessError = 615,
    GroupAdminAccessError = 616,
    GroupPrivatePostNotViewable = 617,
    GroupMembershipNotLoggedIn = 618,
    GroupNotDeleted = 619,
    GroupUnknownErrorUndeletingGroup = 620,
    GroupDeleted = 621,
    GroupNotFound = 622,
    GroupMemberBanned = 623,
    GroupMembershipClosed = 624,
    GroupPrivatePostOverrideError = 625,
    GroupNameTaken = 626,
    GroupDeletionGracePeriodExpired = 627,
    GroupCannotCheckBanStatus = 628,
    GroupMaximumMembershipCountReached = 629,
    NoDestinyAccountForClanPlatform = 630,
    AlreadyRequestingMembershipForClanPlatform = 631,
    AlreadyClanMemberOnPlatform = 632,
    GroupJoinedCannotSetClanName = 633,
    GroupLeftCannotClearClanName = 634,
    GroupRelationshipRequestPending = 635,
    GroupRelationshipRequestBlocked = 636,
    GroupRelationshipRequestNotFound = 637,
    GroupRelationshipBlockNotFound = 638,
    GroupRelationshipNotFound = 639,
    GroupAlreadyAllied = 641,
    GroupAlreadyMember = 642,
    GroupRelationshipAlreadyExists = 643,
    InvalidGroupTypesForRelationshipRequest = 644,
    GroupAtMaximumAlliances = 646,
    GroupCannotSetClanOnlySettings = 647,
    ClanCannotSetTwoDefaultPostTypes = 648,
    GroupMemberInvalidMemberType = 649,
    GroupInvalidPlatformType = 650,
    GroupMemberInvalidSort = 651,
    GroupInvalidResolveState = 652,
    ClanAlreadyEnabledForPlatform = 653,
    ClanNotEnabledForPlatform = 654,
    ClanEnabledButCouldNotJoinNoAccount = 655,
    ClanEnabledButCouldNotJoinAlreadyMember = 656,
    ClanCannotJoinNoCredential = 657,
    NoClanMembershipForPlatform = 658,
    GroupToGroupFollowLimitReached = 659,
    ChildGroupAlreadyInAlliance = 660,
    OwnerGroupAlreadyInAlliance = 661,
    AllianceOwnerCannotJoinAlliance = 662,
    GroupNotInAlliance = 663,
    ChildGroupCannotInviteToAlliance = 664,
    GroupToGroupAlreadyFollowed = 665,
    GroupToGroupNotFollowing = 666,
    ClanMaximumMembershipReached = 667,
    ClanNameNotValid = 668,
    ClanNameNotValidError = 669,
    AllianceOwnerNotDefined = 670,
    AllianceChildNotDefined = 671,
    ClanCultureIllegalCharacters = 672,
    ClanTagIllegalCharacters = 673,
    ClanRequiresInvitation = 674,
    ClanMembershipClosed = 675,
    ClanInviteAlreadyMember = 676,
    GroupInviteAlreadyMember = 677,
    GroupJoinApprovalRequired = 678,
    ClanTagRequired = 679,
    GroupNameCannotStartOrEndWithWhiteSpace = 680,
    ClanCallsignCannotStartOrEndWithWhiteSpace = 681,
    ClanMigrationFailed = 682,
    ClanNotEnabledAlreadyMemberOfAnotherClan = 683,
    GroupModerationNotPermittedOnNonMembers = 684,
    ClanCreationInWorldServerFailed = 685,
    ClanNotFound = 686,
    ClanMembershipLevelDoesNotPermitThatAction = 687,
    ClanMemberNotFound = 688,
    ClanMissingMembershipApprovers = 689,
    ClanInWrongStateForRequestedAction = 690,
    ClanNameAlreadyUsed = 691,
    ClanTooFewMembers = 692,
    ClanInfoCannotBeWhitespace = 693,
    GroupCultureThrottle = 694,
    ClanTargetDisallowsInvites = 695,
    ClanInvalidOperation = 696,
    ClanFounderCannotLeaveWithoutAbdication = 697,
    ClanNameReserved = 698,
    ClanApplicantInClanSoNowInvited = 699,
    ActivitiesUnknownException = 701,
    ActivitiesParameterNull = 702,
    ActivityCountsDiabled = 703,
    ActivitySearchInvalidParameters = 704,
    ActivityPermissionDenied = 705,
    ShareAlreadyShared = 706,
    ActivityLoggingDisabled = 707,
    ClanRequiresExistingDestinyAccount = 750,
    ClanNameRestricted = 751,
    ClanCreationBan = 752,
    ClanCreationTenureRequirementsNotMet = 753,
    ItemAlreadyFollowed = 801,
    ItemNotFollowed = 802,
    CannotFollowSelf = 803,
    GroupFollowLimitExceeded = 804,
    TagFollowLimitExceeded = 805,
    UserFollowLimitExceeded = 806,
    FollowUnsupportedEntityType = 807,
    NoValidTagsInList = 900,
    BelowMinimumSuggestionLength = 901,
    CannotGetSuggestionsOnMultipleTagsSimultaneously = 902,
    NotAValidPartialTag = 903,
    TagSuggestionsUnknownSqlResult = 904,
    TagsUnableToLoadPopularTagsFromDatabase = 905,
    TagInvalid = 906,
    TagNotFound = 907,
    SingleTagExpected = 908,
    TagsExceededMaximumPerItem = 909,
    IgnoreInvalidParameters = 1000,
    IgnoreSqlException = 1001,
    IgnoreErrorRetrievingGroupPermissions = 1002,
    IgnoreErrorInsufficientPermission = 1003,
    IgnoreErrorRetrievingItem = 1004,
    IgnoreCannotIgnoreSelf = 1005,
    IgnoreIllegalType = 1006,
    IgnoreNotFound = 1007,
    IgnoreUserGloballyIgnored = 1008,
    IgnoreUserIgnored = 1009,
    TargetUserIgnored = 1010,
    NotificationSettingInvalid = 1100,
    PsnApiExpiredAccessToken = 1204,
    PSNExForbidden = 1205,
    PSNExSystemDisabled = 1218,
    PsnApiErrorCodeUnknown = 1223,
    PsnApiErrorWebException = 1224,
    PsnApiBadRequest = 1225,
    PsnApiAccessTokenRequired = 1226,
    PsnApiInvalidAccessToken = 1227,
    PsnApiBannedUser = 1229,
    PsnApiAccountUpgradeRequired = 1230,
    PsnApiServiceTemporarilyUnavailable = 1231,
    PsnApiServerBusy = 1232,
    PsnApiUnderMaintenance = 1233,
    PsnApiProfileUserNotFound = 1234,
    PsnApiProfilePrivacyRestriction = 1235,
    PsnApiProfileUnderMaintenance = 1236,
    PsnApiAccountAttributeMissing = 1237,
    PsnApiNoPermission = 1238,
    PsnApiTargetUserBlocked = 1239,
    PsnApiJwksMissing = 1240,
    PsnApiJwtMalformedHeader = 1241,
    PsnApiJwtMalformedPayload = 1242,
    XblExSystemDisabled = 1300,
    XblExUnknownError = 1301,
    XblApiErrorWebException = 1302,
    XblStsTokenInvalid = 1303,
    XblStsMissingToken = 1304,
    XblStsExpiredToken = 1305,
    XblAccessToTheSandboxDenied = 1306,
    XblMsaResponseMissing = 1307,
    XblMsaAccessTokenExpired = 1308,
    XblMsaInvalidRequest = 1309,
    XblMsaFriendsRequireSignIn = 1310,
    XblUserActionRequired = 1311,
    XblParentalControls = 1312,
    XblDeveloperAccount = 1313,
    XblUserTokenExpired = 1314,
    XblUserTokenInvalid = 1315,
    XblOffline = 1316,
    XblUnknownErrorCode = 1317,
    XblMsaInvalidGrant = 1318,
    ReportNotYetResolved = 1400,
    ReportOverturnDoesNotChangeDecision = 1401,
    ReportNotFound = 1402,
    ReportAlreadyReported = 1403,
    ReportInvalidResolution = 1404,
    ReportNotAssignedToYou = 1405,
    LegacyGameStatsSystemDisabled = 1500,
    LegacyGameStatsUnknownError = 1501,
    LegacyGameStatsMalformedSneakerNetCode = 1502,
    DestinyAccountAcquisitionFailure = 1600,
    DestinyAccountNotFound = 1601,
    DestinyBuildStatsDatabaseError = 1602,
    DestinyCharacterStatsDatabaseError = 1603,
    DestinyPvPStatsDatabaseError = 1604,
    DestinyPvEStatsDatabaseError = 1605,
    DestinyGrimoireStatsDatabaseError = 1606,
    DestinyStatsParameterMembershipTypeParseError = 1607,
    DestinyStatsParameterMembershipIdParseError = 1608,
    DestinyStatsParameterRangeParseError = 1609,
    DestinyStringItemHashNotFound = 1610,
    DestinyStringSetNotFound = 1611,
    DestinyContentLookupNotFoundForKey = 1612,
    DestinyContentItemNotFound = 1613,
    DestinyContentSectionNotFound = 1614,
    DestinyContentPropertyNotFound = 1615,
    DestinyContentConfigNotFound = 1616,
    DestinyContentPropertyBucketValueNotFound = 1617,
    DestinyUnexpectedError = 1618,
    DestinyInvalidAction = 1619,
    DestinyCharacterNotFound = 1620,
    DestinyInvalidFlag = 1621,
    DestinyInvalidRequest = 1622,
    DestinyItemNotFound = 1623,
    DestinyInvalidCustomizationChoices = 1624,
    DestinyVendorItemNotFound = 1625,
    DestinyInternalError = 1626,
    DestinyVendorNotFound = 1627,
    DestinyRecentActivitiesDatabaseError = 1628,
    DestinyItemBucketNotFound = 1629,
    DestinyInvalidMembershipType = 1630,
    DestinyVersionIncompatibility = 1631,
    DestinyItemAlreadyInInventory = 1632,
    DestinyBucketNotFound = 1633,
    /**
     * Note: This is one of those holdovers from Destiny 1. We didn't change the enum
     * because I am lazy, but in Destiny 2 this would read "
     * DestinyCharacterNotInSocialSpace"
    */
    DestinyCharacterNotInTower = 1634,
    DestinyCharacterNotLoggedIn = 1635,
    DestinyDefinitionsNotLoaded = 1636,
    DestinyInventoryFull = 1637,
    DestinyItemFailedLevelCheck = 1638,
    DestinyItemFailedUnlockCheck = 1639,
    DestinyItemUnequippable = 1640,
    DestinyItemUniqueEquipRestricted = 1641,
    DestinyNoRoomInDestination = 1642,
    DestinyServiceFailure = 1643,
    DestinyServiceRetired = 1644,
    DestinyTransferFailed = 1645,
    DestinyTransferNotFoundForSourceBucket = 1646,
    DestinyUnexpectedResultInVendorTransferCheck = 1647,
    DestinyUniquenessViolation = 1648,
    DestinyErrorDeserializationFailure = 1649,
    DestinyValidAccountTicketRequired = 1650,
    DestinyShardRelayClientTimeout = 1651,
    DestinyShardRelayProxyTimeout = 1652,
    DestinyPGCRNotFound = 1653,
    DestinyAccountMustBeOffline = 1654,
    DestinyCanOnlyEquipInGame = 1655,
    DestinyCannotPerformActionOnEquippedItem = 1656,
    DestinyQuestAlreadyCompleted = 1657,
    DestinyQuestAlreadyTracked = 1658,
    DestinyTrackableQuestsFull = 1659,
    DestinyItemNotTransferrable = 1660,
    DestinyVendorPurchaseNotAllowed = 1661,
    DestinyContentVersionMismatch = 1662,
    DestinyItemActionForbidden = 1663,
    DestinyRefundInvalid = 1664,
    DestinyPrivacyRestriction = 1665,
    DestinyActionInsufficientPrivileges = 1666,
    DestinyInvalidClaimException = 1667,
    DestinyLegacyPlatformRestricted = 1668,
    DestinyLegacyPlatformInUse = 1669,
    DestinyLegacyPlatformInaccessible = 1670,
    DestinyCannotPerformActionAtThisLocation = 1671,
    DestinyThrottledByGameServer = 1672,
    DestinyItemNotTransferrableHasSideEffects = 1673,
    DestinyItemLocked = 1674,
    DestinyCannotAffordMaterialRequirements = 1675,
    DestinyFailedPlugInsertionRules = 1676,
    DestinySocketNotFound = 1677,
    DestinySocketActionNotAllowed = 1678,
    DestinySocketAlreadyHasPlug = 1679,
    DestinyPlugItemNotAvailable = 1680,
    DestinyCharacterLoggedInNotAllowed = 1681,
    DestinyPublicAccountNotAccessible = 1682,
    DestinyClaimsItemAlreadyClaimed = 1683,
    DestinyClaimsNoInventorySpace = 1684,
    DestinyClaimsRequiredLevelNotMet = 1685,
    DestinyClaimsInvalidState = 1686,
    DestinyNotEnoughRoomForMultipleRewards = 1687,
    DestinyDirectBabelClientTimeout = 1688,
    FbInvalidRequest = 1800,
    FbRedirectMismatch = 1801,
    FbAccessDenied = 1802,
    FbUnsupportedResponseType = 1803,
    FbInvalidScope = 1804,
    FbUnsupportedGrantType = 1805,
    FbInvalidGrant = 1806,
    InvitationExpired = 1900,
    InvitationUnknownType = 1901,
    InvitationInvalidResponseStatus = 1902,
    InvitationInvalidType = 1903,
    InvitationAlreadyPending = 1904,
    InvitationInsufficientPermission = 1905,
    InvitationInvalidCode = 1906,
    InvitationInvalidTargetState = 1907,
    InvitationCannotBeReactivated = 1908,
    InvitationNoRecipients = 1910,
    InvitationGroupCannotSendToSelf = 1911,
    InvitationTooManyRecipients = 1912,
    InvitationInvalid = 1913,
    InvitationNotFound = 1914,
    TokenInvalid = 2000,
    TokenBadFormat = 2001,
    TokenAlreadyClaimed = 2002,
    TokenAlreadyClaimedSelf = 2003,
    TokenThrottling = 2004,
    TokenUnknownRedemptionFailure = 2005,
    TokenPurchaseClaimFailedAfterTokenClaimed = 2006,
    TokenUserAlreadyOwnsOffer = 2007,
    TokenInvalidOfferKey = 2008,
    TokenEmailNotValidated = 2009,
    TokenProvisioningBadVendorOrOffer = 2010,
    TokenPurchaseHistoryUnknownError = 2011,
    TokenThrottleStateUnknownError = 2012,
    TokenUserAgeNotVerified = 2013,
    TokenExceededOfferMaximum = 2014,
    TokenNoAvailableUnlocks = 2015,
    TokenMarketplaceInvalidPlatform = 2016,
    TokenNoMarketplaceCodesFound = 2017,
    TokenOfferNotAvailableForRedemption = 2018,
    TokenUnlockPartialFailure = 2019,
    TokenMarketplaceInvalidRegion = 2020,
    TokenOfferExpired = 2021,
    RAFExceededMaximumReferrals = 2022,
    RAFDuplicateBond = 2023,
    RAFNoValidVeteranDestinyMembershipsFound = 2024,
    RAFNotAValidVeteranUser = 2025,
    RAFCodeAlreadyClaimedOrNotFound = 2026,
    RAFMismatchedDestinyMembershipType = 2027,
    RAFUnableToAccessPurchaseHistory = 2028,
    RAFUnableToCreateBond = 2029,
    RAFUnableToFindBond = 2030,
    RAFUnableToRemoveBond = 2031,
    RAFCannotBondToSelf = 2032,
    RAFInvalidPlatform = 2033,
    RAFGenerateThrottled = 2034,
    RAFUnableToCreateBondVersionMismatch = 2035,
    RAFUnableToRemoveBondVersionMismatch = 2036,
    RAFRedeemThrottled = 2037,
    NoAvailableDiscountCode = 2038,
    DiscountAlreadyClaimed = 2039,
    DiscountClaimFailure = 2040,
    DiscountConfigurationFailure = 2041,
    DiscountGenerationFailure = 2042,
    DiscountAlreadyExists = 2043,
    TokenRequiresCredentialXuid = 2044,
    TokenRequiresCredentialPsnid = 2045,
    OfferRequired = 2046,
    UnknownEververseHistoryError = 2047,
    MissingEververseHistoryError = 2048,
    BungieRewardEmailStateInvalid = 2049,
    BungieRewardNotYetClaimable = 2050,
    MissingOfferConfig = 2051,
    RAFQuestEntitlementRequiresBnet = 2052,
    RAFQuestEntitlementTransportFailure = 2053,
    RAFQuestEntitlementUnknownFailure = 2054,
    RAFVeteranRewardUnknownFailure = 2055,
    RAFTooEarlyToCancelBond = 2056,
    LoyaltyRewardAlreadyRedeemed = 2057,
    UnclaimedLoyaltyRewardEntryNotFound = 2058,
    PartnerOfferPartialFailure = 2059,
    PartnerOfferAlreadyClaimed = 2060,
    PartnerOfferSkuNotFound = 2061,
    PartnerOfferSkuExpired = 2062,
    PartnerOfferPermissionFailure = 2063,
    PartnerOfferNoDestinyAccount = 2064,
    PartnerOfferApplyDataNotFound = 2065,
    ApiExceededMaxKeys = 2100,
    ApiInvalidOrExpiredKey = 2101,
    ApiKeyMissingFromRequest = 2102,
    ApplicationDisabled = 2103,
    ApplicationExceededMax = 2104,
    ApplicationDisallowedByScope = 2105,
    AuthorizationCodeInvalid = 2106,
    OriginHeaderDoesNotMatchKey = 2107,
    AccessNotPermittedByApplicationScope = 2108,
    ApplicationNameIsTaken = 2109,
    RefreshTokenNotYetValid = 2110,
    AccessTokenHasExpired = 2111,
    ApplicationTokenFormatNotValid = 2112,
    ApplicationNotConfiguredForBungieAuth = 2113,
    ApplicationNotConfiguredForOAuth = 2114,
    OAuthAccessTokenExpired = 2115,
    ApplicationTokenKeyIdDoesNotExist = 2116,
    ProvidedTokenNotValidRefreshToken = 2117,
    RefreshTokenExpired = 2118,
    AuthorizationRecordInvalid = 2119,
    TokenPreviouslyRevoked = 2120,
    TokenInvalidMembership = 2121,
    AuthorizationCodeStale = 2122,
    AuthorizationRecordExpired = 2123,
    AuthorizationRecordRevoked = 2124,
    AuthorizationRecordInactiveApiKey = 2125,
    AuthorizationRecordApiKeyMatching = 2126,
    PartnershipInvalidType = 2200,
    PartnershipValidationError = 2201,
    PartnershipValidationTimeout = 2202,
    PartnershipAccessFailure = 2203,
    PartnershipAccountInvalid = 2204,
    PartnershipGetAccountInfoFailure = 2205,
    PartnershipDisabled = 2206,
    PartnershipAlreadyExists = 2207,
    CommunityStreamingUnavailable = 2300,
    TwitchNotLinked = 2500,
    TwitchAccountNotFound = 2501,
    TwitchCouldNotLoadDestinyInfo = 2502,
    TwitchCouldNotRegisterUser = 2503,
    TwitchCouldNotUnregisterUser = 2504,
    TwitchRequiresRelinking = 2505,
    TwitchNoPlatformChosen = 2506,
    TwitchDropHistoryPermissionFailure = 2507,
    TwitchDropsRepairPartialFailure = 2508,
    TrendingCategoryNotFound = 2600,
    TrendingEntryTypeNotSupported = 2601,
    ReportOffenderNotInPgcr = 2700,
    ReportRequestorNotInPgcr = 2701,
    ReportSubmissionFailed = 2702,
    ReportCannotReportSelf = 2703,
    AwaTypeDisabled = 2800,
    AwaTooManyPendingRequests = 2801,
    AwaTheFeatureRequiresARegisteredDevice = 2802,
    AwaRequestWasUnansweredForTooLong = 2803,
    AwaWriteRequestMissingOrInvalidToken = 2804,
    AwaWriteRequestTokenExpired = 2805,
    AwaWriteRequestTokenUsageLimitReached = 2806,
    SteamWebApiError = 2900,
    SteamWebNullResponseError = 2901,
    SteamAccountRequired = 2902,
    SteamNotAuthorized = 2903,
    ClanFireteamNotFound = 3000,
    ClanFireteamAddNoAlternatesForImmediate = 3001,
    ClanFireteamFull = 3002,
    ClanFireteamAltFull = 3003,
    ClanFireteamBlocked = 3004,
    ClanFireteamPlayerEntryNotFound = 3005,
    ClanFireteamPermissions = 3006,
    ClanFireteamInvalidPlatform = 3007,
    ClanFireteamCannotAdjustSlotCount = 3008,
    ClanFireteamInvalidPlayerPlatform = 3009,
    ClanFireteamNotReadyForInvitesNotEnoughPlayers = 3010,
    ClanFireteamGameInvitesNotSupportForPlatform = 3011,
    ClanFireteamPlatformInvitePreqFailure = 3012,
    ClanFireteamInvalidAuthContext = 3013,
    ClanFireteamInvalidAuthProviderPsn = 3014,
    ClanFireteamPs4SessionFull = 3015,
    ClanFireteamInvalidAuthToken = 3016,
    ClanFireteamScheduledFireteamsDisabled = 3017,
    ClanFireteamNotReadyForInvitesNotScheduledYet = 3018,
    ClanFireteamNotReadyForInvitesClosed = 3019,
    ClanFireteamScheduledFireteamsRequireAdminPermissions = 3020,
    ClanFireteamNonPublicMustHaveClan = 3021,
    ClanFireteamPublicCreationRestriction = 3022,
    ClanFireteamAlreadyJoined = 3023,
    ClanFireteamScheduledFireteamsRange = 3024,
    ClanFireteamPublicCreationRestrictionExtended = 3025,
    ClanFireteamExpired = 3026,
    ClanFireteamInvalidAuthProvider = 3027,
    ClanFireteamInvalidAuthProviderXuid = 3028,
    ClanFireteamThrottle = 3029,
    ClanFireteamTooManyOpenScheduledFireteams = 3030,
    ClanFireteamCannotReopenScheduledFireteams = 3031,
    ClanFireteamJoinNoAccountSpecified = 3032,
    ClanFireteamMinDestiny2ProgressForCreation = 3033,
    ClanFireteamMinDestiny2ProgressForJoin = 3034,
    ClanFireteamSMSOrPurchaseRequiredCreate = 3035,
    ClanFireteamPurchaseRequiredCreate = 3036,
    ClanFireteamSMSOrPurchaseRequiredJoin = 3037,
    ClanFireteamPurchaseRequiredJoin = 3038,
    CrossSaveOverriddenAccountNotFound = 3200,
    CrossSaveTooManyOverriddenPlatforms = 3201,
    CrossSaveNoOverriddenPlatforms = 3202,
    CrossSavePrimaryAccountNotFound = 3203,
    CrossSaveRequestInvalid = 3204,
    CrossSaveBungieAccountValidationFailure = 3206,
    CrossSaveOverriddenPlatformNotAllowed = 3207,
    CrossSaveThresholdExceeded = 3208,
    CrossSaveIncompatibleMembershipType = 3209,
    CrossSaveCouldNotFindLinkedAccountForMembershipType = 3210,
    CrossSaveCouldNotCreateDestinyProfileForMembershipType = 3211,
    CrossSaveErrorCreatingDestinyProfileForMembershipType = 3212,
    CrossSaveCannotOverrideSelf = 3213,
    CrossSaveRecentSilverPurchase = 3214,
    CrossSaveSilverBalanceNegative = 3215,
    CrossSaveAccountNotAuthenticated = 3216,
    ErrorOneAccountAlreadyActive = 3217,
    ErrorOneAccountDestinyRestriction = 3218,
    CrossSaveMustMigrateToSteam = 3219,
    CrossSaveSteamAlreadyPaired = 3220,
    CrossSaveCannotPairJustSteamAndBlizzard = 3221,
    CrossSaveCannotPairSteamAloneBeforeShadowkeep = 3222,
    AuthVerificationNotLinkedToAccount = 3300,
    PCMigrationMissingBlizzard = 3400,
    PCMigrationMissingSteam = 3401,
    PCMigrationInvalidBlizzard = 3402,
    PCMigrationInvalidSteam = 3403,
    PCMigrationUnknownFailure = 3404,
    PCMigrationUnknownException = 3405,
    PCMigrationNotLinked = 3406,
    PCMigrationAccountsAlreadyUsed = 3407,
    PCMigrationStepFailed = 3408,
    PCMigrationInvalidBlizzardCrossSaveState = 3409,
    PCMigrationDestinationBanned = 3410,
    PCMigrationDestinyFailure = 3411,
    PCMigrationSilverTransferFailed = 3412,
    PCMigrationEntitlementTransferFailed = 3413,
    PCMigrationCannotStompClanFounder = 3414,
    UnsupportedBrowser = 3500,
    StadiaAccountRequired = 3600,
    ErrorPhoneValidationTooManyUses = 3702,
    ErrorPhoneValidationNoAssociatedPhone = 3703,
    ErrorPhoneValidationCodeInvalid = 3705,
    ErrorPhoneValidationBanned = 3706,
    ErrorPhoneValidationCodeTooRecentlySent = 3707,
    ErrorPhoneValidationCodeExpired = 3708,
    ErrorPhoneValidationInvalidNumberType = 3709,
    ErrorPhoneValidationCodeTooRecentlyChecked = 3710,
    ApplePushErrorUnknown = 3800,
    ApplePushErrorNull = 3801,
    ApplePushErrorTimeout = 3802,
    ApplePushBadRequest = 3803,
    ApplePushFailedAuth = 3804,
    ApplePushThrottled = 3805,
    ApplePushServiceUnavailable = 3806,
    NotAnImageOrVideo = 3807,
    ErrorBungieFriendsBlockFailed = 3900,
    ErrorBungieFriendsAutoReject = 3901,
    ErrorBungieFriendsNoRequestFound = 3902,
    ErrorBungieFriendsAlreadyFriends = 3903,
    ErrorBungieFriendsUnableToRemoveRequest = 3904,
    ErrorBungieFriendsUnableToRemove = 3905,
    ErrorBungieFriendsIdenticalSourceTarget = 3906,
    ErrorBungieFriendsSelf = 3907,
    ErrorBungieBlockSelf = 3908,
    ErrorBungieFriendsListFull = 3910,
    ErrorBungieBlockListFull = 3911,
    ErrorEgsUnknown = 4000,
    ErrorEgsBadRequest = 4001,
    ErrorEgsNotAuthorized = 4002,
    ErrorEgsForbidden = 4003,
    ErrorEgsAccountNotFound = 4004,
    ErrorEgsWebException = 4005,
    ErrorEgsUnavailable = 4006,
    ErrorEgsJwksMissing = 4007,
    ErrorEgsJwtMalformedHeader = 4008,
    ErrorEgsJwtMalformedPayload = 4009
}
