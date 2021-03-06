import { useEffect } from "react";
import styled from "styled-components";
import "./Plan.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";

const PlanWrapper = styled.div`
  margin: 0 auto;
  :hover {
    fill: red;
  }
`;

export const Plan = () => {
  useEffect((e) => {
    //   e.preventDefault()
    let node = document.querySelectorAll("[data-id]");

    let array = Array.from(node);
    console.log(array);
    // array.forEach(item => item.children[0].push("<div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}> <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: 'lightblue' }} />  </div>"))
    // array.forEach(el => el.addEventListener('click', (e) => {
    //     console.log(e.target.parentElement.dataset.id)
    // }))
  }, []);

  return (
    <PlanWrapper>
      <svg

        version="1.1"
        width="985px"
        height="725px"
        viewBox="-0.5 -0.5 985 725"
      >
        <defs />
        <g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-166">
            <path
              d="M 656.3 325.35 L 657.64 338.02 C 657.89 339.88 657.19 341.74 655.85 342.76 C 651.28 343.61 646.61 343.61 642.03 342.76 C 640.7 341.74 640 339.88 640.25 338.02 L 641.59 325.35 C 641.84 323.95 643.12 322.87 644.71 322.71 L 653.18 322.71 C 654.77 322.87 656.04 323.95 656.3 325.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,648.94,332.31)"
              pointer-events="none"
            />
            <path
              d="M 655.95 322.46 C 656.32 322.62 656.52 323.14 656.4 323.63 C 656.28 324.12 655.88 324.39 655.51 324.22 C 651.1 322.95 646.54 322.95 642.13 324.22 C 641.85 324.13 641.63 323.86 641.54 323.5 C 641.45 323.14 641.51 322.75 641.69 322.46 C 646.38 321 651.26 321 655.95 322.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,648.94,332.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-167">
            <path
              d="M 656.3 286.35 L 657.64 299.02 C 657.89 300.88 657.19 302.74 655.85 303.76 C 651.28 304.61 646.61 304.61 642.03 303.76 C 640.7 302.74 640 300.88 640.25 299.02 L 641.59 286.35 C 641.84 284.95 643.12 283.87 644.71 283.71 L 653.18 283.71 C 654.77 283.87 656.04 284.95 656.3 286.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,648.94,293.31)"
              pointer-events="none"
            />
            <path
              d="M 655.95 283.46 C 656.32 283.62 656.52 284.14 656.4 284.63 C 656.28 285.12 655.88 285.39 655.51 285.22 C 651.1 283.95 646.54 283.95 642.13 285.22 C 641.85 285.13 641.63 284.86 641.54 284.5 C 641.45 284.14 641.51 283.75 641.69 283.46 C 646.38 282 651.26 282 655.95 283.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,648.94,293.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-168">
            <path
              d="M 656.3 364.35 L 657.64 377.02 C 657.89 378.88 657.19 380.74 655.85 381.76 C 651.28 382.61 646.61 382.61 642.03 381.76 C 640.7 380.74 640 378.88 640.25 377.02 L 641.59 364.35 C 641.84 362.95 643.12 361.87 644.71 361.71 L 653.18 361.71 C 654.77 361.87 656.04 362.95 656.3 364.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,648.94,371.31)"
              pointer-events="none"
            />
            <path
              d="M 655.95 361.46 C 656.32 361.62 656.52 362.14 656.4 362.63 C 656.28 363.12 655.88 363.39 655.51 363.22 C 651.1 361.95 646.54 361.95 642.13 363.22 C 641.85 363.13 641.63 362.86 641.54 362.5 C 641.45 362.14 641.51 361.75 641.69 361.46 C 646.38 360 651.26 360 655.95 361.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,648.94,371.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-169">
            <path
              d="M 613.3 325.35 L 614.64 338.02 C 614.89 339.88 614.19 341.74 612.85 342.76 C 608.28 343.61 603.61 343.61 599.03 342.76 C 597.7 341.74 597 339.88 597.25 338.02 L 598.59 325.35 C 598.84 323.95 600.12 322.87 601.71 322.71 L 610.18 322.71 C 611.77 322.87 613.04 323.95 613.3 325.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,605.94,332.31)"
              pointer-events="none"
            />
            <path
              d="M 612.95 322.46 C 613.32 322.62 613.52 323.14 613.4 323.63 C 613.28 324.12 612.88 324.39 612.51 324.22 C 608.1 322.95 603.54 322.95 599.13 324.22 C 598.85 324.13 598.63 323.86 598.54 323.5 C 598.45 323.14 598.51 322.75 598.69 322.46 C 603.38 321 608.26 321 612.95 322.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,605.94,332.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-170">
            <path
              d="M 613.3 286.35 L 614.64 299.02 C 614.89 300.88 614.19 302.74 612.85 303.76 C 608.28 304.61 603.61 304.61 599.03 303.76 C 597.7 302.74 597 300.88 597.25 299.02 L 598.59 286.35 C 598.84 284.95 600.12 283.87 601.71 283.71 L 610.18 283.71 C 611.77 283.87 613.04 284.95 613.3 286.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,605.94,293.31)"
              pointer-events="none"
            />
            <path
              d="M 612.95 283.46 C 613.32 283.62 613.52 284.14 613.4 284.63 C 613.28 285.12 612.88 285.39 612.51 285.22 C 608.1 283.95 603.54 283.95 599.13 285.22 C 598.85 285.13 598.63 284.86 598.54 284.5 C 598.45 284.14 598.51 283.75 598.69 283.46 C 603.38 282 608.26 282 612.95 283.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,605.94,293.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-171">
            <path
              d="M 613.3 364.35 L 614.64 377.02 C 614.89 378.88 614.19 380.74 612.85 381.76 C 608.28 382.61 603.61 382.61 599.03 381.76 C 597.7 380.74 597 378.88 597.25 377.02 L 598.59 364.35 C 598.84 362.95 600.12 361.87 601.71 361.71 L 610.18 361.71 C 611.77 361.87 613.04 362.95 613.3 364.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,605.94,371.31)"
              pointer-events="none"
            />
            <path
              d="M 612.95 361.46 C 613.32 361.62 613.52 362.14 613.4 362.63 C 613.28 363.12 612.88 363.39 612.51 363.22 C 608.1 361.95 603.54 361.95 599.13 363.22 C 598.85 363.13 598.63 362.86 598.54 362.5 C 598.45 362.14 598.51 361.75 598.69 361.46 C 603.38 360 608.26 360 612.95 361.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,605.94,371.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-173">
            <path
              d="M 628 285 L 628 380"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-172">
            <rect
              x="605"
              y="277"
              width="45"
              height="111"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(180,627.5,332.5)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-474"
            content='&lt;object label="" class="desks" sector="Sales" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Sales"
            data-placeholders="null"
          >
            <rect
              x="597.5"
              y="321.31"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,616,332.31)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-475"
            content='&lt;object label="" class="desks" sector="Sales" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Sales"
            data-placeholders="null"
          >
            <rect
              x="597.5"
              y="284.31"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,616,295.31)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-473"
            content='&lt;object label="" class="desks" sector="Sales" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Sales"
            data-placeholders="null"
          >
            <rect
              x="597.5"
              y="358.5"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,616,369.5)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-204">
            <path
              d="M 627.93 282.61 L 628.25 382.61"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-421"
            content='&lt;object label="" class="others"/&gt;'
            data-label=""
            data-class="others"
          >
            <rect x="742.85" y="112.74" width="238" height="157" fill="#f2f6f7" stroke="none" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-373"
            content='&lt;object label="" class="rooms"/&gt;'
            data-label=""
            data-class="rooms"
          >
            <rect x="3" y="612" width="98" height="106" fill="#f2f6f7" stroke="none" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-372"
            content='&lt;object label="" class="rooms"/&gt;'
            data-label=""
            data-class="rooms"
          >
            <rect x="103" y="592" width="96" height="126" fill="#f2f6f7" stroke="none" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-314"
            content='&lt;object label="" class="others" placeholders="null"/&gt;'
            data-label=""
            data-class="others"
            data-placeholders="null"
          >
            <rect x="93" y="112" width="88" height="78" fill="#f2f6f7" stroke="none" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-264"
            content='&lt;object label="" class="rooms"/&gt;'
            data-label=""
            data-class="rooms"
          >
            <rect x="653" y="111.74" width="88" height="108.26" fill="#f2f6f7" stroke="none" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-263"
            content='&lt;object label="" class="rooms"/&gt;'
            data-label=""
            data-class="rooms"
          >
            <rect
              x="562.51"
              y="111.74"
              width="89.51"
              height="108.26"
              fill="#f2f6f7"
              stroke="none"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-208">
            <path
              d="M 707.12 144.17 L 708.46 156.84 C 708.72 158.7 708.02 160.56 706.68 161.58 C 702.1 162.43 697.44 162.43 692.86 161.58 C 691.52 160.56 690.82 158.7 691.07 156.84 L 692.41 144.17 C 692.67 142.77 693.94 141.69 695.53 141.53 L 704 141.53 C 705.59 141.69 706.87 142.77 707.12 144.17 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 706.78 141.28 C 707.15 141.44 707.35 141.96 707.22 142.45 C 707.1 142.94 706.7 143.21 706.33 143.04 C 701.92 141.77 697.36 141.77 692.96 143.04 C 692.68 142.95 692.46 142.68 692.37 142.32 C 692.28 141.96 692.33 141.57 692.51 141.28 C 697.2 139.82 702.08 139.82 706.78 141.28"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-130">
            <path
              d="M 892.46 465.35 L 893.8 478.02 C 894.06 479.88 893.36 481.74 892.02 482.76 C 887.44 483.61 882.78 483.61 878.2 482.76 C 876.86 481.74 876.16 479.88 876.41 478.02 L 877.75 465.35 C 878.01 463.95 879.28 462.87 880.87 462.71 L 889.34 462.71 C 890.93 462.87 892.21 463.95 892.46 465.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 892.12 462.46 C 892.49 462.62 892.69 463.14 892.56 463.63 C 892.44 464.12 892.04 464.39 891.67 464.22 C 887.26 462.95 882.7 462.95 878.3 464.22 C 878.02 464.13 877.8 463.86 877.71 463.5 C 877.62 463.14 877.67 462.75 877.85 462.46 C 882.54 461 887.42 461 892.12 462.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-131">
            <path
              d="M 853.47 465.35 L 854.81 478.02 C 855.06 479.88 854.36 481.74 853.02 482.76 C 848.44 483.61 843.78 483.61 839.2 482.76 C 837.86 481.74 837.16 479.88 837.42 478.02 L 838.76 465.35 C 839.01 463.95 840.29 462.87 841.88 462.71 L 850.35 462.71 C 851.94 462.87 853.21 463.95 853.47 465.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 853.12 462.46 C 853.49 462.62 853.69 463.14 853.57 463.63 C 853.44 464.12 853.04 464.39 852.67 464.22 C 848.27 462.95 843.71 462.95 839.3 464.22 C 839.02 464.13 838.8 463.86 838.71 463.5 C 838.62 463.14 838.67 462.75 838.85 462.46 C 843.55 461 848.43 461 853.12 462.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-132">
            <path
              d="M 931.46 465.35 L 932.8 478.02 C 933.06 479.88 932.36 481.74 931.02 482.76 C 926.44 483.61 921.78 483.61 917.2 482.76 C 915.86 481.74 915.16 479.88 915.41 478.02 L 916.75 465.35 C 917.01 463.95 918.28 462.87 919.87 462.71 L 928.34 462.71 C 929.93 462.87 931.21 463.95 931.46 465.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 931.12 462.46 C 931.49 462.62 931.69 463.14 931.56 463.63 C 931.44 464.12 931.04 464.39 930.67 464.22 C 926.26 462.95 921.7 462.95 917.3 464.22 C 917.02 464.13 916.8 463.86 916.71 463.5 C 916.62 463.14 916.67 462.75 916.85 462.46 C 921.54 461 926.42 461 931.12 462.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-127">
            <path
              d="M 892.46 506.86 L 893.8 519.53 C 894.06 521.39 893.36 523.25 892.02 524.27 C 887.44 525.12 882.78 525.12 878.2 524.27 C 876.86 523.25 876.16 521.39 876.41 519.53 L 877.75 506.86 C 878.01 505.46 879.28 504.38 880.87 504.22 L 889.34 504.22 C 890.93 504.38 892.21 505.46 892.46 506.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,885.11,513.82)"
              pointer-events="none"
            />
            <path
              d="M 892.12 503.97 C 892.49 504.13 892.69 504.65 892.56 505.14 C 892.44 505.63 892.04 505.9 891.67 505.73 C 887.26 504.46 882.7 504.46 878.3 505.73 C 878.02 505.64 877.8 505.37 877.71 505.01 C 877.62 504.65 877.67 504.26 877.85 503.97 C 882.54 502.51 887.42 502.51 892.12 503.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,885.11,513.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-128">
            <path
              d="M 853.47 506.86 L 854.81 519.53 C 855.06 521.39 854.36 523.25 853.02 524.27 C 848.44 525.12 843.78 525.12 839.2 524.27 C 837.86 523.25 837.16 521.39 837.42 519.53 L 838.76 506.86 C 839.01 505.46 840.29 504.38 841.88 504.22 L 850.35 504.22 C 851.94 504.38 853.21 505.46 853.47 506.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,846.11,513.82)"
              pointer-events="none"
            />
            <path
              d="M 853.12 503.97 C 853.49 504.13 853.69 504.65 853.57 505.14 C 853.44 505.63 853.04 505.9 852.67 505.73 C 848.27 504.46 843.71 504.46 839.3 505.73 C 839.02 505.64 838.8 505.37 838.71 505.01 C 838.62 504.65 838.67 504.26 838.85 503.97 C 843.55 502.51 848.43 502.51 853.12 503.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,846.11,513.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-129">
            <path
              d="M 931.46 506.86 L 932.8 519.53 C 933.06 521.39 932.36 523.25 931.02 524.27 C 926.44 525.12 921.78 525.12 917.2 524.27 C 915.86 523.25 915.16 521.39 915.41 519.53 L 916.75 506.86 C 917.01 505.46 918.28 504.38 919.87 504.22 L 928.34 504.22 C 929.93 504.38 931.21 505.46 931.46 506.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,924.11,513.82)"
              pointer-events="none"
            />
            <path
              d="M 931.12 503.97 C 931.49 504.13 931.69 504.65 931.56 505.14 C 931.44 505.63 931.04 505.9 930.67 505.73 C 926.26 504.46 921.7 504.46 917.3 505.73 C 917.02 505.64 916.8 505.37 916.71 505.01 C 916.62 504.65 916.67 504.26 916.85 503.97 C 921.54 502.51 926.42 502.51 931.12 503.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,924.11,513.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-124">
            <path
              d="M 874.46 558.09 L 875.8 570.76 C 876.06 572.62 875.36 574.48 874.02 575.5 C 869.44 576.35 864.78 576.35 860.2 575.5 C 858.86 574.48 858.16 572.62 858.41 570.76 L 859.75 558.09 C 860.01 556.69 861.28 555.61 862.87 555.45 L 871.34 555.45 C 872.93 555.61 874.21 556.69 874.46 558.09 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 874.12 555.2 C 874.49 555.36 874.69 555.88 874.56 556.37 C 874.44 556.86 874.04 557.13 873.67 556.96 C 869.26 555.69 864.7 555.69 860.3 556.96 C 860.02 556.87 859.8 556.6 859.71 556.24 C 859.62 555.88 859.67 555.49 859.85 555.2 C 864.54 553.74 869.42 553.74 874.12 555.2"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-125">
            <path
              d="M 835.47 558.09 L 836.81 570.76 C 837.06 572.62 836.36 574.48 835.02 575.5 C 830.44 576.35 825.78 576.35 821.2 575.5 C 819.86 574.48 819.16 572.62 819.42 570.76 L 820.76 558.09 C 821.01 556.69 822.29 555.61 823.88 555.45 L 832.35 555.45 C 833.94 555.61 835.21 556.69 835.47 558.09 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 835.12 555.2 C 835.49 555.36 835.69 555.88 835.57 556.37 C 835.44 556.86 835.04 557.13 834.67 556.96 C 830.27 555.69 825.71 555.69 821.3 556.96 C 821.02 556.87 820.8 556.6 820.71 556.24 C 820.62 555.88 820.67 555.49 820.85 555.2 C 825.55 553.74 830.43 553.74 835.12 555.2"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-126">
            <path
              d="M 913.46 558.09 L 914.8 570.76 C 915.06 572.62 914.36 574.48 913.02 575.5 C 908.44 576.35 903.78 576.35 899.2 575.5 C 897.86 574.48 897.16 572.62 897.41 570.76 L 898.75 558.09 C 899.01 556.69 900.28 555.61 901.87 555.45 L 910.34 555.45 C 911.93 555.61 913.21 556.69 913.46 558.09 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 913.12 555.2 C 913.49 555.36 913.69 555.88 913.56 556.37 C 913.44 556.86 913.04 557.13 912.67 556.96 C 908.26 555.69 903.7 555.69 899.3 556.96 C 899.02 556.87 898.8 556.6 898.71 556.24 C 898.62 555.88 898.67 555.49 898.85 555.2 C 903.54 553.74 908.42 553.74 913.12 555.2"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-121">
            <path
              d="M 874.46 598.81 L 875.8 611.48 C 876.06 613.34 875.36 615.2 874.02 616.22 C 869.44 617.07 864.78 617.07 860.2 616.22 C 858.86 615.2 858.16 613.34 858.41 611.48 L 859.75 598.81 C 860.01 597.41 861.28 596.33 862.87 596.17 L 871.34 596.17 C 872.93 596.33 874.21 597.41 874.46 598.81 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,867.11,605.77)"
              pointer-events="none"
            />
            <path
              d="M 874.12 595.92 C 874.49 596.08 874.69 596.6 874.56 597.09 C 874.44 597.58 874.04 597.85 873.67 597.68 C 869.26 596.41 864.7 596.41 860.3 597.68 C 860.02 597.59 859.8 597.32 859.71 596.96 C 859.62 596.6 859.67 596.21 859.85 595.92 C 864.54 594.46 869.42 594.46 874.12 595.92"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,867.11,605.77)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-122">
            <path
              d="M 835.47 598.81 L 836.81 611.48 C 837.06 613.34 836.36 615.2 835.02 616.22 C 830.44 617.07 825.78 617.07 821.2 616.22 C 819.86 615.2 819.16 613.34 819.42 611.48 L 820.76 598.81 C 821.01 597.41 822.29 596.33 823.88 596.17 L 832.35 596.17 C 833.94 596.33 835.21 597.41 835.47 598.81 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,828.11,605.77)"
              pointer-events="none"
            />
            <path
              d="M 835.12 595.92 C 835.49 596.08 835.69 596.6 835.57 597.09 C 835.44 597.58 835.04 597.85 834.67 597.68 C 830.27 596.41 825.71 596.41 821.3 597.68 C 821.02 597.59 820.8 597.32 820.71 596.96 C 820.62 596.6 820.67 596.21 820.85 595.92 C 825.55 594.46 830.43 594.46 835.12 595.92"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,828.11,605.77)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-123">
            <path
              d="M 913.46 598.81 L 914.8 611.48 C 915.06 613.34 914.36 615.2 913.02 616.22 C 908.44 617.07 903.78 617.07 899.2 616.22 C 897.86 615.2 897.16 613.34 897.41 611.48 L 898.75 598.81 C 899.01 597.41 900.28 596.33 901.87 596.17 L 910.34 596.17 C 911.93 596.33 913.21 597.41 913.46 598.81 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,906.11,605.77)"
              pointer-events="none"
            />
            <path
              d="M 913.12 595.92 C 913.49 596.08 913.69 596.6 913.56 597.09 C 913.44 597.58 913.04 597.85 912.67 597.68 C 908.26 596.41 903.7 596.41 899.3 597.68 C 899.02 597.59 898.8 597.32 898.71 596.96 C 898.62 596.6 898.67 596.21 898.85 595.92 C 903.54 594.46 908.42 594.46 913.12 595.92"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,906.11,605.77)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-118">
            <path
              d="M 875.3 645.03 L 876.64 657.7 C 876.9 659.56 876.2 661.42 874.86 662.44 C 870.28 663.29 865.62 663.29 861.04 662.44 C 859.7 661.42 859 659.56 859.25 657.7 L 860.59 645.03 C 860.85 643.63 862.12 642.55 863.71 642.39 L 872.18 642.39 C 873.77 642.55 875.05 643.63 875.3 645.03 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 874.96 642.14 C 875.33 642.3 875.53 642.82 875.4 643.31 C 875.28 643.8 874.88 644.07 874.51 643.9 C 870.1 642.63 865.54 642.63 861.14 643.9 C 860.86 643.81 860.64 643.54 860.55 643.18 C 860.46 642.82 860.51 642.43 860.69 642.14 C 865.38 640.68 870.26 640.68 874.96 642.14"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-119">
            <path
              d="M 836.31 645.03 L 837.65 657.7 C 837.9 659.56 837.2 661.42 835.86 662.44 C 831.28 663.29 826.62 663.29 822.04 662.44 C 820.7 661.42 820 659.56 820.26 657.7 L 821.6 645.03 C 821.85 643.63 823.13 642.55 824.72 642.39 L 833.19 642.39 C 834.78 642.55 836.05 643.63 836.31 645.03 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 835.96 642.14 C 836.33 642.3 836.53 642.82 836.41 643.31 C 836.28 643.8 835.88 644.07 835.51 643.9 C 831.11 642.63 826.55 642.63 822.14 643.9 C 821.86 643.81 821.64 643.54 821.55 643.18 C 821.46 642.82 821.51 642.43 821.69 642.14 C 826.39 640.68 831.27 640.68 835.96 642.14"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-120">
            <path
              d="M 914.3 645.03 L 915.64 657.7 C 915.9 659.56 915.2 661.42 913.86 662.44 C 909.28 663.29 904.62 663.29 900.04 662.44 C 898.7 661.42 898 659.56 898.25 657.7 L 899.59 645.03 C 899.85 643.63 901.12 642.55 902.71 642.39 L 911.18 642.39 C 912.77 642.55 914.05 643.63 914.3 645.03 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 913.96 642.14 C 914.33 642.3 914.53 642.82 914.4 643.31 C 914.28 643.8 913.88 644.07 913.51 643.9 C 909.1 642.63 904.54 642.63 900.14 643.9 C 899.86 643.81 899.64 643.54 899.55 643.18 C 899.46 642.82 899.51 642.43 899.69 642.14 C 904.38 640.68 909.26 640.68 913.96 642.14"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-117"
            content='&lt;object label="" class="rooms"/&gt;'
            data-label=""
            data-class="rooms"
          >
            <rect x="272.35" y="2.03" width="129" height="93" fill="#f2f6f7" stroke="none" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-116"
            content='&lt;object label="" class="rooms"/&gt;'
            data-label=""
            data-class="rooms"
          >
            <rect x="273" y="96.5" width="128" height="95" fill="#f2f6f7" stroke="none" pointer-events="none" />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-102">
            <path
              d="M 329.3 59.44 L 330.64 72.1 C 330.9 73.96 330.2 75.82 328.86 76.85 C 324.28 77.7 319.62 77.7 315.04 76.85 C 313.7 75.82 313 73.96 313.25 72.1 L 314.59 59.44 C 314.85 58.04 316.12 56.96 317.71 56.8 L 326.18 56.8 C 327.77 56.96 329.05 58.04 329.3 59.44 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,321.95,66.39)"
              pointer-events="none"
            />
            <path
              d="M 328.96 56.54 C 329.33 56.7 329.53 57.23 329.4 57.72 C 329.28 58.2 328.88 58.47 328.51 58.31 C 324.1 57.03 319.54 57.03 315.14 58.31 C 314.86 58.21 314.64 57.94 314.55 57.58 C 314.46 57.23 314.51 56.83 314.69 56.54 C 319.38 55.08 324.26 55.08 328.96 56.54"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,321.95,66.39)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-103">
            <path
              d="M 359.3 59.44 L 360.64 72.1 C 360.9 73.96 360.2 75.82 358.86 76.85 C 354.28 77.7 349.62 77.7 345.04 76.85 C 343.7 75.82 343 73.96 343.25 72.1 L 344.59 59.44 C 344.85 58.04 346.12 56.96 347.71 56.8 L 356.18 56.8 C 357.77 56.96 359.05 58.04 359.3 59.44 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,351.95,66.39)"
              pointer-events="none"
            />
            <path
              d="M 358.96 56.54 C 359.33 56.7 359.53 57.23 359.4 57.72 C 359.28 58.2 358.88 58.47 358.51 58.31 C 354.1 57.03 349.54 57.03 345.14 58.31 C 344.86 58.21 344.64 57.94 344.55 57.58 C 344.46 57.23 344.51 56.83 344.69 56.54 C 349.38 55.08 354.26 55.08 358.96 56.54"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,351.95,66.39)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-104">
            <path
              d="M 329.05 26.65 L 330.39 39.31 C 330.65 41.17 329.95 43.03 328.61 44.06 C 324.03 44.91 319.37 44.91 314.79 44.06 C 313.45 43.03 312.75 41.17 313 39.31 L 314.34 26.65 C 314.6 25.25 315.87 24.17 317.46 24.01 L 325.93 24.01 C 327.52 24.17 328.8 25.25 329.05 26.65 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 328.71 23.75 C 329.08 23.91 329.28 24.44 329.15 24.93 C 329.03 25.41 328.63 25.68 328.26 25.52 C 323.85 24.24 319.29 24.24 314.89 25.52 C 314.61 25.42 314.39 25.15 314.3 24.79 C 314.21 24.44 314.26 24.04 314.44 23.75 C 319.13 22.29 324.01 22.29 328.71 23.75"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-105">
            <path
              d="M 359.05 26.65 L 360.39 39.31 C 360.65 41.17 359.95 43.03 358.61 44.06 C 354.03 44.91 349.37 44.91 344.79 44.06 C 343.45 43.03 342.75 41.17 343 39.31 L 344.34 26.65 C 344.6 25.25 345.87 24.17 347.46 24.01 L 355.93 24.01 C 357.52 24.17 358.8 25.25 359.05 26.65 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 358.71 23.75 C 359.08 23.91 359.28 24.44 359.15 24.93 C 359.03 25.41 358.63 25.68 358.26 25.52 C 353.85 24.24 349.29 24.24 344.89 25.52 C 344.61 25.42 344.39 25.15 344.3 24.79 C 344.21 24.44 344.26 24.04 344.44 23.75 C 349.13 22.29 354.01 22.29 358.71 23.75"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-93"
            content='&lt;object label="" class="rooms"/&gt;'
            data-label=""
            data-class="rooms"
          >
            <rect x="562.51" y="1.67" width="179" height="108" fill="#f2f6f7" stroke="none" pointer-events="none" />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-1">
            <path
              d="M 200 549 L 804 549 M 804 553 L 200 553 M 804 553"
              fill="none"
              stroke="rgb(0, 0, 0)"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-2">
            <path
              d="M 804 549 L 804 723 M 800 723 L 800 549 M 800 723"
              fill="none"
              stroke="rgb(0, 0, 0)"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-3">
            <path
              d="M 204 549 L 204 723 M 200 723 L 200 549 M 200 723"
              fill="none"
              stroke="rgb(0, 0, 0)"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-4">
            <path
              d="M 2 719 L 204 719 M 204 723 L 2 723 M 204 723"
              fill="none"
              stroke="rgb(0, 0, 0)"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-5">
            <path
              d="M 2 723 L 2 111"
              fill="none"
              stroke="rgb(0, 0, 0)"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-6">
            <path
              d="M 1 111 L 272 111"
              fill="none"
              stroke="rgb(0, 0, 0)"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-8">
            <path
              d="M 272 207 L 272 1"
              fill="none"
              stroke="rgb(0, 0, 0)"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-9">
            <path
              d="M 272 1 L 742 1"
              fill="none"
              stroke="rgb(0, 0, 0)"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-11">
            <path
              d="M 742 271 L 742 1"
              fill="none"
              stroke="rgb(0, 0, 0)"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-12">
            <path
              d="M 562 111 L 982 111"
              fill="none"
              stroke="rgb(0, 0, 0)"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-13">
            <path
              d="M 982 723 L 982 111"
              fill="none"
              stroke="rgb(0, 0, 0)"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-15">
            <path
              d="M 800 719 L 982 719 M 982 723 L 800 723 M 982 723"
              fill="none"
              stroke="rgb(0, 0, 0)"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-16">
            <rect
              x="959.75"
              y="590.25"
              width="23.94"
              height="5"
              fill="rgb(255, 255, 255)"
              stroke="#999999"
              transform="rotate(90,971.72,602.97)"
              pointer-events="none"
            />
            <path
              d="M 959.75 595.25 C 959.75 608.47 970.47 619.19 983.69 619.19 L 983.69 595.25"
              fill="none"
              stroke="#999999"
              stroke-miterlimit="10"
              transform="rotate(90,971.72,602.97)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-55">
            <path
              d="M 742 271 L 982 271"
              fill="none"
              stroke="#000000"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-59">
            <path
              d="M 562 221 L 562 1"
              fill="none"
              stroke="#000000"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-56">
            <rect
              x="559.75"
              y="79.25"
              width="23.94"
              height="5"
              fill="rgb(255, 255, 255)"
              stroke="#999999"
              transform="translate(0,91.97)scale(1,-1)translate(0,-91.97)rotate(-90,571.72,91.97)"
              pointer-events="none"
            />
            <path
              d="M 559.75 84.25 C 559.75 97.47 570.47 108.19 583.69 108.19 L 583.69 84.25"
              fill="none"
              stroke="#999999"
              stroke-miterlimit="10"
              transform="translate(0,91.97)scale(1,-1)translate(0,-91.97)rotate(-90,571.72,91.97)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-88">
            <path
              d="M 603.25 49.61 L 604.59 62.27 C 604.85 64.13 604.15 65.99 602.81 67.02 C 598.23 67.87 593.57 67.87 588.99 67.02 C 587.65 65.99 586.95 64.13 587.2 62.27 L 588.54 49.61 C 588.8 48.21 590.07 47.13 591.66 46.97 L 600.13 46.97 C 601.72 47.13 603 48.21 603.25 49.61 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,595.9,56.56)"
              pointer-events="none"
            />
            <path
              d="M 602.91 46.71 C 603.28 46.87 603.48 47.4 603.35 47.89 C 603.23 48.37 602.83 48.64 602.46 48.48 C 598.05 47.2 593.49 47.2 589.09 48.48 C 588.81 48.38 588.59 48.11 588.5 47.75 C 588.41 47.4 588.46 47 588.64 46.71 C 593.33 45.25 598.21 45.25 602.91 46.71"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,595.9,56.56)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-87">
            <path
              d="M 715.66 49.61 L 717 62.27 C 717.26 64.13 716.56 65.99 715.22 67.02 C 710.64 67.87 705.98 67.87 701.4 67.02 C 700.06 65.99 699.36 64.13 699.61 62.27 L 700.95 49.61 C 701.21 48.21 702.48 47.13 704.07 46.97 L 712.54 46.97 C 714.13 47.13 715.41 48.21 715.66 49.61 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,708.31,56.56)"
              pointer-events="none"
            />
            <path
              d="M 715.32 46.71 C 715.69 46.87 715.89 47.4 715.76 47.89 C 715.64 48.37 715.24 48.64 714.87 48.48 C 710.46 47.2 705.9 47.2 701.5 48.48 C 701.22 48.38 701 48.11 700.91 47.75 C 700.82 47.4 700.87 47 701.05 46.71 C 705.74 45.25 710.62 45.25 715.32 46.71"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,708.31,56.56)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-83">
            <path
              d="M 700.97 71.36 L 702.31 84.02 C 702.57 85.88 701.87 87.74 700.53 88.77 C 695.95 89.62 691.29 89.62 686.71 88.77 C 685.37 87.74 684.67 85.88 684.92 84.02 L 686.26 71.36 C 686.52 69.96 687.79 68.88 689.38 68.72 L 697.85 68.72 C 699.44 68.88 700.72 69.96 700.97 71.36 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,693.62,78.31)"
              pointer-events="none"
            />
            <path
              d="M 700.63 68.46 C 701 68.62 701.2 69.15 701.07 69.64 C 700.95 70.12 700.55 70.39 700.18 70.23 C 695.77 68.95 691.21 68.95 686.81 70.23 C 686.53 70.13 686.31 69.86 686.22 69.5 C 686.13 69.15 686.18 68.75 686.36 68.46 C 691.05 67 695.93 67 700.63 68.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,693.62,78.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-84">
            <path
              d="M 645.96 71.36 L 647.3 84.02 C 647.56 85.88 646.86 87.74 645.52 88.77 C 640.94 89.62 636.28 89.62 631.7 88.77 C 630.36 87.74 629.66 85.88 629.91 84.02 L 631.25 71.36 C 631.51 69.96 632.78 68.88 634.37 68.72 L 642.84 68.72 C 644.43 68.88 645.71 69.96 645.96 71.36 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,638.61,78.31)"
              pointer-events="none"
            />
            <path
              d="M 645.62 68.46 C 645.99 68.62 646.19 69.15 646.06 69.64 C 645.94 70.12 645.54 70.39 645.17 70.23 C 640.76 68.95 636.2 68.95 631.8 70.23 C 631.52 70.13 631.3 69.86 631.21 69.5 C 631.12 69.15 631.17 68.75 631.35 68.46 C 636.04 67 640.92 67 645.62 68.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,638.61,78.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-85">
            <path
              d="M 618.17 71.36 L 619.51 84.02 C 619.76 85.88 619.06 87.74 617.72 88.77 C 613.14 89.62 608.48 89.62 603.9 88.77 C 602.56 87.74 601.86 85.88 602.12 84.02 L 603.46 71.36 C 603.71 69.96 604.99 68.88 606.58 68.72 L 615.05 68.72 C 616.64 68.88 617.91 69.96 618.17 71.36 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,610.81,78.31)"
              pointer-events="none"
            />
            <path
              d="M 617.82 68.46 C 618.19 68.62 618.39 69.15 618.27 69.64 C 618.14 70.12 617.74 70.39 617.37 70.23 C 612.97 68.95 608.41 68.95 604 70.23 C 603.72 70.13 603.5 69.86 603.41 69.5 C 603.32 69.15 603.37 68.75 603.55 68.46 C 608.25 67 613.13 67 617.82 68.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,610.81,78.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-86">
            <path
              d="M 672.96 71.36 L 674.3 84.02 C 674.56 85.88 673.86 87.74 672.52 88.77 C 667.94 89.62 663.28 89.62 658.7 88.77 C 657.36 87.74 656.66 85.88 656.91 84.02 L 658.25 71.36 C 658.51 69.96 659.78 68.88 661.37 68.72 L 669.84 68.72 C 671.43 68.88 672.71 69.96 672.96 71.36 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,665.61,78.31)"
              pointer-events="none"
            />
            <path
              d="M 672.62 68.46 C 672.99 68.62 673.19 69.15 673.06 69.64 C 672.94 70.12 672.54 70.39 672.17 70.23 C 667.76 68.95 663.2 68.95 658.8 70.23 C 658.52 70.13 658.3 69.86 658.21 69.5 C 658.12 69.15 658.17 68.75 658.35 68.46 C 663.04 67 667.92 67 672.62 68.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,665.61,78.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-82">
            <path
              d="M 701.31 29.36 L 702.65 42.02 C 702.91 43.88 702.21 45.74 700.87 46.77 C 696.29 47.62 691.63 47.62 687.05 46.77 C 685.71 45.74 685.01 43.88 685.26 42.02 L 686.6 29.36 C 686.86 27.96 688.13 26.88 689.72 26.72 L 698.19 26.72 C 699.78 26.88 701.06 27.96 701.31 29.36 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 700.97 26.46 C 701.34 26.62 701.54 27.15 701.41 27.64 C 701.29 28.12 700.89 28.39 700.52 28.23 C 696.11 26.95 691.55 26.95 687.15 28.23 C 686.87 28.13 686.65 27.86 686.56 27.5 C 686.47 27.15 686.52 26.75 686.7 26.46 C 691.39 25 696.27 25 700.97 26.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-73">
            <path
              d="M 646.3 29.36 L 647.64 42.02 C 647.9 43.88 647.2 45.74 645.86 46.77 C 641.28 47.62 636.62 47.62 632.04 46.77 C 630.7 45.74 630 43.88 630.25 42.02 L 631.59 29.36 C 631.85 27.96 633.12 26.88 634.71 26.72 L 643.18 26.72 C 644.77 26.88 646.05 27.96 646.3 29.36 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 645.96 26.46 C 646.33 26.62 646.53 27.15 646.4 27.64 C 646.28 28.12 645.88 28.39 645.51 28.23 C 641.1 26.95 636.54 26.95 632.14 28.23 C 631.86 28.13 631.64 27.86 631.55 27.5 C 631.46 27.15 631.51 26.75 631.69 26.46 C 636.38 25 641.26 25 645.96 26.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-74">
            <path
              d="M 618.51 29.36 L 619.85 42.02 C 620.1 43.88 619.4 45.74 618.06 46.77 C 613.48 47.62 608.82 47.62 604.24 46.77 C 602.9 45.74 602.2 43.88 602.46 42.02 L 603.8 29.36 C 604.05 27.96 605.33 26.88 606.92 26.72 L 615.39 26.72 C 616.98 26.88 618.25 27.96 618.51 29.36 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 618.16 26.46 C 618.53 26.62 618.73 27.15 618.61 27.64 C 618.48 28.12 618.08 28.39 617.71 28.23 C 613.31 26.95 608.75 26.95 604.34 28.23 C 604.06 28.13 603.84 27.86 603.75 27.5 C 603.66 27.15 603.71 26.75 603.89 26.46 C 608.59 25 613.47 25 618.16 26.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-75">
            <path
              d="M 673.3 29.36 L 674.64 42.02 C 674.9 43.88 674.2 45.74 672.86 46.77 C 668.28 47.62 663.62 47.62 659.04 46.77 C 657.7 45.74 657 43.88 657.25 42.02 L 658.59 29.36 C 658.85 27.96 660.12 26.88 661.71 26.72 L 670.18 26.72 C 671.77 26.88 673.05 27.96 673.3 29.36 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 672.96 26.46 C 673.33 26.62 673.53 27.15 673.4 27.64 C 673.28 28.12 672.88 28.39 672.51 28.23 C 668.1 26.95 663.54 26.95 659.14 28.23 C 658.86 28.13 658.64 27.86 658.55 27.5 C 658.46 27.15 658.51 26.75 658.69 26.46 C 663.38 25 668.26 25 672.96 26.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-79">
            <rect
              x="629.85"
              y="2.3"
              width="44.74"
              height="110.44"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(90,652.22,57.52)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-94">
            <path
              d="M 402 207 L 402 2.3"
              fill="none"
              stroke="#000000"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-53">
            <rect
              x="862.85"
              y="438.3"
              width="45"
              height="111"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(90,885.35,493.8)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-54">
            <path
              d="M 837.88 493.31 L 932.75 493.31"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-21">
            <path
              d="M 875.3 685.03 L 876.64 697.7 C 876.9 699.56 876.2 701.42 874.86 702.44 C 870.28 703.29 865.62 703.29 861.04 702.44 C 859.7 701.42 859 699.56 859.25 697.7 L 860.59 685.03 C 860.85 683.63 862.12 682.55 863.71 682.39 L 872.18 682.39 C 873.77 682.55 875.05 683.63 875.3 685.03 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,867.95,691.99)"
              pointer-events="none"
            />
            <path
              d="M 874.96 682.14 C 875.33 682.3 875.53 682.82 875.4 683.31 C 875.28 683.8 874.88 684.07 874.51 683.9 C 870.1 682.63 865.54 682.63 861.14 683.9 C 860.86 683.81 860.64 683.54 860.55 683.18 C 860.46 682.82 860.51 682.43 860.69 682.14 C 865.38 680.68 870.26 680.68 874.96 682.14"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,867.95,691.99)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-22">
            <path
              d="M 836.31 685.03 L 837.65 697.7 C 837.9 699.56 837.2 701.42 835.86 702.44 C 831.28 703.29 826.62 703.29 822.04 702.44 C 820.7 701.42 820 699.56 820.26 697.7 L 821.6 685.03 C 821.85 683.63 823.13 682.55 824.72 682.39 L 833.19 682.39 C 834.78 682.55 836.05 683.63 836.31 685.03 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,828.95,691.99)"
              pointer-events="none"
            />
            <path
              d="M 835.96 682.14 C 836.33 682.3 836.53 682.82 836.41 683.31 C 836.28 683.8 835.88 684.07 835.51 683.9 C 831.11 682.63 826.55 682.63 822.14 683.9 C 821.86 683.81 821.64 683.54 821.55 683.18 C 821.46 682.82 821.51 682.43 821.69 682.14 C 826.39 680.68 831.27 680.68 835.96 682.14"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,828.95,691.99)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-23">
            <path
              d="M 914.3 685.03 L 915.64 697.7 C 915.9 699.56 915.2 701.42 913.86 702.44 C 909.28 703.29 904.62 703.29 900.04 702.44 C 898.7 701.42 898 699.56 898.25 697.7 L 899.59 685.03 C 899.85 683.63 901.12 682.55 902.71 682.39 L 911.18 682.39 C 912.77 682.55 914.05 683.63 914.3 685.03 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,906.95,691.99)"
              pointer-events="none"
            />
            <path
              d="M 913.96 682.14 C 914.33 682.3 914.53 682.82 914.4 683.31 C 914.28 683.8 913.88 684.07 913.51 683.9 C 909.1 682.63 904.54 682.63 900.14 683.9 C 899.86 683.81 899.64 683.54 899.55 683.18 C 899.46 682.82 899.51 682.43 899.69 682.14 C 904.38 680.68 909.26 680.68 913.96 682.14"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,906.95,691.99)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-24">
            <rect
              x="845"
              y="617"
              width="45"
              height="111"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(90,867.5,672.5)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-25">
            <path
              d="M 820.3 672.08 L 915.17 672.08"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-44">
            <rect
              x="845.27"
              y="530.12"
              width="45"
              height="111"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(90,867.77,585.62)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-45">
            <path
              d="M 820.3 585.13 L 915.17 585.13"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-95">
            <path
              d="M 273 192 L 402 191"
              fill="none"
              stroke="#000000"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-96">
            <path
              d="M 272 96 L 402 95.94"
              fill="none"
              stroke="#000000"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-97">
            <rect
              x="381.75"
              y="158.25"
              width="23.94"
              height="5"
              fill="rgb(255, 255, 255)"
              stroke="#999999"
              transform="rotate(90,393.72,170.97)"
              pointer-events="none"
            />
            <path
              d="M 381.75 163.25 C 381.75 176.47 392.47 187.19 405.69 187.19 L 405.69 163.25"
              fill="none"
              stroke="#999999"
              stroke-miterlimit="10"
              transform="rotate(90,393.72,170.97)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-100">
            <rect
              x="381.75"
              y="64.25"
              width="23.94"
              height="5"
              fill="rgb(255, 255, 255)"
              stroke="#999999"
              transform="rotate(90,393.72,76.97)"
              pointer-events="none"
            />
            <path
              d="M 381.75 69.25 C 381.75 82.47 392.47 93.19 405.69 93.19 L 405.69 69.25"
              fill="none"
              stroke="#999999"
              stroke-miterlimit="10"
              transform="rotate(90,393.72,76.97)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-101">
            <rect
              x="318.38"
              y="20.29"
              width="36.64"
              height="59.41"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(90,336.7,49.99)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-111">
            <path
              d="M 329.3 155.44 L 330.64 168.1 C 330.9 169.96 330.2 171.82 328.86 172.85 C 324.28 173.7 319.62 173.7 315.04 172.85 C 313.7 171.82 313 169.96 313.25 168.1 L 314.59 155.44 C 314.85 154.04 316.12 152.96 317.71 152.8 L 326.18 152.8 C 327.77 152.96 329.05 154.04 329.3 155.44 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,321.95,162.39)"
              pointer-events="none"
            />
            <path
              d="M 328.96 152.54 C 329.33 152.7 329.53 153.23 329.4 153.72 C 329.28 154.2 328.88 154.47 328.51 154.31 C 324.1 153.03 319.54 153.03 315.14 154.31 C 314.86 154.21 314.64 153.94 314.55 153.58 C 314.46 153.23 314.51 152.83 314.69 152.54 C 319.38 151.08 324.26 151.08 328.96 152.54"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,321.95,162.39)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-112">
            <path
              d="M 359.3 155.44 L 360.64 168.1 C 360.9 169.96 360.2 171.82 358.86 172.85 C 354.28 173.7 349.62 173.7 345.04 172.85 C 343.7 171.82 343 169.96 343.25 168.1 L 344.59 155.44 C 344.85 154.04 346.12 152.96 347.71 152.8 L 356.18 152.8 C 357.77 152.96 359.05 154.04 359.3 155.44 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,351.95,162.39)"
              pointer-events="none"
            />
            <path
              d="M 358.96 152.54 C 359.33 152.7 359.53 153.23 359.4 153.72 C 359.28 154.2 358.88 154.47 358.51 154.31 C 354.1 153.03 349.54 153.03 345.14 154.31 C 344.86 154.21 344.64 153.94 344.55 153.58 C 344.46 153.23 344.51 152.83 344.69 152.54 C 349.38 151.08 354.26 151.08 358.96 152.54"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,351.95,162.39)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-113">
            <path
              d="M 329.05 122.65 L 330.39 135.31 C 330.65 137.17 329.95 139.03 328.61 140.06 C 324.03 140.91 319.37 140.91 314.79 140.06 C 313.45 139.03 312.75 137.17 313 135.31 L 314.34 122.65 C 314.6 121.25 315.87 120.17 317.46 120.01 L 325.93 120.01 C 327.52 120.17 328.8 121.25 329.05 122.65 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 328.71 119.75 C 329.08 119.91 329.28 120.44 329.15 120.93 C 329.03 121.41 328.63 121.68 328.26 121.52 C 323.85 120.24 319.29 120.24 314.89 121.52 C 314.61 121.42 314.39 121.15 314.3 120.79 C 314.21 120.44 314.26 120.04 314.44 119.75 C 319.13 118.29 324.01 118.29 328.71 119.75"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-114">
            <path
              d="M 359.05 122.65 L 360.39 135.31 C 360.65 137.17 359.95 139.03 358.61 140.06 C 354.03 140.91 349.37 140.91 344.79 140.06 C 343.45 139.03 342.75 137.17 343 135.31 L 344.34 122.65 C 344.6 121.25 345.87 120.17 347.46 120.01 L 355.93 120.01 C 357.52 120.17 358.8 121.25 359.05 122.65 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 358.71 119.75 C 359.08 119.91 359.28 120.44 359.15 120.93 C 359.03 121.41 358.63 121.68 358.26 121.52 C 353.85 120.24 349.29 120.24 344.89 121.52 C 344.61 121.42 344.39 121.15 344.3 120.79 C 344.21 120.44 344.26 120.04 344.44 119.75 C 349.13 118.29 354.01 118.29 358.71 119.75"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-115">
            <rect
              x="318.38"
              y="116.29"
              width="36.64"
              height="59.41"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(90,336.7,145.99)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-134">
            <path
              d="M 891.46 327.35 L 892.8 340.02 C 893.06 341.88 892.36 343.74 891.02 344.76 C 886.44 345.61 881.78 345.61 877.2 344.76 C 875.86 343.74 875.16 341.88 875.41 340.02 L 876.75 327.35 C 877.01 325.95 878.28 324.87 879.87 324.71 L 888.34 324.71 C 889.93 324.87 891.21 325.95 891.46 327.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 891.12 324.46 C 891.49 324.62 891.69 325.14 891.56 325.63 C 891.44 326.12 891.04 326.39 890.67 326.22 C 886.26 324.95 881.7 324.95 877.3 326.22 C 877.02 326.13 876.8 325.86 876.71 325.5 C 876.62 325.14 876.67 324.75 876.85 324.46 C 881.54 323 886.42 323 891.12 324.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-135">
            <path
              d="M 852.47 327.35 L 853.81 340.02 C 854.06 341.88 853.36 343.74 852.02 344.76 C 847.44 345.61 842.78 345.61 838.2 344.76 C 836.86 343.74 836.16 341.88 836.42 340.02 L 837.76 327.35 C 838.01 325.95 839.29 324.87 840.88 324.71 L 849.35 324.71 C 850.94 324.87 852.21 325.95 852.47 327.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 852.12 324.46 C 852.49 324.62 852.69 325.14 852.57 325.63 C 852.44 326.12 852.04 326.39 851.67 326.22 C 847.27 324.95 842.71 324.95 838.3 326.22 C 838.02 326.13 837.8 325.86 837.71 325.5 C 837.62 325.14 837.67 324.75 837.85 324.46 C 842.55 323 847.43 323 852.12 324.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-136">
            <path
              d="M 930.46 327.35 L 931.8 340.02 C 932.06 341.88 931.36 343.74 930.02 344.76 C 925.44 345.61 920.78 345.61 916.2 344.76 C 914.86 343.74 914.16 341.88 914.41 340.02 L 915.75 327.35 C 916.01 325.95 917.28 324.87 918.87 324.71 L 927.34 324.71 C 928.93 324.87 930.21 325.95 930.46 327.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 930.12 324.46 C 930.49 324.62 930.69 325.14 930.56 325.63 C 930.44 326.12 930.04 326.39 929.67 326.22 C 925.26 324.95 920.7 324.95 916.3 326.22 C 916.02 326.13 915.8 325.86 915.71 325.5 C 915.62 325.14 915.67 324.75 915.85 324.46 C 920.54 323 925.42 323 930.12 324.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-137">
            <path
              d="M 891.46 368.86 L 892.8 381.53 C 893.06 383.39 892.36 385.25 891.02 386.27 C 886.44 387.12 881.78 387.12 877.2 386.27 C 875.86 385.25 875.16 383.39 875.41 381.53 L 876.75 368.86 C 877.01 367.46 878.28 366.38 879.87 366.22 L 888.34 366.22 C 889.93 366.38 891.21 367.46 891.46 368.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,884.11,375.82)"
              pointer-events="none"
            />
            <path
              d="M 891.12 365.97 C 891.49 366.13 891.69 366.65 891.56 367.14 C 891.44 367.63 891.04 367.9 890.67 367.73 C 886.26 366.46 881.7 366.46 877.3 367.73 C 877.02 367.64 876.8 367.37 876.71 367.01 C 876.62 366.65 876.67 366.26 876.85 365.97 C 881.54 364.51 886.42 364.51 891.12 365.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,884.11,375.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-138">
            <path
              d="M 852.47 368.86 L 853.81 381.53 C 854.06 383.39 853.36 385.25 852.02 386.27 C 847.44 387.12 842.78 387.12 838.2 386.27 C 836.86 385.25 836.16 383.39 836.42 381.53 L 837.76 368.86 C 838.01 367.46 839.29 366.38 840.88 366.22 L 849.35 366.22 C 850.94 366.38 852.21 367.46 852.47 368.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,845.11,375.82)"
              pointer-events="none"
            />
            <path
              d="M 852.12 365.97 C 852.49 366.13 852.69 366.65 852.57 367.14 C 852.44 367.63 852.04 367.9 851.67 367.73 C 847.27 366.46 842.71 366.46 838.3 367.73 C 838.02 367.64 837.8 367.37 837.71 367.01 C 837.62 366.65 837.67 366.26 837.85 365.97 C 842.55 364.51 847.43 364.51 852.12 365.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,845.11,375.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-139">
            <path
              d="M 930.46 368.86 L 931.8 381.53 C 932.06 383.39 931.36 385.25 930.02 386.27 C 925.44 387.12 920.78 387.12 916.2 386.27 C 914.86 385.25 914.16 383.39 914.41 381.53 L 915.75 368.86 C 916.01 367.46 917.28 366.38 918.87 366.22 L 927.34 366.22 C 928.93 366.38 930.21 367.46 930.46 368.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,923.11,375.82)"
              pointer-events="none"
            />
            <path
              d="M 930.12 365.97 C 930.49 366.13 930.69 366.65 930.56 367.14 C 930.44 367.63 930.04 367.9 929.67 367.73 C 925.26 366.46 920.7 366.46 916.3 367.73 C 916.02 367.64 915.8 367.37 915.71 367.01 C 915.62 366.65 915.67 366.26 915.85 365.97 C 920.54 364.51 925.42 364.51 930.12 365.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,923.11,375.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-140">
            <rect
              x="861.85"
              y="300.3"
              width="45"
              height="111"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(90,884.35,355.8)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-141">
            <path
              d="M 836.88 355.31 L 931.75 355.31"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-150">
            <path
              d="M 755.46 465.35 L 756.8 478.02 C 757.06 479.88 756.36 481.74 755.02 482.76 C 750.44 483.61 745.78 483.61 741.2 482.76 C 739.86 481.74 739.16 479.88 739.41 478.02 L 740.75 465.35 C 741.01 463.95 742.28 462.87 743.87 462.71 L 752.34 462.71 C 753.93 462.87 755.21 463.95 755.46 465.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 755.12 462.46 C 755.49 462.62 755.69 463.14 755.56 463.63 C 755.44 464.12 755.04 464.39 754.67 464.22 C 750.26 462.95 745.7 462.95 741.3 464.22 C 741.02 464.13 740.8 463.86 740.71 463.5 C 740.62 463.14 740.67 462.75 740.85 462.46 C 745.54 461 750.42 461 755.12 462.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-151">
            <path
              d="M 716.47 465.35 L 717.81 478.02 C 718.06 479.88 717.36 481.74 716.02 482.76 C 711.44 483.61 706.78 483.61 702.2 482.76 C 700.86 481.74 700.16 479.88 700.42 478.02 L 701.76 465.35 C 702.01 463.95 703.29 462.87 704.88 462.71 L 713.35 462.71 C 714.94 462.87 716.21 463.95 716.47 465.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 716.12 462.46 C 716.49 462.62 716.69 463.14 716.57 463.63 C 716.44 464.12 716.04 464.39 715.67 464.22 C 711.27 462.95 706.71 462.95 702.3 464.22 C 702.02 464.13 701.8 463.86 701.71 463.5 C 701.62 463.14 701.67 462.75 701.85 462.46 C 706.55 461 711.43 461 716.12 462.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-152">
            <path
              d="M 794.46 465.35 L 795.8 478.02 C 796.06 479.88 795.36 481.74 794.02 482.76 C 789.44 483.61 784.78 483.61 780.2 482.76 C 778.86 481.74 778.16 479.88 778.41 478.02 L 779.75 465.35 C 780.01 463.95 781.28 462.87 782.87 462.71 L 791.34 462.71 C 792.93 462.87 794.21 463.95 794.46 465.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 794.12 462.46 C 794.49 462.62 794.69 463.14 794.56 463.63 C 794.44 464.12 794.04 464.39 793.67 464.22 C 789.26 462.95 784.7 462.95 780.3 464.22 C 780.02 464.13 779.8 463.86 779.71 463.5 C 779.62 463.14 779.67 462.75 779.85 462.46 C 784.54 461 789.42 461 794.12 462.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-153">
            <path
              d="M 755.46 506.86 L 756.8 519.53 C 757.06 521.39 756.36 523.25 755.02 524.27 C 750.44 525.12 745.78 525.12 741.2 524.27 C 739.86 523.25 739.16 521.39 739.41 519.53 L 740.75 506.86 C 741.01 505.46 742.28 504.38 743.87 504.22 L 752.34 504.22 C 753.93 504.38 755.21 505.46 755.46 506.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,748.11,513.82)"
              pointer-events="none"
            />
            <path
              d="M 755.12 503.97 C 755.49 504.13 755.69 504.65 755.56 505.14 C 755.44 505.63 755.04 505.9 754.67 505.73 C 750.26 504.46 745.7 504.46 741.3 505.73 C 741.02 505.64 740.8 505.37 740.71 505.01 C 740.62 504.65 740.67 504.26 740.85 503.97 C 745.54 502.51 750.42 502.51 755.12 503.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,748.11,513.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-154">
            <path
              d="M 716.47 506.86 L 717.81 519.53 C 718.06 521.39 717.36 523.25 716.02 524.27 C 711.44 525.12 706.78 525.12 702.2 524.27 C 700.86 523.25 700.16 521.39 700.42 519.53 L 701.76 506.86 C 702.01 505.46 703.29 504.38 704.88 504.22 L 713.35 504.22 C 714.94 504.38 716.21 505.46 716.47 506.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,709.11,513.82)"
              pointer-events="none"
            />
            <path
              d="M 716.12 503.97 C 716.49 504.13 716.69 504.65 716.57 505.14 C 716.44 505.63 716.04 505.9 715.67 505.73 C 711.27 504.46 706.71 504.46 702.3 505.73 C 702.02 505.64 701.8 505.37 701.71 505.01 C 701.62 504.65 701.67 504.26 701.85 503.97 C 706.55 502.51 711.43 502.51 716.12 503.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,709.11,513.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-155">
            <path
              d="M 794.46 506.86 L 795.8 519.53 C 796.06 521.39 795.36 523.25 794.02 524.27 C 789.44 525.12 784.78 525.12 780.2 524.27 C 778.86 523.25 778.16 521.39 778.41 519.53 L 779.75 506.86 C 780.01 505.46 781.28 504.38 782.87 504.22 L 791.34 504.22 C 792.93 504.38 794.21 505.46 794.46 506.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,787.11,513.82)"
              pointer-events="none"
            />
            <path
              d="M 794.12 503.97 C 794.49 504.13 794.69 504.65 794.56 505.14 C 794.44 505.63 794.04 505.9 793.67 505.73 C 789.26 504.46 784.7 504.46 780.3 505.73 C 780.02 505.64 779.8 505.37 779.71 505.01 C 779.62 504.65 779.67 504.26 779.85 503.97 C 784.54 502.51 789.42 502.51 794.12 503.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,787.11,513.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-156">
            <rect
              x="725.85"
              y="438.3"
              width="45"
              height="111"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(90,748.35,493.8)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-157">
            <path
              d="M 700.88 493.31 L 795.75 493.31"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-158">
            <path
              d="M 755.46 327.35 L 756.8 340.02 C 757.06 341.88 756.36 343.74 755.02 344.76 C 750.44 345.61 745.78 345.61 741.2 344.76 C 739.86 343.74 739.16 341.88 739.41 340.02 L 740.75 327.35 C 741.01 325.95 742.28 324.87 743.87 324.71 L 752.34 324.71 C 753.93 324.87 755.21 325.95 755.46 327.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 755.12 324.46 C 755.49 324.62 755.69 325.14 755.56 325.63 C 755.44 326.12 755.04 326.39 754.67 326.22 C 750.26 324.95 745.7 324.95 741.3 326.22 C 741.02 326.13 740.8 325.86 740.71 325.5 C 740.62 325.14 740.67 324.75 740.85 324.46 C 745.54 323 750.42 323 755.12 324.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-159">
            <path
              d="M 716.47 327.35 L 717.81 340.02 C 718.06 341.88 717.36 343.74 716.02 344.76 C 711.44 345.61 706.78 345.61 702.2 344.76 C 700.86 343.74 700.16 341.88 700.42 340.02 L 701.76 327.35 C 702.01 325.95 703.29 324.87 704.88 324.71 L 713.35 324.71 C 714.94 324.87 716.21 325.95 716.47 327.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 716.12 324.46 C 716.49 324.62 716.69 325.14 716.57 325.63 C 716.44 326.12 716.04 326.39 715.67 326.22 C 711.27 324.95 706.71 324.95 702.3 326.22 C 702.02 326.13 701.8 325.86 701.71 325.5 C 701.62 325.14 701.67 324.75 701.85 324.46 C 706.55 323 711.43 323 716.12 324.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-160">
            <path
              d="M 794.46 327.35 L 795.8 340.02 C 796.06 341.88 795.36 343.74 794.02 344.76 C 789.44 345.61 784.78 345.61 780.2 344.76 C 778.86 343.74 778.16 341.88 778.41 340.02 L 779.75 327.35 C 780.01 325.95 781.28 324.87 782.87 324.71 L 791.34 324.71 C 792.93 324.87 794.21 325.95 794.46 327.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 794.12 324.46 C 794.49 324.62 794.69 325.14 794.56 325.63 C 794.44 326.12 794.04 326.39 793.67 326.22 C 789.26 324.95 784.7 324.95 780.3 326.22 C 780.02 326.13 779.8 325.86 779.71 325.5 C 779.62 325.14 779.67 324.75 779.85 324.46 C 784.54 323 789.42 323 794.12 324.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-161">
            <path
              d="M 755.46 368.86 L 756.8 381.53 C 757.06 383.39 756.36 385.25 755.02 386.27 C 750.44 387.12 745.78 387.12 741.2 386.27 C 739.86 385.25 739.16 383.39 739.41 381.53 L 740.75 368.86 C 741.01 367.46 742.28 366.38 743.87 366.22 L 752.34 366.22 C 753.93 366.38 755.21 367.46 755.46 368.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,748.11,375.82)"
              pointer-events="none"
            />
            <path
              d="M 755.12 365.97 C 755.49 366.13 755.69 366.65 755.56 367.14 C 755.44 367.63 755.04 367.9 754.67 367.73 C 750.26 366.46 745.7 366.46 741.3 367.73 C 741.02 367.64 740.8 367.37 740.71 367.01 C 740.62 366.65 740.67 366.26 740.85 365.97 C 745.54 364.51 750.42 364.51 755.12 365.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,748.11,375.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-162">
            <path
              d="M 716.47 368.86 L 717.81 381.53 C 718.06 383.39 717.36 385.25 716.02 386.27 C 711.44 387.12 706.78 387.12 702.2 386.27 C 700.86 385.25 700.16 383.39 700.42 381.53 L 701.76 368.86 C 702.01 367.46 703.29 366.38 704.88 366.22 L 713.35 366.22 C 714.94 366.38 716.21 367.46 716.47 368.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,709.11,375.82)"
              pointer-events="none"
            />
            <path
              d="M 716.12 365.97 C 716.49 366.13 716.69 366.65 716.57 367.14 C 716.44 367.63 716.04 367.9 715.67 367.73 C 711.27 366.46 706.71 366.46 702.3 367.73 C 702.02 367.64 701.8 367.37 701.71 367.01 C 701.62 366.65 701.67 366.26 701.85 365.97 C 706.55 364.51 711.43 364.51 716.12 365.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,709.11,375.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-163">
            <path
              d="M 794.46 368.86 L 795.8 381.53 C 796.06 383.39 795.36 385.25 794.02 386.27 C 789.44 387.12 784.78 387.12 780.2 386.27 C 778.86 385.25 778.16 383.39 778.41 381.53 L 779.75 368.86 C 780.01 367.46 781.28 366.38 782.87 366.22 L 791.34 366.22 C 792.93 366.38 794.21 367.46 794.46 368.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,787.11,375.82)"
              pointer-events="none"
            />
            <path
              d="M 794.12 365.97 C 794.49 366.13 794.69 366.65 794.56 367.14 C 794.44 367.63 794.04 367.9 793.67 367.73 C 789.26 366.46 784.7 366.46 780.3 367.73 C 780.02 367.64 779.8 367.37 779.71 367.01 C 779.62 366.65 779.67 366.26 779.85 365.97 C 784.54 364.51 789.42 364.51 794.12 365.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,787.11,375.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-164">
            <rect
              x="725.85"
              y="300.3"
              width="44.74"
              height="110.44"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(90,748.22,355.52)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-165">
            <path
              d="M 700.88 355.31 L 795.75 355.31"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-185">
            <rect
              x="507.9"
              y="485.74"
              width="116"
              height="10"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(-90,565.9,490.74)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-186">
            <rect
              x="507.9"
              y="328.51"
              width="116"
              height="10"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(-90,565.9,333.51)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-188">
            <path
              d="M 656.3 483.35 L 657.64 496.02 C 657.89 497.88 657.19 499.74 655.85 500.76 C 651.28 501.61 646.61 501.61 642.03 500.76 C 640.7 499.74 640 497.88 640.25 496.02 L 641.59 483.35 C 641.84 481.95 643.12 480.87 644.71 480.71 L 653.18 480.71 C 654.77 480.87 656.04 481.95 656.3 483.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,648.94,490.31)"
              pointer-events="none"
            />
            <path
              d="M 655.95 480.46 C 656.32 480.62 656.52 481.14 656.4 481.63 C 656.28 482.12 655.88 482.39 655.51 482.22 C 651.1 480.95 646.54 480.95 642.13 482.22 C 641.85 482.13 641.63 481.86 641.54 481.5 C 641.45 481.14 641.51 480.75 641.69 480.46 C 646.38 479 651.26 479 655.95 480.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,648.94,490.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-189">
            <path
              d="M 656.3 444.35 L 657.64 457.02 C 657.89 458.88 657.19 460.74 655.85 461.76 C 651.28 462.61 646.61 462.61 642.03 461.76 C 640.7 460.74 640 458.88 640.25 457.02 L 641.59 444.35 C 641.84 442.95 643.12 441.87 644.71 441.71 L 653.18 441.71 C 654.77 441.87 656.04 442.95 656.3 444.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,648.94,451.31)"
              pointer-events="none"
            />
            <path
              d="M 655.95 441.46 C 656.32 441.62 656.52 442.14 656.4 442.63 C 656.28 443.12 655.88 443.39 655.51 443.22 C 651.1 441.95 646.54 441.95 642.13 443.22 C 641.85 443.13 641.63 442.86 641.54 442.5 C 641.45 442.14 641.51 441.75 641.69 441.46 C 646.38 440 651.26 440 655.95 441.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,648.94,451.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-190">
            <path
              d="M 656.3 522.35 L 657.64 535.02 C 657.89 536.88 657.19 538.74 655.85 539.76 C 651.28 540.61 646.61 540.61 642.03 539.76 C 640.7 538.74 640 536.88 640.25 535.02 L 641.59 522.35 C 641.84 520.95 643.12 519.87 644.71 519.71 L 653.18 519.71 C 654.77 519.87 656.04 520.95 656.3 522.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,648.94,529.31)"
              pointer-events="none"
            />
            <path
              d="M 655.95 519.46 C 656.32 519.62 656.52 520.14 656.4 520.63 C 656.28 521.12 655.88 521.39 655.51 521.22 C 651.1 519.95 646.54 519.95 642.13 521.22 C 641.85 521.13 641.63 520.86 641.54 520.5 C 641.45 520.14 641.51 519.75 641.69 519.46 C 646.38 518 651.26 518 655.95 519.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,648.94,529.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-191">
            <path
              d="M 613.3 483.35 L 614.64 496.02 C 614.89 497.88 614.19 499.74 612.85 500.76 C 608.28 501.61 603.61 501.61 599.03 500.76 C 597.7 499.74 597 497.88 597.25 496.02 L 598.59 483.35 C 598.84 481.95 600.12 480.87 601.71 480.71 L 610.18 480.71 C 611.77 480.87 613.04 481.95 613.3 483.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,605.94,490.31)"
              pointer-events="none"
            />
            <path
              d="M 612.95 480.46 C 613.32 480.62 613.52 481.14 613.4 481.63 C 613.28 482.12 612.88 482.39 612.51 482.22 C 608.1 480.95 603.54 480.95 599.13 482.22 C 598.85 482.13 598.63 481.86 598.54 481.5 C 598.45 481.14 598.51 480.75 598.69 480.46 C 603.38 479 608.26 479 612.95 480.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,605.94,490.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-192">
            <path
              d="M 613.3 444.35 L 614.64 457.02 C 614.89 458.88 614.19 460.74 612.85 461.76 C 608.28 462.61 603.61 462.61 599.03 461.76 C 597.7 460.74 597 458.88 597.25 457.02 L 598.59 444.35 C 598.84 442.95 600.12 441.87 601.71 441.71 L 610.18 441.71 C 611.77 441.87 613.04 442.95 613.3 444.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,605.94,451.31)"
              pointer-events="none"
            />
            <path
              d="M 612.95 441.46 C 613.32 441.62 613.52 442.14 613.4 442.63 C 613.28 443.12 612.88 443.39 612.51 443.22 C 608.1 441.95 603.54 441.95 599.13 443.22 C 598.85 443.13 598.63 442.86 598.54 442.5 C 598.45 442.14 598.51 441.75 598.69 441.46 C 603.38 440 608.26 440 612.95 441.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,605.94,451.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-193">
            <path
              d="M 613.3 522.35 L 614.64 535.02 C 614.89 536.88 614.19 538.74 612.85 539.76 C 608.28 540.61 603.61 540.61 599.03 539.76 C 597.7 538.74 597 536.88 597.25 535.02 L 598.59 522.35 C 598.84 520.95 600.12 519.87 601.71 519.71 L 610.18 519.71 C 611.77 519.87 613.04 520.95 613.3 522.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,605.94,529.31)"
              pointer-events="none"
            />
            <path
              d="M 612.95 519.46 C 613.32 519.62 613.52 520.14 613.4 520.63 C 613.28 521.12 612.88 521.39 612.51 521.22 C 608.1 519.95 603.54 519.95 599.13 521.22 C 598.85 521.13 598.63 520.86 598.54 520.5 C 598.45 520.14 598.51 519.75 598.69 519.46 C 603.38 518 608.26 518 612.95 519.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,605.94,529.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-194">
            <path
              d="M 628 443 L 628 538"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-195">
            <rect
              x="605"
              y="435"
              width="45"
              height="111"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(180,627.5,490.5)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-203">
            <path
              d="M 627.5 440.61 L 627.5 540.61"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-196">
            <path
              d="M 562.51 221 L 743 221.06"
              fill="none"
              stroke="#000000"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-198">
            <rect
              x="738.75"
              y="239.25"
              width="23.94"
              height="5"
              fill="rgb(255, 255, 255)"
              stroke="#999999"
              transform="translate(0,251.97)scale(1,-1)translate(0,-251.97)rotate(-90,750.72,251.97)"
              pointer-events="none"
            />
            <path
              d="M 738.75 244.25 C 738.75 257.47 749.47 268.19 762.69 268.19 L 762.69 244.25"
              fill="none"
              stroke="#999999"
              stroke-miterlimit="10"
              transform="translate(0,251.97)scale(1,-1)translate(0,-251.97)rotate(-90,750.72,251.97)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-199">
            <path
              d="M 651.98 222.37 L 652.03 109.67"
              fill="none"
              stroke="#000000"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-200">
            <rect
              x="660.75"
              y="200.25"
              width="23.94"
              height="5"
              fill="rgb(255, 255, 255)"
              stroke="#999999"
              transform="rotate(180,672.72,212.97)"
              pointer-events="none"
            />
            <path
              d="M 660.75 205.25 C 660.75 218.47 671.47 229.19 684.69 229.19 L 684.69 205.25"
              fill="none"
              stroke="#999999"
              stroke-miterlimit="10"
              transform="rotate(180,672.72,212.97)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-201">
            <rect
              x="570.75"
              y="200.25"
              width="23.94"
              height="5"
              fill="rgb(255, 255, 255)"
              stroke="#999999"
              transform="rotate(180,582.72,212.97)"
              pointer-events="none"
            />
            <path
              d="M 570.75 205.25 C 570.75 218.47 581.47 229.19 594.69 229.19 L 594.69 205.25"
              fill="none"
              stroke="#999999"
              stroke-miterlimit="10"
              transform="rotate(180,582.72,212.97)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-207">
            <path
              d="M 673 121 L 741.26 121 L 741.26 151 L 691.2 151 L 691.2 181 L 673 181 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-miterlimit="10"
              transform="rotate(180,707.13,151)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-210">
            <path
              d="M 617.12 144.17 L 618.46 156.84 C 618.72 158.7 618.02 160.56 616.68 161.58 C 612.1 162.43 607.44 162.43 602.86 161.58 C 601.52 160.56 600.82 158.7 601.07 156.84 L 602.41 144.17 C 602.67 142.77 603.94 141.69 605.53 141.53 L 614 141.53 C 615.59 141.69 616.87 142.77 617.12 144.17 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 616.78 141.28 C 617.15 141.44 617.35 141.96 617.22 142.45 C 617.1 142.94 616.7 143.21 616.33 143.04 C 611.92 141.77 607.36 141.77 602.96 143.04 C 602.68 142.95 602.46 142.68 602.37 142.32 C 602.28 141.96 602.33 141.57 602.51 141.28 C 607.2 139.82 612.08 139.82 616.78 141.28"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-211">
            <path
              d="M 583 121 L 651.26 121 L 651.26 151 L 601.2 151 L 601.2 181 L 583 181 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-miterlimit="10"
              transform="rotate(180,617.13,151)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-228">
            <path
              d="M 506.47 475.35 L 507.8 488.02 C 508.06 489.88 507.36 491.74 506.02 492.76 C 501.44 493.61 496.78 493.61 492.2 492.76 C 490.86 491.74 490.16 489.88 490.42 488.02 L 491.76 475.35 C 492.01 473.95 493.29 472.87 494.88 472.71 L 503.35 472.71 C 504.94 472.87 506.21 473.95 506.47 475.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 506.12 472.46 C 506.49 472.62 506.69 473.15 506.57 473.63 C 506.44 474.12 506.04 474.39 505.67 474.22 C 501.27 472.95 496.7 472.95 492.3 474.22 C 492.02 474.13 491.8 473.86 491.71 473.5 C 491.62 473.14 491.67 472.75 491.85 472.46 C 496.54 471 501.43 471 506.12 472.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-229">
            <path
              d="M 467.47 475.35 L 468.81 488.02 C 469.06 489.88 468.36 491.74 467.03 492.76 C 462.45 493.61 457.78 493.61 453.21 492.76 C 451.87 491.74 451.17 489.88 451.42 488.02 L 452.76 475.35 C 453.02 473.95 454.29 472.87 455.88 472.71 L 464.35 472.71 C 465.94 472.87 467.22 473.95 467.47 475.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 467.12 472.46 C 467.49 472.62 467.69 473.15 467.57 473.63 C 467.45 474.12 467.05 474.39 466.68 474.22 C 462.27 472.95 457.71 472.95 453.3 474.22 C 453.03 474.13 452.8 473.86 452.71 473.5 C 452.62 473.14 452.68 472.75 452.86 472.46 C 457.55 471 462.43 471 467.12 472.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-230">
            <path
              d="M 545.47 475.35 L 546.8 488.02 C 547.06 489.88 546.36 491.74 545.02 492.76 C 540.44 493.61 535.78 493.61 531.2 492.76 C 529.86 491.74 529.16 489.88 529.42 488.02 L 530.76 475.35 C 531.01 473.95 532.29 472.87 533.88 472.71 L 542.35 472.71 C 543.94 472.87 545.21 473.95 545.47 475.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 545.12 472.46 C 545.49 472.62 545.69 473.15 545.57 473.63 C 545.44 474.12 545.04 474.39 544.67 474.22 C 540.27 472.95 535.71 472.95 531.3 474.22 C 531.02 474.13 530.8 473.86 530.71 473.5 C 530.62 473.14 530.67 472.75 530.85 472.46 C 535.55 471 540.43 471 545.12 472.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-231">
            <path
              d="M 506.47 516.86 L 507.8 529.53 C 508.06 531.39 507.36 533.25 506.02 534.27 C 501.44 535.12 496.78 535.12 492.2 534.27 C 490.86 533.25 490.16 531.39 490.42 529.53 L 491.76 516.86 C 492.01 515.46 493.29 514.38 494.88 514.22 L 503.35 514.22 C 504.94 514.38 506.21 515.46 506.47 516.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,499.11,523.82)"
              pointer-events="none"
            />
            <path
              d="M 506.12 513.97 C 506.49 514.13 506.69 514.66 506.57 515.14 C 506.44 515.63 506.04 515.9 505.67 515.73 C 501.27 514.46 496.7 514.46 492.3 515.73 C 492.02 515.64 491.8 515.37 491.71 515.01 C 491.62 514.65 491.67 514.26 491.85 513.97 C 496.54 512.51 501.43 512.51 506.12 513.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,499.11,523.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-232">
            <path
              d="M 467.47 516.86 L 468.81 529.53 C 469.06 531.39 468.36 533.25 467.03 534.27 C 462.45 535.12 457.78 535.12 453.21 534.27 C 451.87 533.25 451.17 531.39 451.42 529.53 L 452.76 516.86 C 453.02 515.46 454.29 514.38 455.88 514.22 L 464.35 514.22 C 465.94 514.38 467.22 515.46 467.47 516.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,460.12,523.82)"
              pointer-events="none"
            />
            <path
              d="M 467.12 513.97 C 467.49 514.13 467.69 514.66 467.57 515.14 C 467.45 515.63 467.05 515.9 466.68 515.73 C 462.27 514.46 457.71 514.46 453.3 515.73 C 453.03 515.64 452.8 515.37 452.71 515.01 C 452.62 514.65 452.68 514.26 452.86 513.97 C 457.55 512.51 462.43 512.51 467.12 513.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,460.12,523.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-233">
            <path
              d="M 545.47 516.86 L 546.8 529.53 C 547.06 531.39 546.36 533.25 545.02 534.27 C 540.44 535.12 535.78 535.12 531.2 534.27 C 529.86 533.25 529.16 531.39 529.42 529.53 L 530.76 516.86 C 531.01 515.46 532.29 514.38 533.88 514.22 L 542.35 514.22 C 543.94 514.38 545.21 515.46 545.47 516.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,538.11,523.82)"
              pointer-events="none"
            />
            <path
              d="M 545.12 513.97 C 545.49 514.13 545.69 514.66 545.57 515.14 C 545.44 515.63 545.04 515.9 544.67 515.73 C 540.27 514.46 535.71 514.46 531.3 515.73 C 531.02 515.64 530.8 515.37 530.71 515.01 C 530.62 514.65 530.67 514.26 530.85 513.97 C 535.55 512.51 540.43 512.51 545.12 513.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,538.11,523.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-234">
            <rect
              x="476.85"
              y="448.3"
              width="45"
              height="111"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(90,499.35,503.8)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-235">
            <path
              d="M 451.89 503.5 L 546.75 503.5"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-236">
            <path
              d="M 360.47 475.35 L 361.8 488.02 C 362.06 489.88 361.36 491.74 360.02 492.76 C 355.44 493.61 350.78 493.61 346.2 492.76 C 344.86 491.74 344.16 489.88 344.42 488.02 L 345.76 475.35 C 346.01 473.95 347.29 472.87 348.88 472.71 L 357.35 472.71 C 358.94 472.87 360.21 473.95 360.47 475.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 360.12 472.46 C 360.49 472.62 360.69 473.15 360.57 473.63 C 360.44 474.12 360.04 474.39 359.67 474.22 C 355.27 472.95 350.7 472.95 346.3 474.22 C 346.02 474.13 345.8 473.86 345.71 473.5 C 345.62 473.14 345.67 472.75 345.85 472.46 C 350.54 471 355.43 471 360.12 472.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-237">
            <path
              d="M 321.47 475.35 L 322.81 488.02 C 323.06 489.88 322.36 491.74 321.03 492.76 C 316.45 493.61 311.78 493.61 307.21 492.76 C 305.87 491.74 305.17 489.88 305.42 488.02 L 306.76 475.35 C 307.02 473.95 308.29 472.87 309.88 472.71 L 318.35 472.71 C 319.94 472.87 321.22 473.95 321.47 475.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 321.12 472.46 C 321.49 472.62 321.69 473.15 321.57 473.63 C 321.45 474.12 321.05 474.39 320.68 474.22 C 316.27 472.95 311.71 472.95 307.3 474.22 C 307.03 474.13 306.8 473.86 306.71 473.5 C 306.62 473.14 306.68 472.75 306.86 472.46 C 311.55 471 316.43 471 321.12 472.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-238">
            <path
              d="M 399.47 475.35 L 400.8 488.02 C 401.06 489.88 400.36 491.74 399.02 492.76 C 394.44 493.61 389.78 493.61 385.2 492.76 C 383.86 491.74 383.16 489.88 383.42 488.02 L 384.76 475.35 C 385.01 473.95 386.29 472.87 387.88 472.71 L 396.35 472.71 C 397.94 472.87 399.21 473.95 399.47 475.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 399.12 472.46 C 399.49 472.62 399.69 473.15 399.57 473.63 C 399.44 474.12 399.04 474.39 398.67 474.22 C 394.27 472.95 389.71 472.95 385.3 474.22 C 385.02 474.13 384.8 473.86 384.71 473.5 C 384.62 473.14 384.67 472.75 384.85 472.46 C 389.55 471 394.43 471 399.12 472.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-239">
            <path
              d="M 360.47 516.86 L 361.8 529.53 C 362.06 531.39 361.36 533.25 360.02 534.27 C 355.44 535.12 350.78 535.12 346.2 534.27 C 344.86 533.25 344.16 531.39 344.42 529.53 L 345.76 516.86 C 346.01 515.46 347.29 514.38 348.88 514.22 L 357.35 514.22 C 358.94 514.38 360.21 515.46 360.47 516.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,353.11,523.82)"
              pointer-events="none"
            />
            <path
              d="M 360.12 513.97 C 360.49 514.13 360.69 514.66 360.57 515.14 C 360.44 515.63 360.04 515.9 359.67 515.73 C 355.27 514.46 350.7 514.46 346.3 515.73 C 346.02 515.64 345.8 515.37 345.71 515.01 C 345.62 514.65 345.67 514.26 345.85 513.97 C 350.54 512.51 355.43 512.51 360.12 513.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,353.11,523.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-240">
            <path
              d="M 321.47 516.86 L 322.81 529.53 C 323.06 531.39 322.36 533.25 321.03 534.27 C 316.45 535.12 311.78 535.12 307.21 534.27 C 305.87 533.25 305.17 531.39 305.42 529.53 L 306.76 516.86 C 307.02 515.46 308.29 514.38 309.88 514.22 L 318.35 514.22 C 319.94 514.38 321.22 515.46 321.47 516.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,314.12,523.82)"
              pointer-events="none"
            />
            <path
              d="M 321.12 513.97 C 321.49 514.13 321.69 514.66 321.57 515.14 C 321.45 515.63 321.05 515.9 320.68 515.73 C 316.27 514.46 311.71 514.46 307.3 515.73 C 307.03 515.64 306.8 515.37 306.71 515.01 C 306.62 514.65 306.68 514.26 306.86 513.97 C 311.55 512.51 316.43 512.51 321.12 513.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,314.12,523.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-241">
            <path
              d="M 399.47 516.86 L 400.8 529.53 C 401.06 531.39 400.36 533.25 399.02 534.27 C 394.44 535.12 389.78 535.12 385.2 534.27 C 383.86 533.25 383.16 531.39 383.42 529.53 L 384.76 516.86 C 385.01 515.46 386.29 514.38 387.88 514.22 L 396.35 514.22 C 397.94 514.38 399.21 515.46 399.47 516.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,392.11,523.82)"
              pointer-events="none"
            />
            <path
              d="M 399.12 513.97 C 399.49 514.13 399.69 514.66 399.57 515.14 C 399.44 515.63 399.04 515.9 398.67 515.73 C 394.27 514.46 389.71 514.46 385.3 515.73 C 385.02 515.64 384.8 515.37 384.71 515.01 C 384.62 514.65 384.67 514.26 384.85 513.97 C 389.55 512.51 394.43 512.51 399.12 513.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,392.11,523.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-242">
            <rect
              x="330.85"
              y="448.3"
              width="45"
              height="111"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(90,353.35,503.8)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-243">
            <path
              d="M 305.89 503.31 L 400.75 503.31"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-244">
            <path
              d="M 275.3 526.35 L 276.64 539.02 C 276.9 540.88 276.2 542.74 274.86 543.76 C 270.28 544.61 265.62 544.61 261.04 543.76 C 259.7 542.74 259 540.88 259.25 539.02 L 260.59 526.35 C 260.85 524.95 262.12 523.87 263.71 523.71 L 272.18 523.71 C 273.77 523.87 275.05 524.95 275.3 526.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,267.95,533.31)"
              pointer-events="none"
            />
            <path
              d="M 274.96 523.46 C 275.33 523.62 275.53 524.15 275.4 524.63 C 275.28 525.12 274.88 525.39 274.51 525.22 C 270.1 523.95 265.54 523.95 261.14 525.22 C 260.86 525.13 260.64 524.86 260.55 524.5 C 260.46 524.14 260.51 523.75 260.69 523.46 C 265.38 522 270.26 522 274.96 523.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,267.95,533.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-245">
            <path
              d="M 275.3 489.35 L 276.64 502.02 C 276.9 503.88 276.2 505.74 274.86 506.76 C 270.28 507.61 265.62 507.61 261.04 506.76 C 259.7 505.74 259 503.88 259.25 502.02 L 260.59 489.35 C 260.85 487.95 262.12 486.87 263.71 486.71 L 272.18 486.71 C 273.77 486.87 275.05 487.95 275.3 489.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,267.95,496.31)"
              pointer-events="none"
            />
            <path
              d="M 274.96 486.46 C 275.33 486.62 275.53 487.15 275.4 487.63 C 275.28 488.12 274.88 488.39 274.51 488.22 C 270.1 486.95 265.54 486.95 261.14 488.22 C 260.86 488.13 260.64 487.86 260.55 487.5 C 260.46 487.14 260.51 486.75 260.69 486.46 C 265.38 485 270.26 485 274.96 486.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,267.95,496.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-246">
            <path
              d="M 238.3 526.35 L 239.64 539.02 C 239.9 540.88 239.2 542.74 237.86 543.76 C 233.28 544.61 228.62 544.61 224.04 543.76 C 222.7 542.74 222 540.88 222.25 539.02 L 223.59 526.35 C 223.85 524.95 225.12 523.87 226.71 523.71 L 235.18 523.71 C 236.77 523.87 238.05 524.95 238.3 526.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(-90,230.95,533.31)"
              pointer-events="none"
            />
            <path
              d="M 237.96 523.46 C 238.33 523.62 238.53 524.15 238.4 524.63 C 238.28 525.12 237.88 525.39 237.51 525.22 C 233.1 523.95 228.54 523.95 224.14 525.22 C 223.86 525.13 223.64 524.86 223.55 524.5 C 223.46 524.14 223.51 523.75 223.69 523.46 C 228.38 522 233.26 522 237.96 523.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(-90,230.95,533.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-247">
            <path
              d="M 238.3 489.35 L 239.64 502.02 C 239.9 503.88 239.2 505.74 237.86 506.76 C 233.28 507.61 228.62 507.61 224.04 506.76 C 222.7 505.74 222 503.88 222.25 502.02 L 223.59 489.35 C 223.85 487.95 225.12 486.87 226.71 486.71 L 235.18 486.71 C 236.77 486.87 238.05 487.95 238.3 489.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(-90,230.95,496.31)"
              pointer-events="none"
            />
            <path
              d="M 237.96 486.46 C 238.33 486.62 238.53 487.15 238.4 487.63 C 238.28 488.12 237.88 488.39 237.51 488.22 C 233.1 486.95 228.54 486.95 224.14 488.22 C 223.86 488.13 223.64 487.86 223.55 487.5 C 223.46 487.14 223.51 486.75 223.69 486.46 C 228.38 485 233.26 485 237.96 486.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(-90,230.95,496.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-248">
            <rect
              x="228"
              y="474"
              width="44"
              height="74"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-250">
            <rect
              x="166.96"
              y="506.06"
              width="75.36"
              height="10"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(-90,204.64,511.06)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-251">
            <path
              d="M 408 431 L 408 281"
              fill="none"
              stroke="#000000"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-252">
            <path
              d="M 476.47 351.35 L 477.8 364.02 C 478.06 365.88 477.36 367.74 476.02 368.76 C 471.44 369.61 466.78 369.61 462.2 368.76 C 460.86 367.74 460.16 365.88 460.42 364.02 L 461.76 351.35 C 462.01 349.95 463.29 348.87 464.88 348.71 L 473.35 348.71 C 474.94 348.87 476.21 349.95 476.47 351.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 476.12 348.46 C 476.49 348.62 476.69 349.15 476.57 349.63 C 476.44 350.12 476.04 350.39 475.67 350.22 C 471.27 348.95 466.7 348.95 462.3 350.22 C 462.02 350.13 461.8 349.86 461.71 349.5 C 461.62 349.14 461.67 348.75 461.85 348.46 C 466.54 347 471.43 347 476.12 348.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-253">
            <path
              d="M 437.47 351.35 L 438.81 364.02 C 439.06 365.88 438.36 367.74 437.03 368.76 C 432.45 369.61 427.78 369.61 423.21 368.76 C 421.87 367.74 421.17 365.88 421.42 364.02 L 422.76 351.35 C 423.02 349.95 424.29 348.87 425.88 348.71 L 434.35 348.71 C 435.94 348.87 437.22 349.95 437.47 351.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 437.12 348.46 C 437.49 348.62 437.69 349.15 437.57 349.63 C 437.45 350.12 437.05 350.39 436.68 350.22 C 432.27 348.95 427.71 348.95 423.3 350.22 C 423.03 350.13 422.8 349.86 422.71 349.5 C 422.62 349.14 422.68 348.75 422.86 348.46 C 427.55 347 432.43 347 437.12 348.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-254">
            <path
              d="M 515.47 351.35 L 516.8 364.02 C 517.06 365.88 516.36 367.74 515.02 368.76 C 510.44 369.61 505.78 369.61 501.2 368.76 C 499.86 367.74 499.16 365.88 499.42 364.02 L 500.76 351.35 C 501.01 349.95 502.29 348.87 503.88 348.71 L 512.35 348.71 C 513.94 348.87 515.21 349.95 515.47 351.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 515.12 348.46 C 515.49 348.62 515.69 349.15 515.57 349.63 C 515.44 350.12 515.04 350.39 514.67 350.22 C 510.27 348.95 505.71 348.95 501.3 350.22 C 501.02 350.13 500.8 349.86 500.71 349.5 C 500.62 349.14 500.67 348.75 500.85 348.46 C 505.55 347 510.43 347 515.12 348.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-255">
            <path
              d="M 476.47 392.86 L 477.8 405.53 C 478.06 407.39 477.36 409.25 476.02 410.27 C 471.44 411.12 466.78 411.12 462.2 410.27 C 460.86 409.25 460.16 407.39 460.42 405.53 L 461.76 392.86 C 462.01 391.46 463.29 390.38 464.88 390.22 L 473.35 390.22 C 474.94 390.38 476.21 391.46 476.47 392.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,469.11,399.82)"
              pointer-events="none"
            />
            <path
              d="M 476.12 389.97 C 476.49 390.13 476.69 390.66 476.57 391.14 C 476.44 391.63 476.04 391.9 475.67 391.73 C 471.27 390.46 466.7 390.46 462.3 391.73 C 462.02 391.64 461.8 391.37 461.71 391.01 C 461.62 390.65 461.67 390.26 461.85 389.97 C 466.54 388.51 471.43 388.51 476.12 389.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,469.11,399.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-256">
            <path
              d="M 437.47 392.86 L 438.81 405.53 C 439.06 407.39 438.36 409.25 437.03 410.27 C 432.45 411.12 427.78 411.12 423.21 410.27 C 421.87 409.25 421.17 407.39 421.42 405.53 L 422.76 392.86 C 423.02 391.46 424.29 390.38 425.88 390.22 L 434.35 390.22 C 435.94 390.38 437.22 391.46 437.47 392.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,430.12,399.82)"
              pointer-events="none"
            />
            <path
              d="M 437.12 389.97 C 437.49 390.13 437.69 390.66 437.57 391.14 C 437.45 391.63 437.05 391.9 436.68 391.73 C 432.27 390.46 427.71 390.46 423.3 391.73 C 423.03 391.64 422.8 391.37 422.71 391.01 C 422.62 390.65 422.68 390.26 422.86 389.97 C 427.55 388.51 432.43 388.51 437.12 389.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,430.12,399.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-257">
            <path
              d="M 515.47 392.86 L 516.8 405.53 C 517.06 407.39 516.36 409.25 515.02 410.27 C 510.44 411.12 505.78 411.12 501.2 410.27 C 499.86 409.25 499.16 407.39 499.42 405.53 L 500.76 392.86 C 501.01 391.46 502.29 390.38 503.88 390.22 L 512.35 390.22 C 513.94 390.38 515.21 391.46 515.47 392.86 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,508.11,399.82)"
              pointer-events="none"
            />
            <path
              d="M 515.12 389.97 C 515.49 390.13 515.69 390.66 515.57 391.14 C 515.44 391.63 515.04 391.9 514.67 391.73 C 510.27 390.46 505.71 390.46 501.3 391.73 C 501.02 391.64 500.8 391.37 500.71 391.01 C 500.62 390.65 500.67 390.26 500.85 389.97 C 505.55 388.51 510.43 388.51 515.12 389.97"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,508.11,399.82)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-258">
            <rect
              x="446.85"
              y="324.3"
              width="45"
              height="111"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(90,469.35,379.8)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-259">
            <path
              d="M 421.89 379.5 L 516.75 379.5"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-260">
            <path
              d="M 408 322.3 L 526 322"
              fill="none"
              stroke="#000000"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-261">
            <path
              d="M 526 323 L 526 281"
              fill="none"
              stroke="#000000"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-262">
            <rect
              x="412.77"
              y="295.04"
              width="43.33"
              height="3.75"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(-180,434.44,306.29)"
              pointer-events="none"
            />
            <rect
              x="409.44"
              y="291.29"
              width="5"
              height="30"
              rx="1"
              ry="1"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(-180,434.44,306.29)"
              pointer-events="none"
            />
            <rect
              x="414.44"
              y="291.29"
              width="40"
              height="5.62"
              rx="1.12"
              ry="1.12"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(-180,434.44,306.29)"
              pointer-events="none"
            />
            <rect
              x="414.44"
              y="296.91"
              width="20"
              height="24.37"
              rx="1"
              ry="1"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(-180,434.44,306.29)"
              pointer-events="none"
            />
            <rect
              x="434.44"
              y="296.91"
              width="20"
              height="24.37"
              rx="1"
              ry="1"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(-180,434.44,306.29)"
              pointer-events="none"
            />
            <rect
              x="454.44"
              y="291.29"
              width="5"
              height="30"
              rx="1"
              ry="1"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(-180,434.44,306.29)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-289">
            <rect
              x="146.64"
              y="353.51"
              width="116"
              height="10"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(-90,204.64,358.51)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-290">
            <path
              d="M 102 719 L 102 590"
              fill="none"
              stroke="#000000"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-291">
            <path
              d="M 102 591 L 200 591"
              fill="none"
              stroke="#000000"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-292">
            <path
              d="M 2 611 L 102 611"
              fill="none"
              stroke="#000000"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-293">
            <rect x="273" y="192" width="128" height="15" fill="#ffffff" stroke="#999999" pointer-events="none" />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-294">
            <path
              d="M 182 191 L 182 109.67"
              fill="none"
              stroke="#000000"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-295">
            <path
              d="M 92 190 L 117 190"
              fill="none"
              stroke="#000000"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-296">
            <path
              d="M 92 261 L 92 111"
              fill="none"
              stroke="#000000"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-297">
            <path
              d="M 2 260 L 92 260.3"
              fill="none"
              stroke="#000000"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-300">
            <path
              d="M 158 191 L 183 191"
              fill="none"
              stroke="#000000"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-302">
            <rect
              x="104.88"
              y="118.29"
              width="47.3"
              height="28.26"
              rx="1.41"
              ry="1.41"
              fill="#ffffff"
              stroke="#999999"
              pointer-events="none"
            />
            <rect
              x="101.92"
              y="123"
              width="2.96"
              height="18.84"
              fill="#ffffff"
              stroke="#999999"
              pointer-events="none"
            />
            <path
              d="M 152.18 122.06 L 166.96 122.06 L 166.96 127.71 L 164.59 130.06 L 164.59 134.77 L 166.96 137.13 L 166.96 142.78 L 152.18 142.78 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 166.96 127.71 L 152.18 127.71 M 166.96 137.13 L 152.18 137.13 M 166.96 141.84 L 152.18 141.84 M 166.96 123 L 152.18 123"
              fill="none"
              stroke="#999999"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <rect
              x="108.78"
              y="120.74"
              width="41.03"
              height="20.91"
              fill="none"
              stroke="#999999"
              pointer-events="none"
            />
            <ellipse
              cx="109.02"
              cy="144.19"
              rx="1.1825454545454543"
              ry="0.942"
              fill="none"
              stroke="#999999"
              pointer-events="none"
            />
            <ellipse
              cx="112.56"
              cy="144.19"
              rx="1.1825454545454543"
              ry="0.942"
              fill="none"
              stroke="#999999"
              pointer-events="none"
            />
            <ellipse
              cx="116.11"
              cy="144.19"
              rx="1.1825454545454543"
              ry="0.942"
              fill="none"
              stroke="#999999"
              pointer-events="none"
            />
            <ellipse
              cx="119.66"
              cy="144.19"
              rx="1.1825454545454543"
              ry="0.942"
              fill="none"
              stroke="#999999"
              pointer-events="none"
            />
            <rect x="123.8" y="142.78" width="10.64" height="2.83" fill="none" stroke="#999999" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-315"
            content='&lt;object label="" class="others" placeholders="null"/&gt;'
            data-label=""
            data-class="others"
            data-placeholders="null"
          >
            <rect x="3" y="112" width="88" height="147" fill="#f2f6f7" stroke="none" pointer-events="none" />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-308">
            <path
              d="M 49.09 178.55 L 50.33 188.77 C 50.57 190.27 49.92 191.77 48.67 192.6 C 44.4 193.29 40.05 193.29 35.79 192.6 C 34.54 191.77 33.88 190.27 34.12 188.77 L 35.37 178.55 C 35.61 177.42 36.8 176.55 38.28 176.42 L 46.18 176.42 C 47.66 176.55 48.85 177.42 49.09 178.55 Z M 37.94 176.42 L 35.8 173.72 M 40.31 176.42 L 39.6 173.34 M 43.16 176.42 L 44.11 173.34 M 45.53 176.42 L 47.91 173.72 M 48.62 173.87 C 44.22 173.17 39.72 173.17 35.33 173.87 L 33.43 172.17 C 39.05 171 44.9 171 50.52 172.17 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-309">
            <path
              d="M 49.09 216.27 L 50.33 226.48 C 50.57 227.99 49.92 229.49 48.67 230.31 C 44.4 231 40.05 231 35.79 230.31 C 34.54 229.49 33.88 227.99 34.12 226.48 L 35.37 216.27 C 35.61 215.14 36.8 214.27 38.28 214.14 L 46.18 214.14 C 47.66 214.27 48.85 215.14 49.09 216.27 Z M 37.94 214.14 L 35.8 211.44 M 40.31 214.14 L 39.6 211.06 M 43.16 214.14 L 44.11 211.06 M 45.53 214.14 L 47.91 211.44 M 48.62 211.58 C 44.22 210.88 39.72 210.88 35.33 211.58 L 33.43 209.88 C 39.05 208.72 44.9 208.72 50.52 209.88 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              transform="rotate(180,42,219.86)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-310">
            <path
              d="M 30.23 197.41 L 31.48 207.63 C 31.72 209.13 31.06 210.63 29.81 211.46 C 25.55 212.14 21.2 212.14 16.93 211.46 C 15.68 210.63 15.03 209.13 15.27 207.63 L 16.51 197.41 C 16.75 196.28 17.94 195.41 19.42 195.28 L 27.32 195.28 C 28.8 195.41 29.99 196.28 30.23 197.41 Z M 19.08 195.28 L 16.94 192.58 M 21.46 195.28 L 20.74 192.2 M 24.3 195.28 L 25.25 192.2 M 26.68 195.28 L 29.05 192.58 M 29.76 192.73 C 25.37 192.03 20.87 192.03 16.47 192.73 L 14.57 191.02 C 20.19 189.86 26.04 189.86 31.66 191.02 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              transform="rotate(270,23.14,201)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-311">
            <path
              d="M 67.94 197.41 L 69.19 207.63 C 69.43 209.13 68.78 210.63 67.53 211.46 C 63.26 212.14 58.91 212.14 54.64 211.46 C 53.39 210.63 52.74 209.13 52.98 207.63 L 54.23 197.41 C 54.47 196.28 55.66 195.41 57.14 195.28 L 65.03 195.28 C 66.52 195.41 67.71 196.28 67.94 197.41 Z M 56.8 195.28 L 54.66 192.58 M 59.17 195.28 L 58.46 192.2 M 62.02 195.28 L 62.96 192.2 M 64.39 195.28 L 66.76 192.58 M 67.47 192.73 C 63.08 192.03 58.58 192.03 54.19 192.73 L 52.29 191.02 C 57.91 189.86 63.75 189.86 69.37 191.02 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              transform="rotate(90,60.86,201)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-312">
            <ellipse
              cx="42"
              cy="201"
              rx="21.428571428571423"
              ry="21.428571428571423"
              fill="#ffffff"
              stroke="#999999"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-305">
            <rect x="3" y="111.74" width="88" height="20" fill="#ffffff" stroke="#999999" pointer-events="none" />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-306">
            <rect
              x="12"
              y="114"
              width="16"
              height="16"
              rx="1.83"
              ry="1.83"
              fill="#ffffff"
              stroke="#999999"
              pointer-events="none"
            />
            <rect
              x="13.6"
              y="118.57"
              width="12.8"
              height="9.6"
              rx="1.37"
              ry="1.37"
              fill="none"
              stroke="#999999"
              pointer-events="none"
            />
            <ellipse
              cx="20"
              cy="122.69"
              rx="0.9999999999999999"
              ry="1.1428571428571426"
              fill="#000000"
              stroke="none"
              pointer-events="none"
            />
            <rect x="12" y="114" width="0" height="0" fill="none" stroke="#999999" pointer-events="none" />
            <rect
              x="19.2"
              y="115.37"
              width="1.6"
              height="7.31"
              rx="0.8"
              ry="0.8"
              fill="#ffffff"
              stroke="#999999"
              pointer-events="none"
            />
            <rect
              x="19.2"
              y="115.37"
              width="1.6"
              height="5.03"
              rx="0.8"
              ry="0.8"
              fill="none"
              stroke="#999999"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-307">
            <rect x="32" y="112" width="16" height="19.35" fill="#ffffff" stroke="#999999" pointer-events="none" />
            <ellipse
              cx="44"
              cy="116.84"
              rx="0.9599999999999999"
              ry="0.9677419354838709"
              fill="none"
              stroke="#999999"
              pointer-events="none"
            />
            <ellipse
              cx="44"
              cy="126.52"
              rx="1.2799999999999998"
              ry="1.290322580645161"
              fill="none"
              stroke="#999999"
              pointer-events="none"
            />
            <ellipse
              cx="36"
              cy="126.52"
              rx="1.5999999999999999"
              ry="1.6129032258064513"
              fill="none"
              stroke="#999999"
              pointer-events="none"
            />
            <ellipse
              cx="36"
              cy="116.84"
              rx="1.9199999999999997"
              ry="1.9354838709677418"
              fill="none"
              stroke="#999999"
              pointer-events="none"
            />
            <path
              d="M 42.88 115.71 L 45.12 117.97 M 45.12 115.71 L 42.88 117.97 M 42.56 125.06 L 45.44 127.97 M 45.44 125.06 L 42.56 127.97 M 33.92 114.74 L 38.08 118.94 M 38.08 114.74 L 33.92 118.94 M 34.24 124.74 L 37.76 128.29 M 37.76 124.74 L 34.24 128.29"
              fill="none"
              stroke="#999999"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <rect x="33.6" y="131.35" width="1.6" height="0.65" fill="#ffffff" stroke="#999999" pointer-events="none" />
            <rect
              x="36.48"
              y="131.35"
              width="1.6"
              height="0.65"
              fill="#ffffff"
              stroke="#999999"
              pointer-events="none"
            />
            <rect
              x="39.36"
              y="131.35"
              width="1.6"
              height="0.65"
              fill="#ffffff"
              stroke="#999999"
              pointer-events="none"
            />
            <rect
              x="42.24"
              y="131.35"
              width="1.6"
              height="0.65"
              fill="#ffffff"
              stroke="#999999"
              pointer-events="none"
            />
            <rect
              x="45.12"
              y="131.35"
              width="1.6"
              height="0.65"
              fill="#ffffff"
              stroke="#999999"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-303">
            <rect
              x="71.75"
              y="225.25"
              width="23.94"
              height="5"
              fill="rgb(255, 255, 255)"
              stroke="#999999"
              transform="rotate(90,83.72,237.97)"
              pointer-events="none"
            />
            <path
              d="M 71.75 230.25 C 71.75 243.47 82.47 254.19 95.69 254.19 L 95.69 230.25"
              fill="none"
              stroke="#999999"
              stroke-miterlimit="10"
              transform="rotate(90,83.72,237.97)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-332">
            <path
              d="M 71.05 298.35 L 72.38 311.02 C 72.64 312.88 71.94 314.74 70.6 315.76 C 66.02 316.61 61.36 316.61 56.78 315.76 C 55.44 314.74 54.74 312.88 55 311.02 L 56.34 298.35 C 56.59 296.95 57.87 295.87 59.46 295.71 L 67.93 295.71 C 69.52 295.87 70.79 296.95 71.05 298.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 70.7 295.46 C 71.07 295.62 71.27 296.15 71.15 296.63 C 71.02 297.12 70.62 297.39 70.25 297.22 C 65.85 295.95 61.28 295.95 56.88 297.22 C 56.6 297.13 56.38 296.86 56.29 296.5 C 56.2 296.14 56.25 295.75 56.43 295.46 C 61.12 294 66.01 294 70.7 295.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-333">
            <path
              d="M 32.05 298.35 L 33.39 311.02 C 33.64 312.88 32.94 314.74 31.61 315.76 C 27.03 316.61 22.36 316.61 17.79 315.76 C 16.45 314.74 15.75 312.88 16 311.02 L 17.34 298.35 C 17.6 296.95 18.87 295.87 20.46 295.71 L 28.93 295.71 C 30.52 295.87 31.8 296.95 32.05 298.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 31.7 295.46 C 32.07 295.62 32.27 296.15 32.15 296.63 C 32.03 297.12 31.63 297.39 31.26 297.22 C 26.85 295.95 22.29 295.95 17.88 297.22 C 17.61 297.13 17.38 296.86 17.29 296.5 C 17.2 296.14 17.26 295.75 17.44 295.46 C 22.13 294 27.01 294 31.7 295.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-334">
            <path
              d="M 110.05 298.35 L 111.38 311.02 C 111.64 312.88 110.94 314.74 109.6 315.76 C 105.02 316.61 100.36 316.61 95.78 315.76 C 94.44 314.74 93.74 312.88 94 311.02 L 95.34 298.35 C 95.59 296.95 96.87 295.87 98.46 295.71 L 106.93 295.71 C 108.52 295.87 109.79 296.95 110.05 298.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 109.7 295.46 C 110.07 295.62 110.27 296.15 110.15 296.63 C 110.02 297.12 109.62 297.39 109.25 297.22 C 104.85 295.95 100.29 295.95 95.88 297.22 C 95.6 297.13 95.38 296.86 95.29 296.5 C 95.2 296.14 95.25 295.75 95.43 295.46 C 100.13 294 105.01 294 109.7 295.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-335">
            <path
              d="M 71.05 339.07 L 72.38 351.74 C 72.64 353.6 71.94 355.46 70.6 356.48 C 66.02 357.33 61.36 357.33 56.78 356.48 C 55.44 355.46 54.74 353.6 55 351.74 L 56.34 339.07 C 56.59 337.67 57.87 336.59 59.46 336.43 L 67.93 336.43 C 69.52 336.59 70.79 337.67 71.05 339.07 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,63.69,346.03)"
              pointer-events="none"
            />
            <path
              d="M 70.7 336.18 C 71.07 336.34 71.27 336.87 71.15 337.35 C 71.02 337.84 70.62 338.11 70.25 337.94 C 65.85 336.67 61.28 336.67 56.88 337.94 C 56.6 337.85 56.38 337.58 56.29 337.22 C 56.2 336.86 56.25 336.47 56.43 336.18 C 61.12 334.72 66.01 334.72 70.7 336.18"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,63.69,346.03)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-336">
            <path
              d="M 32.05 339.07 L 33.39 351.74 C 33.64 353.6 32.94 355.46 31.61 356.48 C 27.03 357.33 22.36 357.33 17.79 356.48 C 16.45 355.46 15.75 353.6 16 351.74 L 17.34 339.07 C 17.6 337.67 18.87 336.59 20.46 336.43 L 28.93 336.43 C 30.52 336.59 31.8 337.67 32.05 339.07 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,24.7,346.03)"
              pointer-events="none"
            />
            <path
              d="M 31.7 336.18 C 32.07 336.34 32.27 336.87 32.15 337.35 C 32.03 337.84 31.63 338.11 31.26 337.94 C 26.85 336.67 22.29 336.67 17.88 337.94 C 17.61 337.85 17.38 337.58 17.29 337.22 C 17.2 336.86 17.26 336.47 17.44 336.18 C 22.13 334.72 27.01 334.72 31.7 336.18"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,24.7,346.03)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-337">
            <path
              d="M 110.05 339.07 L 111.38 351.74 C 111.64 353.6 110.94 355.46 109.6 356.48 C 105.02 357.33 100.36 357.33 95.78 356.48 C 94.44 355.46 93.74 353.6 94 351.74 L 95.34 339.07 C 95.59 337.67 96.87 336.59 98.46 336.43 L 106.93 336.43 C 108.52 336.59 109.79 337.67 110.05 339.07 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,102.69,346.03)"
              pointer-events="none"
            />
            <path
              d="M 109.7 336.18 C 110.07 336.34 110.27 336.87 110.15 337.35 C 110.02 337.84 109.62 338.11 109.25 337.94 C 104.85 336.67 100.29 336.67 95.88 337.94 C 95.6 337.85 95.38 337.58 95.29 337.22 C 95.2 336.86 95.25 336.47 95.43 336.18 C 100.13 334.72 105.01 334.72 109.7 336.18"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,102.69,346.03)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-338">
            <path
              d="M 71.89 385.29 L 73.22 397.96 C 73.48 399.82 72.78 401.68 71.44 402.7 C 66.86 403.55 62.2 403.55 57.62 402.7 C 56.28 401.68 55.58 399.82 55.84 397.96 L 57.18 385.29 C 57.43 383.89 58.71 382.81 60.3 382.65 L 68.77 382.65 C 70.36 382.81 71.63 383.89 71.89 385.29 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 71.54 382.4 C 71.91 382.56 72.11 383.09 71.99 383.57 C 71.86 384.06 71.46 384.33 71.09 384.16 C 66.69 382.89 62.12 382.89 57.72 384.16 C 57.44 384.07 57.22 383.8 57.13 383.44 C 57.04 383.08 57.09 382.69 57.27 382.4 C 61.96 380.94 66.85 380.94 71.54 382.4"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-339">
            <path
              d="M 32.89 385.29 L 34.23 397.96 C 34.48 399.82 33.78 401.68 32.45 402.7 C 27.87 403.55 23.2 403.55 18.63 402.7 C 17.29 401.68 16.59 399.82 16.84 397.96 L 18.18 385.29 C 18.44 383.89 19.71 382.81 21.3 382.65 L 29.77 382.65 C 31.36 382.81 32.64 383.89 32.89 385.29 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 32.54 382.4 C 32.91 382.56 33.11 383.09 32.99 383.57 C 32.87 384.06 32.47 384.33 32.1 384.16 C 27.69 382.89 23.13 382.89 18.72 384.16 C 18.45 384.07 18.22 383.8 18.13 383.44 C 18.04 383.08 18.1 382.69 18.28 382.4 C 22.97 380.94 27.85 380.94 32.54 382.4"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-340">
            <path
              d="M 110.89 385.29 L 112.22 397.96 C 112.48 399.82 111.78 401.68 110.44 402.7 C 105.86 403.55 101.2 403.55 96.62 402.7 C 95.28 401.68 94.58 399.82 94.84 397.96 L 96.18 385.29 C 96.43 383.89 97.71 382.81 99.3 382.65 L 107.77 382.65 C 109.36 382.81 110.63 383.89 110.89 385.29 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 110.54 382.4 C 110.91 382.56 111.11 383.09 110.99 383.57 C 110.86 384.06 110.46 384.33 110.09 384.16 C 105.69 382.89 101.13 382.89 96.72 384.16 C 96.44 384.07 96.22 383.8 96.13 383.44 C 96.04 383.08 96.09 382.69 96.27 382.4 C 100.97 380.94 105.85 380.94 110.54 382.4"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-341">
            <path
              d="M 71.89 425.29 L 73.22 437.96 C 73.48 439.82 72.78 441.68 71.44 442.7 C 66.86 443.55 62.2 443.55 57.62 442.7 C 56.28 441.68 55.58 439.82 55.84 437.96 L 57.18 425.29 C 57.43 423.89 58.71 422.81 60.3 422.65 L 68.77 422.65 C 70.36 422.81 71.63 423.89 71.89 425.29 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,64.53,432.25)"
              pointer-events="none"
            />
            <path
              d="M 71.54 422.4 C 71.91 422.56 72.11 423.09 71.99 423.57 C 71.86 424.06 71.46 424.33 71.09 424.16 C 66.69 422.89 62.12 422.89 57.72 424.16 C 57.44 424.07 57.22 423.8 57.13 423.44 C 57.04 423.08 57.09 422.69 57.27 422.4 C 61.96 420.94 66.85 420.94 71.54 422.4"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,64.53,432.25)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-342">
            <path
              d="M 32.89 425.29 L 34.23 437.96 C 34.48 439.82 33.78 441.68 32.45 442.7 C 27.87 443.55 23.2 443.55 18.63 442.7 C 17.29 441.68 16.59 439.82 16.84 437.96 L 18.18 425.29 C 18.44 423.89 19.71 422.81 21.3 422.65 L 29.77 422.65 C 31.36 422.81 32.64 423.89 32.89 425.29 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,25.54,432.25)"
              pointer-events="none"
            />
            <path
              d="M 32.54 422.4 C 32.91 422.56 33.11 423.09 32.99 423.57 C 32.87 424.06 32.47 424.33 32.1 424.16 C 27.69 422.89 23.13 422.89 18.72 424.16 C 18.45 424.07 18.22 423.8 18.13 423.44 C 18.04 423.08 18.1 422.69 18.28 422.4 C 22.97 420.94 27.85 420.94 32.54 422.4"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,25.54,432.25)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-343">
            <path
              d="M 110.89 425.29 L 112.22 437.96 C 112.48 439.82 111.78 441.68 110.44 442.7 C 105.86 443.55 101.2 443.55 96.62 442.7 C 95.28 441.68 94.58 439.82 94.84 437.96 L 96.18 425.29 C 96.43 423.89 97.71 422.81 99.3 422.65 L 107.77 422.65 C 109.36 422.81 110.63 423.89 110.89 425.29 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,103.53,432.25)"
              pointer-events="none"
            />
            <path
              d="M 110.54 422.4 C 110.91 422.56 111.11 423.09 110.99 423.57 C 110.86 424.06 110.46 424.33 110.09 424.16 C 105.69 422.89 101.13 422.89 96.72 424.16 C 96.44 424.07 96.22 423.8 96.13 423.44 C 96.04 423.08 96.09 422.69 96.27 422.4 C 100.97 420.94 105.85 420.94 110.54 422.4"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,103.53,432.25)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-344">
            <rect
              x="41.85"
              y="357.33"
              width="45"
              height="111"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(90,64.35,412.83)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-345">
            <path
              d="M 16.89 412.34 L 111.75 412.34"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-346">
            <rect
              x="41.85"
              y="270.38"
              width="45"
              height="111"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(90,64.35,325.88)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-347">
            <path
              d="M 16.89 325.39 L 111.75 325.39"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-348">
            <path
              d="M 71.89 480.35 L 73.22 493.02 C 73.48 494.88 72.78 496.74 71.44 497.76 C 66.86 498.61 62.2 498.61 57.62 497.76 C 56.28 496.74 55.58 494.88 55.84 493.02 L 57.18 480.35 C 57.43 478.95 58.71 477.87 60.3 477.71 L 68.77 477.71 C 70.36 477.87 71.63 478.95 71.89 480.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 71.54 477.46 C 71.91 477.62 72.11 478.15 71.99 478.63 C 71.86 479.12 71.46 479.39 71.09 479.22 C 66.69 477.95 62.12 477.95 57.72 479.22 C 57.44 479.13 57.22 478.86 57.13 478.5 C 57.04 478.14 57.09 477.75 57.27 477.46 C 61.96 476 66.85 476 71.54 477.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-349">
            <path
              d="M 32.89 480.35 L 34.23 493.02 C 34.48 494.88 33.78 496.74 32.45 497.76 C 27.87 498.61 23.2 498.61 18.63 497.76 C 17.29 496.74 16.59 494.88 16.84 493.02 L 18.18 480.35 C 18.44 478.95 19.71 477.87 21.3 477.71 L 29.77 477.71 C 31.36 477.87 32.64 478.95 32.89 480.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 32.54 477.46 C 32.91 477.62 33.11 478.15 32.99 478.63 C 32.87 479.12 32.47 479.39 32.1 479.22 C 27.69 477.95 23.13 477.95 18.72 479.22 C 18.45 479.13 18.22 478.86 18.13 478.5 C 18.04 478.14 18.1 477.75 18.28 477.46 C 22.97 476 27.85 476 32.54 477.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-350">
            <path
              d="M 110.89 480.35 L 112.22 493.02 C 112.48 494.88 111.78 496.74 110.44 497.76 C 105.86 498.61 101.2 498.61 96.62 497.76 C 95.28 496.74 94.58 494.88 94.84 493.02 L 96.18 480.35 C 96.43 478.95 97.71 477.87 99.3 477.71 L 107.77 477.71 C 109.36 477.87 110.63 478.95 110.89 480.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 110.54 477.46 C 110.91 477.62 111.11 478.15 110.99 478.63 C 110.86 479.12 110.46 479.39 110.09 479.22 C 105.69 477.95 101.13 477.95 96.72 479.22 C 96.44 479.13 96.22 478.86 96.13 478.5 C 96.04 478.14 96.09 477.75 96.27 477.46 C 100.97 476 105.85 476 110.54 477.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-351">
            <path
              d="M 71.89 520.35 L 73.22 533.02 C 73.48 534.88 72.78 536.74 71.44 537.76 C 66.86 538.61 62.2 538.61 57.62 537.76 C 56.28 536.74 55.58 534.88 55.84 533.02 L 57.18 520.35 C 57.43 518.95 58.71 517.87 60.3 517.71 L 68.77 517.71 C 70.36 517.87 71.63 518.95 71.89 520.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,64.53,527.31)"
              pointer-events="none"
            />
            <path
              d="M 71.54 517.46 C 71.91 517.62 72.11 518.15 71.99 518.63 C 71.86 519.12 71.46 519.39 71.09 519.22 C 66.69 517.95 62.12 517.95 57.72 519.22 C 57.44 519.13 57.22 518.86 57.13 518.5 C 57.04 518.14 57.09 517.75 57.27 517.46 C 61.96 516 66.85 516 71.54 517.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,64.53,527.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-352">
            <path
              d="M 32.89 520.35 L 34.23 533.02 C 34.48 534.88 33.78 536.74 32.45 537.76 C 27.87 538.61 23.2 538.61 18.63 537.76 C 17.29 536.74 16.59 534.88 16.84 533.02 L 18.18 520.35 C 18.44 518.95 19.71 517.87 21.3 517.71 L 29.77 517.71 C 31.36 517.87 32.64 518.95 32.89 520.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,25.54,527.31)"
              pointer-events="none"
            />
            <path
              d="M 32.54 517.46 C 32.91 517.62 33.11 518.15 32.99 518.63 C 32.87 519.12 32.47 519.39 32.1 519.22 C 27.69 517.95 23.13 517.95 18.72 519.22 C 18.45 519.13 18.22 518.86 18.13 518.5 C 18.04 518.14 18.1 517.75 18.28 517.46 C 22.97 516 27.85 516 32.54 517.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,25.54,527.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-353">
            <path
              d="M 110.89 520.35 L 112.22 533.02 C 112.48 534.88 111.78 536.74 110.44 537.76 C 105.86 538.61 101.2 538.61 96.62 537.76 C 95.28 536.74 94.58 534.88 94.84 533.02 L 96.18 520.35 C 96.43 518.95 97.71 517.87 99.3 517.71 L 107.77 517.71 C 109.36 517.87 110.63 518.95 110.89 520.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,103.53,527.31)"
              pointer-events="none"
            />
            <path
              d="M 110.54 517.46 C 110.91 517.62 111.11 518.15 110.99 518.63 C 110.86 519.12 110.46 519.39 110.09 519.22 C 105.69 517.95 101.13 517.95 96.72 519.22 C 96.44 519.13 96.22 518.86 96.13 518.5 C 96.04 518.14 96.09 517.75 96.27 517.46 C 100.97 516 105.85 516 110.54 517.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,103.53,527.31)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-354">
            <rect
              x="41.85"
              y="452.39"
              width="45"
              height="111"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(90,64.35,507.89)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-355">
            <path
              d="M 16.89 507.4 L 111.75 507.4"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-356">
            <rect
              x="114.75"
              y="586.25"
              width="23.94"
              height="5"
              fill="rgb(255, 255, 255)"
              stroke="#999999"
              transform="translate(126.72,0)scale(-1,1)translate(-126.72,0)"
              pointer-events="none"
            />
            <path
              d="M 114.75 591.25 C 114.75 604.47 125.47 615.19 138.69 615.19 L 138.69 591.25"
              fill="none"
              stroke="#999999"
              stroke-miterlimit="10"
              transform="translate(126.72,0)scale(-1,1)translate(-126.72,0)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-357">
            <rect
              x="67"
              y="606"
              width="23.94"
              height="5"
              fill="rgb(255, 255, 255)"
              stroke="#999999"
              pointer-events="none"
            />
            <path
              d="M 67 611 C 67 624.22 77.72 634.94 90.94 634.94 L 90.94 611"
              fill="none"
              stroke="#999999"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-363">
            <path
              d="M 44.31 678.14 L 45.65 690.81 C 45.9 692.67 45.2 694.53 43.86 695.55 C 39.28 696.4 34.62 696.4 30.04 695.55 C 28.7 694.53 28 692.67 28.26 690.81 L 29.6 678.14 C 29.85 676.74 31.13 675.66 32.72 675.5 L 41.19 675.5 C 42.78 675.66 44.05 676.74 44.31 678.14 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,36.95,685.1)"
              pointer-events="none"
            />
            <path
              d="M 43.96 675.25 C 44.33 675.41 44.53 675.94 44.41 676.42 C 44.29 676.91 43.89 677.18 43.52 677.01 C 39.11 675.74 34.55 675.74 30.14 677.01 C 29.86 676.92 29.64 676.65 29.55 676.29 C 29.46 675.93 29.52 675.54 29.7 675.25 C 34.39 673.79 39.27 673.79 43.96 675.25"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,36.95,685.1)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-364">
            <path
              d="M 74.31 678.14 L 75.65 690.81 C 75.9 692.67 75.2 694.53 73.86 695.55 C 69.28 696.4 64.62 696.4 60.04 695.55 C 58.7 694.53 58 692.67 58.26 690.81 L 59.6 678.14 C 59.85 676.74 61.13 675.66 62.72 675.5 L 71.19 675.5 C 72.78 675.66 74.05 676.74 74.31 678.14 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,66.95,685.1)"
              pointer-events="none"
            />
            <path
              d="M 73.96 675.25 C 74.33 675.41 74.53 675.94 74.41 676.42 C 74.29 676.91 73.89 677.18 73.52 677.01 C 69.11 675.74 64.55 675.74 60.14 677.01 C 59.86 676.92 59.64 676.65 59.55 676.29 C 59.46 675.93 59.52 675.54 59.7 675.25 C 64.39 673.79 69.27 673.79 73.96 675.25"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,66.95,685.1)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-365">
            <path
              d="M 44.06 645.35 L 45.4 658.02 C 45.65 659.88 44.95 661.74 43.61 662.76 C 39.03 663.61 34.37 663.61 29.79 662.76 C 28.45 661.74 27.75 659.88 28.01 658.02 L 29.35 645.35 C 29.6 643.95 30.88 642.87 32.47 642.71 L 40.94 642.71 C 42.53 642.87 43.8 643.95 44.06 645.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 43.71 642.46 C 44.08 642.62 44.28 643.15 44.16 643.63 C 44.04 644.12 43.64 644.39 43.27 644.22 C 38.86 642.95 34.3 642.95 29.89 644.22 C 29.61 644.13 29.39 643.86 29.3 643.5 C 29.21 643.14 29.27 642.75 29.45 642.46 C 34.14 641 39.02 641 43.71 642.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-366">
            <path
              d="M 74.06 645.35 L 75.4 658.02 C 75.65 659.88 74.95 661.74 73.61 662.76 C 69.03 663.61 64.37 663.61 59.79 662.76 C 58.45 661.74 57.75 659.88 58.01 658.02 L 59.35 645.35 C 59.6 643.95 60.88 642.87 62.47 642.71 L 70.94 642.71 C 72.53 642.87 73.8 643.95 74.06 645.35 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
            <path
              d="M 73.71 642.46 C 74.08 642.62 74.28 643.15 74.16 643.63 C 74.04 644.12 73.64 644.39 73.27 644.22 C 68.86 642.95 64.3 642.95 59.89 644.22 C 59.61 644.13 59.39 643.86 59.3 643.5 C 59.21 643.14 59.27 642.75 59.45 642.46 C 64.14 641 69.02 641 73.71 642.46"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-367">
            <rect
              x="33.38"
              y="639"
              width="36.64"
              height="59.41"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(90,51.71,668.7)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-368">
            <path
              d="M 152.12 667.17 L 153.46 679.84 C 153.72 681.7 153.02 683.56 151.68 684.58 C 147.1 685.43 142.44 685.43 137.86 684.58 C 136.52 683.56 135.82 681.7 136.07 679.84 L 137.41 667.17 C 137.67 665.77 138.94 664.69 140.53 664.53 L 149 664.53 C 150.59 664.69 151.87 665.77 152.12 667.17 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,144.77,674.13)"
              pointer-events="none"
            />
            <path
              d="M 151.78 664.28 C 152.15 664.44 152.35 664.96 152.22 665.45 C 152.1 665.94 151.7 666.21 151.33 666.04 C 146.92 664.77 142.36 664.77 137.96 666.04 C 137.68 665.95 137.46 665.68 137.37 665.32 C 137.28 664.96 137.33 664.57 137.51 664.28 C 142.2 662.82 147.08 662.82 151.78 664.28"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(180,144.77,674.13)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-369">
            <path
              d="M 104 644 L 172.26 644 L 172.26 674 L 122.2 674 L 122.2 704 L 104 704 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-370">
            <rect
              x="478.33"
              y="295.2"
              width="43.33"
              height="3.75"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(-180,500,306.45)"
              pointer-events="none"
            />
            <rect
              x="475"
              y="291.45"
              width="5"
              height="30"
              rx="1"
              ry="1"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(-180,500,306.45)"
              pointer-events="none"
            />
            <rect
              x="480"
              y="291.45"
              width="40"
              height="5.62"
              rx="1.12"
              ry="1.12"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(-180,500,306.45)"
              pointer-events="none"
            />
            <rect
              x="480"
              y="297.07"
              width="20"
              height="24.37"
              rx="1"
              ry="1"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(-180,500,306.45)"
              pointer-events="none"
            />
            <rect
              x="500"
              y="297.07"
              width="20"
              height="24.37"
              rx="1"
              ry="1"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(-180,500,306.45)"
              pointer-events="none"
            />
            <rect
              x="520"
              y="291.45"
              width="5"
              height="30"
              rx="1"
              ry="1"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(-180,500,306.45)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-371">
            <rect x="460.7" y="283" width="13" height="38" fill="#ffffff" stroke="#999999" pointer-events="none" />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-375">
            <rect
              x="892.72"
              y="181"
              width="158"
              height="20"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(90,971.72,191)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-377">
            <rect
              x="963.5"
              y="188"
              width="16"
              height="19.35"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(90,971.5,198)"
              pointer-events="none"
            />
            <ellipse
              cx="975.5"
              cy="192.84"
              rx="0.9599999999999999"
              ry="0.9677419354838709"
              fill="none"
              stroke="#999999"
              transform="rotate(90,971.5,198)"
              pointer-events="none"
            />
            <ellipse
              cx="975.5"
              cy="202.52"
              rx="1.2799999999999998"
              ry="1.290322580645161"
              fill="none"
              stroke="#999999"
              transform="rotate(90,971.5,198)"
              pointer-events="none"
            />
            <ellipse
              cx="967.5"
              cy="202.52"
              rx="1.5999999999999999"
              ry="1.6129032258064513"
              fill="none"
              stroke="#999999"
              transform="rotate(90,971.5,198)"
              pointer-events="none"
            />
            <ellipse
              cx="967.5"
              cy="192.84"
              rx="1.9199999999999997"
              ry="1.9354838709677418"
              fill="none"
              stroke="#999999"
              transform="rotate(90,971.5,198)"
              pointer-events="none"
            />
            <path
              d="M 974.38 191.71 L 976.62 193.97 M 976.62 191.71 L 974.38 193.97 M 974.06 201.06 L 976.94 203.97 M 976.94 201.06 L 974.06 203.97 M 965.42 190.74 L 969.58 194.94 M 969.58 190.74 L 965.42 194.94 M 965.74 200.74 L 969.26 204.29 M 969.26 200.74 L 965.74 204.29"
              fill="none"
              stroke="#999999"
              stroke-miterlimit="10"
              transform="rotate(90,971.5,198)"
              pointer-events="none"
            />
            <rect
              x="965.1"
              y="207.35"
              width="1.6"
              height="0.65"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(90,971.5,198)"
              pointer-events="none"
            />
            <rect
              x="967.98"
              y="207.35"
              width="1.6"
              height="0.65"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(90,971.5,198)"
              pointer-events="none"
            />
            <rect
              x="970.86"
              y="207.35"
              width="1.6"
              height="0.65"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(90,971.5,198)"
              pointer-events="none"
            />
            <rect
              x="973.74"
              y="207.35"
              width="1.6"
              height="0.65"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(90,971.5,198)"
              pointer-events="none"
            />
            <rect
              x="976.62"
              y="207.35"
              width="1.6"
              height="0.65"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(90,971.5,198)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-379">
            <rect
              x="951"
              y="155"
              width="41"
              height="16"
              rx="1.83"
              ry="1.83"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(90,971.5,163)"
              pointer-events="none"
            />
            <rect
              x="953.05"
              y="159.57"
              width="16.4"
              height="9.6"
              rx="1.37"
              ry="1.37"
              fill="none"
              stroke="#999999"
              transform="rotate(90,971.5,163)"
              pointer-events="none"
            />
            <rect
              x="970.47"
              y="156.37"
              width="2.05"
              height="7.31"
              rx="1.02"
              ry="1.02"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(90,971.5,163)"
              pointer-events="none"
            />
            <rect
              x="970.47"
              y="156.37"
              width="2.05"
              height="5.03"
              rx="1.02"
              ry="1.02"
              fill="none"
              stroke="#999999"
              transform="rotate(90,971.5,163)"
              pointer-events="none"
            />
            <rect
              x="973.55"
              y="159.57"
              width="16.4"
              height="9.6"
              rx="1.37"
              ry="1.37"
              fill="none"
              stroke="#999999"
              transform="rotate(90,971.5,163)"
              pointer-events="none"
            />
            <ellipse
              cx="966.37"
              cy="162.77"
              rx="1.2812499999999998"
              ry="1.1428571428571426"
              fill="#000000"
              stroke="none"
              transform="rotate(90,971.5,163)"
              pointer-events="none"
            />
            <ellipse
              cx="976.62"
              cy="162.77"
              rx="1.2812499999999998"
              ry="1.1428571428571426"
              fill="#000000"
              stroke="none"
              transform="rotate(90,971.5,163)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-397">
            <path
              d="M 926.21 206.59 L 927.38 216.12 C 927.6 217.53 926.99 218.93 925.83 219.7 C 921.84 220.34 917.78 220.34 913.8 219.7 C 912.64 218.93 912.03 217.53 912.25 216.12 L 913.41 206.59 C 913.63 205.53 914.74 204.72 916.13 204.6 L 923.5 204.6 C 924.88 204.72 925.99 205.53 926.21 206.59 Z M 915.81 204.6 L 913.82 202.08 M 918.02 204.6 L 917.36 201.73 M 920.68 204.6 L 921.57 201.73 M 922.9 204.6 L 925.11 202.08 M 925.78 202.22 C 921.67 201.56 917.48 201.56 913.37 202.22 L 911.6 200.63 C 916.85 199.54 922.3 199.54 927.55 200.63 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              transform="rotate(90,919.6,209.94)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-398">
            <path
              d="M 891.01 206.59 L 892.18 216.12 C 892.4 217.53 891.79 218.93 890.63 219.7 C 886.64 220.34 882.58 220.34 878.6 219.7 C 877.44 218.93 876.83 217.53 877.05 216.12 L 878.21 206.59 C 878.43 205.53 879.54 204.72 880.93 204.6 L 888.3 204.6 C 889.68 204.72 890.79 205.53 891.01 206.59 Z M 880.61 204.6 L 878.62 202.08 M 882.82 204.6 L 882.16 201.73 M 885.48 204.6 L 886.37 201.73 M 887.7 204.6 L 889.91 202.08 M 890.58 202.22 C 886.47 201.56 882.28 201.56 878.17 202.22 L 876.4 200.63 C 881.65 199.54 887.1 199.54 892.35 200.63 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              transform="rotate(270,884.4,209.94)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-399">
            <path
              d="M 908.61 188.99 L 909.78 198.52 C 910 199.93 909.39 201.33 908.23 202.1 C 904.24 202.74 900.18 202.74 896.2 202.1 C 895.04 201.33 894.43 199.93 894.65 198.52 L 895.81 188.99 C 896.03 187.93 897.14 187.12 898.53 187 L 905.9 187 C 907.28 187.12 908.39 187.93 908.61 188.99 Z M 898.21 187 L 896.22 184.48 M 900.42 187 L 899.76 184.13 M 903.08 187 L 903.97 184.13 M 905.3 187 L 907.51 184.48 M 908.18 184.62 C 904.07 183.96 899.88 183.96 895.77 184.62 L 894 183.03 C 899.25 181.94 904.7 181.94 909.95 183.03 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              transform="rotate(360,902,192.34)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-400">
            <path
              d="M 908.61 248.19 L 909.78 257.72 C 910 259.13 909.39 260.53 908.23 261.3 C 904.24 261.94 900.18 261.94 896.2 261.3 C 895.04 260.53 894.43 259.13 894.65 257.72 L 895.81 248.19 C 896.03 247.13 897.14 246.32 898.53 246.2 L 905.9 246.2 C 907.28 246.32 908.39 247.13 908.61 248.19 Z M 898.21 246.2 L 896.22 243.68 M 900.42 246.2 L 899.76 243.33 M 903.08 246.2 L 903.97 243.33 M 905.3 246.2 L 907.51 243.68 M 908.18 243.82 C 904.07 243.16 899.88 243.16 895.77 243.82 L 894 242.23 C 899.25 241.14 904.7 241.14 909.95 242.23 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              transform="rotate(180,902,251.54)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-401">
            <path
              d="M 926.21 230.59 L 927.38 240.12 C 927.6 241.53 926.99 242.93 925.83 243.7 C 921.84 244.34 917.78 244.34 913.8 243.7 C 912.64 242.93 912.03 241.53 912.25 240.12 L 913.41 230.59 C 913.63 229.53 914.74 228.72 916.13 228.6 L 923.5 228.6 C 924.88 228.72 925.99 229.53 926.21 230.59 Z M 915.81 228.6 L 913.82 226.08 M 918.02 228.6 L 917.36 225.73 M 920.68 228.6 L 921.57 225.73 M 922.9 228.6 L 925.11 226.08 M 925.78 226.22 C 921.67 225.56 917.48 225.56 913.37 226.22 L 911.6 224.63 C 916.85 223.54 922.3 223.54 927.55 224.63 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              transform="rotate(90,919.6,233.94)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-402">
            <path
              d="M 891.01 230.59 L 892.18 240.12 C 892.4 241.53 891.79 242.93 890.63 243.7 C 886.64 244.34 882.58 244.34 878.6 243.7 C 877.44 242.93 876.83 241.53 877.05 240.12 L 878.21 230.59 C 878.43 229.53 879.54 228.72 880.93 228.6 L 888.3 228.6 C 889.68 228.72 890.79 229.53 891.01 230.59 Z M 880.61 228.6 L 878.62 226.08 M 882.82 228.6 L 882.16 225.73 M 885.48 228.6 L 886.37 225.73 M 887.7 228.6 L 889.91 226.08 M 890.58 226.22 C 886.47 225.56 882.28 225.56 878.17 226.22 L 876.4 224.63 C 881.65 223.54 887.1 223.54 892.35 224.63 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              transform="rotate(270,884.4,233.94)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-403">
            <rect
              x="870"
              y="201.94"
              width="64"
              height="40"
              fill="#ffffff"
              stroke="#999999"
              transform="rotate(90,902,221.94)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-406">
            <path
              d="M 840.72 130.05 L 841.89 139.58 C 842.11 140.99 841.5 142.39 840.34 143.16 C 836.35 143.8 832.29 143.8 828.31 143.16 C 827.15 142.39 826.54 140.99 826.76 139.58 L 827.92 130.05 C 828.14 128.99 829.25 128.18 830.64 128.06 L 838.01 128.06 C 839.39 128.18 840.5 128.99 840.72 130.05 Z M 830.32 128.06 L 828.33 125.54 M 832.53 128.06 L 831.87 125.19 M 835.19 128.06 L 836.08 125.19 M 837.41 128.06 L 839.62 125.54 M 840.29 125.68 C 836.18 125.02 831.99 125.02 827.88 125.68 L 826.11 124.09 C 831.36 123 836.81 123 842.06 124.09 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-407">
            <path
              d="M 840.72 165.05 L 841.89 174.58 C 842.11 175.99 841.5 177.39 840.34 178.16 C 836.35 178.8 832.29 178.8 828.31 178.16 C 827.15 177.39 826.54 175.99 826.76 174.58 L 827.92 165.05 C 828.14 163.99 829.25 163.18 830.64 163.06 L 838.01 163.06 C 839.39 163.18 840.5 163.99 840.72 165.05 Z M 830.32 163.06 L 828.33 160.54 M 832.53 163.06 L 831.87 160.19 M 835.19 163.06 L 836.08 160.19 M 837.41 163.06 L 839.62 160.54 M 840.29 160.68 C 836.18 160.02 831.99 160.02 827.88 160.68 L 826.11 159.09 C 831.36 158 836.81 158 842.06 159.09 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              transform="rotate(180,834.11,168.4)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-408">
            <path
              d="M 823.12 147.65 L 824.29 157.18 C 824.51 158.59 823.9 159.99 822.74 160.76 C 818.75 161.4 814.69 161.4 810.71 160.76 C 809.55 159.99 808.94 158.59 809.16 157.18 L 810.32 147.65 C 810.54 146.59 811.65 145.78 813.04 145.66 L 820.41 145.66 C 821.79 145.78 822.9 146.59 823.12 147.65 Z M 812.72 145.66 L 810.73 143.14 M 814.93 145.66 L 814.27 142.79 M 817.59 145.66 L 818.48 142.79 M 819.81 145.66 L 822.02 143.14 M 822.69 143.28 C 818.58 142.62 814.39 142.62 810.28 143.28 L 808.51 141.69 C 813.76 140.6 819.21 140.6 824.46 141.69 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              transform="rotate(270,816.51,151)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-409">
            <path
              d="M 882.12 147.65 L 883.29 157.18 C 883.51 158.59 882.9 159.99 881.74 160.76 C 877.75 161.4 873.69 161.4 869.71 160.76 C 868.55 159.99 867.94 158.59 868.16 157.18 L 869.32 147.65 C 869.54 146.59 870.65 145.78 872.04 145.66 L 879.41 145.66 C 880.79 145.78 881.9 146.59 882.12 147.65 Z M 871.72 145.66 L 869.73 143.14 M 873.93 145.66 L 873.27 142.79 M 876.59 145.66 L 877.48 142.79 M 878.81 145.66 L 881.02 143.14 M 881.69 143.28 C 877.58 142.62 873.39 142.62 869.28 143.28 L 867.51 141.69 C 872.76 140.6 878.21 140.6 883.46 141.69 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              transform="rotate(90,875.51,151)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-410">
            <path
              d="M 864.72 130.05 L 865.89 139.58 C 866.11 140.99 865.5 142.39 864.34 143.16 C 860.35 143.8 856.29 143.8 852.31 143.16 C 851.15 142.39 850.54 140.99 850.76 139.58 L 851.92 130.05 C 852.14 128.99 853.25 128.18 854.64 128.06 L 862.01 128.06 C 863.39 128.18 864.5 128.99 864.72 130.05 Z M 854.32 128.06 L 852.33 125.54 M 856.53 128.06 L 855.87 125.19 M 859.19 128.06 L 860.08 125.19 M 861.41 128.06 L 863.62 125.54 M 864.29 125.68 C 860.18 125.02 855.99 125.02 851.88 125.68 L 850.11 124.09 C 855.36 123 860.81 123 866.06 124.09 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-411">
            <path
              d="M 864.72 165.05 L 865.89 174.58 C 866.11 175.99 865.5 177.39 864.34 178.16 C 860.35 178.8 856.29 178.8 852.31 178.16 C 851.15 177.39 850.54 175.99 850.76 174.58 L 851.92 165.05 C 852.14 163.99 853.25 163.18 854.64 163.06 L 862.01 163.06 C 863.39 163.18 864.5 163.99 864.72 165.05 Z M 854.32 163.06 L 852.33 160.54 M 856.53 163.06 L 855.87 160.19 M 859.19 163.06 L 860.08 160.19 M 861.41 163.06 L 863.62 160.54 M 864.29 160.68 C 860.18 160.02 855.99 160.02 851.88 160.68 L 850.11 159.09 C 855.36 158 860.81 158 866.06 159.09 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              transform="rotate(180,858.11,168.4)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-412">
            <rect x="814.11" y="131" width="64" height="40" fill="#ffffff" stroke="#999999" pointer-events="none" />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-414">
            <path
              d="M 796.61 198.05 L 797.78 207.58 C 798 208.99 797.39 210.39 796.23 211.16 C 792.24 211.8 788.18 211.8 784.2 211.16 C 783.04 210.39 782.43 208.99 782.65 207.58 L 783.81 198.05 C 784.03 196.99 785.14 196.18 786.53 196.06 L 793.9 196.06 C 795.28 196.18 796.39 196.99 796.61 198.05 Z M 786.21 196.06 L 784.22 193.54 M 788.42 196.06 L 787.76 193.19 M 791.08 196.06 L 791.97 193.19 M 793.3 196.06 L 795.51 193.54 M 796.18 193.68 C 792.07 193.02 787.88 193.02 783.77 193.68 L 782 192.09 C 787.25 191 792.7 191 797.95 192.09 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-415">
            <path
              d="M 796.61 233.05 L 797.78 242.58 C 798 243.99 797.39 245.39 796.23 246.16 C 792.24 246.8 788.18 246.8 784.2 246.16 C 783.04 245.39 782.43 243.99 782.65 242.58 L 783.81 233.05 C 784.03 231.99 785.14 231.18 786.53 231.06 L 793.9 231.06 C 795.28 231.18 796.39 231.99 796.61 233.05 Z M 786.21 231.06 L 784.22 228.54 M 788.42 231.06 L 787.76 228.19 M 791.08 231.06 L 791.97 228.19 M 793.3 231.06 L 795.51 228.54 M 796.18 228.68 C 792.07 228.02 787.88 228.02 783.77 228.68 L 782 227.09 C 787.25 226 792.7 226 797.95 227.09 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              transform="rotate(180,790,236.4)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-416">
            <path
              d="M 779.01 215.65 L 780.18 225.18 C 780.4 226.59 779.79 227.99 778.63 228.76 C 774.64 229.4 770.58 229.4 766.6 228.76 C 765.44 227.99 764.83 226.59 765.05 225.18 L 766.21 215.65 C 766.43 214.59 767.54 213.78 768.93 213.66 L 776.3 213.66 C 777.68 213.78 778.79 214.59 779.01 215.65 Z M 768.61 213.66 L 766.62 211.14 M 770.82 213.66 L 770.16 210.79 M 773.48 213.66 L 774.37 210.79 M 775.7 213.66 L 777.91 211.14 M 778.58 211.28 C 774.47 210.62 770.28 210.62 766.17 211.28 L 764.4 209.69 C 769.65 208.6 775.1 208.6 780.35 209.69 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              transform="rotate(270,772.4,219)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-417">
            <path
              d="M 838.01 215.65 L 839.18 225.18 C 839.4 226.59 838.79 227.99 837.63 228.76 C 833.64 229.4 829.58 229.4 825.6 228.76 C 824.44 227.99 823.83 226.59 824.05 225.18 L 825.21 215.65 C 825.43 214.59 826.54 213.78 827.93 213.66 L 835.3 213.66 C 836.68 213.78 837.79 214.59 838.01 215.65 Z M 827.61 213.66 L 825.62 211.14 M 829.82 213.66 L 829.16 210.79 M 832.48 213.66 L 833.37 210.79 M 834.7 213.66 L 836.91 211.14 M 837.58 211.28 C 833.47 210.62 829.28 210.62 825.17 211.28 L 823.4 209.69 C 828.65 208.6 834.1 208.6 839.35 209.69 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              transform="rotate(90,831.4,219)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-418">
            <path
              d="M 820.61 198.05 L 821.78 207.58 C 822 208.99 821.39 210.39 820.23 211.16 C 816.24 211.8 812.18 211.8 808.2 211.16 C 807.04 210.39 806.43 208.99 806.65 207.58 L 807.81 198.05 C 808.03 196.99 809.14 196.18 810.53 196.06 L 817.9 196.06 C 819.28 196.18 820.39 196.99 820.61 198.05 Z M 810.21 196.06 L 808.22 193.54 M 812.42 196.06 L 811.76 193.19 M 815.08 196.06 L 815.97 193.19 M 817.3 196.06 L 819.51 193.54 M 820.18 193.68 C 816.07 193.02 811.88 193.02 807.77 193.68 L 806 192.09 C 811.25 191 816.7 191 821.95 192.09 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-419">
            <path
              d="M 820.61 233.05 L 821.78 242.58 C 822 243.99 821.39 245.39 820.23 246.16 C 816.24 246.8 812.18 246.8 808.2 246.16 C 807.04 245.39 806.43 243.99 806.65 242.58 L 807.81 233.05 C 808.03 231.99 809.14 231.18 810.53 231.06 L 817.9 231.06 C 819.28 231.18 820.39 231.99 820.61 233.05 Z M 810.21 231.06 L 808.22 228.54 M 812.42 231.06 L 811.76 228.19 M 815.08 231.06 L 815.97 228.19 M 817.3 231.06 L 819.51 228.54 M 820.18 228.68 C 816.07 228.02 811.88 228.02 807.77 228.68 L 806 227.09 C 811.25 226 816.7 226 821.95 227.09 Z"
              fill="#ffffff"
              stroke="#999999"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              transform="rotate(180,814,236.4)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-420">
            <rect x="770" y="199" width="64" height="40" fill="#ffffff" stroke="#999999" pointer-events="none" />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-422">
            <rect
              x="213"
              y="90"
              width="23.94"
              height="5"
              fill="rgb(255, 255, 255)"
              stroke="#999999"
              transform="rotate(180,224.97,102.72)"
              pointer-events="none"
            />
            <path
              d="M 213 95 C 213 108.22 223.72 118.94 236.94 118.94 L 236.94 95"
              fill="none"
              stroke="#999999"
              stroke-miterlimit="10"
              transform="rotate(180,224.97,102.72)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-436"
            content='&lt;object label="" class="desks" sector="HR" name="desk-6" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="HR"
            data-name="desk-6"
            data-placeholders="null"
          >
            <rect x="812" y="650" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-438"
            content='&lt;object label="" class="desks" sector="HR" name="desk-5" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="HR"
            data-name="desk-5"
            data-placeholders="null"
          >
            <rect x="849" y="650" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-439"
            content='&lt;object label="" class="desks" sector="HR" name="desk-4" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="HR"
            data-name="desk-4"
            data-placeholders="null"
          >
            <rect x="886" y="650" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-440"
            content='&lt;object label="" class="desks" sector="HR" name="desk-1"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="HR"
            data-name="desk-1"
          >
            <rect x="812.14" y="672" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-441"
            content='&lt;object label="" class="desks" sector="HR" name="desk-2" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="HR"
            data-name="desk-2"
            data-placeholders="null"
          >
            <rect x="849.14" y="672" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-442"
            content='&lt;object label="" class="desks" sector="HR" name="desk-3" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="HR"
            data-name="desk-3"
            data-placeholders="null"
          >
            <rect x="886.14" y="672" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-443"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-12" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-12"
            data-placeholders="null"
          >
            <rect x="812" y="563" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-444"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-11" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-11"
            data-placeholders="null"
          >
            <rect x="849" y="563" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-445"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-10" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-10"
            data-placeholders="null"
          >
            <rect x="886" y="563" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-446"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-7" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-7"
            data-placeholders="null"
          >
            <rect x="812.14" y="585" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-447"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-8" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-8"
            data-placeholders="null"
          >
            <rect x="849.14" y="585" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-448"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-9" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-9"
            data-placeholders="null"
          >
            <rect x="886.14" y="585" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-449"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-18" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-18"
            data-placeholders="null"
          >
            <rect x="830" y="471" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-450"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-17" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-17"
            data-placeholders="null"
          >
            <rect x="867" y="471" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-451"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-16" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-16"
            data-placeholders="null"
          >
            <rect x="904" y="471" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-452"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-13" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-13"
            data-placeholders="null"
          >
            <rect x="830.14" y="494" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-453"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-14" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-14"
            data-placeholders="null"
          >
            <rect x="867.14" y="494" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-454"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-15" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-15"
            data-placeholders="null"
          >
            <rect x="904.14" y="494" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-455"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-24" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-24"
            data-placeholders="null"
          >
            <rect x="829" y="333" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-456"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-23" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-23"
            data-placeholders="null"
          >
            <rect x="866" y="333" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-457"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-22" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-22"
            data-placeholders="null"
          >
            <rect x="903" y="333" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-458"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-19" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-19"
            data-placeholders="null"
          >
            <rect x="829.14" y="356" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-459"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-20" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-20"
            data-placeholders="null"
          >
            <rect x="866.14" y="356" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-460"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-21" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-21"
            data-placeholders="null"
          >
            <rect x="903.14" y="356" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-461"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-30" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-30"
            data-placeholders="null"
          >
            <rect x="693" y="471" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-462"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-29" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-29"
            data-placeholders="null"
          >
            <rect x="730" y="471" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-463"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-28" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-28"
            data-placeholders="null"
          >
            <rect x="767" y="471" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-464"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-25" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-25"
            data-placeholders="null"
          >
            <rect x="693.14" y="494" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-465"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-26" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-26"
            data-placeholders="null"
          >
            <rect x="730.14" y="494" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-466"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-27" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-27"
            data-placeholders="null"
          >
            <rect x="767.14" y="494" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-467"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-36" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-36"
            data-placeholders="null"
          >
            <rect x="693" y="333" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-468"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-35" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-35"
            data-placeholders="null"
          >
            <rect x="730" y="333" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-469"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-34" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-34"
            data-placeholders="null"
          >
            <rect x="767" y="333" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-470"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-31" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-31"
            data-placeholders="null"
          >
            <rect x="693.14" y="356" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-471"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-32" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-32"
            data-placeholders="null"
          >
            <rect x="730.14" y="356" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-472"
            content='&lt;object label="" class="desks" sector="Operations" name="desk-33" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Operations"
            data-name="desk-33"
            data-placeholders="null"
          >
            <rect x="767.14" y="356" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-476"
            content='&lt;object label="" class="desks" sector="Sales" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Sales"
            data-placeholders="null"
          >
            <rect
              x="620.5"
              y="321.31"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,639,332.31)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-477"
            content='&lt;object label="" class="desks" sector="Sales" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Sales"
            data-placeholders="null"
          >
            <rect
              x="620.5"
              y="284.31"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,639,295.31)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-478"
            content='&lt;object label="" class="desks" sector="Sales" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Sales"
            data-placeholders="null"
          >
            <rect
              x="620.5"
              y="358.5"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,639,369.5)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-479"
            content='&lt;object label="" class="desks" sector="Sales" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Sales"
            data-placeholders="null"
          >
            <rect
              x="597.5"
              y="479.5"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,616,490.5)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-480"
            content='&lt;object label="" class="desks" sector="Sales" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Sales"
            data-placeholders="null"
          >
            <rect
              x="597.5"
              y="442.5"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,616,453.5)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-481"
            content='&lt;object label="" class="desks" sector="Sales" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Sales"
            data-placeholders="null"
          >
            <rect
              x="597.5"
              y="516.69"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,616,527.69)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-482"
            content='&lt;object label="" class="desks" sector="Sales" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Sales"
            data-placeholders="null"
          >
            <rect
              x="620.5"
              y="479.5"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,639,490.5)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-483"
            content='&lt;object label="" class="desks" sector="Sales" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Sales"
            data-placeholders="null"
          >
            <rect
              x="620.5"
              y="442.5"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,639,453.5)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-484"
            content='&lt;object label="" class="desks" sector="Sales" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Sales"
            data-placeholders="null"
          >
            <rect
              x="620.5"
              y="516.69"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,639,527.69)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-485"
            content='&lt;object label="" class="desks" sector="Marketing" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Marketing"
            data-placeholders="null"
          >
            <rect x="444" y="481" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-486"
            content='&lt;object label="" class="desks" sector="Marketing" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Marketing"
            data-placeholders="null"
          >
            <rect x="481" y="481" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-487"
            content='&lt;object label="" class="desks" sector="Marketing" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Marketing"
            data-placeholders="null"
          >
            <rect x="518" y="481" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-488"
            content='&lt;object label="" class="desks" sector="Marketing" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Marketing"
            data-placeholders="null"
          >
            <rect x="444.14" y="504" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-489"
            content='&lt;object label="" class="desks" sector="Marketing" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Marketing"
            data-placeholders="null"
          >
            <rect x="481.14" y="504" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-490"
            content='&lt;object label="" class="desks" sector="Marketing" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Marketing"
            data-placeholders="null"
          >
            <rect x="518.14" y="504" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-491"
            content='&lt;object label="" class="desks" sector="Marketing" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Marketing"
            data-placeholders="null"
          >
            <rect x="414" y="357" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-492"
            content='&lt;object label="" class="desks" sector="Marketing" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Marketing"
            data-placeholders="null"
          >
            <rect x="451" y="357" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-493"
            content='&lt;object label="" class="desks" sector="Marketing" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Marketing"
            data-placeholders="null"
          >
            <rect x="488" y="357" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-494"
            content='&lt;object label="" class="desks" sector="Marketing" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Marketing"
            data-placeholders="null"
          >
            <rect x="414.14" y="380" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-495"
            content='&lt;object label="" class="desks" sector="Marketing" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Marketing"
            data-placeholders="null"
          >
            <rect x="451.14" y="380" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-496"
            content='&lt;object label="" class="desks" sector="Marketing" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Marketing"
            data-placeholders="null"
          >
            <rect x="488.14" y="380" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-269">
            <path
              d="M 383.15 353.51 L 384.48 366.17 C 384.74 368.04 384.04 369.9 382.7 370.92 C 378.12 371.77 373.46 371.77 368.88 370.92 C 367.54 369.9 366.84 368.04 367.1 366.17 L 368.43 353.51 C 368.69 352.11 369.97 351.03 371.55 350.87 L 380.02 350.87 C 381.61 351.03 382.89 352.11 383.15 353.51 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,375.79,360.46)"
              pointer-events="none"
            />
            <path
              d="M 382.8 350.61 C 383.17 350.78 383.37 351.3 383.25 351.79 C 383.12 352.28 382.72 352.54 382.35 352.38 C 377.95 351.11 373.38 351.11 368.98 352.38 C 368.7 352.29 368.48 352.02 368.39 351.66 C 368.3 351.3 368.35 350.91 368.53 350.61 C 373.22 349.16 378.11 349.16 382.8 350.61"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,375.79,360.46)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-270">
            <path
              d="M 383.15 314.51 L 384.48 327.17 C 384.74 329.04 384.04 330.9 382.7 331.92 C 378.12 332.77 373.46 332.77 368.88 331.92 C 367.54 330.9 366.84 329.04 367.1 327.17 L 368.43 314.51 C 368.69 313.11 369.97 312.03 371.55 311.87 L 380.02 311.87 C 381.61 312.03 382.89 313.11 383.15 314.51 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,375.79,321.46)"
              pointer-events="none"
            />
            <path
              d="M 382.8 311.61 C 383.17 311.78 383.37 312.3 383.25 312.79 C 383.12 313.28 382.72 313.54 382.35 313.38 C 377.95 312.11 373.38 312.11 368.98 313.38 C 368.7 313.29 368.48 313.02 368.39 312.66 C 368.3 312.3 368.35 311.91 368.53 311.61 C 373.22 310.16 378.11 310.16 382.8 311.61"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,375.79,321.46)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-271">
            <path
              d="M 383.15 392.51 L 384.48 405.17 C 384.74 407.04 384.04 408.9 382.7 409.92 C 378.12 410.77 373.46 410.77 368.88 409.92 C 367.54 408.9 366.84 407.04 367.1 405.17 L 368.43 392.51 C 368.69 391.11 369.97 390.03 371.55 389.87 L 380.02 389.87 C 381.61 390.03 382.89 391.11 383.15 392.51 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,375.79,399.46)"
              pointer-events="none"
            />
            <path
              d="M 382.8 389.61 C 383.17 389.78 383.37 390.3 383.25 390.79 C 383.12 391.28 382.72 391.54 382.35 391.38 C 377.95 390.11 373.38 390.11 368.98 391.38 C 368.7 391.29 368.48 391.02 368.39 390.66 C 368.3 390.3 368.35 389.91 368.53 389.61 C 373.22 388.16 378.11 388.16 382.8 389.61"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,375.79,399.46)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-272">
            <path
              d="M 340.15 353.51 L 341.48 366.17 C 341.74 368.04 341.04 369.9 339.7 370.92 C 335.12 371.77 330.46 371.77 325.88 370.92 C 324.54 369.9 323.84 368.04 324.1 366.17 L 325.43 353.51 C 325.69 352.11 326.97 351.03 328.55 350.87 L 337.02 350.87 C 338.61 351.03 339.89 352.11 340.15 353.51 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,332.79,360.46)"
              pointer-events="none"
            />
            <path
              d="M 339.8 350.61 C 340.17 350.78 340.37 351.3 340.25 351.79 C 340.12 352.28 339.72 352.54 339.35 352.38 C 334.95 351.11 330.38 351.11 325.98 352.38 C 325.7 352.29 325.48 352.02 325.39 351.66 C 325.3 351.3 325.35 350.91 325.53 350.61 C 330.22 349.16 335.11 349.16 339.8 350.61"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,332.79,360.46)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-273">
            <path
              d="M 340.15 314.51 L 341.48 327.17 C 341.74 329.04 341.04 330.9 339.7 331.92 C 335.12 332.77 330.46 332.77 325.88 331.92 C 324.54 330.9 323.84 329.04 324.1 327.17 L 325.43 314.51 C 325.69 313.11 326.97 312.03 328.55 311.87 L 337.02 311.87 C 338.61 312.03 339.89 313.11 340.15 314.51 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,332.79,321.46)"
              pointer-events="none"
            />
            <path
              d="M 339.8 311.61 C 340.17 311.78 340.37 312.3 340.25 312.79 C 340.12 313.28 339.72 313.54 339.35 313.38 C 334.95 312.11 330.38 312.11 325.98 313.38 C 325.7 313.29 325.48 313.02 325.39 312.66 C 325.3 312.3 325.35 311.91 325.53 311.61 C 330.22 310.16 335.11 310.16 339.8 311.61"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,332.79,321.46)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-274">
            <path
              d="M 340.15 392.51 L 341.48 405.17 C 341.74 407.04 341.04 408.9 339.7 409.92 C 335.12 410.77 330.46 410.77 325.88 409.92 C 324.54 408.9 323.84 407.04 324.1 405.17 L 325.43 392.51 C 325.69 391.11 326.97 390.03 328.55 389.87 L 337.02 389.87 C 338.61 390.03 339.89 391.11 340.15 392.51 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,332.79,399.46)"
              pointer-events="none"
            />
            <path
              d="M 339.8 389.61 C 340.17 389.78 340.37 390.3 340.25 390.79 C 340.12 391.28 339.72 391.54 339.35 391.38 C 334.95 390.11 330.38 390.11 325.98 391.38 C 325.7 391.29 325.48 391.02 325.39 390.66 C 325.3 390.3 325.35 389.91 325.53 389.61 C 330.22 388.16 335.11 388.16 339.8 389.61"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,332.79,399.46)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-275">
            <path
              d="M 354.84 313.16 L 354.84 408.16"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-276">
            <rect
              x="331.84"
              y="305.16"
              width="45"
              height="111"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(180,354.34,360.66)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-277">
            <path
              d="M 354.14 310.76 L 354.46 410.77"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-280">
            <path
              d="M 285.15 353.51 L 286.48 366.17 C 286.74 368.04 286.04 369.9 284.7 370.92 C 280.12 371.77 275.46 371.77 270.88 370.92 C 269.54 369.9 268.84 368.04 269.1 366.17 L 270.43 353.51 C 270.69 352.11 271.97 351.03 273.55 350.87 L 282.02 350.87 C 283.61 351.03 284.89 352.11 285.15 353.51 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,277.79,360.46)"
              pointer-events="none"
            />
            <path
              d="M 284.8 350.61 C 285.17 350.78 285.37 351.3 285.25 351.79 C 285.12 352.28 284.72 352.54 284.35 352.38 C 279.95 351.11 275.38 351.11 270.98 352.38 C 270.7 352.29 270.48 352.02 270.39 351.66 C 270.3 351.3 270.35 350.91 270.53 350.61 C 275.22 349.16 280.11 349.16 284.8 350.61"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,277.79,360.46)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-281">
            <path
              d="M 285.15 314.51 L 286.48 327.17 C 286.74 329.04 286.04 330.9 284.7 331.92 C 280.12 332.77 275.46 332.77 270.88 331.92 C 269.54 330.9 268.84 329.04 269.1 327.17 L 270.43 314.51 C 270.69 313.11 271.97 312.03 273.55 311.87 L 282.02 311.87 C 283.61 312.03 284.89 313.11 285.15 314.51 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,277.79,321.46)"
              pointer-events="none"
            />
            <path
              d="M 284.8 311.61 C 285.17 311.78 285.37 312.3 285.25 312.79 C 285.12 313.28 284.72 313.54 284.35 313.38 C 279.95 312.11 275.38 312.11 270.98 313.38 C 270.7 313.29 270.48 313.02 270.39 312.66 C 270.3 312.3 270.35 311.91 270.53 311.61 C 275.22 310.16 280.11 310.16 284.8 311.61"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,277.79,321.46)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-282">
            <path
              d="M 285.15 392.51 L 286.48 405.17 C 286.74 407.04 286.04 408.9 284.7 409.92 C 280.12 410.77 275.46 410.77 270.88 409.92 C 269.54 408.9 268.84 407.04 269.1 405.17 L 270.43 392.51 C 270.69 391.11 271.97 390.03 273.55 389.87 L 282.02 389.87 C 283.61 390.03 284.89 391.11 285.15 392.51 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,277.79,399.46)"
              pointer-events="none"
            />
            <path
              d="M 284.8 389.61 C 285.17 389.78 285.37 390.3 285.25 390.79 C 285.12 391.28 284.72 391.54 284.35 391.38 C 279.95 390.11 275.38 390.11 270.98 391.38 C 270.7 391.29 270.48 391.02 270.39 390.66 C 270.3 390.3 270.35 389.91 270.53 389.61 C 275.22 388.16 280.11 388.16 284.8 389.61"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(90,277.79,399.46)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-283">
            <path
              d="M 242.15 353.51 L 243.48 366.17 C 243.74 368.04 243.04 369.9 241.7 370.92 C 237.12 371.77 232.46 371.77 227.88 370.92 C 226.54 369.9 225.84 368.04 226.1 366.17 L 227.43 353.51 C 227.69 352.11 228.97 351.03 230.55 350.87 L 239.02 350.87 C 240.61 351.03 241.89 352.11 242.15 353.51 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,234.79,360.46)"
              pointer-events="none"
            />
            <path
              d="M 241.8 350.61 C 242.17 350.78 242.37 351.3 242.25 351.79 C 242.12 352.28 241.72 352.54 241.35 352.38 C 236.95 351.11 232.38 351.11 227.98 352.38 C 227.7 352.29 227.48 352.02 227.39 351.66 C 227.3 351.3 227.35 350.91 227.53 350.61 C 232.22 349.16 237.11 349.16 241.8 350.61"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,234.79,360.46)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-284">
            <path
              d="M 242.15 314.51 L 243.48 327.17 C 243.74 329.04 243.04 330.9 241.7 331.92 C 237.12 332.77 232.46 332.77 227.88 331.92 C 226.54 330.9 225.84 329.04 226.1 327.17 L 227.43 314.51 C 227.69 313.11 228.97 312.03 230.55 311.87 L 239.02 311.87 C 240.61 312.03 241.89 313.11 242.15 314.51 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,234.79,321.46)"
              pointer-events="none"
            />
            <path
              d="M 241.8 311.61 C 242.17 311.78 242.37 312.3 242.25 312.79 C 242.12 313.28 241.72 313.54 241.35 313.38 C 236.95 312.11 232.38 312.11 227.98 313.38 C 227.7 313.29 227.48 313.02 227.39 312.66 C 227.3 312.3 227.35 311.91 227.53 311.61 C 232.22 310.16 237.11 310.16 241.8 311.61"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,234.79,321.46)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-285">
            <path
              d="M 242.15 392.51 L 243.48 405.17 C 243.74 407.04 243.04 408.9 241.7 409.92 C 237.12 410.77 232.46 410.77 227.88 409.92 C 226.54 408.9 225.84 407.04 226.1 405.17 L 227.43 392.51 C 227.69 391.11 228.97 390.03 230.55 389.87 L 239.02 389.87 C 240.61 390.03 241.89 391.11 242.15 392.51 Z"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,234.79,399.46)"
              pointer-events="none"
            />
            <path
              d="M 241.8 389.61 C 242.17 389.78 242.37 390.3 242.25 390.79 C 242.12 391.28 241.72 391.54 241.35 391.38 C 236.95 390.11 232.38 390.11 227.98 391.38 C 227.7 391.29 227.48 391.02 227.39 390.66 C 227.3 390.3 227.35 389.91 227.53 389.61 C 232.22 388.16 237.11 388.16 241.8 389.61"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-miterlimit="10"
              transform="rotate(270,234.79,399.46)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-286">
            <path
              d="M 256.84 313.16 L 256.84 408.16"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-287">
            <rect
              x="233.84"
              y="305.16"
              width="45"
              height="111"
              fill="rgb(255, 255, 255)"
              stroke="#b3b3b3"
              stroke-width="2"
              transform="rotate(180,256.34,360.66)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-288">
            <path
              d="M 256.78 310.76 L 257.1 410.77"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-497"
            content='&lt;object label="" class="desks" sector="IT" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="IT"
            data-placeholders="null"
          >
            <rect
              x="324.5"
              y="349.5"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,343,360.5)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-498"
            content='&lt;object label="" class="desks" sector="IT" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="IT"
            data-placeholders="null"
          >
            <rect
              x="324.5"
              y="312.5"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,343,323.5)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-499"
            content='&lt;object label="" class="desks" sector="IT" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="IT"
            data-placeholders="null"
          >
            <rect
              x="324.5"
              y="386.69"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,343,397.69)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-500"
            content='&lt;object label="" class="desks" sector="IT" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="IT"
            data-placeholders="null"
          >
            <rect
              x="347.5"
              y="349.5"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,366,360.5)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-501"
            content='&lt;object label="" class="desks" sector="IT" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="IT"
            data-placeholders="null"
          >
            <rect
              x="347.5"
              y="312.5"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,366,323.5)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-502"
            content='&lt;object label="" class="desks" sector="IT" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="IT"
            data-placeholders="null"
          >
            <rect
              x="347.5"
              y="386.69"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,366,397.69)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-503"
            content='&lt;object label="" class="desks" sector="IT" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="IT"
            data-placeholders="null"
          >
            <rect
              x="226.5"
              y="349.5"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,245,360.5)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-504"
            content='&lt;object label="" class="desks" sector="IT" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="IT"
            data-placeholders="null"
          >
            <rect
              x="226.5"
              y="312.5"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,245,323.5)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-505"
            content='&lt;object label="" class="desks" sector="IT" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="IT"
            data-placeholders="null"
          >
            <rect
              x="226.5"
              y="386.69"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,245,397.69)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-506"
            content='&lt;object label="" class="desks" sector="IT" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="IT"
            data-placeholders="null"
          >
            <rect
              x="249.5"
              y="349.5"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,268,360.5)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-507"
            content='&lt;object label="" class="desks" sector="IT" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="IT"
            data-placeholders="null"
          >
            <rect
              x="249.5"
              y="312.5"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,268,323.5)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-508"
            content='&lt;object label="" class="desks" sector="IT" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="IT"
            data-placeholders="null"
          >
            <rect
              x="249.5"
              y="386.69"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,268,397.69)"
              pointer-events="none"
            />
          </g>
          <g id="cell-pobrXiST7QsAUhpJEmMd-509">
            <path
              d="M 250.21 480 L 250.22 542.72"
              fill="none"
              stroke="#b3b3b3"
              stroke-opacity="0.6"
              stroke-width="2"
              stroke-miterlimit="10"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-510"
            content='&lt;object label="" class="desks" sector="Design" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Design"
            data-placeholders="null"
          >
            <rect x="298" y="481" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-511"
            content='&lt;object label="" class="desks" sector="Design" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Design"
            data-placeholders="null"
          >
            <rect x="335" y="481" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-512"
            content='&lt;object label="" class="desks" sector="Design" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Design"
            data-placeholders="null"
          >
            <rect x="372" y="481" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-513"
            content='&lt;object label="" class="desks" sector="Design" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Design"
            data-placeholders="null"
          >
            <rect x="298.14" y="504" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-514"
            content='&lt;object label="" class="desks" sector="Design" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Design"
            data-placeholders="null"
          >
            <rect x="335.14" y="504" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-515"
            content='&lt;object label="" class="desks" sector="Design" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Design"
            data-placeholders="null"
          >
            <rect x="372.14" y="504" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-516"
            content='&lt;object label="" class="desks" sector="Design" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Design"
            data-placeholders="null"
          >
            <rect
              x="220.5"
              y="481.31"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,239,492.31)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-517"
            content='&lt;object label="" class="desks" sector="Design" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Design"
            data-placeholders="null"
          >
            <rect
              x="220.5"
              y="518.5"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,239,529.5)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-518"
            content='&lt;object label="" class="desks" sector="Design" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Design"
            data-placeholders="null"
          >
            <rect
              x="243.5"
              y="481.31"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,262,492.31)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-519"
            content='&lt;object label="" class="desks" sector="Design" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Design"
            data-placeholders="null"
          >
            <rect
              x="243.5"
              y="518.5"
              width="37"
              height="22"
              fill="none"
              stroke="#ffffff"
              transform="rotate(90,262,529.5)"
              pointer-events="none"
            />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-520"
            content='&lt;object label="" class="desks" sector="Finance" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Finance"
            data-placeholders="null"
          >
            <rect x="9" y="485" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-521"
            content='&lt;object label="" class="desks" sector="Finance" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Finance"
            data-placeholders="null"
          >
            <rect x="46" y="485" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-522"
            content='&lt;object label="" class="desks" sector="Finance" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Finance"
            data-placeholders="null"
          >
            <rect x="83" y="485" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-523"
            content='&lt;object label="" class="desks" sector="Finance" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Finance"
            data-placeholders="null"
          >
            <rect x="9.14" y="508" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-524"
            content='&lt;object label="" class="desks" sector="Finance" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Finance"
            data-placeholders="null"
          >
            <rect x="46.14" y="508" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-525"
            content='&lt;object label="" class="desks" sector="Finance" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Finance"
            data-placeholders="null"
          >
            <rect x="83.14" y="508" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-526"
            content='&lt;object label="" class="desks" sector="Finance" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Finance"
            data-placeholders="null"
          >
            <rect x="9" y="390" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-527"
            content='&lt;object label="" class="desks" sector="Finance" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Finance"
            data-placeholders="null"
          >
            <rect x="46" y="390" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-528"
            content='&lt;object label="" class="desks" sector="Finance" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Finance"
            data-placeholders="null"
          >
            <rect x="83" y="390" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-529"
            content='&lt;object label="" class="desks" sector="Finance" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Finance"
            data-placeholders="null"
          >
            <rect x="9.14" y="413" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-530"
            content='&lt;object label="" class="desks" sector="Finance" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Finance"
            data-placeholders="null"
          >
            <rect x="46.14" y="413" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-531"
            content='&lt;object label="" class="desks" sector="Finance" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Finance"
            data-placeholders="null"
          >
            <rect x="83.14" y="413" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-532"
            content='&lt;object label="" class="desks" sector="Finance" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Finance"
            data-placeholders="null"
          >
            <rect x="9" y="303" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-533"
            content='&lt;object label="" class="desks" sector="Finance" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Finance"
            data-placeholders="null"
          >
            <rect x="46" y="303" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-534"
            content='&lt;object label="" class="desks" sector="Finance" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Finance"
            data-placeholders="null"
          >
            <rect x="83" y="303" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-535"
            content='&lt;object label="" class="desks" sector="Finance" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Finance"
            data-placeholders="null"
          >
            <rect x="9.14" y="326" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-536"
            content='&lt;object label="" class="desks" sector="Finance" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Finance"
            data-placeholders="null"
          >
            <rect x="46.14" y="326" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
          <g
            id="cell-pobrXiST7QsAUhpJEmMd-537"
            content='&lt;object label="" class="desks" sector="Finance" placeholders="null"/&gt;'
            data-label=""
            data-class="desks"
            data-sector="Finance"
            data-placeholders="null"
          >
            <rect x="83.14" y="326" width="37" height="22" fill="none" stroke="#ffffff" pointer-events="none" />
          </g>
        </g>
      </svg>
    </PlanWrapper>
  );
};
