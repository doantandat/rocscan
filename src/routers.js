// import React, { Component } from "react";

import Home from "./pages/home/Home";
import Account from "./pages/account/index";
import Apis from "./pages/apis/index";
import BlocksForked from "./pages/blocksForked/index";
import Blocks from "./pages/blocks/index";
import Charts from "./pages/charts/index";
import ContractDiffchecker from "./pages/contractdiffchecker/index";
import ContractsVerified from "./pages/contractsVerified/index";
import Gastracker from "./pages/gastracker/index";
import Labelcloud from "./pages/labelcloud/index";
import Login from "./pages/login/index";
import OpcodeTool from "./pages/opcodeTool/index";
import PushTx from "./pages/pushTx/index";
import Register from "./pages/register/index";
import Searchnotfounf from "./pages/searchnotfounf/index";
import Tokenapprovalchecker from "./pages/tokenapprovalchecker/index";
import TokensNft from "./pages/tokensNft/index";
import TokensNft1155 from "./pages/tokensNft1155/index";
import TokensVolume from "./pages/tokensVolume/index";
import Tokens from "./pages/tokens/index";
import TokentxnsNft from "./pages/tokentxnsNft/index";
import TokentxnsNft1155 from "./pages/tokentxnsNft1155/index";
import Tokentxns from "./pages/tokentxns/index";
import Topstat from "./pages/topstat/index";
import Txs from "./pages/txs/index";
import TxsInternal from "./pages/txsInternal/index";
import TxsPending from "./pages/txsPending/index";
import Unitconverter from "./pages/unitconverter/index";
import Validators from "./pages/validators/index";
import Validatorset from "./pages/validatorset/index";
import VerifiedSignatures from "./pages/verifiedSignatures/index";
import VerifyContract from "./pages/verifyContract/index";
import Vyper from "./pages/vyper/index";
import Notfound from "./pages/404/index";
const routers = [
  {
    path: "/",
    name: "homePage",
    exact: true,
    main: ({ match, history, routers }) => (
      <Home match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/home",
    name: "homePage",
    exact: true,
    main: ({ match, history, routers }) => (
      <Home match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },

  {
    path: "/accounts",
    name: "accounts",
    exact: true,
    main: ({ match, history, routers }) => (
      <Account match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/apis",
    name: "apis",
    exact: true,
    main: ({ match, history, routers }) => (
      <Apis match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/blocks_forked",
    name: "blocks_forked",
    exact: true,
    main: ({ match, history, routers }) => (
      <BlocksForked match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/blocks",
    name: "blocks",
    exact: true,
    main: ({ match, history, routers }) => (
      <Blocks match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/charts",
    name: "charts",
    exact: true,
    main: ({ match, history, routers }) => (
      <Charts match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/contractdiffchecker",
    name: "contractdiffchecker",
    exact: true,
    main: ({ match, history, routers }) => (
      <ContractDiffchecker match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/contractsVerified",
    name: "contractsVerified",
    exact: true,
    main: ({ match, history, routers }) => (
      <ContractsVerified match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/gastracker",
    name: "gastracker",
    exact: true,
    main: ({ match, history, routers }) => (
      <Gastracker match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/labelcloud",
    name: "labelcloud",
    exact: true,
    main: ({ match, history, routers }) => (
      <Labelcloud match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/login",
    name: "login",
    exact: true,
    main: ({ match, history, routers }) => (
      <Login match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/opcode-tool",
    name: "opcode-tool",
    exact: true,
    main: ({ match, history, routers }) => (
      <OpcodeTool match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/pushTx",
    name: "pushTx",
    exact: true,
    main: ({ match, history, routers }) => (
      <PushTx match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/register",
    name: "register",
    exact: true,
    main: ({ match, history, routers }) => (
      <Register match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/search",
    name: "search",
    exact: true,
    main: ({ match, history, routers }) => (
      <Searchnotfounf match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/tokenapprovalchecker",
    name: "tokenapprovalchecker",
    exact: true,
    main: ({ match, history, routers }) => (
      <Tokenapprovalchecker match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/tokens-nft",
    name: "tokens-nft",
    exact: true,
    main: ({ match, history, routers }) => (
      <TokensNft match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/tokens-nft1155",
    name: "tokens-tokens-nft1155",
    exact: true,
    main: ({ match, history, routers }) => (
      <TokensNft1155 match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/tokens-volume",
    name: "tokens-volume",
    exact: true,
    main: ({ match, history, routers }) => (
      <TokensVolume match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/tokens",
    name: "tokens",
    exact: true,
    main: ({ match, history, routers }) => (
      <Tokens match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/tokentxns-nft",
    name: "tokentxns-nft",
    exact: true,
    main: ({ match, history, routers }) => (
      <TokentxnsNft match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/tokentxns-nft1155",
    name: "tokentxns-nft1155",
    exact: true,
    main: ({ match, history, routers }) => (
      <TokentxnsNft1155 match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/tokentxns",
    name: "tokentxns",
    exact: true,
    main: ({ match, history, routers }) => (
      <Tokentxns match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/topstat",
    name: "topstat",
    exact: true,
    main: ({ match, history, routers }) => (
      <Topstat match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/txs",
    name: "txs",
    exact: true,
    main: ({ match, history, routers }) => (
      <Txs match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/txsInternal",
    name: "txsInternal",
    exact: true,
    main: ({ match, history, routers }) => (
      <TxsInternal match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/txsPending",
    name: "txsPending",
    exact: true,
    main: ({ match, history, routers }) => (
      <TxsPending match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/unitconverter",
    name: "unitconverter",
    exact: true,
    main: ({ match, history, routers }) => (
      <Unitconverter match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/validators",
    name: "Validators",
    exact: true,
    main: ({ match, history, routers }) => (
      <Validators match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/validatorset",
    name: "validatorset",
    exact: true,
    main: ({ match, history, routers }) => (
      <Validatorset match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/verifiedSignatures",
    name: "verifiedSignatures",
    exact: true,
    main: ({ match, history, routers }) => (
      <VerifiedSignatures match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/verifyContract",
    name: "verifyContract",
    exact: true,
    main: ({ match, history, routers }) => (
      <VerifyContract match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "/vyper",
    name: "vyper",
    exact: true,
    main: ({ match, history, routers }) => (
      <Vyper match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
  {
    path: "*",
    name: "Notfound",
    exact: false,
    main: ({ match, history, routers }) => (
      <Notfound match={match} history={history} routers={routers} />
    ),
    routers: [

    ]

  },
];

export default routers;
