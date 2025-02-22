import { mapObject } from "@polkadot-api/utils"

export type KnownTypes = Record<
  string,
  {
    name: string
    priority: number
  }
>

type RepositoryEntry =
  | string
  | {
      name: string
      paths?: string[]
      type?: string
      chains?: string
      priority?: number
    }

export const knownTypesRepository: Record<string, RepositoryEntry> = {
  "1078dp8vlrjh3": {
    name: "SessionEvent",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["pallet_session.pallet.Event"],
    type: "Enum(NewSession)",
  },
  "11avansl9buvp": {
    name: "XcmV2MultiassetAssetInstance",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["xcm.v2.multiasset.AssetInstance"],
    type: "Enum(Undefined, Index, Array4, Array8, Array16, Array32, Blob)",
  },
  "129huic8ces20": {
    name: "CandidateEvent",
    chains: "polkadot, kusama, paseo",
    paths: ["polkadot_primitives.v7.CandidateEvent"],
    type: "Enum(CandidateBacked, CandidateIncluded, CandidateTimedOut)",
  },
  "14qmevhulqskl": {
    name: "NominationPoolsEvent",
    chains: "polkadot, kusama, paseo",
    paths: ["pallet_nomination_pools.pallet.Event"],
    type: "Enum(Created, Bonded, PaidOut, Unbonded, Withdrawn, Destroyed, StateChanged, MemberRemoved, RolesUpdated, PoolSlashed, UnbondingPoolSlashed, PoolCommissionUpdated, PoolMaxCommissionUpdated, PoolCommissionChangeRateUpdated, PoolCommissionClaimPermissionUpdated, PoolCommissionClaimed, MinBalanceDeficitAdjusted, MinBalanceExcessAdjusted)",
  },
  "1e4e6h17tes8n": {
    name: "XcmV2MultiassetFungibility",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["xcm.v2.multiasset.Fungibility"],
    type: "Enum(Fungible, NonFungible)",
  },
  "1lanl0ouai2l7": {
    name: "NominationPoolsCommissionClaimPermission",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_nomination_pools.CommissionClaimPermission"],
    type: "Enum(Permissionless, Account)",
  },
  "1pil5vhej188n": {
    name: "CommonParasRegistrarEvent",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["polkadot_runtime_common.paras_registrar.pallet.Event"],
    type: "Enum(Registered, Deregistered, Reserved, Swapped)",
  },
  "1pja0i3r5p1gp": {
    name: "XcmPalletQueryStatus",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["pallet_xcm.pallet.QueryStatus"],
    type: "Enum(Pending, VersionNotifier, Ready)",
  },
  "1ra0103q36u4i": {
    name: "ElectionProviderMultiPhasePhase",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_election_provider_multi_phase.Phase"],
    type: "Enum(Off, Signed, Unsigned, Emergency)",
  },
  "1rjg0rh02tt4m": {
    name: "CommonCrowdloanLastContribution",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["polkadot_runtime_common.crowdloan.LastContribution"],
    type: "Enum(Never, PreEnding, Ending)",
  },
  "1tac42poi01n8": {
    name: "OffencesEvent",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_offences.pallet.Event"],
    type: "Enum(Offence)",
  },
  "22g1a3o3q475f": {
    name: "NominationPoolsPoolState",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_nomination_pools.PoolState"],
    type: "Enum(Open, Blocked, Destroying)",
  },
  "264i12ff5ltjn": {
    name: "MultiAddress",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["sp_runtime.multiaddress.MultiAddress"],
    type: "Enum(Id, Index, Raw, Address32, Address20)",
  },
  "29a9v38btsv3g": {
    name: "ParachainsInclusionUmpQueueId",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["polkadot_runtime_parachains.inclusion.UmpQueueId"],
    type: "Enum(Para)",
  },
  "2bvq1blgrln1s": {
    name: "NominationPoolsBondExtra",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_nomination_pools.BondExtra"],
    type: "Enum(FreeBalance, Rewards)",
  },
  "2dcitigd3tk41": {
    name: "XcmV2OriginKind",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["xcm.v2.OriginKind", "xcm.v3.OriginKind"],
    type: "Enum(Native, SovereignAccount, Superuser, Xcm)",
  },
  "2gj0h0im54fqd": {
    name: "PreimageRequestStatus",
    chains:
      "polkadot, polkadot.collectives, kusama, paseo, westend, westend.collectives",
    paths: ["pallet_preimage.RequestStatus"],
    type: "Enum(Unrequested, Requested)",
  },
  "2qbmdeolj2cue": {
    name: "BagsListEvent",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_bags_list.pallet.Event"],
    type: "Enum(Rebagged, ScoreUpdated)",
  },
  "2v2nj97k9o9e": {
    name: "CommonClaimsEvent",
    chains: "polkadot, kusama, paseo",
    paths: ["polkadot_runtime_common.claims.pallet.Event"],
    type: "Enum(Claimed)",
  },
  "302o6h1bqiqgu": {
    name: "PreimageEvent",
    chains:
      "polkadot, polkadot.collectives, kusama, paseo, westend, westend.collectives",
    paths: ["pallet_preimage.pallet.Event"],
    type: "Enum(Noted, Requested, Cleared)",
  },
  "30v4njes1avsr": {
    name: "XcmV2Response",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["xcm.v2.Response"],
    type: "Enum(Null, Assets, ExecutionResult, Version)",
  },
  "332pk9bjbk7p3": {
    name: "XcmV3MultiassetWildMultiAsset",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["xcm.v3.multiasset.WildMultiAsset"],
    type: "Enum(All, AllOf, AllCounted, AllOfCounted)",
  },
  "341grmvm6j3e5": {
    name: "ParachainsParasParaLifecycle",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["polkadot_runtime_parachains.paras.ParaLifecycle"],
    type: "Enum(Onboarding, Parathread, Parachain, UpgradingParathread, DowngradingParachain, OffboardingParathread, OffboardingParachain)",
  },
  "3bd4nvc4e2g3p": {
    name: "StakingEvent",
    chains: "polkadot, kusama, paseo",
    paths: ["pallet_staking.pallet.pallet.Event"],
    type: "Enum(EraPaid, Rewarded, Slashed, SlashReported, OldSlashingReportDiscarded, StakersElected, Bonded, Unbonded, Withdrawn, Kicked, StakingElectionFailed, Chilled, PayoutStarted, ValidatorPrefsSet, SnapshotVotersSizeExceeded, SnapshotTargetsSizeExceeded, ForceEra, ControllerBatchDeprecated)",
  },
  "3f4te0335d8h1": {
    name: "WestendRuntimeGovernanceOriginsPalletCustomOriginsOrigin",
    chains: "westend",
    paths: ["westend_runtime.governance.origins.pallet_custom_origins.Origin"],
    type: "Enum(StakingAdmin, Treasurer, FellowshipAdmin, GeneralAdmin, AuctionAdmin, LeaseAdmin, ReferendumCanceller, ReferendumKiller, SmallTipper, BigTipper, SmallSpender, MediumSpender, BigSpender, WhitelistedCaller, FellowshipInitiates, Fellows, FellowshipExperts, FellowshipMasters, Fellowship1Dan, Fellowship2Dan, Fellowship3Dan, Fellowship4Dan, Fellowship5Dan, Fellowship6Dan, Fellowship7Dan, Fellowship8Dan, Fellowship9Dan)",
  },
  "3g7a8g60ho721": {
    name: "BabeAllowedSlots",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["sp_consensus_babe.AllowedSlots"],
    type: "Enum(PrimarySlots, PrimaryAndSecondaryPlainSlots, PrimaryAndSecondaryVRFSlots)",
  },
  "3jnpd4dmb650": {
    name: "XcmV2MultiassetWildMultiAsset",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["xcm.v2.multiasset.WildMultiAsset"],
    type: "Enum(All, AllOf)",
  },
  "3nveejfjt6cjg": {
    name: "WestendRuntimeRuntimeHoldReason",
    chains: "polkadot.collectives",
    paths: ["collectives_polkadot_runtime.RuntimeHoldReason"],
    type: "Enum(Preimage)",
  },
  "3psnvvr3d6p0t": {
    name: "XcmVersionedXcm",
    chains:
      "westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["xcm.VersionedXcm"],
    type: "Enum(V3, V4, V5)",
    priority: 1,
  },
  "3vrnp048j3b2d": {
    name: "BalancesAdjustmentDirection",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["pallet_balances.types.AdjustmentDirection"],
    type: "Enum(Increase, Decrease)",
  },
  "43e3ummb3h5dn": {
    name: "PolkadotRuntimeCommonIdentityMigratorEvent",
    chains: "westend, westend.people",
    paths: ["polkadot_runtime_common.identity_migrator.pallet.Event"],
    type: "Enum(IdentityReaped, DepositUpdated)",
  },
  "46j01db9schbn": {
    name: "XcmV2BodyId",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["xcm.v2.BodyId"],
    type: "Enum(Unit, Named, Index, Executive, Technical, Legislative, Judicial, Defense, Administration, Treasury)",
  },
  "47gh5t4ppbcdj": {
    name: "XcmVersionedAssetId",
    chains:
      "westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["xcm.VersionedAssetId"],
    type: "Enum(V3, V4, V5)",
    priority: 1,
  },
  "49em457ob9ou0": {
    name: "ParachainsOrigin",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["polkadot_runtime_parachains.origin.pallet.Origin"],
    type: "Enum(Parachain)",
  },
  "4cajo1lbs9cmt": {
    name: "XcmV3MultiassetAssetId",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["xcm.v3.multiasset.AssetId"],
    type: "Enum(Concrete, Abstract)",
  },
  "4k4r9im11cdan": {
    name: "PvfExecKind",
    chains: "polkadot, kusama, paseo, westend",
    paths: [
      "polkadot_primitives.v7.PvfExecKind",
      "polkadot_primitives.v8.PvfExecKind",
    ],
    type: "Enum(Backing, Approval)",
  },
  "4peoofcn0loqr": {
    name: "StakingRewardDestination",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_staking.RewardDestination"],
    type: "Enum(Staked, Stash, Controller, Account, None)",
  },
  "4sjnuvedkqa2r": {
    name: "ParachainsInclusionAggregateMessageOrigin",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["polkadot_runtime_parachains.inclusion.AggregateMessageOrigin"],
    type: "Enum(Ump)",
  },
  "4vbt6tkj8bvqs": {
    name: "OccupiedCoreAssumption",
    chains: "polkadot, kusama, paseo, westend",
    paths: [
      "polkadot_primitives.v7.OccupiedCoreAssumption",
      "polkadot_primitives.v8.OccupiedCoreAssumption",
    ],
    type: "Enum(Included, TimedOut, Free)",
  },
  "505kan7sticn1": {
    name: "XcmV2Junction",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["xcm.v2.junction.Junction"],
    type: "Enum(Parachain, AccountId32, AccountIndex64, AccountKey20, PalletInstance, GeneralIndex, GeneralKey, OnlyChild, Plurality)",
  },
  "515gfvv2a6c4o": {
    name: "PreimageOldRequestStatus",
    chains:
      "polkadot, polkadot.collectives, kusama, paseo, westend, westend.collectives",
    paths: ["pallet_preimage.OldRequestStatus"],
    type: "Enum(Unrequested, Requested)",
  },
  "543plq9vh7s3m": {
    name: "XcmVersionedResponse",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["xcm.VersionedResponse"],
    type: "Enum(V2, V3, V4)",
  },
  "5g0925eiftlcf": {
    name: "XcmV3MaybeErrorCode",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["xcm.v3.MaybeErrorCode"],
    type: "Enum(Success, Error, TruncatedError)",
  },
  "5h5t0elhnbseq": {
    name: "BagsListListListError",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_bags_list.list.ListError"],
    type: "Enum(Duplicate, NotHeavier, NotInSameBag, NodeNotFound)",
  },
  "5ltp1mv4fr7n7": {
    name: "TokenError",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["sp_runtime.TokenError"],
    type: "Enum(FundsUnavailable, OnlyProvider, BelowMinimum, CannotCreate, UnknownAsset, Frozen, Unsupported, CannotCreateHold, NotExpendable, Blocked)",
  },
  "5svrq9ei0ks3q": {
    name: "XcmPalletOrigin",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["pallet_xcm.pallet.Origin"],
    type: "Enum(Xcm, Response)",
  },
  "5tbcfetjk0h9h": {
    name: "NominationPoolsConfigOp",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_nomination_pools.ConfigOp"],
    type: "Enum(Noop, Set, Remove)",
  },
  "629bfqn3u6tle": {
    name: "IdentityData",
    chains: "polkadot.people, kusama.people, westend, westend.people",
    paths: ["pallet_identity.types.Data"],
    type: "Enum(None, Raw0, Raw1, Raw2, Raw3, Raw4, Raw5, Raw6, Raw7, Raw8, Raw9, Raw10, Raw11, Raw12, Raw13, Raw14, Raw15, Raw16, Raw17, Raw18, Raw19, Raw20, Raw21, Raw22, Raw23, Raw24, Raw25, Raw26, Raw27, Raw28, Raw29, Raw30, Raw31, Raw32, BlakeTwo256, Sha256, Keccak256, ShaThree256)",
  },
  "66mc66cqnpat1": {
    name: "GrandpaStoredState",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_grandpa.StoredState"],
    type: "Enum(Live, PendingPause, Paused, PendingResume)",
  },
  "6ag633d941o7v": {
    name: "XcmV3Junction",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["xcm.v3.junction.Junction", "staging_xcm.v4.junction.Junction"],
    type: "Enum(Parachain, AccountId32, AccountIndex64, AccountKey20, PalletInstance, GeneralIndex, GeneralKey, OnlyChild, Plurality, GlobalConsensus)",
  },
  "6c90ieeim9tjd": {
    name: "XcmPalletVersionMigrationStage",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["pallet_xcm.pallet.VersionMigrationStage"],
    type: "Enum(MigrateSupportedVersion, MigrateVersionNotifiers, NotifyCurrentTargets, MigrateAndNotifyOldTargets)",
  },
  "6d7om5l62r3h6": {
    name: "XcmV5Junctions",
    chains:
      "westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["staging_xcm.v5.junctions.Junctions"],
    type: "Enum(Here, X1, X2, X3, X4, X5, X6, X7, X8)",
  },
  "6hem0avr1eoco": {
    name: "ParachainsDisputeResult",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["polkadot_runtime_parachains.disputes.DisputeResult"],
    type: "Enum(Valid, Invalid)",
  },
  "6rjjsd07rc200": {
    name: "MmrPrimitivesError",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["sp_mmr_primitives.Error"],
    type: "Enum(InvalidNumericOp, Push, GetRoot, Commit, GenerateProof, Verify, LeafNotFound, PalletNotIncluded, InvalidLeafIndex, InvalidBestKnownBlock)",
  },
  "710b6mh49al4f": {
    name: "XcmV2NetworkId",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["xcm.v2.NetworkId"],
    type: "Enum(Any, Named, Polkadot, Kusama)",
  },
  "73beoct6oecc": {
    name: "XcmV5NetworkId",
    chains:
      "westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["staging_xcm.v5.junction.NetworkId"],
    type: "Enum(ByGenesis, ByFork, Polkadot, Kusama, Ethereum, BitcoinCore, BitcoinCash, PolkadotBulletin)",
  },
  "769fta165mequ": {
    name: "XcmV3WeightLimit",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["xcm.v3.WeightLimit"],
    type: "Enum(Unlimited, Limited)",
  },
  "7bvp9q4ceuk7": {
    name: "DigestItem",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["sp_runtime.generic.digest.DigestItem"],
    type: "Enum(PreRuntime, Consensus, Seal, Other, RuntimeEnvironmentUpdated)",
  },
  "7ffbrur6hobca": {
    name: "XcmV3Response",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["xcm.v3.Response"],
    type: "Enum(Null, Assets, ExecutionResult, Version, PalletsInfo, DispatchResult)",
  },
  "7t5v4k056sf3d": {
    name: "PolkadotRuntimeParachainsCoretimeEvent",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["polkadot_runtime_parachains.coretime.pallet.Event"],
    type: "Enum(RevenueInfoRequested, CoreAssigned)",
  },
  "7u481jea1442o": {
    name: "BalanceStatus",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["frame_support.traits.tokens.misc.BalanceStatus"],
    type: "Enum(Free, Reserved)",
  },
  "7ujvudkvg12so": {
    name: "IdentityJudgement",
    chains: "polkadot.people, kusama.people, westend, westend.people",
    paths: ["pallet_identity.types.Judgement"],
    type: "Enum(Unknown, FeePaid, Reasonable, KnownGood, OutOfDate, LowQuality, Erroneous)",
  },
  "7vujittrav0br": {
    name: "XcmVersionedAssets",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["xcm.VersionedAssets"],
    type: "Enum(V2, V3, V4)",
  },
  "85ca14rjo42j5": {
    name: "VotingConviction",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_conviction_voting.conviction.Conviction"],
    type: "Enum(None, Locked1x, Locked2x, Locked3x, Locked4x, Locked5x, Locked6x)",
  },
  "87r8lmtt997st": {
    name: "ArithmeticError",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["sp_arithmetic.ArithmeticError"],
    type: "Enum(Underflow, Overflow, DivisionByZero)",
  },
  "88qf3i6ugbvsp": {
    name: "IndicesEvent",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_indices.pallet.Event"],
    type: "Enum(IndexAssigned, IndexFreed, IndexFrozen)",
  },
  "890aui9hh0f9q": {
    name: "AssetRateEvent",
    chains: "polkadot, polkadot.collectives, kusama, paseo",
    paths: ["pallet_asset_rate.pallet.Event"],
    type: "Enum(AssetRateCreated, AssetRateRemoved, AssetRateUpdated)",
  },
  "8b4gf7pjdvue3": {
    name: "NominationPoolsPalletFreezeReason",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_nomination_pools.pallet.FreezeReason"],
    type: "Enum(PoolMinBalance)",
  },
  "8c614g2bc4iej": {
    name: "XcmV3Instruction",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["xcm.v3.Instruction"],
    type: "Enum(WithdrawAsset, ReserveAssetDeposited, ReceiveTeleportedAsset, QueryResponse, TransferAsset, TransferReserveAsset, Transact, HrmpNewChannelOpenRequest, HrmpChannelAccepted, HrmpChannelClosing, ClearOrigin, DescendOrigin, ReportError, DepositAsset, DepositReserveAsset, ExchangeAsset, InitiateReserveWithdraw, InitiateTeleport, ReportHolding, BuyExecution, RefundSurplus, SetErrorHandler, SetAppendix, ClearError, ClaimAsset, Trap, SubscribeVersion, UnsubscribeVersion, BurnAsset, ExpectAsset, ExpectOrigin, ExpectError, ExpectTransactStatus, QueryPallet, ExpectPallet, ReportTransactStatus, ClearTransactStatus, UniversalOrigin, ExportMessage, LockAsset, UnlockAsset, NoteUnlockable, RequestUnlock, SetFeesMode, SetTopic, ClearTopic, AliasOrigin, UnpaidExecution)",
  },
  "8eicfpc71dtp2": {
    name: "BountiesBountyStatus",
    chains: "polkadot, kusama, paseo",
    paths: ["pallet_bounties.BountyStatus"],
    type: "Enum(Proposed, Approved, Funded, CuratorProposed, Active, PendingPayout)",
  },
  "8fgf6e6g02u7k": {
    name: "ChildBountyStatus",
    chains: "polkadot, kusama, paseo",
    paths: ["pallet_child_bounties.ChildBountyStatus"],
    type: "Enum(Added, CuratorProposed, Active, PendingPayout)",
  },
  "8g50cqebfncn4": {
    name: "NominationPoolsClaimPermission",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_nomination_pools.ClaimPermission"],
    type: "Enum(Permissioned, PermissionlessCompound, PermissionlessWithdraw, PermissionlessAll)",
  },
  "8j0abm9jkapk2": {
    name: "XcmV3TraitsError",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["xcm.v3.traits.Error"],
    type: "Enum(Overflow, Unimplemented, UntrustedReserveLocation, UntrustedTeleportLocation, LocationFull, LocationNotInvertible, BadOrigin, InvalidLocation, AssetNotFound, FailedToTransactAsset, NotWithdrawable, LocationCannotHold, ExceedsMaxMessageSize, DestinationUnsupported, Transport, Unroutable, UnknownClaim, FailedToDecode, MaxWeightInvalid, NotHoldingFees, TooExpensive, Trap, ExpectationFalse, PalletNotFound, NameMismatch, VersionIncompatible, HoldingWouldOverflow, ExportError, ReanchorFailed, NoDeal, FeesNotMet, LockError, NoPermission, Unanchored, NotDepositable, UnhandledXcmVersion, WeightLimitReached, Barrier, WeightNotComputable, ExceedsStackLimit)",
  },
  "8jjr2rgj6aa2v": {
    name: "SlashingOffenceKind",
    chains: "polkadot, kusama, paseo, westend",
    paths: [
      "polkadot_primitives.v7.slashing.SlashingOffenceKind",
      "polkadot_primitives.v8.slashing.SlashingOffenceKind",
    ],
    type: "Enum(ForInvalid, AgainstValid)",
  },
  "8mdo9fqa201s6": {
    name: "TreasuryPaymentState",
    chains:
      "polkadot, polkadot.collectives, kusama, paseo, westend, westend.collectives",
    paths: ["pallet_treasury.PaymentState"],
    type: "Enum(Pending, Attempted, Failed)",
  },
  "8slcnsmtfbubd": {
    name: "ExtensionsCheckMortality",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["sp_runtime.generic.era.Era"],
    type: "Enum(Immortal, Mortal1, Mortal2, Mortal3, Mortal4, Mortal5, Mortal6, Mortal7, Mortal8, Mortal9, Mortal10, Mortal11, Mortal12, Mortal13, Mortal14, Mortal15, Mortal16, Mortal17, Mortal18, Mortal19, Mortal20, Mortal21, Mortal22, Mortal23, Mortal24, Mortal25, Mortal26, Mortal27, Mortal28, Mortal29, Mortal30, Mortal31, Mortal32, Mortal33, Mortal34, Mortal35, Mortal36, Mortal37, Mortal38, Mortal39, Mortal40, Mortal41, Mortal42, Mortal43, Mortal44, Mortal45, Mortal46, Mortal47, Mortal48, Mortal49, Mortal50, Mortal51, Mortal52, Mortal53, Mortal54, Mortal55, Mortal56, Mortal57, Mortal58, Mortal59, Mortal60, Mortal61, Mortal62, Mortal63, Mortal64, Mortal65, Mortal66, Mortal67, Mortal68, Mortal69, Mortal70, Mortal71, Mortal72, Mortal73, Mortal74, Mortal75, Mortal76, Mortal77, Mortal78, Mortal79, Mortal80, Mortal81, Mortal82, Mortal83, Mortal84, Mortal85, Mortal86, Mortal87, Mortal88, Mortal89, Mortal90, Mortal91, Mortal92, Mortal93, Mortal94, Mortal95, Mortal96, Mortal97, Mortal98, Mortal99, Mortal100, Mortal101, Mortal102, Mortal103, Mortal104, Mortal105, Mortal106, Mortal107, Mortal108, Mortal109, Mortal110, Mortal111, Mortal112, Mortal113, Mortal114, Mortal115, Mortal116, Mortal117, Mortal118, Mortal119, Mortal120, Mortal121, Mortal122, Mortal123, Mortal124, Mortal125, Mortal126, Mortal127, Mortal128, Mortal129, Mortal130, Mortal131, Mortal132, Mortal133, Mortal134, Mortal135, Mortal136, Mortal137, Mortal138, Mortal139, Mortal140, Mortal141, Mortal142, Mortal143, Mortal144, Mortal145, Mortal146, Mortal147, Mortal148, Mortal149, Mortal150, Mortal151, Mortal152, Mortal153, Mortal154, Mortal155, Mortal156, Mortal157, Mortal158, Mortal159, Mortal160, Mortal161, Mortal162, Mortal163, Mortal164, Mortal165, Mortal166, Mortal167, Mortal168, Mortal169, Mortal170, Mortal171, Mortal172, Mortal173, Mortal174, Mortal175, Mortal176, Mortal177, Mortal178, Mortal179, Mortal180, Mortal181, Mortal182, Mortal183, Mortal184, Mortal185, Mortal186, Mortal187, Mortal188, Mortal189, Mortal190, Mortal191, Mortal192, Mortal193, Mortal194, Mortal195, Mortal196, Mortal197, Mortal198, Mortal199, Mortal200, Mortal201, Mortal202, Mortal203, Mortal204, Mortal205, Mortal206, Mortal207, Mortal208, Mortal209, Mortal210, Mortal211, Mortal212, Mortal213, Mortal214, Mortal215, Mortal216, Mortal217, Mortal218, Mortal219, Mortal220, Mortal221, Mortal222, Mortal223, Mortal224, Mortal225, Mortal226, Mortal227, Mortal228, Mortal229, Mortal230, Mortal231, Mortal232, Mortal233, Mortal234, Mortal235, Mortal236, Mortal237, Mortal238, Mortal239, Mortal240, Mortal241, Mortal242, Mortal243, Mortal244, Mortal245, Mortal246, Mortal247, Mortal248, Mortal249, Mortal250, Mortal251, Mortal252, Mortal253, Mortal254, Mortal255)",
  },
  "8ur8bpe8ahbdb": {
    name: "TransactionValidityError",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["sp_runtime.transaction_validity.TransactionValidityError"],
    type: "Enum(Invalid, Unknown)",
  },
  "8vj9hqgjobpdo": {
    name: "ParachainsDisputesEvent",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["polkadot_runtime_parachains.disputes.pallet.Event"],
    type: "Enum(DisputeInitiated, DisputeConcluded, Revert)",
  },
  "90bksimft5ia2": {
    name: "DispatchClass",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["frame_support.dispatch.DispatchClass"],
    type: "Enum(Normal, Operational, Mandatory)",
  },
  "910lmkjcsvii": {
    name: "PolkadotRuntimeCommonAssignedSlotsSlotLeasePeriodStart",
    chains: "westend",
    paths: ["polkadot_runtime_common.assigned_slots.SlotLeasePeriodStart"],
    type: "Enum(Current, Next)",
  },
  "926pkc9itkbdk": {
    name: "ReferendaTypesCurve",
    chains:
      "polkadot, polkadot.collectives, kusama, paseo, westend, westend.collectives",
    paths: ["pallet_referenda.types.Curve"],
    type: "Enum(LinearDecreasing, SteppedDecreasing, Reciprocal)",
  },
  "982q4n5eor6ih": {
    name: "XcmV3JunctionNetworkId",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["xcm.v3.junction.NetworkId", "staging_xcm.v4.junction.NetworkId"],
    type: "Enum(ByGenesis, ByFork, Polkadot, Kusama, Westend, Rococo, Wococo, Ethereum, BitcoinCore, BitcoinCash, PolkadotBulletin)",
  },
  "9d6sev8uj006q": {
    name: "XcmV3MultiassetAssetInstance",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: [
      "xcm.v3.multiasset.AssetInstance",
      "staging_xcm.v4.asset.AssetInstance",
      "staging_xcm.v5.asset.AssetInstance",
    ],
    type: "Enum(Undefined, Index, Array4, Array8, Array16, Array32)",
  },
  "9fihu1euvgfa": {
    name: "PolkadotPrimitivesV6ExecutorParamsExecutorParam",
    chains: "polkadot, kusama, paseo, westend",
    paths: [
      "polkadot_primitives.v7.executor_params.ExecutorParam",
      "polkadot_primitives.v8.executor_params.ExecutorParam",
    ],
    type: "Enum(MaxMemoryPages, StackLogicalMax, StackNativeMax, PrecheckingMaxMemory, PvfPrepTimeout, PvfExecTimeout, WasmExtBulkMemory)",
  },
  "9jj84pbmaraa": {
    name: "TransactionValidityInvalidTransaction",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["sp_runtime.transaction_validity.InvalidTransaction"],
    type: "Enum(Call, Payment, Future, Stale, BadProof, AncientBirthBlock, ExhaustsResources, Custom, BadMandatory, MandatoryValidation, BadSigner)",
  },
  "9lvi13skegcil": {
    name: "ClaimsStatementKind",
    chains: "polkadot, kusama, paseo",
    paths: ["polkadot_runtime_common.claims.StatementKind"],
    type: "Enum(Regular, Saft)",
  },
  "9pobt6o24rqdc": {
    name: "UpgradeRestriction",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: [
      "polkadot_primitives.v7.UpgradeRestriction",
      "polkadot_primitives.v8.UpgradeRestriction",
    ],
    type: "Enum(Present)",
  },
  "9uqvk3mspevjn": {
    name: "BabeDigestsPreDigest",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["sp_consensus_babe.digests.PreDigest"],
    type: "Enum(Primary, SecondaryPlain, SecondaryVRF)",
  },
  a2kllcmf9u10g: {
    name: "ParachainsDisputeLocation",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["polkadot_runtime_parachains.disputes.DisputeLocation"],
    type: "Enum(Local, Remote)",
  },
  a3gvv195g4jot: {
    name: "DispatchRawOrigin",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["frame_support.dispatch.RawOrigin"],
    type: "Enum(Root, Signed, None)",
  },
  a4b928jbpau7j: {
    name: "RecoveryEvent",
    chains: "kusama, westend",
    paths: ["pallet_recovery.pallet.Event"],
    type: "Enum(RecoveryCreated, RecoveryInitiated, RecoveryVouched, RecoveryClosed, AccountRecovered, RecoveryRemoved)",
  },
  a5gvqckojmehj: {
    name: "ChildBountiesEvent",
    chains: "polkadot, kusama, paseo",
    paths: ["pallet_child_bounties.pallet.Event"],
    type: "Enum(Added, Awarded, Claimed, Canceled)",
  },
  adqdire0qjg0e: {
    name: "XcmV2WeightLimit",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["xcm.v2.WeightLimit"],
    type: "Enum(Unlimited, Limited)",
  },
  ajkhn97prklo5: {
    name: "ConvictionVotingEvent",
    chains: "polkadot, kusama, paseo",
    paths: ["pallet_conviction_voting.pallet.Event"],
    type: "Enum(Delegated, Undelegated)",
  },
  amc6gl7bd9por: {
    name: "XcmV2TraitsError",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["xcm.v2.traits.Error"],
    type: "Enum(Overflow, Unimplemented, UntrustedReserveLocation, UntrustedTeleportLocation, MultiLocationFull, MultiLocationNotInvertible, BadOrigin, InvalidLocation, AssetNotFound, FailedToTransactAsset, NotWithdrawable, LocationCannotHold, ExceedsMaxMessageSize, DestinationUnsupported, Transport, Unroutable, UnknownClaim, FailedToDecode, MaxWeightInvalid, NotHoldingFees, TooExpensive, Trap, UnhandledXcmVersion, WeightLimitReached, Barrier, WeightNotComputable)",
  },
  andndh150vhd7: {
    name: "XcmV4Instruction",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["staging_xcm.v4.Instruction"],
    type: "Enum(WithdrawAsset, ReserveAssetDeposited, ReceiveTeleportedAsset, QueryResponse, TransferAsset, TransferReserveAsset, Transact, HrmpNewChannelOpenRequest, HrmpChannelAccepted, HrmpChannelClosing, ClearOrigin, DescendOrigin, ReportError, DepositAsset, DepositReserveAsset, ExchangeAsset, InitiateReserveWithdraw, InitiateTeleport, ReportHolding, BuyExecution, RefundSurplus, SetErrorHandler, SetAppendix, ClearError, ClaimAsset, Trap, SubscribeVersion, UnsubscribeVersion, BurnAsset, ExpectAsset, ExpectOrigin, ExpectError, ExpectTransactStatus, QueryPallet, ExpectPallet, ReportTransactStatus, ClearTransactStatus, UniversalOrigin, ExportMessage, LockAsset, UnlockAsset, NoteUnlockable, RequestUnlock, SetFeesMode, SetTopic, ClearTopic, AliasOrigin, UnpaidExecution)",
  },
  ap9sokavcmq5o: {
    name: "XcmVersionedLocation",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["xcm.VersionedLocation"],
    type: "Enum(V2, V3, V4)",
  },
  aquvu9nu2es05: {
    name: "XcmV2MultilocationJunctions",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["xcm.v2.multilocation.Junctions"],
    type: "Enum(Here, X1, X2, X3, X4, X5, X6, X7, X8)",
  },
  au5bveb13r5dm: {
    name: "XcmV5AssetFilter",
    chains:
      "westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["staging_xcm.v5.asset.AssetFilter"],
    type: "Enum(Definite, Wild)",
  },
  avhrl5td7rf4q: {
    name: "TransactionValidityUnknownTransaction",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["sp_runtime.transaction_validity.UnknownTransaction"],
    type: "Enum(CannotLookup, NoUnsignedValidator, Custom)",
  },
  b1eprmg9d9eh2: {
    name: "CommonAuctionsEvent",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["polkadot_runtime_common.auctions.pallet.Event"],
    type: "Enum(AuctionStarted, AuctionClosed, Reserved, Unreserved, ReserveConfiscated, BidAccepted, WinningOffset)",
  },
  b5fd0r2ju9g0l: {
    name: "CoreState",
    chains: "polkadot, kusama, paseo",
    paths: ["polkadot_primitives.v7.CoreState"],
    type: "Enum(Occupied, Scheduled, Free)",
  },
  bb454pgf9ofrq: {
    name: "StakingPalletConfigOp",
    chains: "polkadot, kusama, paseo, westend",
    paths: [
      "pallet_staking.pallet.pallet.ConfigOp",
      "pallet_nomination_pools.ConfigOp",
    ],
    type: "Enum(Noop, Set, Remove)",
  },
  bd6859lkk2107: {
    name: "XcmV3JunctionBodyId",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["xcm.v3.junction.BodyId"],
    type: "Enum(Unit, Moniker, Index, Executive, Technical, Legislative, Judicial, Defense, Administration, Treasury)",
  },
  bgr9ooktct68l: {
    name: "BalancesTypesReasons",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["pallet_balances.types.Reasons"],
    type: "Enum(Fee, Misc, All)",
  },
  biemf2h6nh9pa: {
    name: "XcmV4AssetAssetFilter",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["staging_xcm.v4.asset.AssetFilter"],
    type: "Enum(Definite, Wild)",
  },
  bkbo8vqdq5g5a: {
    name: "MultiSignature",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["sp_runtime.MultiSignature"],
    type: "Enum(Ed25519, Sr25519, Ecdsa)",
  },
  bl1lrline4to8: {
    name: "Phase",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["frame_system.Phase"],
    type: "Enum(ApplyExtrinsic, Finalization, Initialization)",
  },
  bnmfm52c5n7nq: {
    name: "XcmV4TraitsOutcome",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["staging_xcm.v4.traits.Outcome"],
    type: "Enum(Complete, Incomplete, Error)",
  },
  bnvffgg4ckmsj: {
    name: "PolkadotRuntimeOriginCaller",
    chains: "polkadot, paseo",
    paths: ["polkadot_runtime.OriginCaller", "paseo_runtime.OriginCaller"],
    type: "Enum(system, Origins, ParachainsOrigin, XcmPallet, Void)",
  },
  brvqfk00lp42n: {
    name: "GrandpaEquivocation",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["sp_consensus_grandpa.Equivocation"],
    type: "Enum(Prevote, Precommit)",
  },
  bs10onqorvq4b: {
    name: "StakingForcing",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_staking.Forcing"],
    type: "Enum(NotForcing, ForceNew, ForceNone, ForceAlways)",
  },
  bs56nuk6pe5bp: {
    name: "PolkadotPrimitivesV6DisputeStatement",
    chains: "polkadot, kusama, paseo, westend",
    paths: [
      "polkadot_primitives.v7.DisputeStatement",
      "polkadot_primitives.v8.DisputeStatement",
    ],
    type: "Enum(Valid, Invalid)",
  },
  bs795i39p1rsf: {
    name: "XcmV5Instruction",
    chains:
      "westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["staging_xcm.v5.Instruction"],
    type: "Enum(WithdrawAsset, ReserveAssetDeposited, ReceiveTeleportedAsset, QueryResponse, TransferAsset, TransferReserveAsset, Transact, HrmpNewChannelOpenRequest, HrmpChannelAccepted, HrmpChannelClosing, ClearOrigin, DescendOrigin, ReportError, DepositAsset, DepositReserveAsset, ExchangeAsset, InitiateReserveWithdraw, InitiateTeleport, ReportHolding, BuyExecution, RefundSurplus, SetErrorHandler, SetAppendix, ClearError, ClaimAsset, Trap, SubscribeVersion, UnsubscribeVersion, BurnAsset, ExpectAsset, ExpectOrigin, ExpectError, ExpectTransactStatus, QueryPallet, ExpectPallet, ReportTransactStatus, ClearTransactStatus, UniversalOrigin, ExportMessage, LockAsset, UnlockAsset, NoteUnlockable, RequestUnlock, SetFeesMode, SetTopic, ClearTopic, AliasOrigin, UnpaidExecution, PayFees, InitiateTransfer, ExecuteWithOrigin, SetHints)",
  },
  bta4mfoh73fpt: {
    name: "PolkadotPrimitivesV6ValidDisputeStatementKind",
    chains: "polkadot, kusama, paseo, westend",
    paths: [
      "polkadot_primitives.v7.ValidDisputeStatementKind",
      "polkadot_primitives.v8.ValidDisputeStatementKind",
    ],
    type: "Enum(Explicit, BackingSeconded, BackingValid, ApprovalChecking, ApprovalCheckingMultipleCandidates)",
  },
  c0rsdcbsdt7kf: {
    name: "GovernanceOrigin",
    chains: "polkadot, paseo",
    paths: [
      "polkadot_runtime.governance.origins.pallet_custom_origins.Origin",
      "paseo_runtime.governance.origins.pallet_custom_origins.Origin",
    ],
    type: "Enum(StakingAdmin, Treasurer, FellowshipAdmin, GeneralAdmin, AuctionAdmin, LeaseAdmin, ReferendumCanceller, ReferendumKiller, SmallTipper, BigTipper, SmallSpender, MediumSpender, BigSpender, WhitelistedCaller, WishForChange)",
  },
  c1jnealhlqk0n: {
    name: "WestendRuntimeRuntimeFreezeReason",
    chains: "polkadot, kusama, paseo, westend",
    paths: [
      "polkadot_runtime.RuntimeFreezeReason",
      "staging_kusama_runtime.RuntimeFreezeReason",
      "paseo_runtime.RuntimeFreezeReason",
      "westend_runtime.RuntimeFreezeReason",
    ],
    type: "Enum(NominationPools)",
  },
  c4alvt16n58rg: {
    name: "ParachainsHrmpEvent",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["polkadot_runtime_parachains.hrmp.pallet.Event"],
    type: "Enum(OpenChannelRequested, OpenChannelCanceled, OpenChannelAccepted, ChannelClosed, HrmpChannelForceOpened, HrmpSystemChannelOpened, OpenChannelDepositsUpdated)",
  },
  c5529239bmt3g: {
    name: "ElectionProviderMultiPhaseEvent",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_election_provider_multi_phase.pallet.Event"],
    type: "Enum(SolutionStored, ElectionFinalized, ElectionFailed, Rewarded, Slashed, PhaseTransitioned)",
  },
  c7d5cscq9c6gi: {
    name: "PolkadotPrimitivesV6PvfPrepKind",
    chains: "polkadot, kusama, paseo, westend",
    paths: [
      "polkadot_primitives.v7.PvfPrepKind",
      "polkadot_primitives.v8.PvfPrepKind",
    ],
    type: "Enum(Precheck, Prepare)",
  },
  cb4i7efmuhik2: {
    name: "ParachainsParasEvent",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["polkadot_runtime_parachains.paras.pallet.Event"],
    type: "Enum(CurrentCodeUpdated, CurrentHeadUpdated, CodeUpgradeScheduled, NewHeadNoted, ActionQueued, PvfCheckStarted, PvfCheckAccepted, PvfCheckRejected)",
  },
  cc0rvpoin8ucr: {
    name: "VersionedLocatableAsset",
    chains: "polkadot, polkadot.collectives, kusama, paseo",
    paths: ["polkadot_runtime_common.impls.VersionedLocatableAsset"],
    type: "Enum(V3, V4)",
  },
  cee77qkk3c81t: {
    name: "ConvictionVotingVoteAccountVote",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_conviction_voting.vote.AccountVote"],
    type: "Enum(Standard, Split, SplitAbstain)",
  },
  cg1p3hrtv6n5f: {
    name: "XcmV2MultiassetWildFungibility",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: [
      "xcm.v2.multiasset.WildFungibility",
      "xcm.v3.multiasset.WildFungibility",
      "staging_xcm.v4.asset.WildFungibility",
      "staging_xcm.v5.asset.WildFungibility",
    ],
    type: "Enum(Fungible, NonFungible)",
  },
  cg9t1ptkdnbi3: {
    name: "GrandpaEvent",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_grandpa.pallet.Event"],
    type: "Enum(NewAuthorities, Paused, Resumed)",
  },
  cgde8bg5ldqpa: {
    name: "PreimagesBounded",
    chains:
      "polkadot, polkadot.collectives, kusama, paseo, westend, westend.collectives",
    paths: ["frame_support.traits.preimages.Bounded"],
    type: "Enum(Legacy, Inline, Lookup)",
  },
  cgoc620vdl0ci: {
    name: "BrokerCoretimeInterfaceCoreAssignment",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_broker.coretime_interface.CoreAssignment"],
    type: "Enum(Idle, Pool, Task)",
  },
  chgaqm88qcdbe: {
    name: "XcmVersionedLocation",
    chains:
      "westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["xcm.VersionedLocation"],
    type: "Enum(V3, V4, V5)",
    priority: 1,
  },
  cjonl4a47pcm8: {
    name: "TransactionPaymentEvent",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["pallet_transaction_payment.pallet.Event"],
    type: "Enum(TransactionFeePaid)",
  },
  clvofdpge58e1: {
    name: "XcmVersionedAsset",
    chains:
      "westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["xcm.VersionedAsset"],
    type: "Enum(V3, V4, V5)",
    priority: 1,
  },
  cn24k411b4s6t: {
    name: "PolkadotRuntimeCommonAssignedSlotsEvent",
    chains: "westend",
    paths: ["polkadot_runtime_common.assigned_slots.pallet.Event"],
    type: "Enum(PermanentSlotAssigned, TemporarySlotAssigned, MaxPermanentSlotsChanged, MaxTemporarySlotsChanged)",
  },
  cpkfkhj5jq924: {
    name: "TransactionValidityTransactionSource",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["sp_runtime.transaction_validity.TransactionSource"],
    type: "Enum(InBlock, Local, External)",
  },
  csmfdagrgtkj5: {
    name: "XcmV4Response",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["staging_xcm.v4.Response"],
    type: "Enum(Null, Assets, ExecutionResult, Version, PalletsInfo, DispatchResult)",
  },
  cuaiiptinb4jf: {
    name: "Version",
    chains:
      "polkadot, polkadot.assetHub, polkadot.collectives, kusama, kusama.assetHub, paseo, paseo.assetHub, westend, westend.collectives",
    paths: ["pallet_vesting.Releases", "pallet_alliance.types.Version"],
    type: "Enum(V0, V1)",
  },
  d226b5du5oie9: {
    name: "VestingEvent",
    chains:
      "polkadot, polkadot.assetHub, kusama, kusama.assetHub, paseo, paseo.assetHub, westend",
    paths: ["pallet_vesting.pallet.Event"],
    type: "Enum(VestingUpdated, VestingCompleted)",
  },
  d2d2vjc8h66mf: {
    name: "XcmV3MultiassetFungibility",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: [
      "xcm.v3.multiasset.Fungibility",
      "staging_xcm.v4.asset.Fungibility",
      "staging_xcm.v5.asset.Fungibility",
    ],
    type: "Enum(Fungible, NonFungible)",
  },
  d7em8997pfm92: {
    name: "MultiSigner",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["sp_runtime.MultiSigner"],
    type: "Enum(Ed25519, Sr25519, Ecdsa)",
  },
  d7hag4aqiaqqv: {
    name: "PolkadotRuntimeParachainsSchedulerPalletCoreOccupied",
    chains: "polkadot, kusama, paseo",
    paths: ["polkadot_runtime_parachains.scheduler.pallet.CoreOccupied"],
    type: "Enum(Free, Paras)",
  },
  dp2d78gpqj4r6: {
    name: "ParachainsInclusionEvent",
    chains: "polkadot, kusama, paseo",
    paths: ["polkadot_runtime_parachains.inclusion.pallet.Event"],
    type: "Enum(CandidateBacked, CandidateIncluded, CandidateTimedOut, UpwardMessagesReceived)",
  },
  e252kk4p31sv6: {
    name: "XcmV4AssetWildAsset",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["staging_xcm.v4.asset.WildAsset"],
    type: "Enum(All, AllOf, AllCounted, AllOfCounted)",
  },
  e3otks9vj8a3b: {
    name: "TraitsScheduleDispatchTime",
    chains:
      "polkadot, polkadot.collectives, kusama, paseo, westend, westend.assetHub, westend.collectives",
    paths: ["frame_support.traits.schedule.DispatchTime"],
    type: "Enum(At, After)",
  },
  e5ojv0odma80: {
    name: "ConvictionVotingVoteVoting",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_conviction_voting.vote.Voting"],
    type: "Enum(Casting, Delegating)",
  },
  ei6k1tdcht3q: {
    name: "BountiesEvent",
    chains: "polkadot, kusama, paseo",
    paths: ["pallet_bounties.pallet.Event"],
    type: "Enum(BountyProposed, BountyRejected, BountyBecameActive, BountyAwarded, BountyClaimed, BountyCanceled, BountyExtended, BountyApproved, CuratorProposed, CuratorUnassigned, CuratorAccepted)",
  },
  ek17d55ubjjm9: {
    name: "BabeDigestsNextConfigDescriptor",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["sp_consensus_babe.digests.NextConfigDescriptor"],
    type: "Enum(V1)",
  },
  es1oivk962n6f: {
    name: "XcmV2MultiassetAssetId",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["xcm.v2.multiasset.AssetId"],
    type: "Enum(Concrete, Abstract)",
  },
  eu5nmcltehl17: {
    name: "XcmV5WildAsset",
    chains:
      "westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["staging_xcm.v5.asset.WildAsset"],
    type: "Enum(All, AllOf, AllCounted, AllOfCounted)",
  },
  f331um1stp6g0: {
    name: "UpgradeGoAhead",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: [
      "polkadot_primitives.v7.UpgradeGoAhead",
      "polkadot_primitives.v8.UpgradeGoAhead",
    ],
    type: "Enum(Abort, GoAhead)",
  },
  f5frjbmqcgt5k: {
    name: "XcmV2JunctionBodyPart",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["xcm.v3.junction.BodyPart", "xcm.v2.BodyPart"],
    type: "Enum(Voice, Members, Fraction, AtLeastProportion, MoreThanProportion)",
  },
  f6qqn0nd8o1nf: {
    name: "PolkadotRuntimeParachainsSchedulerCommonAssignment",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["polkadot_runtime_parachains.scheduler.common.Assignment"],
    type: "Enum(Pool, Bulk)",
  },
  f87qnbuqe30lh: {
    name: "TransactionalError",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["sp_runtime.TransactionalError"],
    type: "Enum(LimitReached, NoLayer)",
  },
  f9rpgkuafvsb4: {
    name: "InvalidDisputeStatementKind",
    chains: "polkadot, kusama, paseo, westend",
    paths: [
      "polkadot_primitives.v7.InvalidDisputeStatementKind",
      "polkadot_primitives.v8.InvalidDisputeStatementKind",
    ],
    type: "Enum(Explicit)",
  },
  faafmcb1jmm2o: {
    name: "XcmV3Junctions",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["xcm.v3.junctions.Junctions", "staging_xcm.v4.junctions.Junctions"],
    type: "Enum(Here, X1, X2, X3, X4, X5, X6, X7, X8)",
  },
  fbiij71gdkvth: {
    name: "WestendRuntimeProxyType",
    chains: "westend",
    paths: ["westend_runtime.ProxyType"],
    type: "Enum(Any, NonTransfer, Governance, Staking, SudoBalances, IdentityJudgement, CancelProxy, Auction, NominationPools)",
  },
  fcqan2gt5adqc: {
    name: "TransactionPaymentReleases",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["pallet_transaction_payment.Releases"],
    type: "Enum(V1Ancient, V2)",
  },
  fdctp8g6s725t: {
    name: "CommonSlotsEvent",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["polkadot_runtime_common.slots.pallet.Event"],
    type: "Enum(NewLeasePeriod, Leased)",
  },
  fddrr93rdab23: {
    name: "XcmV2MultiAssetFilter",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["xcm.v2.multiasset.MultiAssetFilter"],
    type: "Enum(Definite, Wild)",
  },
  fedog0bf6e64f: {
    name: "XcmVersionedAssets",
    chains:
      "westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["xcm.VersionedAssets"],
    type: "Enum(V3, V4, V5)",
    priority: 1,
  },
  fms5l9j358vie: {
    name: "StakingPalletConfigOpBig",
    chains: "polkadot, kusama, paseo, westend",
    paths: [
      "pallet_staking.pallet.pallet.ConfigOp",
      "pallet_nomination_pools.ConfigOp",
    ],
    type: "Enum(Noop, Set, Remove)",
  },
  fou8ip7o6q00t: {
    name: "XcmVersionedAssetId",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["xcm.VersionedAssetId"],
    type: "Enum(V3, V4)",
  },
  fqkhvelo2q77o: {
    name: "ValidityAttestation",
    chains: "polkadot, kusama, paseo, westend",
    paths: [
      "polkadot_primitives.v7.ValidityAttestation",
      "polkadot_primitives.v8.ValidityAttestation",
    ],
    type: "Enum(Implicit, Explicit)",
  },
  hpogi4p6q6h5: {
    name: "PreimagePalletHoldReason",
    chains:
      "polkadot, polkadot.collectives, kusama, paseo, westend, westend.collectives",
    paths: ["pallet_preimage.pallet.HoldReason"],
    type: "Enum(Preimage)",
  },
  htopdh9noje5: {
    name: "ElectionProviderMultiPhaseElectionCompute",
    chains: "polkadot, kusama, paseo, westend",
    paths: ["pallet_election_provider_multi_phase.ElectionCompute"],
    type: "Enum(OnChain, Signed, Unsigned, Fallback, Emergency)",
  },
  m2dj93rjj6ks: {
    name: "XcmVersionedXcm",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["xcm.VersionedXcm"],
    type: "Enum(V2, V3, V4)",
  },
  ml0q5vk4ei4e: {
    name: "XcmV2Instruction",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub",
    paths: ["xcm.v2.Instruction"],
    type: "Enum(WithdrawAsset, ReserveAssetDeposited, ReceiveTeleportedAsset, QueryResponse, TransferAsset, TransferReserveAsset, Transact, HrmpNewChannelOpenRequest, HrmpChannelAccepted, HrmpChannelClosing, ClearOrigin, DescendOrigin, ReportError, DepositAsset, DepositReserveAsset, ExchangeAsset, InitiateReserveWithdraw, InitiateTeleport, QueryHolding, BuyExecution, RefundSurplus, SetErrorHandler, SetAppendix, ClearError, ClaimAsset, Trap, SubscribeVersion, UnsubscribeVersion)",
  },
  ndkvtfs34lhc: {
    name: "XcmV5Junction",
    chains:
      "westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["staging_xcm.v5.junction.Junction"],
    type: "Enum(Parachain, AccountId32, AccountIndex64, AccountKey20, PalletInstance, GeneralIndex, GeneralKey, OnlyChild, Plurality, GlobalConsensus)",
  },
  tofo38uukr3h: {
    name: "RootTestingEvent",
    chains: "westend",
    paths: ["pallet_root_testing.pallet.Event"],
    type: "Enum(DefensiveTestCall)",
  },
  ukot04uppvug: {
    name: "XcmV3MultiassetMultiAssetFilter",
    chains:
      "polkadot, polkadot.assetHub, polkadot.bridgeHub, polkadot.collectives, polkadot.people, kusama, kusama.assetHub, kusama.bridgeHub, kusama.people, paseo, paseo.assetHub, westend, westend.assetHub, westend.bridgeHub, westend.collectives, westend.people",
    paths: ["xcm.v3.multiasset.MultiAssetFilter"],
    type: "Enum(Definite, Wild)",
  },
}

export const knownTypes: KnownTypes = mapObject(
  knownTypesRepository,
  (entry: RepositoryEntry) =>
    typeof entry === "string"
      ? { name: entry, priority: 0 }
      : { name: entry.name, priority: entry.priority ?? 0 },
)
