/** Glaseado blanco irregular que se superpone al footer oscuro */
export function FooterIcingDivider() {
  return (
    <div className="footer-edge footer-edge--icing" aria-hidden>
      <svg
        className="footer-edge__svg"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#ffffff"
          d="
            M0 0 H1440 V36
            C1420 36 1408 58 1388 62
            C1364 68 1350 48 1326 54
            C1300 62 1288 92 1260 96
            C1232 100 1216 70 1190 76
            C1164 82 1152 108 1124 110
            C1096 112 1080 78 1054 84
            C1028 90 1014 116 986 114
            C958 112 946 82 920 88
            C894 94 880 118 852 116
            C824 114 810 84 784 90
            C758 96 744 120 716 118
            C688 116 676 86 650 92
            C624 98 610 122 582 118
            C554 114 542 84 516 90
            C490 96 476 120 448 116
            C420 112 408 82 382 88
            C356 94 340 118 312 114
            C284 110 272 78 246 84
            C220 90 206 116 178 112
            C150 108 138 80 114 86
            C90 92 76 114 54 108
            C32 102 18 78 0 84
            Z
          "
        />
      </svg>
    </div>
  )
}

/** Scallops oscuros entre el cuerpo del footer y la barra de copyright */
export function FooterBarScallopDivider() {
  return (
    <div className="footer-edge footer-edge--scallop" aria-hidden>
      <svg
        className="footer-edge__svg"
        viewBox="0 0 1200 32"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#1a1210"
          d="M0 32V16
          Q20 0 40 16Q60 0 80 16Q100 0 120 16Q140 0 160 16
          Q180 0 200 16Q220 0 240 16Q260 0 280 16Q300 0 320 16
          Q340 0 360 16Q380 0 400 16Q420 0 440 16Q460 0 480 16
          Q500 0 520 16Q540 0 560 16Q580 0 600 16Q620 0 640 16
          Q660 0 680 16Q700 0 720 16Q740 0 760 16Q780 0 800 16
          Q820 0 840 16Q860 0 880 16Q900 0 920 16Q940 0 960 16
          Q980 0 1000 16Q1020 0 1040 16Q1060 0 1080 16Q1100 0 1120 16
          Q1140 0 1160 16Q1180 0 1200 16V32Z"
        />
      </svg>
    </div>
  )
}
