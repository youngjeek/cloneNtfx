import styled from 'styled-components';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { Link, useRouteMatch } from 'react-router-dom';
import { useState } from 'react';
//style component 정의
const Nav = styled(motion.nav)`
  width: 100vw;
  height: 50px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  font-size: 14px;
  color: ${(props) => props.theme.white.lighter};
`;
const Column = styled.div`
  display: flex;
  align-items: center;
`;
const Tabs = styled.ul`
  display: flex;
`;
const Tab = styled(motion.li)`
  margin-left: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  list-style: none;
  transition: color 0.3s ease-in-out;
  color: ${(props) => props.theme.white.darker};
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;
const Search = styled(motion.span)`
  color: white;
  svg {
    height: 25px;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InputSearch = styled(motion.input)`
  transform-origin: left center;
  position: absolute;
  margin-left: 10px;
  position: relative;
`;
const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 5px;
  bottom: 15px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.white.lighter};
`;
const Logo = styled(motion.svg)`
  /* <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --> */
  width: auto;
  height: 25px;
  display: flex;
  margin-right: 10px;
  fill: ${(props) => props.theme.white.lighter};
  path {
  }
`;
//Framer Variants 모음
const logoVariants = {
  initial: {
    opacity: 0,
  },
  active: {
    opacity: [1, 0, 1],
    transition: {
      repeat: Infinity,
      duration: 4,
    },
  },
};
const tabVariants = {
  hover: {
    scale: 1.2,
  },
};

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const homeMatch = useRouteMatch('/');
  const tvMatch = useRouteMatch('/tv');
  const profileMatch = useRouteMatch('/profile');
  const settingMatch = useRouteMatch('/setting');
  const inputAnimation = useAnimation();
  const { scrollY } = useScroll();
  const activeSearch = () => {
    if (searchOpen) {
      //trigger the close animation
      inputAnimation.start({ scaleX: 0 });
    } else {
      //trigger the open animation
      inputAnimation.start({ scaleX: 1 });
    }
    setSearchOpen((prev) => !prev);
  };
  //  header animation depends on scroll
  const scrollGradient = useTransform(
    scrollY,
    [0, 350, 600],
    [
      'linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0))',
      'linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0))',
      'linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.9))',
    ]
  );
  return (
    <>
      <Nav style={{ background: scrollGradient }}>
        <Column>
          <Logo
            variants={logoVariants}
            whileHover="active"
            initial
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 397 102"
          >
            <motion.path
              fill="#0000"
              opacity="1.000000"
              d="
              M311.000000,103.000000 
                C207.333344,103.000000 104.166695,103.000000 1.000028,103.000000 
                C1.000018,69.000015 1.000018,35.000034 1.000009,1.000037 
                C133.333298,1.000025 265.666595,1.000025 397.999939,1.000012 
                C397.999939,34.999966 397.999939,68.999931 397.999969,102.999947 
                C369.166656,103.000000 340.333344,103.000000 311.000000,103.000000 
              M317.005310,80.991478 
                C315.340118,81.049774 313.674957,81.108070 311.082275,81.029411 
                C305.726837,80.971184 300.371429,80.912956 295.020935,79.936897 
                C295.020935,55.368511 295.020935,30.800123 295.020935,6.166586 
                C292.850891,6.166586 291.055939,6.166586 288.307434,6.030764 
                C283.877869,6.075449 279.448273,6.120134 274.191071,5.999448 
                C272.510345,6.054815 270.829620,6.110182 268.201385,6.030468 
                C256.459869,6.075697 244.718369,6.120928 232.477020,6.120907 
                C232.369263,6.405653 232.261520,6.690398 232.011139,7.905992 
                C232.058685,36.277664 232.106216,64.649330 232.118134,93.521515 
                C232.403015,93.625664 232.687897,93.729805 233.890396,93.969437 
                C238.121460,93.924728 242.352539,93.880028 247.529907,93.988136 
                C248.949341,93.924782 250.368790,93.861427 251.995834,93.788803 
                C251.995834,81.676270 251.995834,69.924194 252.917191,58.030499 
                C256.702728,57.964882 260.488281,57.899261 265.134552,57.964348 
                C266.700714,57.964348 268.266846,57.964348 269.826782,57.964348 
                C269.826782,53.371132 269.826782,49.289978 269.826782,45.166344 
                C267.846344,45.166344 266.060120,45.166344 263.326050,45.031063 
                C259.549316,44.963333 255.772568,44.895603 251.999695,43.913593 
                C251.998413,35.666435 251.997116,27.419279 252.922714,19.030394 
                C258.331451,18.965078 263.740173,18.899763 269.955750,18.958790 
                C271.585480,18.976385 273.215240,18.993982 274.970001,19.939993 
                C274.970001,44.514740 274.970001,69.089485 274.970001,93.833626 
                C287.762421,93.833626 299.886078,93.833626 312.860657,93.964500 
                C314.575684,93.920746 316.290710,93.876991 318.924164,93.969345 
                C323.251129,93.924141 327.578064,93.878937 332.767700,93.974670 
                C334.508820,93.931534 336.249939,93.888397 338.909515,93.979469 
                C343.197479,93.930733 347.485413,93.882004 352.662476,93.988754 
                C354.303864,93.988754 355.945282,93.988754 357.361420,93.988754 
                C360.256683,85.803749 363.050415,77.905815 365.993927,70.785286 
                C368.446899,78.477379 370.899841,86.169472 373.343628,93.832855 
                C378.634125,93.832855 383.607605,93.832855 389.348206,93.970100 
                C391.149231,93.970100 392.950287,93.970100 394.650421,93.970100 
                C389.963226,79.910934 385.288635,66.141998 380.851013,52.297127 
                C380.212769,50.305843 380.157166,47.773003 380.781097,45.789322 
                C384.934479,32.584702 389.346069,19.461298 393.720917,6.168074 
                C391.595276,6.168074 389.626923,6.168074 386.656799,6.030233 
                C383.997650,6.020471 381.321320,6.197761 378.683594,5.955191 
                C375.116425,5.627154 373.620117,6.727444 372.784485,10.559670 
                C371.559235,16.178602 369.106750,21.529936 366.852997,26.292791 
                C365.065094,21.189924 362.572968,16.205667 361.687836,10.950738 
                C360.807495,5.724123 358.049835,5.549173 353.201019,6.030689 
                C348.524109,6.030689 343.847168,6.030689 339.033112,6.030689 
                C342.185242,15.245916 344.564178,23.895998 348.077606,32.057705 
                C352.836731,43.113216 353.245789,53.580730 348.132172,64.718376 
                C344.107788,73.483742 341.438171,82.871140 338.016022,91.057556 
                C338.016022,62.726425 338.016022,34.395290 338.016022,6.166259 
                C335.549896,6.166259 333.727478,6.166259 330.994354,6.027681 
                C326.746948,6.027681 322.499542,6.027681 317.837341,6.027681 
                C317.837341,31.480202 317.837341,56.238735 317.005310,80.991478 
              M208.972107,19.934879 
                C208.972107,44.485241 208.972107,69.035606 208.972107,93.833748 
                C214.007141,93.833748 218.456100,93.833748 223.810577,93.975670 
                C225.423538,93.975670 227.036514,93.975670 228.693695,93.975670 
                C228.693695,64.442886 228.693695,35.255295 228.693695,6.166257 
                C226.556885,6.166257 224.730972,6.166257 221.996979,6.027717 
                C217.668961,6.074061 213.340942,6.120405 208.185852,5.999587 
                C206.505386,6.054916 204.824936,6.110246 202.197540,6.030218 
                C188.282227,6.030218 174.366898,6.030218 160.312607,6.030218 
                C160.312607,10.568496 160.312607,14.611813 160.312607,19.202049 
                C165.000946,19.202049 169.386002,19.202049 174.153610,19.202049 
                C174.153610,44.176006 174.153610,68.599358 174.118240,93.522171 
                C174.402512,93.626167 174.686768,93.730156 175.893860,93.969864 
                C180.229630,93.924461 184.565384,93.879059 189.807175,93.975586 
                C191.416534,93.975586 193.025879,93.975586 195.000549,93.975586 
                C195.000549,68.823357 195.000549,43.994358 195.894440,19.029743 
                C198.311111,18.964636 200.727798,18.899529 203.951706,18.958450 
                C205.581848,18.974436 207.211990,18.990419 208.972107,19.934879 
              M134.993790,6.027732 
                C130.746506,6.027732 126.499207,6.027732 122.362068,6.027732 
                C122.362068,35.729378 122.362068,64.734329 122.362068,93.835365 
                C134.675919,93.835365 146.628799,93.835365 159.527283,93.988106 
                C160.948898,93.922897 162.370514,93.857697 163.736542,93.795036 
                C163.736542,89.350899 163.736542,85.280556 163.736542,81.164673 
                C161.842926,81.164673 160.212250,81.164673 157.708603,81.026894 
                C152.472229,80.962296 147.235855,80.897690 142.003983,79.918114 
                C142.003983,55.299450 142.003983,30.680788 142.003983,6.166272 
                C139.541199,6.166272 137.722809,6.166272 134.993790,6.027732 
              M94.356773,80.911285 
                C93.238205,77.452744 91.216820,74.010811 91.152802,70.532860 
                C90.824844,52.714813 91.001068,34.887489 91.001068,17.063406 
                C91.001068,13.446652 91.001068,9.829898 91.001068,6.164999 
                C88.856262,6.164999 87.221619,6.164999 84.714226,6.027038 
                C80.271759,6.027038 75.829292,6.027038 70.998444,6.027038 
                C70.998444,8.203913 70.998497,9.834656 70.998428,11.465398 
                C70.997566,32.456612 70.658585,53.455032 71.105705,74.436699 
                C71.446724,90.439423 81.414574,97.782837 97.589264,94.862465 
                C104.957512,95.808937 111.490540,93.685402 114.988693,87.161438 
                C117.392799,82.677849 118.633293,77.124916 118.830414,71.989937 
                C119.346252,58.552479 119.004333,45.082092 119.004333,31.624832 
                C119.004333,23.191067 119.004333,14.757301 119.004333,6.165833 
                C116.646049,6.165833 114.699280,6.165833 111.861328,6.026531 
                C107.622505,6.026531 103.383675,6.026531 98.998497,6.026531 
                C98.998497,28.770245 99.140022,50.726059 98.825157,72.675323 
                C98.784317,75.522354 96.387985,78.335609 94.356773,80.911285 
              M36.076496,47.529568 
                C34.014889,33.677734 31.953281,19.825897 29.920370,6.166864 
                C27.503628,6.166864 25.686161,6.166864 22.957617,6.027717 
                C16.709837,6.027717 10.462056,6.027717 4.391556,6.027717 
                C4.391556,35.775314 4.391556,64.802467 4.391556,93.834213 
                C8.771110,93.834213 12.757389,93.834213 17.670443,93.985641 
                C19.398634,93.985641 21.126823,93.985641 23.166636,93.985641 
                C23.166636,87.906517 23.166636,82.461639 23.823277,77.480141 
                C24.626682,82.916679 25.430090,88.353218 26.239878,93.832939 
                C31.148985,93.832939 35.616367,93.832939 40.940384,93.971146 
                C42.534409,93.971146 44.128433,93.971146 45.833805,93.971146 
                C46.876492,88.101051 47.861416,82.556145 48.972134,77.938423 
                C48.972134,83.199272 48.972134,88.460129 48.972134,93.835136 
                C53.979824,93.835136 58.284988,93.835136 63.535664,93.988113 
                C64.958313,93.919342 66.380966,93.850563 67.745125,93.784615 
                C67.745125,64.350220 67.745125,35.291527 67.745125,6.164896 
                C65.857323,6.164896 64.223694,6.164896 61.714371,6.026820 
                C55.618134,6.026820 49.521893,6.026820 42.872883,6.026820 
                C40.768700,20.238247 38.705914,34.170052 36.076496,47.529568 
              z"
            />
            <path
              fill="#F40606"
              opacity="1.000000"
              stroke="none"
              d="
              M16.743670,93.834213 
                C12.757389,93.834213 8.771110,93.834213 4.391556,93.834213 
                C4.391556,64.802467 4.391556,35.775314 4.391556,6.027717 
                C10.462056,6.027717 16.709837,6.027717 23.446234,6.509148 
                C27.156069,26.839657 30.377287,46.688736 33.598503,66.537819 
                C34.074280,66.497833 34.550053,66.457848 35.025826,66.417862 
                C35.564926,60.312523 36.104031,54.207191 36.643127,48.101856 
                C38.705914,34.170052 40.768700,20.238247 42.872883,6.026820 
                C49.521893,6.026820 55.618134,6.026820 62.150864,6.552478 
                C62.588287,35.997135 62.589218,64.916138 62.590149,93.835136 
                C58.284988,93.835136 53.979824,93.835136 48.972134,93.835136 
                C48.972134,88.460129 48.972134,83.199272 48.986919,77.020706 
                C49.001705,63.180187 49.001705,50.257378 49.001705,37.334568 
                C48.861671,37.307549 48.721642,37.280525 48.581608,37.253506 
                C45.748989,56.113316 42.916367,74.973129 40.083748,93.832939 
                C35.616367,93.832939 31.148985,93.832939 26.239878,93.832939 
                C25.430090,88.353218 24.626682,82.916679 23.420534,76.813690 
                C21.508711,63.840416 19.999630,51.533585 18.490549,39.226749 
                C17.908255,39.291691 17.325962,39.356632 16.743670,39.421574 
                C16.743670,57.559120 16.743670,75.696663 16.743670,93.834213 
              z"
            />
            <path
              fill="#F50606"
              opacity="1.000000"
              stroke="none"
              d="
              M97.063347,94.262054 
                C81.414574,97.782837 71.446724,90.439423 71.105705,74.436699 
                C70.658585,53.455032 70.997566,32.456612 70.998428,11.465398 
                C70.998497,9.834656 70.998444,8.203913 70.998444,6.027038 
                C75.829292,6.027038 80.271759,6.027038 85.149307,6.552623 
                C85.584030,19.724001 85.582726,32.369793 85.583603,45.015587 
                C85.584274,54.666317 85.472221,64.318932 85.629723,73.967133 
                C85.738243,80.614464 88.954895,82.923271 95.082733,81.164513 
                C96.387985,78.335609 98.784317,75.522354 98.825157,72.675323 
                C99.140022,50.726059 98.998497,28.770245 98.998497,6.026531 
                C103.383675,6.026531 107.622505,6.026531 112.306419,6.553288 
                C112.751366,28.361158 112.784897,49.642384 112.714256,70.923264 
                C112.703835,74.064018 112.484589,77.260071 111.869499,80.331932 
                C110.268082,88.329628 104.930717,93.204369 97.063347,94.262054 
              z"
            />
            <path
              fill="#F40303"
              opacity="1.000000"
              stroke="none"
              d="
              M388.581085,93.832855 
                C383.607605,93.832855 378.634125,93.832855 373.343628,93.832855 
                C370.899841,86.169472 368.446899,78.477379 365.966766,70.004097 
                C365.207031,66.293633 364.474457,63.364353 363.741882,60.435074 
                C363.349426,60.425529 362.957001,60.415985 362.564575,60.406441 
                C358.967499,71.548714 355.370422,82.690987 351.773376,93.833267 
                C347.485413,93.882004 343.197479,93.930733 338.455444,93.598862 
                C338.056488,92.806252 338.111633,92.394249 338.166809,91.982239 
                C341.438171,82.871140 344.107788,73.483742 348.132172,64.718376 
                C353.245789,53.580730 352.836731,43.113216 348.077606,32.057705 
                C344.564178,23.895998 342.185242,15.245916 339.033112,6.030689 
                C343.847168,6.030689 348.524109,6.030689 353.727264,6.457127 
                C357.580231,17.134487 360.906952,27.385410 364.233643,37.636333 
                C364.694794,37.615891 365.155975,37.595444 365.617126,37.575001 
                C366.137146,34.048431 366.657166,30.521862 367.177185,26.995293 
                C369.106750,21.529936 371.559235,16.178602 372.784485,10.559670 
                C373.620117,6.727444 375.116425,5.627154 378.683594,5.955191 
                C381.321320,6.197761 383.997650,6.020471 387.049194,6.483173 
                C383.158020,19.684811 378.760345,32.397339 374.695862,45.215511 
                C373.963684,47.524605 373.967133,50.474003 374.712616,52.777756 
                C379.159393,66.519753 383.923492,80.159081 388.581085,93.832855 
              z"
            />
            <path
              fill="#F40404"
              opacity="1.000000"
              stroke="none"
              d="
              M246.583603,93.835320 
                C242.352539,93.880028 238.121460,93.924728 233.323074,93.739761 
                C232.587677,93.306931 232.387024,93.143906 232.153763,93.021004 
                C232.106216,64.649330 232.058685,36.277664 232.245789,7.334143 
                C232.685272,6.596353 232.850739,6.397640 232.976852,6.166158 
                C244.718369,6.120928 256.459869,6.075697 268.674622,6.548711 
                C269.148193,10.989452 269.148529,14.911950 269.148895,18.834448 
                C263.740173,18.899763 258.331451,18.965078 252.004623,19.027576 
                C249.666153,19.103571 248.245789,19.182383 246.866867,19.258894 
                C246.866867,27.987127 246.866867,36.321346 246.866867,44.827877 
                C248.766724,44.827877 250.381287,44.827877 251.995834,44.827877 
                C255.772568,44.895603 259.549316,44.963333 263.799683,45.549641 
                C264.273468,49.990028 264.273651,53.911835 264.273834,57.833645 
                C260.488281,57.899261 256.702728,57.964882 252.001862,58.027630 
                C249.663513,58.103867 248.240494,58.182976 246.583603,58.275085 
                C246.583603,70.381958 246.583603,82.108643 246.583603,93.835320 
              z"
            />
            <path
              fill="#F40303"
              opacity="1.000000"
              stroke="none"
              d="
              M174.153610,93.022705 
                C174.153610,68.599358 174.153610,44.176006 174.153610,19.202049 
                C169.386002,19.202049 165.000946,19.202049 160.312607,19.202049 
                C160.312607,14.611813 160.312607,10.568496 160.312607,6.030218 
                C174.366898,6.030218 188.282227,6.030218 202.670502,6.548590 
                C203.143814,10.989449 203.144135,14.911934 203.144470,18.834419 
                C200.727798,18.899529 198.311111,18.964636 195.003113,19.022736 
                C192.502075,19.015730 190.892365,19.015730 188.901154,19.015730 
                C188.901154,44.265209 188.901154,69.049431 188.901154,93.833649 
                C184.565384,93.879059 180.229630,93.924461 175.324295,93.740257 
                C174.587006,93.307777 174.386627,93.145134 174.153610,93.022705 
              z"
            />
            <path
              fill="#F40404"
              opacity="1.000000"
              stroke="none"
              d="
              M158.581680,93.835365 
                C146.628799,93.835365 134.675919,93.835365 122.362068,93.835365 
                C122.362068,64.734329 122.362068,35.729378 122.362068,6.027732 
                C126.499207,6.027732 130.746506,6.027732 135.448883,6.554476 
                C135.903992,31.666319 135.903992,56.251419 135.903992,80.833084 
                C138.357086,80.833084 140.178284,80.833084 141.999481,80.833084 
                C147.235855,80.897690 152.472229,80.962296 158.143585,81.545654 
                C158.579620,85.988068 158.580658,89.911720 158.581680,93.835365 
              z"
            />
            <path
              fill="#F40000"
              opacity="1.000000"
              stroke="none"
              d="
              M295.015991,80.854721 
                C300.371429,80.912956 305.726837,80.971184 311.545898,81.548370 
                C312.009583,85.989426 312.009674,89.911522 312.009766,93.833626 
                C299.886078,93.833626 287.762421,93.833626 274.970001,93.833626 
                C274.970001,69.089485 274.970001,44.514740 274.985901,19.018864 
                C275.007416,14.120096 275.013062,10.142457 275.018707,6.164819 
                C279.448273,6.120134 283.877869,6.075449 288.784058,6.556859 
                C289.260681,31.581783 289.260681,56.080612 289.260681,80.854729 
                C291.457855,80.854729 293.236908,80.854729 295.015991,80.854721 
              z"
            />
            <path
              fill="#F40404"
              opacity="1.000000"
              stroke="none"
              d="
              M222.905060,93.833748 
                C218.456100,93.833748 214.007141,93.833748 208.972107,93.833748 
                C208.972107,69.035606 208.972107,44.485241 208.983444,19.013756 
                C209.000824,14.117337 209.006866,10.142043 209.012909,6.166749 
                C213.340942,6.120405 217.668961,6.074061 222.450806,6.554462 
                C222.904770,35.998722 222.904922,64.916237 222.905060,93.833748 
              z"
            />
            <path
              fill="#F40404"
              opacity="1.000000"
              stroke="none"
              d="
              M331.905029,93.833740 
                C327.578064,93.878937 323.251129,93.924141 318.464905,93.449295 
                C317.949554,88.951920 317.893463,84.974594 317.837341,80.997269 
                C317.837341,56.238735 317.837341,31.480202 317.837341,6.027681 
                C322.499542,6.027681 326.746948,6.027681 331.449463,6.554445 
                C331.904755,35.998718 331.904877,64.916222 331.905029,93.833740 
              z"
            />
            <path
              fill="#FFF8F8"
              opacity="1.000000"
              stroke="none"
              d="
              M388.964661,93.901474 
                C383.923492,80.159081 379.159393,66.519753 374.712616,52.777756 
                C373.967133,50.474003 373.963684,47.524605 374.695862,45.215511 
                C378.760345,32.397339 383.158020,19.684811 387.550110,6.552094 
                C389.626923,6.168074 391.595276,6.168074 393.720917,6.168074 
                C389.346069,19.461298 384.934479,32.584702 380.781097,45.789322 
                C380.157166,47.773003 380.212769,50.305843 380.851013,52.297127 
                C385.288635,66.141998 389.963226,79.910934 394.650421,93.970100 
                C392.950287,93.970100 391.149231,93.970100 388.964661,93.901474 
              z"
            />
            <path
              fill="#FFFCFC"
              opacity="1.000000"
              stroke="none"
              d="
              M97.326309,94.562256 
                C104.930717,93.204369 110.268082,88.329628 111.869499,80.331932 
                C112.484589,77.260071 112.703835,74.064018 112.714256,70.923264 
                C112.784897,49.642384 112.751366,28.361158 112.752014,6.622940 
                C114.699280,6.165833 116.646049,6.165833 119.004333,6.165833 
                C119.004333,14.757301 119.004333,23.191067 119.004333,31.624832 
                C119.004333,45.082092 119.346252,58.552479 118.830414,71.989937 
                C118.633293,77.124916 117.392799,82.677849 114.988693,87.161438 
                C111.490540,93.685402 104.957512,95.808937 97.326309,94.562256 
              z"
            />
            <path
              fill="#FFFCFC"
              opacity="1.000000"
              stroke="none"
              d="
              M332.336365,93.904205 
                C331.904877,64.916222 331.904755,35.998718 331.904846,6.623734 
                C333.727478,6.166259 335.549896,6.166259 338.016022,6.166259 
                C338.016022,34.395290 338.016022,62.726425 338.091431,91.519897 
                C338.111633,92.394249 338.056488,92.806252 337.996216,93.531761 
                C336.249939,93.888397 334.508820,93.931534 332.336365,93.904205 
              z"
            />
            <path
              fill="#FFFCFC"
              opacity="1.000000"
              stroke="none"
              d="
              M223.357819,93.904709 
                C222.904922,64.916237 222.904770,35.998722 222.904831,6.623733 
                C224.730972,6.166257 226.556885,6.166257 228.693695,6.166257 
                C228.693695,35.255295 228.693695,64.442886 228.693695,93.975670 
                C227.036514,93.975670 225.423538,93.975670 223.357819,93.904709 
              z"
            />
            <path
              fill="#FEEFEF"
              opacity="1.000000"
              stroke="none"
              d="
              M295.018463,80.395813 
                C293.236908,80.854729 291.457855,80.854729 289.260681,80.854729 
                C289.260681,56.080612 289.260681,31.581783 289.260803,6.624770 
                C291.055939,6.166586 292.850891,6.166586 295.020935,6.166586 
                C295.020935,30.800123 295.020935,55.368511 295.018463,80.395813 
              z"
            />
            <path
              fill="#FFFCFC"
              opacity="1.000000"
              stroke="none"
              d="
              M189.354156,93.904617 
                C188.901154,69.049431 188.901154,44.265209 188.901154,19.015730 
                C190.892365,19.015730 192.502075,19.015730 194.556183,19.090546 
                C195.000549,43.994358 195.000549,68.823357 195.000549,93.975586 
                C193.025879,93.975586 191.416534,93.975586 189.354156,93.904617 
              z"
            />
            <path
              fill="#FFFCFC"
              opacity="1.000000"
              stroke="none"
              d="
              M142.001740,80.375595 
                C140.178284,80.833084 138.357086,80.833084 135.903992,80.833084 
                C135.903992,56.251419 135.903992,31.666319 135.904205,6.623745 
                C137.722809,6.166272 139.541199,6.166272 142.003983,6.166272 
                C142.003983,30.680788 142.003983,55.299450 142.001740,80.375595 
              z"
            />
            <path
              fill="#FFFFFF"
              opacity="1.000000"
              stroke="none"
              d="
              M63.062904,93.911621 
                C62.589218,64.916138 62.588287,35.997135 62.588707,6.621516 
                C64.223694,6.164896 65.857323,6.164896 67.745125,6.164896 
                C67.745125,35.291527 67.745125,64.350220 67.745125,93.784615 
                C66.380966,93.850563 64.958313,93.919342 63.062904,93.911621 
              z"
            />
            <path
              fill="#FFFEFE"
              opacity="1.000000"
              stroke="none"
              d="
              M94.719757,81.037903 
                C88.954895,82.923271 85.738243,80.614464 85.629723,73.967133 
                C85.472221,64.318932 85.584274,54.666317 85.583603,45.015587 
                C85.582726,32.369793 85.584030,19.724001 85.585678,6.621604 
                C87.221619,6.164999 88.856262,6.164999 91.001068,6.164999 
                C91.001068,9.829898 91.001068,13.446652 91.001068,17.063406 
                C91.001068,34.887489 90.824844,52.714813 91.152802,70.532860 
                C91.216820,74.010811 93.238205,77.452744 94.719757,81.037903 
              z"
            />
            <path
              fill="#FFFFFF"
              opacity="1.000000"
              stroke="none"
              d="
              M36.359814,47.815712 
                C36.104031,54.207191 35.564926,60.312523 35.025826,66.417862 
                C34.550053,66.457848 34.074280,66.497833 33.598503,66.537819 
                C30.377287,46.688736 27.156069,26.839657 23.901773,6.578721 
                C25.686161,6.166864 27.503628,6.166864 29.920370,6.166864 
                C31.953281,19.825897 34.014889,33.677734 36.359814,47.815712 
              z"
            />
            <path
              fill="#FEEEEE"
              opacity="1.000000"
              stroke="none"
              d="
              M40.512066,93.902039 
                C42.916367,74.973129 45.748989,56.113316 48.581608,37.253506 
                C48.721642,37.280525 48.861671,37.307549 49.001705,37.334568 
                C49.001705,50.257378 49.001705,63.180187 48.924019,76.557114 
                C47.861416,82.556145 46.876492,88.101051 45.833805,93.971146 
                C44.128433,93.971146 42.534409,93.971146 40.512066,93.902039 
              z"
            />
            <path
              fill="#FFFFFF"
              opacity="1.000000"
              stroke="none"
              d="
              M17.207056,93.909927 
                C16.743670,75.696663 16.743670,57.559120 16.743670,39.421574 
                C17.325962,39.356632 17.908255,39.291691 18.490549,39.226749 
                C19.999630,51.533585 21.508711,63.840416 23.092213,76.582001 
                C23.166636,82.461639 23.166636,87.906517 23.166636,93.985641 
                C21.126823,93.985641 19.398634,93.985641 17.207056,93.909927 
              z"
            />
            <path
              fill="#FFFFFF"
              opacity="1.000000"
              stroke="none"
              d="
              M352.217926,93.911011 
                C355.370422,82.690987 358.967499,71.548714 362.564575,60.406441 
                C362.957001,60.415985 363.349426,60.425529 363.741882,60.435074 
                C364.474457,63.364353 365.207031,66.293633 365.891907,69.615402 
                C363.050415,77.905815 360.256683,85.803749 357.361420,93.988754 
                C355.945282,93.988754 354.303864,93.988754 352.217926,93.911011 
              z"
            />
            <path
              fill="#FFFFFF"
              opacity="1.000000"
              stroke="none"
              d="
              M247.056763,93.911728 
                C246.583603,82.108643 246.583603,70.381958 246.583603,58.275085 
                C248.240494,58.182976 249.663513,58.103867 251.541183,58.098442 
                C251.995834,69.924194 251.995834,81.676270 251.995834,93.788803 
                C250.368790,93.861427 248.949341,93.924782 247.056763,93.911728 
              z"
            />
            <path
              fill="#FFFFFF"
              opacity="1.000000"
              stroke="none"
              d="
              M367.015076,26.644041 
                C366.657166,30.521862 366.137146,34.048431 365.617126,37.575001 
                C365.155975,37.595444 364.694794,37.615891 364.233643,37.636333 
                C360.906952,27.385410 357.580231,17.134487 354.198364,6.524648 
                C358.049835,5.549173 360.807495,5.724123 361.687836,10.950738 
                C362.572968,16.205667 365.065094,21.189924 367.015076,26.644041 
              z"
            />
            <path
              fill="#FFFFFF"
              opacity="1.000000"
              stroke="none"
              d="
              M251.997772,44.370735 
                C250.381287,44.827877 248.766724,44.827877 246.866867,44.827877 
                C246.866867,36.321346 246.866867,27.987127 246.866867,19.258894 
                C248.245789,19.182383 249.666153,19.103571 251.541183,19.098442 
                C251.997116,27.419279 251.998413,35.666435 251.997772,44.370735 
              z"
            />
            <path
              fill="#FFFFFF"
              opacity="1.000000"
              stroke="none"
              d="
              M208.599380,6.083168 
                C209.006866,10.142043 209.000824,14.117337 208.918457,18.549519 
                C207.211990,18.990419 205.581848,18.974436 203.548096,18.896435 
                C203.144135,14.911934 203.143814,10.989449 203.143982,6.616269 
                C204.824936,6.110246 206.505386,6.054916 208.599380,6.083168 
              z"
            />
            <path
              fill="#FFF5F5"
              opacity="1.000000"
              stroke="none"
              d="
              M274.604889,6.082133 
                C275.013062,10.142457 275.007416,14.120096 274.923370,18.554657 
                C273.215240,18.993982 271.585480,18.976385 269.552307,18.896618 
                C269.148529,14.911950 269.148193,10.989452 269.148376,6.616252 
                C270.829620,6.110182 272.510345,6.054815 274.604889,6.082133 
              z"
            />
            <path
              fill="#FEEFEF"
              opacity="1.000000"
              stroke="none"
              d="
              M264.704193,57.898994 
                C264.273651,53.911835 264.273468,49.990028 264.273590,45.617279 
                C266.060120,45.166344 267.846344,45.166344 269.826782,45.166344 
                C269.826782,49.289978 269.826782,53.371132 269.826782,57.964348 
                C268.266846,57.964348 266.700714,57.964348 264.704193,57.898994 
              z"
            />
            <path
              fill="#FFF8F8"
              opacity="1.000000"
              stroke="none"
              d="
              M317.421326,80.994370 
                C317.893463,84.974594 317.949554,88.951920 318.005707,93.381241 
                C316.290710,93.876991 314.575684,93.920746 312.435211,93.899063 
                C312.009674,89.911522 312.009583,85.989426 312.009644,81.616844 
                C313.674957,81.108070 315.340118,81.049774 317.421326,80.994370 
              z"
            />
            <path
              fill="#FFFFFF"
              opacity="1.000000"
              stroke="none"
              d="
              M159.054474,93.911736 
                C158.580658,89.911720 158.579620,85.988068 158.580078,81.614548 
                C160.212250,81.164673 161.842926,81.164673 163.736542,81.164673 
                C163.736542,85.280556 163.736542,89.350899 163.736542,93.795036 
                C162.370514,93.857697 160.948898,93.922897 159.054474,93.911736 
              z"
            />
          </Logo>
          <Tabs />
          <Tab variants={tabVariants} whileHover="hover">
            <Link to="/">
              Movie {homeMatch?.isExact && <Circle layoutId="tabMenu" />}
            </Link>
          </Tab>
          <Tab variants={tabVariants} whileHover="hover">
            <Link to="/tv">Tv {tvMatch && <Circle layoutId="tabMenu" />}</Link>
          </Tab>
          <Search>
            <InputSearch
              animate={inputAnimation}
              initial={{ opacity: 0 }}
              //animate={{ opacity: 1, scaleX: searchOpen ? 1 : 0 }}
              placeholder="text what you want to see"
            ></InputSearch>
            <motion.svg
              onClick={activeSearch}
              animate={{ x: searchOpen ? 5 : -170 }}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></motion.path>
            </motion.svg>
          </Search>
        </Column>
        <Column>
          <Tabs>
            <Tab variants={tabVariants} whileHover="hover">
              <Link to="/profile">
                Profile{profileMatch && <Circle layoutId="tabMenu" />}
              </Link>
            </Tab>
            <Tab variants={tabVariants} whileHover="hover">
              <Link to="/setting">
                Setting{settingMatch && <Circle layoutId="tabMenu" />}
              </Link>
            </Tab>
          </Tabs>
        </Column>
      </Nav>
    </>
  );
}
export default Header;
