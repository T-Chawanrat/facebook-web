import photoIcon from '../assets/photo-icon.png'
import videoIcon from '../assets/video-icon.png'
import smileIcon from '../assets/smile-icon.png'

export function FacebookLogo(props) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={16} cy={16} r={14} fill="url(#a)" />
      <path
        d="M21.214 20.282l.622-3.952h-3.89v-2.563c0-1.081.542-2.136 2.284-2.136H22V8.267S20.395 8 18.86 8c-3.205 0-5.298 1.893-5.298 5.318v3.012H10v3.952h3.562v9.552a14.468 14.468 0 004.383 0v-9.552h3.269z"
        fill="#fff"
      />
      <defs>
        <linearGradient
          id="a"
          x1={16}
          y1={2}
          x2={16}
          y2={29.917}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#18ACFE" />
          <stop offset={1} stopColor="#0163E0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function HomeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="#1C274C" strokeWidth={1.5}>
        <path
          d="M22 22H2M2 11l8.126-6.5a3 3 0 013.748 0L22 11"
          strokeLinecap="round"
        />
        <path
          opacity={0.5}
          d="M15.5 5.5v-2A.5.5 0 0116 3h2.5a.5.5 0 01.5.5v5"
          strokeLinecap="round"
        />
        <path d="M4 22V9.5M20 22V9.5" strokeLinecap="round" />
        <path
          opacity={0.5}
          d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14c-1.414 0-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5M14 9.5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </g>
    </svg>
  )
}

export function PlayIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.465 3.923A1 1 0 004 4.81V19.19a1 1 0 001.465.886l13.697-7.192a1 1 0 000-1.77L5.465 3.923zM2 4.81c0-2.256 2.397-3.705 4.395-2.656l13.697 7.19c2.14 1.125 2.14 4.19 0 5.313L6.395 21.847C4.397 22.897 2 21.447 2 19.191V4.81z"
        fill="#0F0F0F"
      />
    </svg>
  )
}

export function ShopIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="#1C274C" strokeWidth={1.5}>
        <path d="M22 22H2M20 22V11M4 22V11" strokeLinecap="round" />
        <path
          d="M16.528 2H7.472c-1.203 0-1.804 0-2.287.299-.484.298-.753.836-1.29 1.912L2.49 7.76c-.324.82-.608 1.786-.062 2.479A2 2 0 006 9a2 2 0 104 0 2 2 0 104 0 2 2 0 104 0 2 2 0 003.571 1.238c.546-.693.262-1.659-.062-2.479l-1.404-3.548c-.537-1.076-.806-1.614-1.29-1.912C18.332 2 17.731 2 16.528 2z"
          strokeLinejoin="round"
        />
        <path
          d="M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 01.549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 01.549.549c.201.348.201.815.201 1.75v3"
          strokeLinecap="round"
        />
      </g>
    </svg>
  )
}

