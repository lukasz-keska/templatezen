import React from 'react';
import Videohelper from '../../../helper/Videohelper';

class Video extends Videohelper {
    render() {
        return (
            <div className="box_wrap video-bg home-video">
                <div className="video-content">
                    <div className="video_icon">
                        <a rel={"external"} className="popup-youtube" href={"http://www.youtube.com/watch?v=KH1pcNUTa6U"}> <i className="fas fa-play" /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Video;