import './style.css'
import * as THREE from 'three'
//import gsap from 'gsap'
//import { unique } from 'webpack-merge'
import Stats from 'stats.js'


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = { width: 800, height: 600 }

// Scene
const scene = new THREE.Scene()


//group
const group = new THREE.Group()
group.position.set( 0, 0, 0)
group.scale.set( 1, 1, 1)
// group.rotation.y=1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.TorusGeometry(10,3,16,5),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.TorusGeometry(10,3,16,5),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)
// cube2.position.x=-2
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.TorusGeometry(10,3,16,5),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
)
// cube3.position.x=2
group.add(cube3)


// Camera


const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height) // fov, aspect
camera.position.x = 0
camera.position.y = 0
camera.position.z = 20
camera.lookAt(group.position)
scene.add(camera)

//camera look at
// camera.lookAt(mesh.position)

//AxesHelper

// const axesHelper= new THREE.AxesHelper()
// scene.add(axesHelper)

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


//stat
var stats = new Stats();
stats.showPanel( 0 ); // 0: fps, 1: ms, 2: mb, 3+: custom
document.body.appendChild( stats.dom );

//Animate

const clock = new THREE.Clock()

// gsap.to(group.position,{duration:1,delay:1,x:2,yoyo:true,repeat:-1})  //animation using GSAP
// gsap.to(group.position,{duration:1,delay:2,x:-2,yoyo:true,repeat:-1})

// anime({
//     targets:['group.position'],
//     translateX:2,
//     direction:'alternate',
//     loop:true,
//     easing:'easeInOutSine'
// })

const tick = () => {

    const elapsedTime =clock.getElapsedTime()

    stats.begin()                                      //stat for 3js animation

    // group.position.y = Math.sin(elapsedTime)
    // group.position.x = Math.cos(elapsedTime)
    cube3.rotation.y += 0.01
    cube2.rotation.x += 0.01  
    cube1.rotation.z += 0.01 
    // group.scale.z = Math.tan(elapsedTime)
    // group.scale.x = Math.sin(elapsedTime)
    

    renderer.render(scene, camera)

    stats.end()

    window.requestAnimationFrame(tick)
}
tick() 




//object properties👇

// const geometry = new THREE.BoxGeometry(1, 1, 1) // width, height, depth
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)

//object positioning 

// mesh.position.x=0.7;
// mesh.position.y=-0.6;
// mesh.position.z=1;

// mesh.position.set(0.7, -0.6, 1)

//object scaling
// mesh.scale.x=1
// mesh.scale.y=1
// mesh.scale.z=2

// mesh.scale.set(2,0.5,0.5)

//object rotating
// mesh.rotation.x=0
// mesh.rotation.y= Math.PI * 0.5 
// mesh.rotation.z=0
// mesh.rotation.reorder('YXZ')
// mesh.rotation.set(0,1,0)





//some js sample👇

// import './style.css'
// import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
// import * as dat from 'dat.gui'

// // Debug
// const gui = new dat.GUI()

// // Canvas
// const canvas = document.querySelector('canvas.webgl')

// // Scene
// const scene = new THREE.Scene()

// // Objects
// const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );

// // Materials

// const material = new THREE.MeshBasicMaterial()
// material.color = new THREE.Color(0xff0000)

// // Mesh
// const sphere = new THREE.Mesh(geometry,material)
// scene.add(sphere)

// // Lights

// const pointLight = new THREE.PointLight(0xffffff, 0.1)
// pointLight.position.x = 2
// pointLight.position.y = 3
// pointLight.position.z = 4
// scene.add(pointLight)

// /**
//  * Sizes
//  */
// const sizes = {
//     width: window.innerWidth,
//     height: window.innerHeight
// }

// window.addEventListener('resize', () =>
// {
//     // Update sizes
//     sizes.width = window.innerWidth
//     sizes.height = window.innerHeight

//     // Update camera
//     camera.aspect = sizes.width / sizes.height
//     camera.updateProjectionMatrix()

//     // Update renderer
//     renderer.setSize(sizes.width, sizes.height)
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
// })

// /**
//  * Camera
//  */
// // Base camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
// camera.position.x = 0
// camera.position.y = 0
// camera.position.z = 2
// scene.add(camera)

// // Controls
// // const controls = new OrbitControls(camera, canvas)
// // controls.enableDamping = true

// /**
//  * Renderer
//  */
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// /**
//  * Animate
//  */

// const clock = new THREE.Clock()

// const tick = () =>
// {

//     const elapsedTime = clock.getElapsedTime()

//     // Update objects
//     sphere.rotation.y = .5 * elapsedTime

//     // Update Orbital Controls
//     // controls.update()

//     // Render
//     renderer.render(scene, camera)

//     // Call tick again on the next frame
//     window.requestAnimationFrame(tick)
// }

// tick()




