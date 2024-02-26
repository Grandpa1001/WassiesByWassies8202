import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useCharacterAnimations } from "../contexts/CharacterAnimations";

const Wassies =(props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./models/wassies.glb')
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
        <group name="Idle" position={[-0.001, -0.002, 0.015]} rotation={[-0.065, -0.091, -0.053]}>
          <primitive object={nodes.Hips} />
          <skinnedMesh castShadow name="Body_Spiky" geometry={nodes.Body_Spiky.geometry} material={materials['Base Material.001']} skeleton={nodes.Body_Spiky.skeleton} />
          <skinnedMesh castShadow name="ChestSigil_Moon" geometry={nodes.ChestSigil_Moon.geometry} material={materials['Base Material.004']} skeleton={nodes.ChestSigil_Moon.skeleton} />
          <skinnedMesh castShadow name="Feet_Sandals001" geometry={nodes.Feet_Sandals001.geometry} material={materials['Base Material.002']} skeleton={nodes.Feet_Sandals001.skeleton} />
          <group name="Beak_Wassie_">
            <skinnedMesh castShadow name="Beak_Wassie002" geometry={nodes.Beak_Wassie002.geometry} material={materials['Base Material']} skeleton={nodes.Beak_Wassie002.skeleton} />
            <skinnedMesh castShadow name="Beak_Wassie002_1" geometry={nodes.Beak_Wassie002_1.geometry} material={materials.BlackPartBeak} skeleton={nodes.Beak_Wassie002_1.skeleton} />
          </group>
          <skinnedMesh castShadow name="Eyes_Dead" geometry={nodes.Eyes_Dead.geometry} material={materials['Base Material.003']} skeleton={nodes.Eyes_Dead.skeleton} />
        </group>
      </group>
    </group>
  )
}

export default Wassies;

useGLTF.preload('./models/wassies.glb')
