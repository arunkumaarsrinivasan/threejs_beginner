import './style.css'
import * as THREE from 'three'
//import gsap from 'gsap'
//import { unique } from 'webpack-merge'
import Stats from 'stats.js'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'



//Cursor
const cursor = {
    x:0,
    y:0
}
window.addEventListener('mousemove',(mov)=>{
    
    cursor.x= mov.clientX / sizes.width -0.5
    cursor.y= - (mov.clientY / sizes.height -0.5)

    // console.log(cursor.x, cursor.y)

})

window.addEventListener('resize',()=>
{

// Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

// Update camera
    camera.aspect= sizes.width / sizes.height
    camera.updateProjectionMatrix()

// update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})

window.addEventListener('dblclick',()=>
{
    if(!document.fullscreenElement)
    {
        canvas.requestFullscreen()
    }
    else
    {
        canvas.cancelFullscreen()
    }
})


// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = { 
    width: window.innerWidth, 
    height: window.innerHeight 
}

// Scene
const scene = new THREE.Scene()

// const geometry = new THREE.BufferGeometry()

// const vertex1 = new THREE.Vector3(0,0,0)
// geometry.vertices.push(vertex1)

// const vertex2 = new THREE.Vector3(0,1,0)
// geometry.vertices.push(vertex2)

// const vertex3 = new THREE.Vector3(1,0,0)
// geometry.vertices.push(vertex3)



//group
const group = new THREE.Group()
group.position.set( 0, 0, 0)
group.scale.set( 1, 1, 1)
// group.rotation.y=1
scene.add(group)


// const bufferGeometry = new THREE.BufferGeometry()

// const vertex1 = new THREE.Vector3(0,0,0)
// bufferGeometry.vertices.push(vertex1)

// const vertex2 = new THREE.Vector3(0,1,0)
// bufferGeometry.vertices.push(vertex2)

// const vertex3 = new THREE.Vector3(0,0,1)
// bufferGeometry.vertices.push(vertex3)

// const material = new THREE.MeshBasicMaterial(
//     {
//         color: 0xff0000,
//         wireframe:true
//     }
// )

// const mesh = new THREE.Mesh(bufferGeometry, material)

// group.add(mesh)

const cube1 = new THREE.Mesh(
    new THREE.TorusGeometry(10,3,16,5),
    new THREE.MeshBasicMaterial({color: 0xff0000})
)
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.TorusGeometry(10,3,16,7),
    new THREE.MeshBasicMaterial({color: 0x00ff00})
)
// cube2.position.x=-2
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.TorusGeometry(10,3,16,9),
    new THREE.MeshBasicMaterial({color: 0x0000ff})
)
// cube3.position.x=2
group.add(cube3)


// Camera
// const left = -10
// const right = 10
// const top = 10
// const bottom = -10
const near = 0.1
const far = 100
const fov = 75

// const camera = new THREE.OrthographicCamera(
//     left * aspectRatio,
//     right * aspectRatio,
//     top,
//     bottom,
//     near,
//     far
//     )

const aspectRatio = sizes.width / sizes.height

const camera = new THREE.PerspectiveCamera(
    fov,
    aspectRatio,
    near,
    far
    ) // fov, aspect
// camera.position.x = 2
// camera.position.y = 2
camera.position.z = 20
camera.lookAt(group.position)
scene.add(camera)

const controls = new OrbitControls(camera,canvas)
// controls.enabled = false
controls.enableDamping= true
// controls.target.y= 2
// controls.update()

//camera look at
// camera.lookAt(mesh.position)

//AxesHelper

// const axesHelper= new THREE.AxesHelper()
// scene.add(axesHelper)

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
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

    //update Camera
    // camera.position.x= Math.sin(cursor.x * Math.PI * 2) * 3
    // camera.position.z= Math.cos(cursor.x * Math.PI * 2) * 3
    // camera.position.y= cursor.y * 5
    // camera.lookAt(group.position)

    stats.begin()                                      //stat for 3js animation

    // group.position.y = Math.sin(elapsedTime)
    // group.position.x = Math.cos(elapsedTime)
    // cube3.rotation.y += 0.01
    // cube2.rotation.x += 0.01  
    //cube1.rotation.x += 0.01 
    // group.scale.z = Math.tan(elapsedTime)
    // group.scale.x = Math.sin(elapsedTime)
    controls.update()
    

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




