import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-col items-center w-full gap-20">
      <div className="text-yellow-400 md:text-7xl text-4xl skew-y-[-3deg] drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
        Узнать больше:
      </div>
      <div className="flex sm:flex-row flex-col sm:justify-around justify-center gap-10 items-center w-full">
        <a href="https://t.me/gpltournaments">
          <div className="w-full h-full flex flex-row gap-3 justify-center items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                width="40px"
                height="40px"
                className=" fill-white stroke-2 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]"
              >
                <path d="M 44.376953 5.9863281 C 43.889905 6.0076957 43.415817 6.1432497 42.988281 6.3144531 C 42.565113 6.4845113 40.128883 7.5243408 36.53125 9.0625 C 32.933617 10.600659 28.256963 12.603668 23.621094 14.589844 C 14.349356 18.562196 5.2382813 22.470703 5.2382812 22.470703 L 5.3046875 22.445312 C 5.3046875 22.445312 4.7547875 22.629122 4.1972656 23.017578 C 3.9185047 23.211806 3.6186028 23.462555 3.3730469 23.828125 C 3.127491 24.193695 2.9479735 24.711788 3.015625 25.259766 C 3.2532479 27.184511 5.2480469 27.730469 5.2480469 27.730469 L 5.2558594 27.734375 L 14.158203 30.78125 C 14.385177 31.538434 16.858319 39.792923 17.402344 41.541016 C 17.702797 42.507484 17.984013 43.064995 18.277344 43.445312 C 18.424133 43.635633 18.577962 43.782915 18.748047 43.890625 C 18.815627 43.933415 18.8867 43.965525 18.957031 43.994141 C 18.958531 43.994806 18.959437 43.99348 18.960938 43.994141 C 18.969579 43.997952 18.977708 43.998295 18.986328 44.001953 L 18.962891 43.996094 C 18.979231 44.002694 18.995359 44.013801 19.011719 44.019531 C 19.043456 44.030655 19.062905 44.030268 19.103516 44.039062 C 20.123059 44.395042 20.966797 43.734375 20.966797 43.734375 L 21.001953 43.707031 L 26.470703 38.634766 L 35.345703 45.554688 L 35.457031 45.605469 C 37.010484 46.295216 38.415349 45.910403 39.193359 45.277344 C 39.97137 44.644284 40.277344 43.828125 40.277344 43.828125 L 40.310547 43.742188 L 46.832031 9.7519531 C 46.998903 8.9915162 47.022612 8.334202 46.865234 7.7402344 C 46.707857 7.1462668 46.325492 6.6299361 45.845703 6.34375 C 45.365914 6.0575639 44.864001 5.9649605 44.376953 5.9863281 z M 44.429688 8.0195312 C 44.627491 8.0103707 44.774102 8.032983 44.820312 8.0605469 C 44.866523 8.0881109 44.887272 8.0844829 44.931641 8.2519531 C 44.976011 8.419423 45.000036 8.7721605 44.878906 9.3242188 L 44.875 9.3359375 L 38.390625 43.128906 C 38.375275 43.162926 38.240151 43.475531 37.931641 43.726562 C 37.616914 43.982653 37.266874 44.182554 36.337891 43.792969 L 26.632812 36.224609 L 26.359375 36.009766 L 26.353516 36.015625 L 23.451172 33.837891 L 39.761719 14.648438 A 1.0001 1.0001 0 0 0 38.974609 13 A 1.0001 1.0001 0 0 0 38.445312 13.167969 L 14.84375 28.902344 L 5.9277344 25.849609 C 5.9277344 25.849609 5.0423771 25.356927 5 25.013672 C 4.99765 24.994652 4.9871961 25.011869 5.0332031 24.943359 C 5.0792101 24.874869 5.1948546 24.759225 5.3398438 24.658203 C 5.6298218 24.456159 5.9609375 24.333984 5.9609375 24.333984 L 5.9941406 24.322266 L 6.0273438 24.308594 C 6.0273438 24.308594 15.138894 20.399882 24.410156 16.427734 C 29.045787 14.44166 33.721617 12.440122 37.318359 10.902344 C 40.914175 9.3649615 43.512419 8.2583658 43.732422 8.1699219 C 43.982886 8.0696253 44.231884 8.0286918 44.429688 8.0195312 z M 33.613281 18.792969 L 21.244141 33.345703 L 21.238281 33.351562 A 1.0001 1.0001 0 0 0 21.183594 33.423828 A 1.0001 1.0001 0 0 0 21.128906 33.507812 A 1.0001 1.0001 0 0 0 20.998047 33.892578 A 1.0001 1.0001 0 0 0 20.998047 33.900391 L 19.386719 41.146484 C 19.35993 41.068197 19.341173 41.039555 19.3125 40.947266 L 19.3125 40.945312 C 18.800713 39.30085 16.467362 31.5161 16.144531 30.439453 L 33.613281 18.792969 z M 22.640625 35.730469 L 24.863281 37.398438 L 21.597656 40.425781 L 22.640625 35.730469 z" />
              </svg>
            </div>
            <div className="text-white md:text-5xl text-3xl pb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
              Telegram
            </div>
          </div>
        </a>

        <a href="https://discord.gg/XmnYn3KnZw">
          <div className="w-full h-full flex flex-row gap-3 justify-center items-center">
            <div>
              <svg
                width="44px"
                height="44px"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-white stroke-2 fill-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,1)]"
              >
                <path
                  class="a"
                  d="M17.54,34.22A47.42,47.42,0,0,1,14.68,38C7.3,37.79,4.5,33,4.5,33A44.83,44.83,0,0,1,9.31,13.48,16.47,16.47,0,0,1,18.69,10l1,2.31"
                />
                <path
                  class="a"
                  d="M17.85,22.67a3.48,3.48,0,0,0-3.37,3.9,3.38,3.38,0,0,0,3.31,3.22,3.53,3.53,0,0,0,3.43-3.9A3.45,3.45,0,0,0,17.85,22.67Z"
                />
                <path
                  class="a"
                  d="M12.2,14.37a28.19,28.19,0,0,1,8.16-2.18A23.26,23.26,0,0,1,24,12a23.26,23.26,0,0,1,3.64.21,28.19,28.19,0,0,1,8.16,2.18m-7.47-2.09,1-2.31a16.47,16.47,0,0,1,9.38,3.51A44.83,44.83,0,0,1,43.5,33S40.7,37.79,33.32,38a47.42,47.42,0,0,1-2.86-3.81m6.46-2.9a29.63,29.63,0,0,1-8.64,3.49,21.25,21.25,0,0,1-4.28.4h0a21.25,21.25,0,0,1-4.28-.4,29.63,29.63,0,0,1-8.64-3.49"
                />
                <path
                  class="a"
                  d="M30.15,22.67a3.48,3.48,0,0,1,3.37,3.9,3.38,3.38,0,0,1-3.31,3.22,3.53,3.53,0,0,1-3.43-3.9A3.45,3.45,0,0,1,30.15,22.67Z"
                />
              </svg>
            </div>
            <div className="text-white md:text-5xl text-3xl pb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
              Discord
            </div>
          </div>
        </a>

        <a href="https://www.youtube.com/@krifor/videos">
          <div className="w-full h-full flex flex-row gap-3 justify-center items-center">
            <div>
              <svg
                width="42px"
                height="42px"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-white stroke-2 fill-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,1)]"
              >
                <path
                  class="a"
                  d="M43.1124,14.394a5.0056,5.0056,0,0,0-3.5332-3.5332c-2.3145-.8936-24.7326-1.3314-31.2358.0256A5.0059,5.0059,0,0,0,4.81,14.42c-1.0446,4.583-1.1239,14.4914.0256,19.1767A5.006,5.006,0,0,0,8.369,37.13c4.5829,1.0548,26.3712,1.2033,31.2358,0a5.0057,5.0057,0,0,0,3.5332-3.5333C44.2518,28.6037,44.3311,19.31,43.1124,14.394Z"
                />
                <path class="a" d="M30.5669,23.9952,20.1208,18.004V29.9863Z" />
              </svg>
            </div>
            <div className="text-white md:text-5xl text-3xl pb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
              YouTube
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
