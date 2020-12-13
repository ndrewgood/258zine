import React from "react"
import * as THREE from "three"
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import logo from '../images/258logo3.svg'
import joeCube from '../images/joeCube.jpg'
import ksCube from '../images/ksCube.jpg'
import bkCube from '../images/bkCube.jpg'
import hsCube from '../images/hsCube.jpg'
import wahCube from '../images/wahCube.jpg'
import rwCube from '../images/rwCube.jpg'


class Scene extends React.Component {



  componentDidMount() {
    let scene = new THREE.Scene()
    // scene.background = new THREE.Color( 0xcddde5 );
    this.camera = new THREE.PerspectiveCamera(75, this.mount.offsetWidth/this.mount.offsetHeight, 0.1, 1000)

    
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight)
    this.renderer.setPixelRatio( 2 );
    this.mount.appendChild(this.renderer.domElement)

    const controls = new OrbitControls( this.camera, this.renderer.domElement );
    controls.screenSpacePanning = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = -0.5;   
    controls.enableDamping = true;
    controls.enablePan = false;

    loadSVG(logo);
    const group = new THREE.Group();

    const urls = [
      joeCube, hsCube,
      bkCube, wahCube,
      ksCube, rwCube
    ];

    let textureCube = new THREE.CubeTextureLoader().load(urls);
    textureCube.mapping = THREE.CubeRefractionMapping;
    // scene.background = textureCube;



    function loadSVG( url ) {
        const loader = new SVGLoader();



        loader.load( url, function ( data ) {

					const paths = data.paths;

					group.scale.set( 0.75, -0.75, 0.75 );
					group.position.x = 0;
					group.position.y = 0;
			
          const material = new THREE.MeshBasicMaterial( {
            color: 0x363c40,
            combine: THREE.AddOperation,
            refractionRatio: 0.85, 
            reflectivity: .7,
            envMap: textureCube
            
          } );


					for ( let i = 0; i < paths.length; i++ ) {
                        const shapes = paths[i].toShapes(true);

                        // Each path has array of shapes
                        shapes.forEach((shape, j) => {
                            // Finally we can take each shape and extrude it
                            const geometry = new THREE.ExtrudeGeometry(shape, {
                            steps: 6,
                            depth: 20,
                            bevelEnabled: true,
                            bevelThickness: 1,
                            bevelSize: 1,
                            bevelOffset: -1,
                            bevelSegments: 10
                            });

                            // Create a mesh and add it to the group
                            const mesh = new THREE.Mesh(geometry, material);

                            group.add(mesh);
                        })
					}

                    const box = new THREE.Box3().setFromObject(group);
                    const size = new THREE.Vector3();
                    box.getSize(size);

                    const yOffset = size.y / -1.5;
                    const xOffset = size.x / -1.5;
                    const zOffset = size.z / -1.5;

                    // Offset all of group's elements, to center them
                    group.children.forEach(item => {
                    item.position.x = xOffset;
                    item.position.y = yOffset;
                    item.position.z = zOffset;
                    });



					scene.add( group );

				} );
    }

    scene.add( new THREE.AmbientLight( 0x222222 ) );

    if (this.mount.offsetWidth < 600) {
      this.camera.position.z = 70
    } else {
      this.camera.position.z = 45
    }
    


    this.animate = function () {
      requestAnimationFrame(this.animate.bind(this))
      group.rotation.y += 0.005;
      controls.update();
      this.renderer.render(scene, this.camera)
    }

    this.animate()

    window.addEventListener('resize', this.onWindowResize.bind(this), false)
  }

  onWindowResize() {
    if (this.mount) {
      this.camera.aspect = this.mount.offsetWidth / this.mount.offsetHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight)
    }
  }

  render() {
    return (
      <div ref={ref => (this.mount = ref)} style={{ width: `100vw`, height: `100vh` }}></div>
    )
  }
}

export default Scene