export function GroupIcon(props) {
  return (
    <svg viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1807.059 1270.091c-68.668 48.452-188.725 116.556-343.906 158.57-18.861-102.55-92.725-187.37-196.066-219.106-91.708-28.235-185.11-48.339-279.53-61.666 71.944-60.762 121.638-145.807 135.982-243.162 21.91-.791 44.837-1.243 71.04-1.243 166.023.904 331.143 26.316 490.955 75.445 72.621 22.362 121.525 87.755 121.525 162.861v128.301zm-451.765 338.824c-114.183 80.753-330.24 198.099-621.176 198.099-129.43 0-379.144-26.203-621.177-198.1v-128.752c0-74.993 49.017-140.499 121.75-162.861 162.41-49.694 330.354-74.88 499.427-74.88h8.47c166.588.79 331.821 26.09 491.407 75.106 72.509 22.249 121.3 87.642 121.3 162.635v128.753zm-903.53-761.901V734.072c0-155.632 126.608-282.352 282.354-282.352 155.746 0 282.353 126.72 282.353 282.352v112.942c0 155.746-126.607 282.353-282.353 282.353S451.765 1002.76 451.765 847.014zm734.118-734.118c75.22 0 146.146 29.478 199.567 82.899 53.309 53.421 82.786 124.235 82.786 199.454V508.19c0 155.746-126.607 282.353-282.353 282.353-19.651 0-38.4-2.598-56.47-6.438v-50.033c0-156.423-92.047-290.71-224.188-354.748 8.357-148.066 130.447-266.428 280.658-266.428zm532.857 758.061c-91.37-28.01-184.546-48.226-279.755-61.666 86.174-72.508 142.192-179.802 142.192-301.1V395.248c0-105.374-41.11-204.65-115.877-279.304-74.767-74.767-173.93-115.99-279.417-115.99-200.696 0-365.138 151.002-390.211 345.148-20.217-3.275-40.433-6.325-61.553-6.325-217.977 0-395.294 177.43-395.294 395.294v112.942c0 121.298 56.018 228.593 142.305 301.214-94.305 13.214-188.16 33.092-279.529 61.1C81.092 1246.375 0 1355.249 0 1480.163v185.675l22.588 16.941c275.238 206.344 563.803 237.177 711.53 237.177 344.244 0 593.618-148.63 711.53-237.177l22.587-16.94v-120.51c205.214-50.597 355.652-146.032 429.177-201.373l22.588-16.941V1141.79c0-125.026-80.979-233.901-201.261-270.833z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export function SearchIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      className="h-4 w-4 opacity-70"
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        clipRule="evenodd" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0 0h4v4H0V0zm0 6h4v4H0V6zm0 6h4v4H0v-4zM6 0h4v4H6V0zm0 6h4v4H6V6zm0 6h4v4H6v-4zm6-12h4v4h-4V0zm0 6h4v4h-4V6zm0 6h4v4h-4v-4z"
        fillRule="evenodd"
      />
    </svg>
  )
}

export function MessengerIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.002 2C6.369 2 2 6.126 2 11.701c0 2.916 1.195 5.435 3.14 7.174.162.146.26.349.268.57l.056 1.78a.798.798 0 001.121.705l1.986-.875a.81.81 0 01.533-.04c.912.25 1.883.386 2.894.386C17.631 21.4 22 17.275 22 11.7 22 6.125 17.632 2 12.002 2zm5.25 7.579L14.75 13.55a1.279 1.279 0 01-1.85.342l-1.992-1.493a.513.513 0 00-.615 0l-2.688 2.04c-.357.273-.828-.157-.589-.536L9.52 9.932a1.28 1.28 0 011.85-.342l1.992 1.493a.514.514 0 00.614 0l2.688-2.04c.36-.277.832.153.589.536z"
        stroke="#000"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function NotificationIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.713 7.15a.75.75 0 00-.037-1.5l.037 1.5zm-5.406 5.043h.75v-.017l-.75.017zm0 2.317l.039.749a.75.75 0 00.71-.749h-.75zm0 3.09l-.04.749.04.001v-.75zm3.113.75a.75.75 0 000-1.5v1.5zM10.944 6.4a.75.75 0 001.5 0h-1.5zm1.5-2.4a.75.75 0 00-1.5 0h1.5zm-.731 1.65a.75.75 0 00-.037 1.5l.037-1.5zm5.37 6.543l-.75-.017v.017h.75zm0 2.317h-.75a.75.75 0 00.71.749l.04-.749zm0 3.09v.75l.039-.001-.04-.749zm-3.114-.75a.75.75 0 000 1.5v-1.5zm-3.8.753a.75.75 0 10-1.5-.006l1.5.006zm-.084 1.697l.547-.513-.001-.001-.546.514zm3.217 0l-.546-.514-.001.001.547.513zm1.416-1.703a.75.75 0 00-1.5.006l1.5-.006zm-5.3-.747a.75.75 0 000 1.5v-1.5zm4.551 1.5a.75.75 0 000-1.5v1.5zm-2.293-12.7c-3.478.086-6.198 3.04-6.12 6.56l1.5-.034c-.06-2.73 2.041-4.962 4.657-5.026l-.037-1.5zm-6.12 6.543v2.317h1.5v-2.317h-1.5zm.712 1.568c-1.217.064-2.143 1.088-2.143 2.294h1.5c0-.441.333-.776.72-.796l-.077-1.498zm-2.143 2.294c0 1.206.926 2.23 2.143 2.294l.078-1.498c-.388-.02-.721-.355-.721-.796h-1.5zm2.182 2.295H9.42v-1.5H6.307v1.5zM12.444 6.4V4h-1.5v2.4h1.5zm-.768.75c2.616.064 4.718 2.297 4.656 5.026l1.5.034c.08-3.52-2.641-6.474-6.119-6.56l-.037 1.5zm4.656 5.043v2.317h1.5v-2.317h-1.5zm.711 3.066c.388.02.721.355.721.796h1.5c0-1.206-.925-2.23-2.142-2.294l-.079 1.498zm.721.796c0 .441-.333.776-.72.796l.078 1.498c1.216-.064 2.142-1.088 2.142-2.294h-1.5zm-.682.795H13.97v1.5h3.113v-1.5zm-8.413.747a3.218 3.218 0 00.87 2.217l1.092-1.028a1.72 1.72 0 01-.462-1.183l-1.5-.006zm.868 2.216c.56.598 1.339.94 2.156.94v-1.5c-.396 0-.78-.166-1.06-.466l-1.096 1.026zm2.156.94c.818 0 1.596-.342 2.157-.94l-1.095-1.026c-.281.3-.665.466-1.062.466v1.5zm2.155-.939a3.218 3.218 0 00.87-2.217l-1.5.006c.002.444-.166.868-.462 1.183l1.092 1.028zm-4.43-1.464h4.551v-1.5H9.418v1.5z"
        fill="#000"
      />
    </svg>
  )
}

