import { Component, AfterViewInit, Input, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-three-js',
  standalone: true,
  template: `<div #rendererContainer style="width: 100%; height: 100vh;"></div>`,
})
export class ThreeJSComponent implements AfterViewInit {
  @ViewChild('rendererContainer') rendererContainer!: ElementRef;
  @Input() textureUrl: string = ''; // Esto permite recibir 'assets/360/panorama.jpg'

  ngAfterViewInit(): void {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    this.rendererContainer.nativeElement.appendChild(renderer.domElement);

    const controls = new (OrbitControls as any)(camera, renderer.domElement);
    controls.rotateSpeed = -0.25;

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);
    
    const texture = new THREE.TextureLoader().load(this.textureUrl);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.set(0, 0, 0.1);

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();
  }
}