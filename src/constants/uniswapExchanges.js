import DaiLogo from '../images/dai_logo.png'
import MakerLogo from '../images/maker_logo.svg'
import ZrxLogo from '../images/zrx_logo.svg'
import BatLogo from '../images/bat_logo.svg'
import SpankLogo from '../images/spank_logo.svg'
import LoomLogo from '../images/loom_logo.svg'
import TUSDLogo from '../images/tusd_logo.svg'
import FoamLogo from '../images/foam_logo.png'
import SnxLogo from '../images/snx_logo.png'
import sUSDLogo from '../images/sUSD_logo.png'


//Method to get all exchange addresses in the future, for now hard-coding
//https://www.reddit.com/r/UniSwap/comments/atddo2/effective_way_to_get_all_uniswap_exchange/
export const exchangeInfo = [
    {
        symbol: "DAI",
        exchangeAddress: "0x09cabEC1eAd1c0Ba254B09efb3EE13841712bE14",
        erc20Address: "0x89d24a6b4ccb1b6faa2625fe562bdd9a23260359",
        logo: DaiLogo
    },
    {
        symbol: "MKR",
        exchangeAddress: "0x2C4Bd064b998838076fa341A83d007FC2FA50957",
        erc20Address: "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
        logo: MakerLogo
    },
    {
        symbol: "SPANK",
        exchangeAddress: "0x4e395304655F0796bc3bc63709DB72173b9DdF98",
        erc20Address: "0x42d6622deCe394b54999Fbd73D108123806f6a18",
        logo: SpankLogo
    },
    {
        symbol: "ZRX",
        exchangeAddress: "0xaE76c84C9262Cdb9abc0C2c8888e62Db8E22A0bF",
        erc20Address: "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
        logo: ZrxLogo
    },
    {
        symbol: "BAT",
        exchangeAddress: "0x2E642b8D59B45a1D8c5aEf716A84FF44ea665914",
        erc20Address: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
        logo: BatLogo
    },
    {
        symbol: "LOOM",
        exchangeAddress: "0x417CB32bc991fBbDCaE230C7c4771CC0D69daA6b",
        erc20Address: "0xa4e8c3ec456107ea67d3075bf9e3df3a75823db0",
        logo: LoomLogo
    },
    { 
        symbol: "TUSD",
        exchangeAddress: "0x4f30e682d0541eac91748bd38a648d759261b8f3", 
        erc20Address: "0x8dd5fbCe2F6a956C3022bA3663759011Dd51e73E", 
        logo: TUSDLogo
    },
    { 
        symbol: "SNX",
        exchangeAddress: "0x5d8888a212d033cff5f2e0ac24ad91a5495bad62", 
        erc20Address: "0x3772f9716Cf6D7a09edE3587738AA2af5577483a", 
        logo: SnxLogo
        
    },
    { 
        symbol: "sUSD",
        exchangeAddress: "0xa1ecdcca26150cf69090280ee2ee32347c238c7b", 
        erc20Address: "0x0cBE2dF57CA9191B64a7Af3baa3F946fa7Df2F25", 
        logo: sUSDLogo
    },
    { 
        symbol: "FOAM",
        exchangeAddress: "0xf79cb3bea83bd502737586a6e8b133c378fd1ff2", 
        erc20Address: "0x4946Fcea7C692606e8908002e55A582af44AC121", 
        logo: FoamLogo
    }
]

