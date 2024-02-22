import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

const Polak =(props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/polak.glb')
  const { setAnimations, animationIndex } = useCharacterAnimations();
  const { actions, names } = useAnimations(animations, group)

useEffect(() => {
  setAnimations(names);
}, [names]);

useEffect(() => {
  actions[names[animationIndex]].reset().fadeIn(0.5).play();
    return() =>{
      actions[names[animationIndex]].fadeOut(0.5);
    };
}, [animationIndex]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Rozciaganie" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <group name="thePolak2">
            <skinnedMesh castShadow name="thePolak2_1" geometry={nodes.thePolak2_1.geometry} material={materials['ThePolac2-Material.001']} skeleton={nodes.thePolak2_1.skeleton} />
            <skinnedMesh castShadow name="thePolak2_2" geometry={nodes.thePolak2_2.geometry} material={materials['palette.004']} skeleton={nodes.thePolak2_2.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

export default Polak;

useGLTF.preload('./models/polak.glb')
