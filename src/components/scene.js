import React from "react"
import * as THREE from "three"
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import logo from '../images/258logo3.svg'

class Scene extends React.Component {
  componentDidMount() {
    let scene = new THREE.Scene()
    // scene.background = new THREE.Color( 0xb0b0b0 );
    this.camera = new THREE.PerspectiveCamera(75, this.mount.offsetWidth/this.mount.offsetHeight, 0.1, 1000)


    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight)
    this.mount.appendChild(this.renderer.domElement)

    const controls = new OrbitControls( this.camera, this.renderer.domElement );
	controls.screenSpacePanning = true;
    

    loadSVG(logo);
    const group = new THREE.Group();

    // const helper = new THREE.GridHelper( 260, 20 );
    // helper.rotation.x = Math.PI / 2;
    // scene.add( helper );


    function loadSVG( url ) {
        const loader = new SVGLoader();



        loader.load( url, function ( data ) {

					const paths = data.paths;

					group.scale.set( 0.75, -0.75, 0.75 );
					group.position.x = 0;
					group.position.y = 0;
			
                    const material = new THREE.MeshNormalMaterial();


					for ( let i = 0; i < paths.length; i++ ) {
                        const shapes = paths[i].toShapes(true);

                        // Each path has array of shapes
                        shapes.forEach((shape, j) => {
                            // Finally we can take each shape and extrude it
                            const geometry = new THREE.ExtrudeGeometry(shape, {
                            depth: 20,
                            bevelEnabled: false
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

	// var group = new THREE.Group();

	// for ( var i = 0; i < svgData.paths.length; i ++ ) {

	// 		var path = svgData.paths[ i ];

	// 		var material = new THREE.MeshBasicMaterial( {
	// 			color: path.color,
	// 			side: THREE.DoubleSide,
	// 			depthWrite: false
	// 		} );

	// 		var shapes = svgData.path.toShapes( true );

	// 		for ( var j = 0; j < shapes.length; j ++ ) {
    //             var extrudeSettings = {
    //                 steps: 1,
    //                 depth: -10,
    //                 bevelEnabled: false
    //             }
	// 			var shape = shapes[ j ];
	// 			var geometry = new THREE.ExtrudeBufferGeometry( shape, extrudeSettings );
	// 			var mesh = new THREE.Mesh( geometry, material );
	// 			group.add( mesh );

	// 		}

	// 	}

	// scene.add( group );

    // const Cgeometry = new THREE.BoxGeometry();
    // const Cmaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    // const cube = new THREE.Mesh(Cgeometry, Cmaterial)
    // scene.add(cube)

    this.camera.position.z = 75

    this.animate = function () {
      requestAnimationFrame(this.animate.bind(this))
      group.rotation.y += 0.005
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