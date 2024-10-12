'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a5ab5d8e9909a4cfa58b2fc444ef9120",
"version.json": "8d96e3feec8c21f667fc1c333fe3bb06",
"index.html": "ccbe3045be9fcbfc3e370758167a2177",
"/": "ccbe3045be9fcbfc3e370758167a2177",
"main.dart.js": "7fa7a4401cdd2ae39e5ad83245222cef",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "95ed34658a9432083f729c2cdc193391",
".git/config": "8fc0e1c7cce69b820433d820bea4b02d",
".git/objects/61/27bd9dde703ca393a3b3cb6fde8a0caa65afa6": "5be5dea3ae15b25b6e9a8bfdaf210af2",
".git/objects/61/b0a12440e817e9f8ada43a641d4b5d350e0aaf": "c252e474304bcc658340c6396e005b37",
".git/objects/95/6f96c0980654504b537ea9c034a9fd324b1501": "c1f005957e2b32bf412eb72ac03b2fe2",
".git/objects/59/4817bb73f84394a60a1ce5caf4e55824addc31": "21e4949930f8084597b54b875a5f603f",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/03/c7eb4aa429fee09853526147c78acc5eae302e": "ec56da4e1eeb363852ab5abf0d37bb5a",
".git/objects/03/5f230ddb9f776f215e449495ffae5d46713235": "734bf42660c33fd59e5d8267bf62a75a",
".git/objects/9b/c8670e7450ff1beaa524c9bc5834d860559ed1": "826a11ba2401e217660c8917ca639627",
".git/objects/9e/89ccabab4a24b9037391f6bfa9e12f06171e71": "19493c722a3bfc066779cac6c3abdb98",
".git/objects/04/5e1db7ef1c520c3e9b4eecf1b5980355b06216": "716a4c3467c0478cac198e0143a43fdf",
".git/objects/04/967a367d96c9cd13da70d6959340ee1489d6b2": "2df83614f572eef1141d275998b53888",
".git/objects/04/7ef22312e5400333596b693067a864cac090fe": "076c0e1cd374a13b21b5fd313af756a4",
".git/objects/6a/c81a14e421bd88ab8db6d0bda28bcc1ce81a0f": "7f61efb90a9771895076b2f370e766a1",
".git/objects/32/a490d466ef33ee29715cc081c71dc3be4b2476": "83200408b799f9fdfed5b21807fcf4ef",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/69/b1a6b848adb6308a6fe7c22f95edf39d8ccfc2": "c8d9ad9971d3a8f996697d2f073a582e",
".git/objects/69/b773400dffe18879d5ceb6d27a8d29a9e0eddc": "e78847e9dc6687272e29957952062e1f",
".git/objects/69/e8d5ab48715239ad1040cc63c1a08114ed70f1": "8bb02c54c2006408445904870b39b331",
".git/objects/67/de6cebc6772f78a0ec58ba331ebdb8526fa32f": "a4705a88e13f764e4371cd54a58f8af5",
".git/objects/93/48ff41e532e7b1d7eadae1b109f3bc5599e8b0": "dd4d8ccffebd6c9ff8a9dafaa6023e13",
".git/objects/5f/c0e52ec3f01002eab4c2ad6a6aa23ea5f20b69": "05877b7e056329f9995da0fd492917dc",
".git/objects/5f/aec24268e0e2a412ca0342d6f3215dc6721ada": "a267b9af71268c3e5335e7132ef74fcc",
".git/objects/33/67b5a33b1c95f16454206ed3a237d1e444da72": "b6f42239167809fcb912c2d80dc0fa0b",
".git/objects/05/54267fa9053b2adf73a7d1289d305ea781b516": "e13c0c1edc404bcbe61ed84016c94fec",
".git/objects/a3/a308c17524a17582bab65f80e936187fe04067": "d7d9d18b4e545b92b17746d6ac54ef0c",
".git/objects/b2/83fae9675ea9dc974a2836ef694369fdb4c865": "81cfe4bb6e7ffd2d381aa0e08d00c348",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/ddb0adb4f0bf6dcff98423b2c49f8e95cc3a60": "08bb59d65a10daf3e81a9bd014866135",
".git/objects/ad/b423a209247ce3ae1552f26161b2465c2f1260": "bfc0b3193bfefb7489721b11fe3b2d73",
".git/objects/d7/8b955a366442f2b82a4f25eaf708dbc63d1545": "a415ece712f2512be30ce08c84f11b06",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/8cf9c4eb49a4b58a394f75ff9dbcd0ff404219": "cf822dd3e639737de269a3c5049d52ad",
".git/objects/d0/96edb189772bccd6349a975d998c8965fbefb4": "f2fa3f54c16fb9a570fbd5a900f69427",
".git/objects/be/fbf957223f09a7cd35e6003b62009f66cc0804": "63fdadfe1de214e00f41cc347a5a45d3",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a86bba233f354b9934827e7c84b27a10172708": "ade0607207638d1c389df193c5b5e254",
".git/objects/d6/c781eebce344d0f7d912f1be63f1e837b06c8c": "7ae4c72b393756b5df1cb532ad6eefe7",
".git/objects/d6/c9c9ebfd6057102f6b36ba291d2f5e8004bdde": "8446add8ed8fd23a9842c1ed0ae3a973",
".git/objects/ae/ee2adcb0c608874c58e1af870d072859fa1208": "36815783c68c4916e35045fc91e6c615",
".git/objects/ae/72f3f3165d803ea9e68fcf4bea22ef5063fbe5": "40f6b049c98d9d855bd50b53949ed13d",
".git/objects/f4/12534c3bf9710d2f018c5762ee278b3c45379c": "18c67f0bc96f696b54249afccd9566de",
".git/objects/f4/e7da65d7217669b1c219d181cafd36e11c0c58": "cc40c16a90071b96a5b58bb8d18e67dc",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/0d2155b288e21f472e087f07fea8ed2f244971": "0ce8e9fe75ed7164b16a2e7eefd21687",
".git/objects/c0/d2ef7d6ce885fff589740c124b25196038ca2f": "b3eec795370a39e87c18b9a6e8aba629",
".git/objects/c9/1753f8c90e2d0de8ec7e791a9f1d832d4d3c66": "292c65153424a9ea5225eae65682d718",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/cf/a5212cf3be0449378d7d6b8468a40da726544a": "8b53c9cb480538503bc2a72a6653abdf",
".git/objects/ca/211b99f08d0e3f30278d3270dc63f94aed403c": "fe0e51bcbe7893fb9597564003267b2a",
".git/objects/e4/e51a073cdcf0d2a20ab8e2f0d2825b1742eff7": "9f0947522bc4e7185996deea0d9a9f4b",
".git/objects/c6/fb8106d82a0e6335a23076aa2a71a945b97a39": "fbbd6a3146c612dbf68cd150783389d1",
".git/objects/4e/95b78c6a22d17c161230c472e59f588eb34415": "7d126efe51ae7a51bd21851772e02b56",
".git/objects/18/30d30889468b53c3780f1cbbee3deafff0fa80": "98a68e43ec5ed0294ca6085efdab64b1",
".git/objects/18/680f1efb03ab850cfdba0f0f1d614ea614452a": "deb36f668f113db03d22a8adaba349e4",
".git/objects/7d/307abc5a0dfead37c8d095999b9ad224139361": "e891fcd8e83849238eb75910d5a75368",
".git/objects/29/bdedd16f8282f5974ebbdc8aeb5a87b09118e4": "e736b1ccc2cc48d64b0354867e98c567",
".git/objects/7c/a6d02bafb4bc0b369d6344674e0a66379594a9": "e291dc27a5591a1ec4ed2c72ce9ec0a1",
".git/objects/16/5bcdcece2fecbbca0d6b34c6c582d3ac447040": "400f9c28dfcb5094d20cd4f847438f54",
".git/objects/42/ea23cdf441b5fa1c2fc03046e6db61b4b9878f": "92d13646b918cf634e36d4edcb302e02",
".git/objects/89/4edeebc1b5f64e2b8e7c656eaf5c1cc03a16a4": "b1e4bab556e123919a3a4f35f0d1bac3",
".git/objects/45/8a640c72d393c04c1f95f780d7a88f68d899fa": "ce2ec9b060518da1319b021db41d4277",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/cb729f207644890222647afe2837644d2c48ad": "458c18da1eddbe52a7cd38c4a497c100",
".git/objects/7e/6b0a39a883eeb0fe5271bf38dfce0d3097b721": "e75ddda6a153f8cde4d38bd294c0c0a1",
".git/objects/19/6dfe6f73ac6ba4a95cea4edb357a64731df4e3": "7cb5cb0e772123a9c58149863294f54d",
".git/objects/21/d64219747a3d36fed4d82b970b184af61413b2": "56e4bb52127dd91efb7fa8fb66201efa",
".git/objects/21/873d091092e547340905d2b99bd25c65d02ccd": "611f12c6c8dcf1d84aae9203970cf9b4",
".git/objects/4d/550dc79430d147aeddfedcd53105552a9959b5": "e335b6d9dfbb34b9ad37e2f51310d043",
".git/objects/86/b77b88de69df421b01e5127b6af5bda1828f27": "9e34aea6364f617ba9b53f487b177475",
".git/objects/72/964ca9fa945bab9475cb8836e90ca7af6647e0": "f42e6fc1e0ff688aa0bc0c6bcf71761a",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/763c89e82b8a98712d9ed6b05964be9e338cac": "ab5871bed76ab2ea0b8592d1f5412938",
".git/objects/2f/5f60dc86eb5f9d751380a38de0ca5e26c16111": "5292fb08ffd6b88b1870075dcab32adb",
".git/objects/43/83fdb69dd73f4464a803786e769cb6cb16d738": "e7f112c9b66bc804d195b29902039697",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/9df7c5bf336910e44e95218849125dc44c858d": "c0278f1dda8874f1e4efa424a131d1d5",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/b41bccbac5d647c5fb0e933a89f6d3a93a21d3": "c900041a481028cfbbe8fb8334df229e",
".git/objects/9a/b859f13a1493e2800492a7cb1de24c3c96be3c": "38e9bf4217341a0eeff387e0403e6b1c",
".git/objects/5c/4ead3dfd4b4a874fd68e35752e957c500f5a1c": "c09f4bedbccf40c2061496fe7dd36879",
".git/objects/5d/cef485c8de6b10f3dc3048feacca79825a1859": "a8ee98e031ff5f9728957b76f1ef2cae",
".git/objects/65/997c56615ebff876fa49b2ae630303f8f15b75": "73e12e220c37734d0e3f6a73ea26a4ed",
".git/objects/62/7c312d7957f7f2d27e0627485d61f1e195859d": "fed0872affbfc929fb7d811dc0418d31",
".git/objects/3a/acf5cfe36a1309deb42d8f49c1b53826f747a4": "b887f9250626aa91d623de63636f3e25",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/f566594c8c45599f196243609e4275491b0f33": "447674c58cb268d2c1a1e1b623430199",
".git/objects/30/2f0950f203592e6bcb5d783baba61992860004": "7c61b346ee307ea3b3744f214333fb22",
".git/objects/08/93ecbb4ae3bab81fcfc6713064622a14941d54": "ff2dc9e7ab2b2b782fbd277d7c74d91e",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/39/f545b16763ef0c8e1ff6950c2d8353726a21cf": "f69b72ecd7609e2121fc46e5a9f0e88b",
".git/objects/39/f6958f04c83f473a0392bf8f117a53217cf79e": "b3b91d65fd5e9e0438170e62ee36b776",
".git/objects/97/5d739e55716315ed2223c0e5558370a6488861": "74a5345110729a2a877e9515a0101707",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d3/d87a98fe916b5ae3cb4e3fffd3ca8a78d0a6d8": "5f86d8c754cf4ddd7dac9741fe9bd0e5",
".git/objects/d3/02017b6e93d5768748346d6891e63d3efb2228": "7087dc2ebc58af08cd7901389d965893",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/3c80f16d882a6e8ae54fa3bea4fc110f23a5bf": "966add86c17f7292a0acda496d65a821",
".git/objects/a7/2cb405838ad682d90f97df5ee354328cb99502": "eb5f689edd7b1c736392d8a156cf9096",
".git/objects/a7/768136009c251beb156ef9383e25b309009903": "4b30e95015e50606136da2640c518a73",
".git/objects/b8/f657f3d4b36871fd354c238a88f5e89c3f464b": "d3ec78811fe10238b39086437a795edf",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dc/d61a87dcb543012418fc37fe7d87941e1c83d4": "aa21037519443e1e8cfdc7478189fd33",
".git/objects/b6/522c8d9f58c363b981bdfcaf380be4276d0856": "ba31ca23a2fc970b1a57ed06f3b9c7b5",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/aa/80f9dd92e6c7f3669dd8405ae7c6769e74aea3": "62ce793850c67e2b9a47604115e00b2a",
".git/objects/af/453a0f773b46aefc4680a6c69019b3dce3fdb3": "9aa901c689466330d7fadb0200f8b3f6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/92173824802bc7b3c947a9759c892220259d22": "148a5c27d6a49dd46ca928e8715d1e72",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/a914846b9a3b1207c95c41d13bc3f42a9148e7": "689a3dafae4c2865cf800d620843726a",
".git/objects/a1/563e8c04a871d613ef770424e4bfc7b0eb3b35": "2c96d5edbf3c19f6e8a68f2ee2e7cdd9",
".git/objects/ef/4da3a8d49914a3b08d92469236e1425566f0f1": "c91e04daa4f4349f113c03d841c0488e",
".git/objects/e1/afa4186f014758d50a2f95aa13d45eeca91bbd": "13eeff4f84ab1995728d97085772a234",
".git/objects/cd/56c6a9ada1ffee9638291307447778c14c1301": "f0787a027a6203c7c68ad951ebda7df9",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/f0/67d160ca3446bd9fb634afbc80e038d69883ef": "fa6bd2a49337077a8e07b518e1128026",
".git/objects/f7/c9998dd31e7fc2cb1fe762fadc91e4816aa564": "3c5d40862715a6dff5b1d120d26b55e1",
".git/objects/c5/094a757d83f70ce9874302be6b501c7674d9c5": "97fd3f700169272027415dac927cb9f4",
".git/objects/c2/a6f9de2c1e959d5683fa5b584c0d059c5dbc95": "b3e37d952087441fdf369553fb9fd974",
".git/objects/f8/ff2b5de18419593b5a1b49c877160bf34c5408": "8d58ddf8a2c2f7ab2d570069c5fb92de",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/0dffdadafabcab14b294ac20b862168ab04828": "2262986239161ee96055b0690ca80274",
".git/objects/2c/e57e2bbbc6f0edf83c05b9ce22d7622aae278b": "d2515851bb86cc7589157b364e892633",
".git/objects/77/fb01c4629bc966f52fe25e7e619e6c3402c9ad": "b4bcb7babd535070926757dd899c4fdc",
".git/objects/77/5d28d83f9838d0db4c02358ce03ecf0b385bfc": "cdcfcdf018e1417eedc8dc75a83b85de",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/24/0d6ece7c59b76d3a57705e68d1460b82c2c342": "b05d9c4b7b2cbbe2254cf4517454be4a",
".git/objects/24/0635b8b2689977b0e93eba90ce79d78e99ecd8": "f5fcade691c7f0dec8e71f85f6e630bf",
".git/objects/12/64399bab102010e6e6e49ef0e1794bd7bd7729": "7f6b4ffeeea82a4642185f5fc1ccb203",
".git/objects/8c/25c4291ec542f98ba6e03015d98f28a8255f5f": "1a67af69211261ca265bc23f7392da4c",
".git/objects/8c/85d1028b934eb124b154f117f6dfc1ef8abfad": "512b5e720bb59f4f72500207210646c0",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1c/cc9a97582c9eec868aa39d505bf75deca5f067": "1e50daff849b0c936077c468d02346a0",
".git/objects/1c/3fdcdf2bea8b050c05a771bb02cc2ae9975377": "6c03db0b4915e5f64c488981a8587a80",
".git/objects/49/3174080425fd729af1d647bf0ad0f8308c99f1": "4047526e69de5bce1ef059387d129c2a",
".git/objects/2e/79892db2abf280caaeac942720cbb4f5187e73": "050fc135842d68e3e51a5ffeb2909c85",
".git/objects/2e/be068972834655e3be28016eccff5ff24822ca": "ceb9ec25c38d2fc62b0a773eecf667e8",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/5fd84581234674230dbddc9f3e643f22c5d09a": "2b3ce7e3cd939b1895b845b4921610fd",
".git/objects/78/e8d4afe59719fd4d701572b6841bd1d283526e": "cb345edafd2b66b9b5f6d82e8e4ba812",
".git/objects/78/3e2dcfaf002ac383c0dbaca3b0c4efec7bb4fb": "f120b274376f4d22275be57133fe2cf7",
".git/objects/78/90b82bae20c550dfb8834ddf778b97ecc8b9e7": "e4102fce7a6e7858f51e9f2a24efd197",
".git/objects/13/f9a0b1bb1bb55a4bdd78c2e9ccb65f3c31f664": "7d721d54429d1d264d30e843858f1054",
".git/objects/13/be87d92266484d002bd1cdc9b8d44d95d5d831": "f7486573489598f5271d9ec25b861636",
".git/objects/13/3ad834a6bbb710c98a6d54e2e0c8de587e2665": "758aacfcbe57e7c12f00d7ea37a5aea1",
".git/objects/7f/44d3db2189480162322398553645f2ced6e2f9": "199085e2483e7e8dbfae0d9a3053ba25",
".git/objects/14/3d139e43c7dc4997bbfeb75ba5832bd727170a": "8b064cf5efc8b1eadefb5053f6983c4b",
".git/objects/22/4b02c7debdd9fd7a8cbd014c3f21dffdc4d8fb": "b99d44a950ac296a71ac7d6c868a190a",
".git/objects/25/535d34eb70e321f7fc7487a139a544eecee64a": "a73a2073bd03209e9c033b9cd3e6a35e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d9b68ccf49eb493a1aac2abed5ba44d6",
".git/logs/refs/heads/main": "d9b68ccf49eb493a1aac2abed5ba44d6",
".git/logs/refs/remotes/origin/main": "d31e31c7fd660c5b90e0e1f0cf200b4c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/post-commit": "758b5067d7337d4b305cb7d0ce31d8b8",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/post-checkout": "767bd7fabb986362672085cc1ba0990c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push": "a9e349eafcb42dfc4707bfe81c1fd461",
".git/hooks/post-merge": "e51d02928b108d7528417289957bc06c",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "8cffa59ddb7a9f29681c182d408bf33e",
".git/refs/remotes/origin/main": "8cffa59ddb7a9f29681c182d408bf33e",
".git/lfs/cache/locks/refs/heads/main/verifiable": "91188ef767ae3a3a42e92f1706f161d0",
".git/lfs/objects/60/2b/602b22b227abfccc45338d9dbcb2e70d9dfa561fc22a45f8848f63329b7da663": "05b1e0c088f7d70a7850735387267ff3",
".git/lfs/objects/1a/ef/1aef0ea28aeaae558e4756fa62319304b6c0eff38dba7179fab9eef67448634f": "f2c14ec0d3fb3368d0086f442dacb5db",
".git/lfs/objects/7b/25/7b255c44ec50fc3c75e77babd1699a6cea40b4762f79f8e190de178d95977992": "ce1dc846230f8be353340ba66dbc1a9c",
".git/lfs/objects/3a/eb/3aeb1815c52716a438b70a2e0aec2d65f4e43769156e13242dc0a922cc1466fe": "60c34c30b04d4f6708c88b6fde482c54",
".git/lfs/objects/64/35/64353f2dce86b6ce1d7285b1a41321a95d3ac55b5f70d0c52585494351583694": "fdeeb53f3414a91916c162a7c9df0b2d",
".git/lfs/objects/78/92/7892c70075afd816e2f67aa63db452107743d57bf5ddff52ee6d0ffe38cbdcda": "c224b15835650c3f34d2201f98ad07ef",
".git/lfs/objects/13/24/1324dbce1509ca7082cec080fcc3f4d6e1f8303d08e1360806329b0dcd8037e0": "7a15aa9ec0bd3cbac52e2c6daa5820f2",
".git/index": "bf21a624f248e331603eabd39cda8b55",
".git/COMMIT_EDITMSG": "4a47ee040393f509456b57bf86d5c3ce",
"assets/AssetManifest.json": "86c5ba76726a247c91290e89f5e5b527",
"assets/NOTICES": "68e5cd54b84e2c16da4c18c844aabc8e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "50364b3ed903c005449aa0855c9dcb98",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "434b89b29a3558ebe0f709a42774bac1",
"assets/fonts/MaterialIcons-Regular.otf": "1bab2e3641d3953f43240e2b5b9b429a",
"assets/assets/images/greenhouse_1.svg": "42e9f9b1457438e1978fa0fc8cd9f66f",
"assets/assets/images/CO2_graph.png": "a89bfd55a8912f2530f8803c6b22f540",
"assets/assets/images/image_frame/Marine%2520Life.svg": "b5e702d687a4464020bc6cba59fe5457",
"assets/assets/images/image_frame/Sea%2520Level%2520Rising.svg": "c1c0ce67789305d4f1155bd6f2664ed5",
"assets/assets/images/image_frame/Ocean%2520Acidification.svg": "b67096246a42038c645cf8a3610eed46",
"assets/assets/images/image_frame/Wild%2520Fires.svg": "5170efe4f4103e18a712d7db8997a5d3",
"assets/assets/images/image_frame/Ice%2520Melting.svg": "4b27352731ccabea770931798e403268",
"assets/assets/images/image_frame/Air%2520Quality.svg": "124efe1fde2b6a06aa0518502634240a",
"assets/assets/images/image_frame/Global%2520Warming.svg": "36f74efc72f53ddc49f7f799ebef04f1",
"assets/assets/images/image_frame/Greenhouse%2520Gases.svg": "58184e6444a49024c27e7a048de3cecf",
"assets/assets/images/Carbon_2024.png": "1d1f934129c6aa9d5de0f1c7a48bc130",
"assets/assets/images/fire_graph_2.avif": "2a14e6b68f79798d074a0f47bd17edf6",
"assets/assets/images/Carbon_2018.png": "77cc4669673dc950d38b63f3c7cbd048",
"assets/assets/images/blue_arrowed_btn.svg": "1ab766eef785954a6703c5839be9f1d2",
"assets/assets/images/send_icon.svg": "424e949515aa3ba61f8293ef483d53d5",
"assets/assets/images/sea_ice_2024_min_1080p60.mp4": "ce1dc846230f8be353340ba66dbc1a9c",
"assets/assets/images/wildfires_icon.jpg": "8239798fdb1edc2bcad866658d586a44",
"assets/assets/images/global_sea_level.mp4": "fdeeb53f3414a91916c162a7c9df0b2d",
"assets/assets/images/antartica_change.mp4": "ce1dc846230f8be353340ba66dbc1a9c",
"assets/assets/images/Press%2520on%2520any%2520image%2520to%2520Start%2520Your%2520Investigation.svg": "48aab307abe30b54582682995d2c145c",
"assets/assets/images/greenhouse_3.svg": "545bcdc1e1f4600c1e042d831848a1bb",
"assets/assets/images/ArrowLeft&Right.svg": "5eab0a8442b4c35b7628755b84ca2478",
"assets/assets/images/greenhouse_2.svg": "2b38cc095524decc15b3dc615d6fb103",
"assets/assets/images/Methane_sources.png": "ed6eee8673764adb9a5c97f302e02a02",
"assets/assets/images/choose_frame.svg": "c0729c2778e39f1f5fc5b9ac5bbdbfd6",
"assets/assets/images/Explore-Ai-chat.png": "abaa3fd97fe32516efe549f702bae619",
"assets/assets/images/Sakta.mp3": "dcabb24940ea02e6803978c38405931a",
"assets/assets/images/greenhouse.png": "ca57e482d429de38599d048327843537",
"assets/assets/images/HexTech_Glod.svg": "71ea8143cf92548da2895264ddf08334",
"assets/assets/images/carbon_collage.jpg": "df92e79897caf32d363550bf966f633e",
"assets/assets/images/carbon_collage.png": "c600780efb58243d737538a2eeed05cc",
"assets/assets/images/green_icon.png": "7d52310123ab389fea235847de213ef1",
"assets/assets/images/Screenshot%25202024-09-20%2520at%252010.17.01%25E2%2580%25AFPM%25201.png": "13ac3ae3a0c5f16146b1f0ae2a3c79ae",
"assets/assets/images/N2O_graph.png": "54b4673919215a7bc2e213e91ac0127c",
"assets/assets/images/greenhouse_4.svg": "2b38cc095524decc15b3dc615d6fb103",
"assets/assets/images/atmosphere.jpg": "aa71e392f451159485a075775e513947",
"assets/assets/images/NO2_map.png": "777288f3fd6afadbdf9dbe950971477b",
"assets/assets/images/biosphere%2520(2).png": "8bacf34acddde6e11254f336abfb9466",
"assets/assets/images/HexTech_Blue.svg": "7e18eb5a077e0cb93ca71efed2275bd1",
"assets/assets/images/bleached&not_bleached.png": "60bddadbd9aac4f388141d54176723af",
"assets/assets/images/wildfires_1.jpg": "f46f0eb5723378fef0869225d7929089",
"assets/assets/images/greenhouse_4.png": "bc0ce789ec99d951bf618df435593646",
"assets/assets/images/sea_icon.webp": "976847d91e4ce8ebe1d46891029ed40e",
"assets/assets/images/btn.svg": "e3f207a8e0e2b0e370f5ccfa15567a9a",
"assets/assets/images/connecting_line.svg": "a8ebf561e79e2fa8e427fd6ab90a7aa5",
"assets/assets/images/Marine_life_icon.png": "a12c0e5c36fd347097946cd86324ef3f",
"assets/assets/images/Orbiting_Carbon.png": "0e1ca5211d934f15e974491b37b47128",
"assets/assets/images/wildfires_3.png": "1fc3ca1ea958d31e484c90847ab9bd78",
"assets/assets/images/star_pin.svg": "1c740da855818b3d0a5d69efe6d9482e",
"assets/assets/images/2018VS2024.png": "661ab3b57623ed32cef7ff74834207d0",
"assets/assets/images/Ocean_Acidification_Icon.png": "47434b5247d282e677dcdd94b54a1a4a",
"assets/assets/images/rising_level.mp4": "f2c14ec0d3fb3368d0086f442dacb5db",
"assets/assets/images/main_title.svg": "e77371e673e2de29b8e5b1c7a0b24227",
"assets/assets/images/greenhouse_2.png": "bc0ce789ec99d951bf618df435593646",
"assets/assets/images/clownfish.png": "354baeb9e02994d8cd6b8a3dc4ba2f9b",
"assets/assets/images/greenhouse_3.png": "ea78a628b9664fabc2365e54937585ec",
"assets/assets/images/global_icon.jpg": "b9c05f94b2c64e29a58fa325bab3bba0",
"assets/assets/images/board_frame.svg": "6034c706066c66bed88fdf890e566536",
"assets/assets/images/HexTech_Blue2.svg": "16785c387c43cd77aabc58917b27d520",
"assets/assets/images/image-frame1.svg": "93cc3542ed12d1d7c52687918b0a90ae",
"assets/assets/images/greenhouse_1.png": "892b93630d4181a25546aead2f45ce3e",
"assets/assets/images/carbon_graph.png": "832b7f6b9cc9b7f8d03a3898001b99c7",
"assets/assets/images/info_board.svg": "d9bc43d1dd4694c6051bd636a63ad594",
"assets/assets/images/bleached_coral.png": "c504973349414f85d126441d9e717e74",
"assets/assets/images/sea_icon.png": "42947b1e7029b483aa5310e408983089",
"assets/assets/images/fullbg.png": "8f35370b44045f9689f1eda83082c790",
"assets/assets/images/bg.svg": "3327dd142eb86918d57e920e599a3bc3",
"assets/assets/images/Acidification_process.png": "0fe464edbe7cef8b5e94fa8baff4fb33",
"assets/assets/images/Data.json": "89200428daa13b16d4aa52fa8a58adf3",
"assets/assets/images/wildfires.png": "1fc3ca1ea958d31e484c90847ab9bd78",
"assets/assets/images/seaice.png": "35b3b48316ec53ebdd01de423b768878",
"assets/assets/images/mean_sea_level.png": "7d4e569350936d8cb31d4666a1611db7",
"assets/assets/images/gris_with_vel_i_200204-202311_1080p25.mp4": "c224b15835650c3f34d2201f98ad07ef",
"assets/assets/images/questions_extended.json": "b9407d20e1cec07b223c3bc0ac6ba7a7",
"assets/assets/images/Marine.png": "1118ebe76a67b3f4a931e7406fa8eccd",
"assets/assets/images/app_bar_with_text.svg": "87ad100f7f4e12b9bbc29e0c464e390d",
"assets/assets/images/close_icon.svg": "5576c273313fdfb8b8807b19ff84b64c",
"assets/assets/images/Methane_Collage.png": "0863d2e39c19751e5cc51b8651c4fbd9",
"assets/assets/images/hydrosphere.jpeg": "b9ecfab1c0d6aa2963539aae58d7e2a2",
"assets/assets/images/image-frame.svg": "8948302636d6ef1e2eec55869480d0ab",
"assets/assets/images/Ocean_Carbon_concentration.png": "e4ed05e39e36cb868bcb37831d271ae1",
"assets/assets/images/pressed_btn.svg": "67fcf3921255bb5ed424a1062fb4633c",
"assets/assets/images/PM2.5.png": "3eb36cdf30425dfcea53efbc3b9aaf56",
"assets/assets/images/hint_icon.png": "aba19d251f4eb69d2953c8b545b5ec92",
"assets/assets/images/Air_Quality_Icon.png": "6d5cddf3ef2f7b91be47b10f5b4e6d40",
"assets/assets/images/intro.mp4": "cb3bfd9673efae05f4444f3e32d3ad3d",
"assets/assets/images/interaction_ice_sheet.jpg.webp": "8b6b32af2beca6658524b266649bcf4b",
"assets/assets/images/Sea_Star.png": "604f094a4a29095ba68ddebc7c88196d",
"assets/assets/images/green_affect.png": "f019619f33236001a6673231576d886f",
"assets/assets/images/outro.mp4": "fbfd42207c8b9b358ec1642323e3806c",
"assets/assets/images/last.png": "ef15738e9b459da1f770faac481620d5",
"assets/assets/images/human.svg": "8828c09974b878560799ecde52fa4f39",
"assets/assets/images/Press%2520on%2520any%2520image%2520to%2520Start.svg": "d21ad990eaa3a4ea9e4d453ba940b1a8",
"assets/assets/images/app_bar.svg": "66ed50ab2c57b13f25c91686437f3eeb",
"assets/assets/images/pressed_blue_arrowed_btn.svg": "cfb4e1973abe33428b334dc6d50c648b",
"assets/assets/images/Ice_Sheets.mp4": "60c34c30b04d4f6708c88b6fde482c54",
"assets/assets/images/HexTech_Glod2.svg": "71ea8143cf92548da2895264ddf08334",
"assets/assets/images/ice_icon.jpg.webp": "8562027aa2a5dac01b09ed721ff939e6",
"assets/assets/images/greenland.mp4": "c224b15835650c3f34d2201f98ad07ef",
"assets/assets/images/Group%252025.svg": "03e5978827db12c68e02c02bc7b05823",
"assets/assets/images/hint.svg": "1dfb0742cc5a9af52d7b47b2fc0117a0",
"assets/assets/images/Methane_2016.png": "103aa97f96339b73476b63be104f7bd5",
"assets/assets/images/ai_avatar.svg": "8c79e32a2cecfe2384ad87cc993f8626",
"assets/assets/images/cryosphere.jpg": "6d1f6d49a700d3c789af24f20214dcb5",
"assets/assets/images/ant_graph.png": "55c939ca98d5b384c8db6e8b59208121",
"assets/assets/images/bg.png": "8e41779f19d3d69e3037efb334b3bf2d",
"assets/assets/images/fullbg.svg": "cb848d372e28b23ae4c52266564b73d1",
"assets/assets/images/fire_graph_1.avif": "a4a3ceca31272778456144646b72f21f",
"assets/assets/images/Acidification_process.svg": "2a3855ac4264cc49de86b35977610fcb",
"assets/assets/images/global_icon2.png": "2cba1e9ef81088f447a8dc5c97d72ade",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
