import React from 'react';



<Circle
    x={200} y={100} radius={30}
    fill='black'
    strokeWidth={this.state.isMouseInside ? 5 : 1}
    onMouseEnter={this.handleMouseEnter}
    onMouseLeave={this.handleMouseLeave}
/>