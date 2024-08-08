//creating 3js stars

import React, {useRef, useState, Suspense} from 'react'
import {Canvas, useFrame} from '@react-three/fiber';
import {Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import styled from 'styled-components';
import { c } from 'maath/dist/index-0332b2ed.esm';

const StyledCanvasWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    inset: 0;
`;

const Stars = (props) => {
    const ref = useRef();
    const[sphere] = useState(() => 
        random.inSphere(new Float32Array(5000), {radius: 1.2})
);

useFrame((state,delta) => {
    ref.current.rotation.y += delta / 15;
    ref.current.rotation.x += delta / 10;
});
    

  return (
    //Rotate the stars
    <group rotation={[0, 0, Math.PI / 4]}>  
        <Points ref={ref} positions={sphere} stride={3} frustumCulled
        {...props}>
            <PointMaterial 
            trasnparent 
            size={0.002} 
            color="white"
            sizeAttenuation={true}
            depthWrite={false} 
            />
        </Points>
    </group>
  );
};

const StyledStarCanvas =  () => {
    return (
        <StyledCanvasWrapper>
        <Canvas camera={{position: [0, 0, 1]}}>
            <Suspense fallback={null}>
                <Stars />
            </Suspense>
            <Preload all />
        </Canvas>
    </StyledCanvasWrapper>
    );       
  
};

export default StyledStarCanvas;