export function FriendIcon(props) {
  return (
    <svg
      fill="#697cb5"
      viewBox="-3 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#697cb5"
      {...props}
    >
      <path d="M17.25 20.5c1.281.719 2 1.906 1.875 3.125-.063.75-.031.75-1 .875-.594.063-4.375.094-8.219.094-4.375 0-8.938-.031-9.281-.125-1.281-.344-.531-2.719 1.156-3.844 1.344-.844 4.063-2.156 4.813-2.313 1.031-.219 1.156-.875 0-2.844-.25-.469-.531-1.813-.563-3.25C6 9.905 6.406 8.343 8.437 7.562a3.977 3.977 0 011.219-.188c1.344 0 2.594.75 3.125 1.844.719 1.469.375 5.313-.375 6.719-.906 1.594-.813 2.094.188 2.344.625.156 2.688 1.125 4.656 2.219zm6.844-1.969c1 .531 1.563 1.5 1.469 2.438-.031.563-.031.594-.781.688-.375.063-2.344.094-4.656.094-.406-.969-1.188-1.844-2.25-2.406a41.827 41.827 0 00-3.75-1.875c.719-.344 1.344-.625 1.625-.688.781-.188.875-.625 0-2.188-.219-.375-.469-1.438-.5-2.563-.031-1.813.375-3.063 1.938-3.656.313-.094.656-.156.969-.156 1.031 0 2 .563 2.406 1.438.531 1.156.281 4.156-.281 5.281-.688 1.25-.625 1.625.156 1.813.5.125 2.094.906 3.656 1.781z" />
    </svg>
  )
}

export function ClockIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M22.7 13.5l-2-2-2 2M21 12a9 9 0 11-1.245-4.57M12 7v5l3 2"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function BookmarkIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 6.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C6.52 3 7.08 3 8.2 3h7.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C19 4.52 19 5.08 19 6.2V21l-7-5-7 5V6.2z"
        stroke="#000"
        strokeWidth={2}
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function MoreIcon(props) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className="icon"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M478.312 644.16c24.38 26.901 64.507 26.538 88.507-.89l270.57-309.222c7.758-8.867 6.86-22.344-2.008-30.103-8.866-7.759-22.344-6.86-30.103 2.007L534.71 615.173c-7.202 8.231-17.541 8.325-24.782.335L229.14 305.674c-7.912-8.73-21.403-9.394-30.133-1.482s-9.394 21.403-1.482 30.134l280.786 309.833z" />
    </svg>
  )
}

