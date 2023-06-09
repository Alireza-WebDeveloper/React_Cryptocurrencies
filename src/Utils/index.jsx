import * as Icons from 'react-icons/md';
import * as Icons2 from 'react-icons/bs';
import SourceImgCrytoBanner from '../Images/Banner/ParticlesAnimation/4.png';
import SourceImgBlockChain from '../Images/CryptoIndustry/Blockchain.png';
import SourceImgFees from '../Images/CryptoIndustry/Fees.png';
import SourceImgTransparency from '../Images/CryptoIndustry/Transparency.png';
import SourceImgNetwork from '../Images/CryptoIndustry/network.png';
import SourceImgNodes from '../Images/CryptoIndustry/Nodes.png';
import SourceImgPayment from '../Images/CryptoIndustry/Payment.png';
import SourceImgReduction from '../Images/CryptoIndustry/Reduction.png';
import SourceImgWallet from '../Images/CryptoIndustry/Wallet.png';
import SouceImgReplaceNews from '../Images/CryptoNews/replace.png';
import SourceLogoFooter from '../Images/Footer/crypto.png';
const giftCountdownDate = new Date('December 31, 2022 11:30:36').getTime();
const dataOfRouterLinks = [
  {
    id: 1,
    name: 'home',
    to: '',
    icon: <Icons.MdHome />,
  },
  {
    id: 2,
    name: 'cryptocurrencies',
    to: 'cryptocurrencies',
    icon: <Icons2.BsCurrencyBitcoin />,
  },
  {
    id: 3,
    name: 'exchanges',
    to: 'exchanges',
    icon: <Icons2.BsCurrencyExchange />,
  },
  {
    id: 4,
    name: 'news',
    to: 'news',
    icon: <Icons2.BsNewspaper />,
  },
];

const dataOfCryptoIndustry = [
  {
    id: 1,
    srcImg: SourceImgBlockChain,
    title: 'Relational Blockchain',
    text: 'Blockchain is essentially a kind of distributed database',
  },
  {
    id: 2,
    srcImg: SourceImgFees,
    title: 'Very Low Fees',
    text: 'Binance is an exchange with one of the cheapest transaction fees among all cryptocurrency exchange platformse',
  },
  {
    id: 3,
    srcImg: SourceImgTransparency,
    title: 'Full Transparency',
    text: 'The transparent nature of bitcoin and blockchain technology is beneficial in so many ways to so many people',
  },
  {
    id: 4,
    srcImg: SourceImgNetwork,
    title: 'Decentralize Network',
    text: 'decentralized internet built on an open, permissionless blockchain network',
  },
  {
    id: 5,
    srcImg: SourceImgNodes,
    title: 'Recovery Nodes',
    text: ' Crypto Investing Course. Be a smarter, safer investor in eight weeks. UncheckedCheckbox',
  },
  {
    id: 6,
    srcImg: SourceImgPayment,
    title: 'Crypto Payment',
    text: 'Utrust allows you to make payments with any major digital currencies',
  },
  {
    id: 7,
    srcImg: SourceImgReduction,
    title: 'Fraud Reduction',
    text: 'Blockchain is essentially a kind of distributed database',
  },
  {
    id: 8,
    srcImg: SourceImgWallet,
    title: 'Next Generation Wallet',
    text: 'The Keevo Model 1 is the latest and greatest portable crypto wallet',
  },
];

const IconDarkMode = <Icons.MdDarkMode />;
const IconLightMode = <Icons.MdLightMode />;
const IconMenu = <Icons.MdMenu />;
const IconClose = <Icons.MdClose />;
const IconCryptoCurrencies = <Icons2.BsCurrencyBitcoin />;
const IconCoin = <Icons2.BsCoin />;
const IconExchanges = <Icons2.BsCurrencyExchange />;
const IconsMarket = <Icons2.BsShop />;
const IconMarketCap = <Icons2.BsCurrencyYen />;
const IconCurrency24Volume = <Icons2.BsCurrencyPound />;
const IconArrowRight = <Icons.MdArrowRight />;
const IconInstagram = <Icons2.BsInstagram />;
const IconTelegram = <Icons2.BsTelegram />;
const IconLinkDin = <Icons2.BsLinkedin />;
const IconWhatsUp = <Icons2.BsWhatsapp />;
const IconGitHub = <Icons2.BsGithub />;
const dataOfCommunication = [
  {
    id: 1,
    icon: IconInstagram,
    title: 'Instagram',
    to: '',
  },
  {
    id: 2,
    icon: IconTelegram,
    title: 'Telegram',
    to: '',
  },
  {
    id: 3,
    icon: IconLinkDin,
    title: 'Linkdin',
    to: '',
  },
  {
    id: 4,
    icon: IconWhatsUp,
    title: 'Whats up',
    to: '',
  },
  { id: 5, icon: IconGitHub, title: 'github', to: '' },
];

export {
  IconInstagram,
  IconLinkDin,
  IconWhatsUp,
  IconTelegram,
  IconGitHub,
  dataOfRouterLinks,
  IconArrowRight,
  IconCryptoCurrencies,
  IconExchanges,
  IconMarketCap,
  IconCurrency24Volume,
  IconCoin,
  IconsMarket,
  IconDarkMode,
  IconLightMode,
  IconMenu,
  IconClose,
  SourceImgCrytoBanner,
  dataOfCryptoIndustry,
  SourceLogoFooter,
  SouceImgReplaceNews,
  dataOfCommunication,
  giftCountdownDate,
};
