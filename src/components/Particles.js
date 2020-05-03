import { Particles as ParticlesJs } from '@blackbox-vision/react-particles';
import React from 'react';

const Particles = props => (
  <ParticlesJs
    id={props.id}
    width="auto"
    height="100vh"
    params={{
      particles: {
        number: {
          value: 175,
          density: {
            enable: false,
          },
        },
        size: {
          value: 3,
          random: true,
          anim: {
            speed: 4,
            size_min: 0.3,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          random: true,
          speed: 1,
          direction: 'top',
          out_mode: 'out',
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: false,
            mode: 'bubble',
          },
          onclick: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          bubble: {
            distance: 250,
            duration: 2,
            size: 10,
            opacity: 0,
          },
          repulse: {
            distance: 400,
            duration: 4,
          },
        },
      },
      retina_detect: true,
    }}
  />
);

export default Particles;