export function PhotoIcon(props) {
  return (
    <img {...props} src={photoIcon}/>
  )
}

export function VideoIcon(props) {
  return (
    <img {...props} src={videoIcon} />
  )
}

export function SmileIcon(props) {
  return (
    <img {...props} src={smileIcon} />
  )
}

export function ThreeDotIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g stroke="#1C274C" strokeWidth={1.5}>
        <circle cx={5} cy={12} r={2} />
        <circle cx={12} cy={12} r={2} />
        <circle cx={19} cy={12} r={2} />
      </g>
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#fff" d="M0 0H24V24H0z" />
      <path
        d="M7 17l9.9-9.9M7 7l9.9 9.9"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function LikeIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.975 12.185l-.739-.128.74.128zm-.705 4.08l-.74-.128.74.128zM6.938 20.477l-.747.065.747-.065zm-.812-9.393l.747-.064-.747.064zm7.869-5.863l.74.122-.74-.122zm-.663 4.045l.74.121-.74-.121zm-6.634.411l-.49-.568.49.568zm1.439-1.24l.49.569-.49-.568zm2.381-3.653l-.726-.189.726.189zm.476-1.834l.726.188-.726-.188zm1.674-.886l-.23.714.23-.714zm.145.047l.229-.714-.23.714zM9.862 6.463l.662.353-.662-.353zm4.043-3.215l-.726.188.726-.188zm-2.23-1.116l-.326-.675.325.675zM3.971 21.471l-.748.064.748-.064zM3 10.234l.747-.064a.75.75 0 00-1.497.064H3zm17.236 1.823l-.705 4.08 1.478.256.705-4.08-1.478-.256zm-6.991 9.193H8.596v1.5h4.649v-1.5zm-5.56-.837l-.812-9.393-1.495.129.813 9.393 1.494-.13zm11.846-4.276c-.507 2.93-3.15 5.113-6.286 5.113v1.5c3.826 0 7.126-2.669 7.764-6.357l-1.478-.256zM13.255 5.1l-.663 4.045 1.48.242.663-4.044-1.48-.243zm-6.067 5.146l1.438-1.24-.979-1.136L6.21 9.11l.979 1.136zm4.056-5.274l.476-1.834-1.452-.376-.476 1.833 1.452.377zm1.194-2.194l.145.047.459-1.428-.145-.047-.459 1.428zm-1.915 4.038a8.378 8.378 0 00.721-1.844l-1.452-.377A6.878 6.878 0 019.2 6.11l1.324.707zm2.06-3.991a.885.885 0 01.596.61l1.452-.376a2.385 2.385 0 00-1.589-1.662l-.459 1.428zm-.863.313a.515.515 0 01.28-.33l-.651-1.351c-.532.256-.932.73-1.081 1.305l1.452.376zm.28-.33a.596.596 0 01.438-.03l.459-1.428a2.096 2.096 0 00-1.548.107l.65 1.351zm2.154 8.176h5.18v-1.5h-5.18v1.5zM4.719 21.406L3.747 10.17l-1.494.129.971 11.236 1.495-.129zm-.969.107V10.234h-1.5v11.279h1.5zm-.526.022a.263.263 0 01.263-.285v1.5c.726 0 1.294-.622 1.232-1.344l-1.495.13zM14.735 5.343a5.533 5.533 0 00-.104-2.284l-1.452.377a4.03 4.03 0 01.076 1.664l1.48.243zM8.596 21.25a.916.916 0 01-.911-.837l-1.494.129a2.416 2.416 0 002.405 2.208v-1.5zm.03-12.244c.68-.586 1.413-1.283 1.898-2.19L9.2 6.109c-.346.649-.897 1.196-1.553 1.76l.98 1.137zm13.088 3.307a2.416 2.416 0 00-2.38-2.829v1.5c.567 0 1 .512.902 1.073l1.478.256zM3.487 21.25c.146 0 .263.118.263.263h-1.5c0 .682.553 1.237 1.237 1.237v-1.5zm9.105-12.105a1.583 1.583 0 001.562 1.84v-1.5a.083.083 0 01-.082-.098l-1.48-.242zm-5.72 1.875a.918.918 0 01.316-.774l-.98-1.137a2.418 2.418 0 00-.83 2.04l1.495-.13z"
        fill="#1C274C"
      />
    </svg>
  )
}

