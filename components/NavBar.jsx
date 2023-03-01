import React from "react";
import Image from "next/image";

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg    bg-body-tertiary">
        <div className="container-fluid ">
          <svg
            width="200"
            height="100"
            viewBox="0 0 468 165"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M293 44.263L343 119.263H305L272 82.263L293 44.263Z"
              fill="#DA72D6"
              fill-opacity="0.74"
            />
            <path
              d="M338 36.763C338 56.9214 305.987 74.263 285 74.263C264.013 74.263 262 39.4214 262 19.263C262 -0.895409 279.013 0.26298 300 0.26298C320.987 0.26298 338 16.6046 338 36.763Z"
              fill="#DA72D6"
              fill-opacity="0.74"
            />
            <path
              d="M238.226 60.0282C249.672 88.9196 236.748 111.37 238.226 109.842C238.226 109.842 232.646 119.263 198.228 119.263C184.89 119.263 171.665 117.839 160.577 109.842C149.49 101.844 141.446 89.7393 137.941 75.7763C134.436 61.8132 135.707 46.9405 141.518 33.9201C147.329 20.8996 157.286 10.6164 169.539 4.98016C181.791 -0.656132 195.508 -1.26246 208.14 3.27379C220.773 7.81003 231.463 17.1805 238.226 29.6451L218.36 42.4062C214.437 35.1769 208.237 29.742 200.91 27.1111C193.583 24.4801 185.628 24.8317 178.522 28.1007C171.415 31.3697 165.64 37.3339 162.27 44.8857C158.9 52.4374 158.162 61.0635 160.195 69.162C162.228 77.2604 166.893 84.2809 173.324 88.9196C179.755 93.5583 187.514 95.4999 195.161 94.384C202.808 93.268 200.91 75.7763 200.91 75.7763C200.91 75.7763 178.522 91.9558 187.455 60.0282L238.226 60.0282Z"
              fill="#DA72D6"
              fill-opacity="0.74"
            />
            <rect
              x="262"
              y="0.263"
              width="20"
              height="119"
              fill="#DA72D6"
              fill-opacity="0.74"
            />
            <path
              d="M107 0.263H122V119.263H107V0.263Z"
              fill="#DA72D6"
              fill-opacity="0.74"
            />
            <path
              d="M29 0.823733L73 0.823727L123.064 120.367L73 120.367L29 0.823733Z"
              fill="#DA72D6"
              fill-opacity="0.74"
            />
            <rect
              x="29"
              y="0.263"
              width="15"
              height="119"
              fill="#DA72D6"
              fill-opacity="0.74"
            />
            <rect
              y="0.263"
              width="20"
              height="119"
              fill="#DA72D6"
              fill-opacity="0.74"
            />
            <g filter="url(#filter0_d_0_1)">
              <path
                d="M300 24.263L302.919 33.2458H312.364L304.723 38.7974L307.641 47.7802L300 42.2286L292.359 47.7802L295.277 38.7974L287.636 33.2458H297.081L300 24.263Z"
                fill="white"
              />
            </g>
            <path
              d="M405.93 0.263L449.231 82.013H362.628L405.93 0.263Z"
              fill="#DA72D6"
              fill-opacity="0.74"
            />
            <path
              d="M405.43 44.263L417.121 64.513H393.738L405.43 44.263Z"
              fill="white"
            />
            <path
              d="M367 73.844L392 73.844L371.43 119.075L345 119.075L367 73.844Z"
              fill="#DA72D6"
              fill-opacity="0.74"
            />
            <path
              d="M467.902 119.07L444.565 119.07L418.902 73.8309L444.565 73.8309L467.902 119.07Z"
              fill="#DA72D6"
              fill-opacity="0.74"
            />
            <g>
              <path
                d="M317.716 143.455C318.303 139.894 319.312 136.617 320.741 133.625C322.171 130.633 323.999 127.872 326.224 125.344H330.116C329.264 126.281 328.421 127.432 327.588 128.795C326.755 130.159 325.978 131.655 325.259 133.284C324.539 134.903 323.904 136.584 323.355 138.327C322.815 140.06 322.403 141.769 322.119 143.455C321.741 145.708 321.58 147.991 321.636 150.301C321.703 152.612 321.949 154.757 322.375 156.736C322.811 158.715 323.393 160.33 324.122 161.58H320.216C318.843 159.051 317.934 156.291 317.489 153.298C317.044 150.306 317.119 147.025 317.716 143.455ZM331.952 158H327.293L342.592 128.909H347.663L353.302 158H348.643L344.396 134.193H344.168L331.952 158ZM334.623 146.608H349.737L349.112 150.301H333.998L334.623 146.608ZM376.729 136.182L365.18 158H360.635L356.345 136.182H360.734L363.462 152.972H363.689L371.999 136.182H376.729ZM385.631 158.44C383.558 158.44 381.825 157.967 380.433 157.02C379.04 156.063 378.06 154.728 377.492 153.014C376.933 151.291 376.839 149.288 377.208 147.006C377.568 144.771 378.292 142.82 379.381 141.153C380.48 139.487 381.853 138.194 383.501 137.276C385.158 136.357 387 135.898 389.026 135.898C391.1 135.898 392.828 136.376 394.211 137.332C395.603 138.289 396.583 139.629 397.151 141.352C397.719 143.076 397.819 145.083 397.45 147.375C397.09 149.591 396.356 151.532 395.248 153.199C394.149 154.856 392.776 156.144 391.129 157.062C389.481 157.981 387.648 158.44 385.631 158.44ZM385.873 154.875C387.237 154.875 388.425 154.515 389.438 153.795C390.461 153.076 391.294 152.119 391.938 150.926C392.582 149.733 393.022 148.426 393.259 147.006C393.477 145.633 393.472 144.378 393.245 143.241C393.027 142.096 392.554 141.177 391.825 140.486C391.095 139.795 390.082 139.449 388.785 139.449C387.421 139.449 386.223 139.813 385.191 140.543C384.168 141.262 383.335 142.223 382.691 143.426C382.057 144.629 381.626 145.94 381.398 147.361C381.181 148.724 381.181 149.979 381.398 151.125C381.616 152.261 382.09 153.17 382.819 153.852C383.548 154.534 384.566 154.875 385.873 154.875ZM406.835 145.045L404.705 158H400.457L404.094 136.182H408.17L407.574 139.733H407.844C408.535 138.568 409.477 137.64 410.67 136.949C411.873 136.248 413.294 135.898 414.932 135.898C416.409 135.898 417.65 136.21 418.653 136.835C419.667 137.451 420.382 138.369 420.798 139.591C421.224 140.812 421.291 142.323 420.997 144.122L418.668 158H414.42L416.651 144.634C416.906 143.052 416.698 141.816 416.026 140.926C415.363 140.027 414.307 139.577 412.858 139.577C411.873 139.577 410.959 139.79 410.116 140.216C409.283 140.642 408.578 141.267 408 142.091C407.432 142.905 407.044 143.89 406.835 145.045ZM434.534 145.926C433.938 149.496 432.924 152.777 431.494 155.77C430.074 158.762 428.246 161.523 426.011 164.051H422.119C422.981 163.114 423.824 161.963 424.648 160.599C425.481 159.236 426.258 157.744 426.977 156.125C427.706 154.496 428.341 152.811 428.881 151.068C429.42 149.326 429.832 147.612 430.116 145.926C430.495 143.682 430.652 141.404 430.585 139.094C430.528 136.783 430.282 134.638 429.847 132.659C429.42 130.68 428.843 129.065 428.114 127.815H432.02C433.393 130.344 434.302 133.104 434.747 136.097C435.192 139.089 435.121 142.366 434.534 145.926Z"
                fill="#DA1D6C"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_0_1"
                x="283.636"
                y="24.263"
                width="32.7275"
                height="31.5172"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_0_1"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_0_1"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse p-5" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active p-2 fs-3"
                  aria-current="page"
                  href="#"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active p-2 fs-3"
                  href="https://uy.avonfolletodigital.com/c05_uy_2023/g1asehzcsssx9cozlbhujtmrgrkesy9h207fu4vq/index.html#page/1"
                >
                  Cosmética
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active p-2 fs-3"
                  href="https://uy.avonfolletodigital.com/c05_uy_2023/npwcuktwxtbvlhxickvxpedsl9avc0v3qgkxowjz/#page/1"
                >
                  Fashion&Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active p-2 fs-3"
                  href="https://api.whatsapp.com/send?phone=59892091111"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};