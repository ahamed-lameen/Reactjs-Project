/**
* 
* dashboard.jsx
* @author - Lameen
* @date - 05/04/2023
**/

import progressLogo from '../../../assets/img/progress.png';
import UpcomingInspectionLogo from '../../../assets/img/upcoming-inspection.png';
import totalInspectionLogo from '../../../assets/img/total-inspection.png';
import './style.css'
import MetricWidget from '../../components/metricWidget/metricWidget';
import TrafficWidget from '../../components/trafficWidget/trafficWidget';
import TrafficCount from '../../components/trafficCount/trafficCount';
import ProgressBar from '../../components/progressBar/progressBar';

function Dashboard() {
    return ( 
        <>
        <div className='row dash'>
            <div className='cell-1'>
                <MetricWidget title={"71"} subTitle={"Inspections in Progress"} img={<img src={progressLogo} className='progress-img'/>}/>
            </div>
            <div className='cell-1'>
                <MetricWidget title={"36"} subTitle={"Upcoming Inspections"} img={<img src={UpcomingInspectionLogo} width='51px' height='56px'/>}/>
            </div>
            <div className='cell-1'>
                <MetricWidget title={"562k"} subTitle={"Total Inspection"} img={<img src={totalInspectionLogo}  width='45px' height='50px'/>}/>
            </div>
        </div>
        <div className='row'>
            <div className='traffic-container'>
                <div className='row'>
                    <div className='cell-1'>
                        <h3 className='site-title'>Traffic by Site</h3>
                    </div>
                    <div className='cell-2'>
                        <div className='yearly-box'>
                            <div className='label-status'>Yearly <i class="fa-solid fa-chevron-down"></i></div>
                        </div>
                    </div>
                </div>
                <div className='row'>    
                    <div className='cell-1'>
                        <TrafficWidget trafficTitle="86" trafficSubtitle="Assigned" color='#166693'/>
                    </div>
                    <div className='cell-1'>
                         <TrafficWidget trafficTitle="125" trafficSubtitle="In Progress"  color='#38E2F9' />
                    </div>
                </div>
                <div className='row'>
                <div className='cell-1'>
                        <TrafficWidget trafficTitle="32" trafficSubtitle="In Review" color='#FFC107'  />
                    </div>
                    <div className='cell-1'>
                        <TrafficWidget trafficTitle="02" trafficSubtitle="Cancelled" color='#FF0000' />
                    </div>
                    <div className='cell-1'>
                        <TrafficWidget trafficTitle="146" trafficSubtitle="Completed" color='#54D62C' />
                    </div>
                </div>
            </div>
            <div className='traffic-timing-box'>
                <h3 className='timing-title'>Wednesday, 16 November 2022</h3>
                <ProgressBar color='#166693' percentage={38} />
                <ProgressBar color='#38E1F9' percentage={25} />
                <ProgressBar color='#FFC107' percentage={38} />
                <ProgressBar color='#FF0000' percentage={65} />
                <ProgressBar color='#54D62C' percentage={75} />
                <div className='row'>
                    <div className='cell-1'>
                        <TrafficCount title='324' subTitle='Assigned' color='#166693' />
                    </div>
                    <div className='cell-1'>
                        <TrafficCount title='56' subTitle='In progress' color='#38E2F9'/>
                    </div>
                    <div className='cell-1'>
                        <TrafficCount title='120' subTitle='In Review' color='#FFC107' />
                    </div>
                </div>
                <div className='row mt-10'>
                    <div className='cell-1'>
                        <TrafficCount title='9' subTitle='Cancelled' color='#FF0000'/>
                    </div>
                    <div className='cell-1'>
                        <TrafficCount title='210' subTitle='Completed' color='#54D62C' />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;