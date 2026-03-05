import { Component, AfterViewInit } from '@angular/core';
import * as THREE from 'three';
// @ts-ignore
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-imagen360',
  standalone: true,
  templateUrl: './imagen360.html',
  styleUrls: ['./imagen360.scss']
})
export class Imagen360Component implements AfterViewInit {

  ngAfterViewInit(): void {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1, // Un valor menor ayuda a evitar recortes
      1000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("viewer360")?.appendChild(renderer.domElement);

    // --- CONFIGURACIÓN DE CONTROLES ---
    const controls = new OrbitControls(camera, renderer.domElement);
    // Como estás DENTRO de la esfera, queremos que rote suavemente
    controls.enableZoom = false; // Opcional: deshabilita el zoom si solo quieres rotar
    controls.enablePan = false;  // Evita que la cámara se desplace lateralmente
    controls.rotateSpeed = -0.25; // El signo negativo hace que el arrastre se sienta natural en 360
    // ----------------------------------

    const geometry = new THREE.SphereGeometry(500, 60, 40);
    geometry.scale(-1, 1, 1);

    const texture = new THREE.TextureLoader().load('assets/360/panorama.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    camera.position.set(0, 0, 0.1); // Movida ligeramente para que los controles funcionen mejor

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update(); // Actualiza la posición de la cámara según el mouse
      renderer.render(scene, camera);
    };

    animate();
  }
}