export const LinkIcon = () => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z" />
      </g>
    </svg>
  );
};

export const HeartIcon = ({ isFavourite }) => {
  return (
    <>
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill={`${isFavourite ? "#E8594B" : "none"}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: "pointer" }}
      >
        <path
          d="M11.4454 20.7608L3.57617 12.5663C1.35964 10.2582 1.49922 6.4736 3.87922 4.34929C6.24035 2.24181 9.82044 2.65105 11.6863 5.24171L12 5.67724L12.3137 5.24171C14.1796 2.65105 17.7596 2.24181 20.1208 4.34929C22.5008 6.4736 22.6404 10.2582 20.4238 12.5663L12.5546 20.7608C12.2483 21.0797 11.7517 21.0797 11.4454 20.7608Z"
          stroke={`${isFavourite ? "none" : "black"}`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export const Spinner = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="spinner"
      >
        <circle
          cx="50"
          cy="50"
          r="25"
          strokeWidth="7"
          stroke="#E8594B"
          strokeDasharray="39.269908169872416 39.269908169872416"
          strokeDashoffset="39.269908169872416"
          fill="none"
          strokeLinecap="rounded"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="1s"
            repeatCount="indefinite"
            keyTimes="0;1"
            values="0 50 50;-360 50 50"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
};



export const RightArrow = () => {
  return (
      <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
          <circle cx="13" cy="13" r="13" fill="#6765FE" />
          <path
              d="M18.7071 13.7071C19.0976 13.3166 19.0976 12.6834 18.7071 12.2929L12.3431 5.92893C11.9526 5.53841 11.3195 5.53841 10.9289 5.92893C10.5384 6.31946 10.5384 6.95262 10.9289 7.34315L16.5858 13L10.9289 18.6569C10.5384 19.0474 10.5384 19.6805 10.9289 20.0711C11.3195 20.4616 11.9526 20.4616 12.3431 20.0711L18.7071 13.7071ZM17 14H18V12H17V14Z"
              fill="white"
          />
      </svg>
  );
};


export const LeftArrow = () => {
  return (
      <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
      >
          <circle
              cx="13"
              cy="13"
              r="13"
              transform="rotate(180 13 13)"
              fill="#6765FE"
          />
          <path
              d="M7.29289 12.2929C6.90237 12.6834 6.90237 13.3166 7.29289 13.7071L13.6569 20.0711C14.0474 20.4616 14.6805 20.4616 15.0711 20.0711C15.4616 19.6805 15.4616 19.0474 15.0711 18.6569L9.41421 13L15.0711 7.34315C15.4616 6.95262 15.4616 6.31946 15.0711 5.92893C14.6805 5.53841 14.0474 5.53841 13.6569 5.92893L7.29289 12.2929ZM9 12H8V14H9V12Z"
              fill="white"
          />
      </svg>
  );
};