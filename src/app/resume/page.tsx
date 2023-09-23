export default function Resume() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="w-4/5 mt-10 ml-8 bg-blue-200">
          lado1
          <h1 className=" text-2xl font-semibold mb-5">Nombre del perfil</h1>
          <h2 className="text-lg mb-10">Web developer</h2>
          <div className="flex">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="15" height="15" fill="white" fill-opacity="0.01" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3H14V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z"
                fill="#5EB0EF"
              />
            </svg>
            <p>alejandrochiarilli@gmail.com</p>
          </div>
          <div className="flex">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="15" height="15" fill="white" fill-opacity="0.01" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 3.5C10 4.70948 9.14112 5.71836 8 5.94999V13.5C8 13.7761 7.77614 14 7.5 14C7.22386 14 7 13.7761 7 13.5V5.94999C5.85888 5.71836 5 4.70948 5 3.5C5 2.11929 6.11929 1 7.5 1C8.88071 1 10 2.11929 10 3.5Z"
                fill="#5EB0EF"
              />
            </svg>
            <p>Madrid, Madrid</p>
          </div>
          <div className="flex">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="15" height="15" fill="white" fill-opacity="0.01" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997
                8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769
                14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091
                9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721
                10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623
                12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70026 8.12903 8.50626 7.98352C10.0187
                7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825
                7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825
                5.97736 4.825 4.5Z"
                fill="#5EB0EF"
              />
            </svg>
            <p>+34 653584038</p>
          </div>
          <hr className="mt-6 mb-2 h-0.5 border-t-0 bg-blue-300 opacity-100 dark:opacity-50" />
          <h2 className="flex justify-center text-neutral-800 text-base font-medium leading-normal">
            SHORT BIO
          </h2>
          <hr className="mt-2 mb-4 h-0.5 border-t-0 bg-blue-300 opacity-100 dark:opacity-50" />
          <p>
            Front end developer with background in tourism and business. React &
            JavaScript enthusiast.
          </p>
          <hr className="mt-8 mb-2 h-0.5 border-t-0 bg-blue-300 opacity-100 dark:opacity-50" />
          <h2 className="flex justify-center text-neutral-800 text-base font-medium leading-normal">
            HOBBIES
          </h2>
          <hr className="mt-2 mb-4 h-0.5 border-t-0 bg-blue-300 opacity-100 dark:opacity-50" />
          <p>
            Front end developer with background in tourism and business. React &
            JavaScript enthusiast.
          </p>
        </div>
        <div className="w-5/5 bg-red-200"></div>
      </div>
      <div className="w-30 flex flex-col items-center bg-gray-400 text-center">
        <h2>What moves me on</h2>
        <p>
          Front End developer with background in tourism and business React and
          JS enthusiast.
        </p>
      </div>
    </>
  );
}