export function CommentIcon(props) {
  return (
    <svg viewBox="-7 0 32 32" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M7.28 24.2c-1.12 0-1.72-1.12-2.2-2-.2-.32-.48-.92-.64-1-.12-.04-.32-.08-.56-.08-.68-.04-1.68-.16-2.56-1.44-.8-1.12-1.68-4.16-1.2-6.84C.4 11.2 1.16 9.96 2.28 9.2c1.8-1.24 5.08-1.4 6.4-1.4 2.36 0 5.64.4 7 1.56 1.36 1.12 1.96 4.04 1.84 6.32-.08 2.08-.72 3.64-1.76 4.36-.64.44-1.56.68-3 .68-.6 0-1.16-.04-1.76-.08-.52-.04-1-.04-1.44-.04-.8 0-1 .12-1.04.12-.04.12.04.64.12.88.16.68.44 2.16-.96 2.52-.12.04-.24.08-.4.08zm1.4-14.72c-2.44 0-4.48.4-5.44 1.08-.76.52-1.24 1.36-1.44 2.52-.4 2.12.28 4.72.88 5.6.48.64.8.68 1.36.72.32.04.68.04 1.04.2.68.28 1.12 1.04 1.52 1.76.12.24.36.64.52.88-.04-.12-.04-.24-.08-.32-.16-.72-.4-1.84.48-2.56.52-.44 1.36-.48 2.08-.48.48 0 .96.04 1.52.04.56.04 1.12.08 1.64.08 1 0 1.68-.12 2.04-.36.6-.4 1-1.56 1.04-3.08.08-2.28-.56-4.4-1.24-4.96-.68-.52-3-1.12-5.92-1.12z" />
    </svg>
  )
}

