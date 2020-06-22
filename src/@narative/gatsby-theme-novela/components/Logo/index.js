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
	<svg width="35" height="35">
  		<rect width="35" height="35" style="fill:gray" />
  		<text fill="#ffffff" font-size="25" font-family="Verdana" x="5" y="27">
  		W</text>
	</svg>
  );
}