//To get more exchanges in future:
// let exchangeAddresses = [
//     '0x2c4bd064b998838076fa341a83d007fc2fa50957',
//     '0xddee242662323a3cff3f9aa139ffa496ac3c73b0',
//     '0xae76c84c9262cdb9abc0c2c8888e62db8e22a0bf',
//     '0x255e60c9d597dcaa66006a904ed36424f7b26286',
//     '0x09cabec1ead1c0ba254b09efb3ee13841712be14',
//     '0xe8e45431b93215566ba923a7e611b7342ea954df',
//     '0x49c4f9bc14884f6210f28342ced592a633801a8b',
//     '0xf173214c720f58e03e194085b1db28b50acdeead',
//     '0x417cb32bc991fbbdcae230c7c4771cc0d69daa6b',
//     '0xc6581ce3a005e2801c1e0903281bbd318ec5b5c2',
//     '0x48b04d2a05b6b604d8d5223fd1984f191ded51af',
//     '0x1aec8f11a7e78dc22477e91ed924fab46e3a88fd',
//     '0x4e395304655f0796bc3bc63709db72173b9ddf98',
//     '0x78bac62f2a4cd3a7cb7da2991affc7b11590f682',
//     '0x7ad24a41ce760232ba2885a91f846ea86c9baa41',
//     '0x657184e418d43a661a91d567182dc3d1a4179ec4',
//     '0x4e0e28d426caf318747b8e05c8b0564a580e39a7',
//     '0xd883264737ed969d2696ee4b4caf529c2fc2a141',
//     '0xb800445dd982c1311523fd465ac44f55093b2b5b',
//     '0x174dfb6e6e78c95678580b553eee7f282b28c795',
//     '0x069c97dba948175d10af4b2414969e0b88d44669',
//     '0x17e5bf07d696eaf0d14caa4b44ff8a1e17b34de3',
//     '0xaa3b3810c8aada6cbd2ce262699903ad7ae6a7ef',
//     '0xea3a62838477082d8f2106c43796d636dc78d8a4',
//     '0x69f276abd6456152d519d23086031da7c73f91b8',
//     '0x60a87cc7fca7e53867facb79da73181b1bb4238b',
//     '0xe18256cd23efcdc4f95581e86f61ea1b09afd02a',
//     '0x055bab4bcc17d2ab155fff017fc5e093556c6ad2',
//     '0x2e642b8d59b45a1d8c5aef716a84ff44ea665914',
//     '0x38577ccec0ceffd178fd3be66e1c6f531bfa410e',
//     '0xef465915f2d6d8183a7d5ee134a53f00c780d3e9',
//     '0xf506828b166de88ca2edb2a98d960abba0d2402a',
//     '0x1c6c712b1f4a7c263b1dbd8f97fb447c945d3b9a',
//     '0xe79fe64771d5351b936eeac6222682c3d878063e',
//     '0x8a8d7ad4b89d91983cd069c58c4aa9f2f4166298',
//     '0x817e391baf312dc5078cd7a98a7a0255ac63ca48',
//     '0xdf02ffeafdb79e564ae9fdac6545c5f4c2178400',
//     '0xa1c467dc897a36689dbbadcc212b212b4f526e49',
//     '0xe8bc0a210aaf86dab4dd600faca5cfe492e2e084',
//     '0x467fb51d54d7e51ee925f7f1a81ad5f2a0211169',
//     '0x2bf5a5ba29e60682fc56b2fcf9ce07bef4f6196f',
//     '0x21b8a991a203a440c83450564fdefa3db10a5004',
//     '0x394e524b47a3ab3d3327f7ff6629dc378c1494a3',
//     '0x43892992b0b102459e895b88601bb2c76736942c',
//     '0x4b17685b330307c751b47f33890c8398df4fe407',
//     '0x077d52b047735976dfda76fef74d4d988ac25196',
//     '0x28991ac221054bee3a38ae9ad0fb3d0c3e45d0cf',
//     '0xaec97872d14ac79e95fff18c169bfd183efc6962',
//     '0x4785cedbd89c818d60988dc5979b029f3900b54b',
//     '0x701564aa6e26816147d4fa211a0779f1b774bb9b',
//     '0x380fdc8bb8722915076a09479d1bbc75e69c8be0',
//     '0xc0c59cde851bfcbdddd3377ec10ea54a18efb937',
//     '0xb2744df7bfbb4802f44fd1b1fd9012502d4af704',
//     '0xc4a1c45d5546029fd57128483ae65b56124bfa6a',
//     '0xd1f3e9b413f5c9fd56f044699c64ff710e7e5a9a',
//     '0xa2881a90bf33f03e7a3f803765cd2ed5c8928dfb',
//     '0xbd4479c98dc21563ba822c3c206d8339698e2dd4',
//     '0xd1a8c5ba35752e4b62c71c795a3f6481faa4d36e',
//     '0x7d31fc38ddd7d6907f820f4268f1d8d5d5797826',
//     '0x7dc095a5cf7d6208cc680fa9866f80a53911041a',
//     '0x97dec872013f6b5fb443861090ad931542878126',
//     '0x884715e2dce8757c9ee19739c366b2c7c65f05b1',
//     '0x329c9642efe33a62161dda6b4eb3821965191441',
//     '0x30b16fc2b530dbf991e1b15ed953cc4585f0b27c',
//     '0xbe478403ac906d329fa8ebef1d3f9e0a48067d57',
//     '0xbcdf538581f7167ec8228ec2c9b1cfc2f74788c7',
//     '0xd55c1ca9f5992a2e5e379dce49abf24294abe055',
//     '0xb6cfbf322db47d39331e306005dc7e5e6549942b',
//     '0xb92de8b30584392af27726d5ce04ef3c4e5c9924',
//     '0x2afc64cd5e64a32a363ea84b8cad1ce5239a1a3d',
//     '0x95e4649f5209dd292caf1f087b8f1db3be24927f',
//     '0xc3c028721f854bc75967cbe432fb0e221908baa1',
//     '0x7d839eb463b121790c99e0f017c21f0189dcc167',
//     '0xb684f9b231accdef385f06038395e27a4e3aa86b',
//     '0xe3406e7d0155e0a83236ec25d34cd3d903036669',
//     '0x28d9353611c5a0d5a026a648c05e5d6523e41cbf',
//     '0xb580a2b495917b8577d9a612be068f591e8c20f9',
//     '0xf79cb3bea83bd502737586a6e8b133c378fd1ff2',
//     '0x8de0d002dc83478f479dc31f76cb0a8aa7ccea17',
//     '0x7eb81c7a0b322d31c11064105e14dce6e852e8c1',
//     '0x755160062e3e09d34af0a00ff8cab8500e81e0d7',
//     '0xd91ff16ef92568fc27f466c3c5613e43313ab1dc',
//     '0xa2e6b3ef205feaee475937c4883b24e6eb717eef',
//     '0x755899f0540c3548b99e68c59adb0f15d2695188',
//     '0x32a29c4269dee1a9e87eb75d66da71591a7aee96',
//     '0xd202ee9690e3240aff1631d98c99717a2265fa64',
//     '0xa0513d82f17c491dc6ab34efd89dc372bb180378',
//     '0xf7b5a4b934658025390ff69db302bc7f2ac4a542',
//     '0x6fca96a679490ed8a80c7344799f1b090fd4c94d',
//     '0xc7c60e9419466939e968db2a88fe64ec41908bb4',
//     '0x164c93580839f40609ce0250dd4c98a25da175de',
//     '0xb7520a5f8c832c573d6bd0df955fc5c9b72400f7',
//     '0x4f30e682d0541eac91748bd38a648d759261b8f3',
//     '0x1c116d67e0bf0cf5cb0ad5a74a041d26e89271e7',
//     '0x2135d193bf81abbead93906166f2be32b2492c04',
//     '0xedc485266aa0ebe9ccbfc1f255bb5ffea1f9e3cc',
//     '0x62ccb0577aa63b8d72449b9fd13b3cdbcf3787d6',
//     '0xe31a245102fc1ae72f80c6969f6475e85c897bbe',
//     '0x53e31a941b76ef1b486e86aa39bcd5ae56829870',
//     '0xab2da28aa5803c8da0f6603e91e16dab3ba542d2',
//     '0x20149f1672175c7118bdbf966bfb6a02bf733810',
//     '0x9709ef0958b831865a97682d9ec08f897fe3b56f',
//     '0x68326300df49ec6387e75690857424c2ae111750',
//     '0x8aa3cc2bf30cb47f290fd4e9b660bc3a685b9b3e',
//     '0x3fbc2275de71427aaebbe0e5e6bc13fe8f27fa9e',
//     '0xfe3f05c7da9fe53591fab3f920798a67a95747ed',
//     '0xf50bac10faf905e95ffdc9f35b75ee67117dad2a',
//     '0x0045d5d2cac7688f7fc36313e69fb5350958936c',
//     '0xe1e005d82922303ca9fb5cb6426c2eb07f8e5c84',
//     '0xb7836492f5850d9b61d6b71c73697c5b9676208d',
//     '0x6f1c46e91ce29d430e31205ead148b0bee46b9fc',
//     '0x7174ef6b9cb528e954508264a9912da905977422',
//     '0x23228ec35e810569495bd0aa4d56e9fad759bb29',
//     '0xe69ea0f00b6d399a11030eb6d79e54c486c0e1d1',
//     '0xc040d51b07aea5d94a89bc21e8078b77366fc6c7',
//     '0x4d2f5cfba55ae412221182d8475bc85799a5644b',
//     '0x5634de511580536296c6ea2eb8ebec271ca76bc2',
//     '0xc3b03664126f2f192ec658e1c62798c9ebd0ff08',
//     '0x059ad96e38f027ccd127567dc09b164762bcd695',
//     '0xcc36e05eeffac3eb61b696d0bb328f2b08389fb5',
//     '0x3c3351e44d32b36bf2af97de6f40b548b00cf654',
//     '0x95efaafe52e89992bfd4f33c96ad971fccdc31f6',
//     '0x4f0d6e2179938828cff93da40a8ba1df7519ca8c',
//     '0x3fb2f18065926ddb33e7571475c509541d15da0e',
//     '0x2263fd7c62914ab8ec2b5e7b00bc8371a6c0d221',
//     '0xa825cae02b310e9901b4776806ce25db520c8642',
//     '0x601c32e0580d3aef9437db52d09f5a5d7e60ec22',
//     '0xbb7cf8a9d6b2aa7d98fb0bf3548a589a68ddb774',
//     '0x066198694b1db74d67007d19a7c4f2fc3a061075',
//     '0xe2f548a3b898eca923bd61919f2635b071a7f95e',
//     '0xed9d5aa6124a3310b80a2468c67763627653887d',
//     '0x08850bd3ce3a8f6b64d724c3dabdbf6f4f8561fc',
//     '0x356435d47e8f36d5102719704747afb9ddd36747',
//     '0xe9078a97eef2bb502a9f792169f9c03626649248',
//     '0x5a67d8ea5c9bf381fe0da2862cec1ec90a5ca329',
//     '0xcfcc608f03c0cee86589e11224f24779212f0fe5',
//     '0x72208a7d8c11cb28c8e6d32e1a070015786c0823',
//     '0x2995b7f65cbc1b0ae8095eae314246508c49182a',
//     '0xf43b2329130cfd87b322e49b96681e09f1ef172f',
//     '0x262275a4989c96cc6ecde77eb2dda6e13d508c4e',
//     '0xd4777e164c6c683e10593e08760b803d58529a8e',
//     '0xf5bb20e73c59e0f643ae4bcd89d761ebdec83b73',
//     '0xd00530cf4e0b6b5e8f4efa25fd57a85ced8d60c5',
//     '0x8809c63af18ec760547426a5c3e122e0a3efbf27',
//     '0x27f99de8a71f09e9e567050192ce3005f0dcd0b3',
//     '0x0b5ce6f7cbe0627aa8ad2e7e69ed554c0fe79162',
//     '0x7d03cecb36820b4666f45e1b4ca2538724db271c',
//     '0x87d80dbd37e551f58680b4217b23af6a752da83f',
//     '0xf6a0e98be0153e64b34693ba62c10009c697c95a',
//     '0x060a0d4539623b6aa28d9fc39b9d6622ad495f41',
//     '0xc7eb739e2651484daa1717433de1736a6529cfcc',
//     '0x9801d0e88222e9204025117bada94728885d1a28',
//     '0x57c6e18ee62fc660575db273ffaab02436aad222',
//     '0x6b4540f5ee32ddd5616c792f713435e6ee4f24ab',
//     '0x700520b1e2ccc5bf5fa89a5f7b8fd9beba3f04b0',
//     '0x5d40522c20326f2ebcec2d371f250e352e3bed27',
//     '0xccd5c9f160379510670f9acd73779dce7e6226b2',
//     '0xe0cce4518ea70d98231c47e5b977ba90cfcec615',
//     '0x09f448c70c99124024cd9e8dcae6c2f51c0896db',
//     '0x26cc0eab6cb650b0db4d0d0da8cb5bf69f4ad692',
//     '0xaa9c9308bb6ef318bab918d1e4aebf284b02b680',
//     '0x104f5ac4fdf92fd4668a08ac2e305b5bcf3de215',
//     '0xe4f984870929bb4189ab43def9fc2f339244765e',
//     '0xd4a6ea5eabfd4048640724f62713ffb1e6292271',
//     '0x6886f9dcbdad3cb8c6684f2fe78de5318c177068',
//     '0xa931f4eb165ac307fd7431b5ec6eadde53e14b0c',
//     '0xaf294be0577dc703bd7f5b96d34bc9cb110f1e2b',
//     '0x39b0f27c771ad4236422af5ddc600711eefd93a3',
//     '0xb99a23b1a4585fc56d0ec3b76528c27cad427473',
//     '0xa809ef80c0abf701bd1b3b15749aa0a4179ec034',
//     '0x23c3041a18a528a57e26623259e5caa9fb160665',
//     '0x526353fbb4a37eddcebf63f96796a078d908f568',
//     '0xa248a46b97204b6f4d5b05ba824fbea46390d978',
//     '0x9b7036f677a6e4832e9983efa0ce384130248398',
//     '0xc5d192f702cc7ce84355df9d41af14bde5024cc9',
//     '0x77e885fbc67b7c6ea2b889c96bbd78f9e647463b',
//     '0xcbfda0aa2e471c02a39e6cec9b7f5cdfd91d83c6',
//     '0x0e6a53b13688018a3df8c69f99afb19a3068d04f',
//     '0x5d8888a212d033cff5f2e0ac24ad91a5495bad62',
//     '0xa1ecdcca26150cf69090280ee2ee32347c238c7b',
//     '0xe52d807ad934953315ccfe56f3b6425fcff04b2b',
//     '0x4591482d0c9d0af061a42009ff1b3cd070396f87',
//     '0x8903842469f8790dad072b45bbce96cde9f3d7e6',
//     '0x017d2735eb562d0ad9abc2a91801f4ca96f6bfa9',
//     '0x03f7f874d7e1b131f8c66f1f64b15b645667687f',
//     '0xd2bf46ac7cbf595879aaff5967a92ae7e999c308',
//     '0x52b9c94031dee81b2c36be736fa7f6b7ca7ad84e',
//     '0x877104c369bb563f3a893fae861b4baf0cdd9d37',
//     '0xd7d070728c947645af47f8cd0731a4100695a503',
//     '0xe749f1a9d5f9055f0b784b586818833b9679949c',
//     '0xc8313c965c47d1e0b5cdcd757b210356ad0e400c',
//     '0xa7298541e52f96d42382ecbe4f242cbcbc534d02',
//     '0x5982aa08c4d3103a3534055b5fb2aac88d61675c',
//     '0xbaf5a8bdf81cfe2d34c0ced89236fe473183f2e8',
//     '0x80a393b2e1e4aa07862c24ad8ac14511c91bd562',
//     '0x9ad2f1272e775ebec936fef4cfa44bd5b1c7c3a6',
//     '0x7a05354b796958e439b1780204a89f81094ea4b9',
//     '0xa55ba5d915a53e3c0514ff4e232eb50af12922ec',
//     '0xd62cc4154a8f865761c5b027ec33b4ab47cfa175',
//     '0x63a91a8b6f6289aa93f18539d245ec49c6169cd7',
//     '0x3981932f5e17540d863868c5d7c4e617e1334acd',
//     '0xd284aedc33522c85949576eca69414020d15ccb6',
//     '0x6dd1d97e5817ca376e653a1e7326e0563d13ceeb',
//     '0x4da5c31ab38a496a2513843dab8721e9aeb876bf'
// ]
// let factoryAddress = "0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95";
// //to get new exchange addresses:
// const factoryContract = new ethers.Contract(factoryAddress, factoryABI, web3)
// let uniswapData = []
// async.each(exchangeAddresses, async (item, callback) => {
//     try {
//         let erc20 = await factoryContract.getToken(item)
//         let erc20Contract = new ethers.Contract(erc20, erc20Abi, web3);
//         let symbol = await erc20Contract.symbol()

//         let uniswapInfo = {
//             exchangeAddress: item,
//             erc20Address: erc20,
//             symbol: symbol

//         }
//         uniswapData.push(uniswapInfo)
//         callback();
//     } catch (e) {
//         callback();
//     }

// }, function (err) {
//     console.log(uniswapData);

// })