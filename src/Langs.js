import './Langs.css'
import { Route, Switch, Redirect, Link, BrowserRouter } from 'react-router-dom';
import LangList from './LangList'
function Langs() {
    return (
        <div>
          <div className="langs">
                <h1>Do you speak english?</h1>
                <h2>Langues</h2>
                <div className="contLangs">
                    <LangList />
                </div>
                <Link to="./aboutme">
                <svg className="btn" width="550" height="171" viewBox="0 0 550 171" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="550" height="171" fill="#666666"/>
                    <rect x="13" y="10" width="526" height="148" fill="#8F8F8F"/>
                    <path d="M139.441 100.576C147.825 100.576 153.841 96.864 157.617 90.976L150.641 86.176C148.209 89.888 145.073 92.576 139.441 92.576C131.569 92.576 126.257 86.368 126.257 78.24C126.257 70.112 131.569 64.032 139.441 64.032C144.433 64.032 147.953 66.4 150.001 69.728L156.849 64.864C152.945 58.784 147.313 55.968 139.441 55.968C126.961 55.968 117.041 65.376 117.041 78.24C117.041 91.104 126.961 100.576 139.441 100.576ZM173.095 100.576C176.871 100.576 180.007 98.784 181.671 95.52L181.479 100H190.119V72.736H181.479V87.328C181.479 90.784 179.559 92.768 176.103 92.768C173.031 92.768 171.559 90.976 171.559 87.904V72.736H162.919V88.48C162.919 96.224 167.143 100.576 173.095 100.576ZM196.923 100H205.563V87.904C205.563 82.08 207.675 80.288 211.579 80.288C212.795 80.288 213.819 80.608 214.907 81.12L217.659 73.248C216.571 72.672 215.227 72.16 213.435 72.16C210.619 72.16 207.419 73.184 205.435 77.664L205.563 72.736H196.923V100ZM226.658 68.192C229.602 68.192 232.098 65.952 232.098 62.752C232.098 59.616 229.602 57.376 226.658 57.376C223.714 57.376 221.154 59.616 221.154 62.752C221.154 65.952 223.714 68.192 226.658 68.192ZM222.306 100H230.946V72.736H222.306V100ZM245.92 88.992H266.592C267.232 79.456 261.92 72.16 252.128 72.16C243.68 72.16 237.088 78.048 237.088 86.304C237.088 94.688 243.36 100.576 253.088 100.576C258.784 100.576 262.112 98.848 264.736 96.544L259.808 91.232C258.464 92.192 256.096 93.408 252.96 93.408C249.056 93.408 246.752 91.808 245.92 88.992ZM245.792 84C246.496 80.736 248.8 79.2 252.192 79.2C255.584 79.2 257.504 80.992 257.888 84H245.792ZM282.47 100.576C286.246 100.576 289.382 98.784 291.046 95.52L290.854 100H299.494V72.736H290.854V87.328C290.854 90.784 288.934 92.768 285.478 92.768C282.406 92.768 280.934 90.976 280.934 87.904V72.736H272.294V88.48C272.294 96.224 276.518 100.576 282.47 100.576ZM303.93 100H313.146L316.218 95.328C317.37 93.6 318.714 90.464 318.714 90.464C318.714 90.464 320.058 93.6 321.21 95.328L324.346 100H334.586L324.09 85.024L333.114 72.736H323.898L321.722 76.128C320.762 77.6 319.738 80.352 319.738 80.352C319.738 80.352 318.65 77.6 317.69 76.128L315.45 72.736H305.274L314.426 85.728L303.93 100ZM340.719 88.928C343.599 88.928 346.095 86.688 346.095 83.488C346.095 80.352 343.599 78.112 340.719 78.112C337.775 78.112 335.279 80.352 335.279 83.488C335.279 86.688 337.775 88.928 340.719 88.928ZM362.48 100.576C371.056 100.576 373.68 96.48 373.68 91.488C373.68 85.728 368.688 83.872 364.72 82.976C361.008 82.144 359.28 81.952 359.28 80.416C359.28 79.328 360.24 78.816 362.224 78.816C364.272 78.816 366.192 79.776 367.472 80.864L372.08 75.936C369.84 73.632 366.64 72.16 362.16 72.16C356.336 72.16 351.6 74.656 351.6 80.8C351.6 86.496 355.76 88.544 359.472 89.504C363.888 90.656 365.616 90.656 365.616 92.128C365.616 93.28 364.72 93.792 361.904 93.792C359.344 93.792 356.976 92.704 355.12 90.912L350.064 95.392C352.432 98.208 356.144 100.576 362.48 100.576ZM386.858 88.992H407.53C408.17 79.456 402.858 72.16 393.066 72.16C384.618 72.16 378.026 78.048 378.026 86.304C378.026 94.688 384.298 100.576 394.026 100.576C399.722 100.576 403.05 98.848 405.674 96.544L400.746 91.232C399.402 92.192 397.034 93.408 393.898 93.408C389.994 93.408 387.69 91.808 386.858 88.992ZM386.73 84C387.434 80.736 389.738 79.2 393.13 79.2C396.522 79.2 398.442 80.992 398.826 84H386.73ZM416.355 85.216H424.419V81.44C431.459 80.416 435.299 75.808 435.299 68.96C435.299 62.24 430.243 55.904 421.091 55.904C414.371 55.904 409.699 58.656 407.395 63.712L414.307 67.744C415.843 65.184 417.571 63.584 421.091 63.584C424.419 63.584 426.467 66.272 426.467 68.96C426.467 72.16 424.547 75.04 419.299 75.04H416.355V85.216ZM420.323 100.384C423.203 100.384 425.699 98.144 425.699 94.944C425.699 91.808 423.203 89.568 420.323 89.568C417.379 89.568 414.883 91.808 414.883 94.944C414.883 98.144 417.379 100.384 420.323 100.384Z" fill="white"/>
                </svg>

                </Link>
          </div>
        </div>
    );
  }
  
  export default Langs;