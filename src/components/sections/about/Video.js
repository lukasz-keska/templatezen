import React from 'react';
import Videohelper from '../../../helper/Videohelper';

class Video extends Videohelper {
    render() { 
        return (
            <div className="video-wrap-section">
                <div className="video_wrap">
                    <img src={process.env.PUBLIC_URL + "/assets/images/About-us/Video-01.png"} alt="img" />
                    <div className="video_icon">
                        <a rel={"external"} className="popup-youtube" href={"https://www.youtube.com/watch?v=KH1pcNUTa6U"}><i className="fa fa-play" /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video;