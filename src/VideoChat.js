import React, { Component } from 'react';
import _ from 'lodash';
import 'webrtc-adapter';

class VideoChat extends Component {
  componentDidMount() {}

  videoCapable() {
    return !!navigator.mediaDevices.getUserMedia;
  }

  approved = stream => {
    this.mediaStream = stream;
    console.log('approved');
    let video = document.querySelector('.self-video');
    // Should this be done the react way?
    video.srcObject = stream;
    video.onloadedmetadata = function(e) {
      console.log('ready');
    };
  };

  rejected = () => {
    console.log('rejected');
  };

  stopVideoStream = () => {
    _.each(this.mediaStream.getTracks(), track => {
      track.stop();
    });
  };

  startVideoCall = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then(this.approved)
      .catch(this.rejected);
  };

  render() {
    return !this.videoCapable()
      ? 'Your browser cannot stream video'
      : <div>
          <video autoPlay className="self-video" />
          {/* <video autoPlay className="remote-video" /> */}
          <div className="video-call-controls">
            <button onClick={this.startVideoCall}>Video call</button>
            <button onClick={this.stopVideoStream}>Stop video</button>
          </div>
        </div>;
  }
}

export default VideoChat;
