import './profile.min.css';
import { Header } from '../../layout/header/Header';
import { GrSwim } from 'react-icons/gr';
import { FaRunning } from 'react-icons/fa';
import { MdFitnessCenter } from 'react-icons/md';
import { RiRidingLine } from 'react-icons/ri';
import { GiGolfFlag } from 'react-icons/gi';
import { GiMeditation } from 'react-icons/gi';

export const ProfilePage = () => {

  return (
    <div className = 'profileRootDiv'>
      <Header />

      <div className = 'general_information'>
        <h3 className = 'profileH3'><span>Your</span> current level:</h3>
        <div className = 'level'>
          <div className = 'outer'>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="220px" height="220px">
             <defs>
                <linearGradient id="GradientColor">
                   <stop offset="0%" stop-color="#e91e63" />
                   <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
             </defs>
             <circle cx="110" cy="110" r="100" stroke-linecap="round" />
          </svg>
            <div className = 'inner'>
              <div className = 'level_content'>
                <p className = 'level_text'>LVL</p>
                <p className = 'level_text'>51</p>
                <p className = 'level_text' id = 'percent'>73%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className = "grid-container">
        <div className = "grid-item">
          <h5><GrSwim />Swimming</h5>
          <p>Distance swam this past week:<br/><span>450m</span></p>
          <p>Avg distance swam this past month:<br/> <span>~510m</span></p>
        </div>
        <div className = "grid-item">
          <h5><FaRunning />Running</h5>
          <p>Distance ran this past week:<br/><span>4.43km</span></p>
          <p>Avg distance ran this past month:<br/> <span>~3.98km</span></p>
        </div>
        <div className = "grid-item">
          <h5><MdFitnessCenter />Excerising</h5>
          <p>Time excercised yesterday:<br/><span>2h:10min</span></p>
          <p>Avg time you exercised this past week:<br/> <span>~1h:43min</span></p>
        </div>
        <div className = "grid-item">
          <h5><RiRidingLine />Cycling</h5>
          <p>Distance cycled yesterday:<br/><span>0m</span></p>
          <p>Avg distance cycled this past week:<br/> <span>~35min</span></p>
        </div>
        <div className = "grid-item">
          <h5><GiGolfFlag />Playing Golf</h5>
          <p>Distance walked on a golf course:<br/><span>1.5km</span></p>
          <p>Avg distance walked on a golf course this past week:<br/> <span>~240m</span></p>
        </div>
        <div className = "grid-item">
          <h5><GiMeditation />Meditating</h5>
          <p>Time spent meditating yesterday:<br/><span>1h</span></p>
          <p>Avg time meditating this past week:<br/> <span>~42min</span></p>
        </div>
      </div>
    </div>
  );
}