export function ShareIcon(props) {
  return (
    <svg
      viewBox="-0.5 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.47 4.14c-.73.22-1.19 1.82-1.38 3.77C6.78 7.91 2 13.48 2 20.08c2.19-6 7-7.63 10.14-7.63.2 1.76.65 3.17 1.33 3.37 2.1.61 8.53-3.38 8.53-5.84s-6.43-6.45-8.53-5.84z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FacebookTitle(props) {
  return (
    <svg fill="none" viewBox="0 0 1090 360"
      {...props}
    >
      <g className="layer">
        <path
          d="M881.58 257.9h29.48v-47.7l41.14 47.7h36.07l-47.89-54.97 40.91-47.67h-32.82l-37.41 43.93v-96.98l-29.48 3.87V257.9zM813.6 152.64c-32.73 0-55.46 22.01-55.46 53.92s22.73 53.93 55.46 53.93c32.72 0 55.45-22.01 55.45-53.92s-22.73-53.93-55.45-53.93zm0 82.72c-15.17 0-25.56-11.72-25.56-28.8s10.39-28.79 25.56-28.79c15.16 0 25.55 11.72 25.55 28.79s-10.39 28.8-25.55 28.8zm-119.81-82.72c-32.73 0-55.46 22.01-55.46 53.92s22.73 53.93 55.46 53.93c32.73 0 55.45-22.01 55.45-53.93s-22.72-53.92-55.45-53.92zm0 82.72c-15.16 0-25.55-11.72-25.55-28.8s10.39-28.79 25.55-28.79 25.55 11.72 25.55 28.79-10.39 28.8-25.55 28.8zm-112.83-82.72c-13.63 0-24.93 5.35-32.01 15.16v-65.59l-29.51 3.83v151.82h26.16l.52-15.84c6.98 11.82 19.48 18.47 34.84 18.47 27.99 0 48.48-22.72 48.48-53.93 0-31.2-20.39-53.92-48.48-53.92zm-6.98 82.72c-15.16 0-25.55-11.72-25.55-28.8s10.39-28.79 25.55-28.79 25.55 11.72 25.55 28.79-10.39 28.8-25.55 28.8zm-113.64 1.33c-15.65 0-26.88-7.27-30.71-19.8h72.63c.71-3.83 1.2-8.38 1.2-11.43 0-33.02-18.47-52.82-49.51-52.82-31.33 0-53.02 22.01-53.02 53.92 0 32.34 22.73 53.93 56.46 53.93 17.47 0 34.45-5.84 45.06-15.55l-10.61-18.7c-10.29 7.11-20.39 10.45-31.5 10.45zm-6.59-61.13c13.64 0 22.34 8.28 22.34 21.1v.1h-47.08c2.83-13.6 11.63-21.2 24.74-21.2zm-98.99 84.97c13.02-24 30.19-5.85 40.71-15.98l-11.52-19.38c-8.19 6.36-17.47 9.8-26.27 9.8-16.36 0-27.27-15.43-27.27-32.37s10.91-24.38 27.27-24.38c8.08 0 16.88 2.92 24.03 8.08l11.72-19.8c-9.48-8.57-9.68 18.17-38.7-13.83-29.02-32-54.65 22.34-54.65 53.93.03 31.49 41.66 77.93 54.68 53.93zm-93.74-105.27l-.52 15.98c-6.98-11.92-19.48-18.57-34.83-18.57-28.09 0-48.48 22.73-48.48 53.93s20.52 53.93 48.48 53.93c15.35 0 27.89-6.66 34.83-18.48l.52 15.85h26.17V155.26h-26.17zm-28.37 80.1c-15.17 0-25.56-11.72-25.56-28.8s10.39-28.79 25.56-28.79c15.16 0 25.55 11.72 25.55 28.79s-10.42 28.8-25.55 28.8zm-57.67-79.9h-26.52v-8.77c0-13.12 5.13-18.15 18.44-18.15 4.12 0 7.47.1 9.38.29v-22.5c-3.63-1-12.5-2.01-17.63-2.01-27.11 0-39.61 12.79-39.61 40.42v10.68h-16.75v24.81h16.75v77.63h29.45v-77.6h21.95l4.54-24.8z"
          fill="#0866FF"
        />
        <text
          fill="#000"
          fontFamily="Cursive"
          fontSize={24}
          strokeWidth={0}
          textAnchor="middle"
          x={361.5}
          xmlSpace="preserve"
          y={214.25}
        >
          {"CWR"}
        </text>
      </g>
    </svg>
  )
}

export function DropdownArrow(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L12 12.586l4.293-4.293a1 1 0 111.414 1.414l-5 5z"
        fill="#000"
      />
    </svg>
  )
}

export function AddPictureIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 4H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 00-1.311 1.311C4 6.28 4 7.12 4 8.8v6.4c0 1.68 0 2.52.327 3.162a3 3 0 001.311 1.311C6.28 20 7.12 20 8.8 20h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 001.311-1.311C20 17.72 20 16.88 20 15.2V11" />
        <path d="M4 16l4.293-4.293a1 1 0 011.414 0L13 15m0 0l2.793-2.793a1 1 0 011.414 0L20 15m-7 0l2.25 2.25M18.5 3v2.5m0 2.5V5.5m0 0H16m2.5 0H21" />
      </g>
    </svg>
  )
}

export function SendMessageIcon(props) {
  return (
    <svg
      viewBox="0 -0.5 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.455 9.883L7.063 4.143a1.048 1.048 0 00-1.563.733.82.82 0 00.08.326l2.169 5.24c.109.348.168.71.176 1.074a3.875 3.875 0 01-.176 1.074L5.58 17.83a.82.82 0 00-.08.326 1.048 1.048 0 001.562.732l11.393-5.74a1.8 1.8 0 000-3.265v0z"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}