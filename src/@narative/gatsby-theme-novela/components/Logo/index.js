import React from 'react';

/**
 * Paste in your SVG logo and return it from this component.
 * Make sure you have a height set for your logo.
 * It is recommended to keep the height within 25-35px.
 * Logo comes with a property vallue called `fill`. `fill` is useful 
 * when you want to change your logo depending on the theme you are on. 
 */
export default function Logo({ fill }) {
  return (
	<svg height="35" width="35">
	  <g fill="none" stroke="black" stroke-width="2">
		<path stroke-linecap="butt" d="M5 10 l215 0" />
		<path stroke-linecap="butt" d="M5 20 l215 0" />
		<path stroke-linecap="butt" d="M5 30 l215 0" />
	  </g>
    </svg>
  );
}