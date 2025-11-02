import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  HostListener, inject,
} from '@angular/core';
import * as THREE from 'three';
import { FontLoader, Font } from 'three/examples/jsm/loaders/FontLoader.js';
import {BrowserHelpersService} from '@app/services/browser-helpers.service';

@Component({
  selector: 'app-particle-effect',
  standalone: true,
  templateUrl: './particle-effect.html',
  styleUrls: ['./particle-effect.scss'],
})
export class ParticleEffectComponent implements AfterViewInit, OnDestroy {
  // 1. ШЕЙДЕРИ (переміщені з HTML)
  private readonly vertexShader = `
    attribute float size;
    attribute vec3 customColor;
    varying vec3 vColor;

    void main() {
      vColor = customColor;
      vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
      gl_PointSize = size * ( 300.0 / -mvPosition.z );
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  private readonly fragmentShader = `
    uniform vec3 color;
    uniform sampler2D pointTexture;
    varying vec3 vColor;

    void main() {
      gl_FragColor = vec4( color * vColor, 1.0 );
      gl_FragColor = gl_FragColor * texture2D( pointTexture, gl_PointCoord );
    }
  `;

  // 2. ДОСТУП ДО DOM
  // Використовуємо @ViewChild замість document.getElementById
  @ViewChild('magicCanvas') private magicCanvasRef!: ElementRef<HTMLDivElement>;
  private get magicContainer(): HTMLDivElement {
    return this.magicCanvasRef.nativeElement;
  }

  // 3. ВЛАСТИВОСТІ THREE.JS
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private particles!: THREE.Points;
  private geometryCopy!: THREE.BufferGeometry;
  private planeArea!: THREE.Mesh;
  private raycaster = new THREE.Raycaster();
  private mouse = new THREE.Vector2(-200, 200);
  private colorChange = new THREE.Color();

  // 4. ВЛАСТИВОСТІ СТАНУ ТА ДАНИХ
  private buttonDown = false; // Виправив оригінальну описку 'buttom'
  private font!: Font;
  private particleTexture!: THREE.Texture;
  private data = {
    text: 'FUTURE\nIS NOW',
    amount: 1500,
    particleSize: 1,
    particleColor: 0xffffff,
    textSize: 16,
    area: 250,
    ease: 0.05,
  };

  private browserHelperService: BrowserHelpersService = inject(BrowserHelpersService);

  // 5. ЖИТТЄВИЙ ЦИКЛ ANGULAR
  ngAfterViewInit(): void {
    if(this.browserHelperService.isBrowser()) {
      this.preloadAssets();
    }
  }

  ngOnDestroy(): void {
    if (this.browserHelperService.isBrowser()) {
      // Важливе очищення, щоб уникнути витоків пам'яті
      if (this.renderer) {
        this.renderer.setAnimationLoop(null);
        this.renderer.dispose();
      }
    }
    // ... тут можна додати очищення геометрій, матеріалів тощо
  }

  // 6. ОБРОБНИКИ ПОДІЙ (через @HostListener)
  @HostListener('window:resize')
  onWindowResize(): void {
    if (this.camera && this.renderer) {
      this.camera.aspect =
        this.magicContainer.clientWidth / this.magicContainer.clientHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(
        this.magicContainer.clientWidth,
        this.magicContainer.clientHeight
      );
    }
  }

  @HostListener('document:mousedown', ['$event'])
  onMouseDown(event: MouseEvent): void {
    this.updateMousePosition(event);

    const vector = new THREE.Vector3(this.mouse.x, this.mouse.y, 0.5);
    vector.unproject(this.camera);
    const dir = vector.sub(this.camera.position).normalize();
    const distance = -this.camera.position.z / dir.z;
    // this.currenPosition = this.camera.position.clone().add( dir.multiplyScalar( distance ) ); // Здається, ця змінна не використовується

    this.buttonDown = true;
    this.data.ease = 0.01;
  }

  @HostListener('document:mouseup')
  onMouseUp(): void {
    this.buttonDown = false;
    this.data.ease = 0.05;
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    this.updateMousePosition(event);
  }

  private updateMousePosition(event: MouseEvent): void {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  // 7. ЛОГІКА ІНІЦІАЛІЗАЦІЇ
  private preloadAssets(): void {
    const manager = new THREE.LoadingManager();
    manager.onLoad = () => {
      // Усі ресурси завантажені, запускаємо середовище
      this.initEnvironment();
    };

    const loader = new FontLoader(manager);
    loader.load(
      'https://res.cloudinary.com/dydre7amr/raw/upload/v1612950355/font_zsd4dr.json',
      (font) => {
        this.font = font;
      }
    );

    const textureLoader = new THREE.TextureLoader(manager);
    this.particleTexture = textureLoader.load(
      'https://res.cloudinary.com/dfvtkoboz/image/upload/v1605013866/particle_a64uzf.png'
    );
  }

  private initEnvironment(): void {
    this.scene = new THREE.Scene();
    this.createCamera();
    this.createRenderer();
    this.setupParticleSystem();
    this.startAnimationLoop();
  }

  private createCamera(): void {
    this.camera = new THREE.PerspectiveCamera(
      65,
      this.magicContainer.clientWidth / this.magicContainer.clientHeight,
      1,
      10000
    );
    this.camera.position.set(0, 0, 100);
  }

  private createRenderer(): void {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(
      this.magicContainer.clientWidth,
      this.magicContainer.clientHeight
    );
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.magicContainer.appendChild(this.renderer.domElement);
  }

  private setupParticleSystem(): void {
    const geometry = new THREE.PlaneGeometry(
      this.visibleWidthAtZDepth(100, this.camera),
      this.visibleHeightAtZDepth(100, this.camera)
    );
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      transparent: true,
    });
    this.planeArea = new THREE.Mesh(geometry, material);
    this.planeArea.visible = false;
    this.scene.add(this.planeArea); // Додаємо площину до сцени для роботи Raycaster
    this.createText();
  }

  private createText(): void {
    let thePoints: THREE.Vector3[] = [];

    const shapes = this.font.generateShapes(
      this.data.text,
      this.data.textSize
    );
    const geometry = new THREE.ShapeGeometry(shapes);
    geometry.computeBoundingBox();

    const xMid =
      -0.5 * (geometry.boundingBox!.max.x - geometry.boundingBox!.min.x);
    const yMid = (geometry.boundingBox!.max.y - geometry.boundingBox!.min.y) / 2.85;

    geometry.center();

    let holeShapes: THREE.Path[] = [];

    for (let q = 0; q < shapes.length; q++) {
      const shape = shapes[q];
      if (shape.holes && shape.holes.length > 0) {
        for (let j = 0; j < shape.holes.length; j++) {
          const hole = shape.holes[j];
          holeShapes.push(hole);
        }
      }
    }
    //@ts-ignore
    shapes.push.apply(shapes, holeShapes);

    let colors: number[] = [];
    let sizes: number[] = [];

    for (let x = 0; x < shapes.length; x++) {
      const shape = shapes[x];
      const amountPoints =
        shape.type == 'Path' ? this.data.amount / 2 : this.data.amount;
      const points = shape.getSpacedPoints(amountPoints);

      points.forEach((element: any) => {
        const a = new THREE.Vector3(element.x, element.y, 0);
        thePoints.push(a);
        colors.push(this.colorChange.r, this.colorChange.g, this.colorChange.b);
        sizes.push(1);
      });
    }

    const geoParticles = new THREE.BufferGeometry().setFromPoints(thePoints);
    geoParticles.translate(xMid, yMid, 0);
    geoParticles.setAttribute(
      'customColor',
      new THREE.Float32BufferAttribute(colors, 3)
    );
    geoParticles.setAttribute(
      'size',
      new THREE.Float32BufferAttribute(sizes, 1)
    );

    const material = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xffffff) },
        pointTexture: { value: this.particleTexture },
      },
      vertexShader: this.vertexShader,
      fragmentShader: this.fragmentShader,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
    });

    this.particles = new THREE.Points(geoParticles, material);
    this.scene.add(this.particles);

    this.geometryCopy = new THREE.BufferGeometry();
    this.geometryCopy.copy(this.particles.geometry);
  }

  // 8. АНІМАЦІЙНИЙ ЦИКЛ (RENDER LOOP)
  private startAnimationLoop(): void {
    this.renderer.setAnimationLoop(() => {
      this.updateParticles();
      this.renderer.render(this.scene, this.camera);
    });
  }

  private updateParticles(): void {
    const time = (0.001 * performance.now()) % 12 / 12;
    const zigzagTime = (1 + Math.sin(time * 2 * Math.PI)) / 6;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObject(this.planeArea);

    if (intersects.length > 0) {
      const pos = this.particles.geometry.attributes['position'];
      const copy = this.geometryCopy.attributes['position'];
      const colors = this.particles.geometry.attributes['customColor'];
      const size = this.particles.geometry.attributes['size'];

      const mx = intersects[0].point.x;
      const my = intersects[0].point.y;
      const mz = intersects[0].point.z;

      for (let i = 0, l = pos.count; i < l; i++) {
        const initX = copy.getX(i);
        const initY = copy.getY(i);
        const initZ = copy.getZ(i);

        let px = pos.getX(i);
        let py = pos.getY(i);
        let pz = pos.getZ(i);

        this.colorChange.setHSL(0.5, 1, 1);
        colors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b);
        colors.needsUpdate = true;

        size.setX(i, this.data.particleSize);
        size.needsUpdate = true;

        let dx = mx - px;
        let dy = my - py;
        // const dz = mz - pz; // dz не використовується

        const mouseDistance = this.distance(mx, my, px, py);
        let d = (dx = mx - px) * dx + (dy = my - py) * dy;
        const f = -this.data.area / d;

        if (this.buttonDown) {
          const t = Math.atan2(dy, dx);
          px -= f * Math.cos(t);
          py -= f * Math.sin(t);

          this.colorChange.setHSL(0.5 + zigzagTime, 1.0, 0.5);
          colors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b);
          colors.needsUpdate = true;

          if (
            px > initX + 70 ||
            px < initX - 70 ||
            py > initY + 70 ||
            py < initY - 70
          ) {
            this.colorChange.setHSL(0.15, 1.0, 0.5);
            colors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b);
            colors.needsUpdate = true;
          }
        } else {
          if (mouseDistance < this.data.area) {
            if (i % 5 == 0) {
              const t = Math.atan2(dy, dx);
              px -= 0.03 * Math.cos(t);
              py -= 0.03 * Math.sin(t);

              this.colorChange.setHSL(0.15, 1.0, 0.5);
              colors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b);
              colors.needsUpdate = true;

              size.setX(i, this.data.particleSize / 1.2);
              size.needsUpdate = true;
            } else {
              const t = Math.atan2(dy, dx);
              px += f * Math.cos(t);
              py += f * Math.sin(t);

              pos.setXYZ(i, px, py, pz);
              pos.needsUpdate = true;

              size.setX(i, this.data.particleSize * 1.3);
              size.needsUpdate = true;
            }

            if (
              px > initX + 10 ||
              px < initX - 10 ||
              py > initY + 10 ||
              py < initY - 10
            ) {
              this.colorChange.setHSL(0.15, 1.0, 0.5);
              colors.setXYZ(i, this.colorChange.r, this.colorChange.g, this.colorChange.b);
              colors.needsUpdate = true;

              size.setX(i, this.data.particleSize / 1.8);
              size.needsUpdate = true;
            }
          }
        }

        px += (initX - px) * this.data.ease;
        py += (initY - py) * this.data.ease;
        pz += (initZ - pz) * this.data.ease;

        pos.setXYZ(i, px, py, pz);
        pos.needsUpdate = true;
      }
    }
  }

  // 9. ДОПОМІЖНІ ФУНКЦІЇ
  private visibleHeightAtZDepth(depth: number, camera: THREE.PerspectiveCamera): number {
    const cameraOffset = camera.position.z;
    if (depth < cameraOffset) depth -= cameraOffset;
    else depth += cameraOffset;

    const vFOV = (camera.fov * Math.PI) / 180;
    return 2 * Math.tan(vFOV / 2) * Math.abs(depth);
  }

  private visibleWidthAtZDepth(depth: number, camera: THREE.PerspectiveCamera): number {
    const height = this.visibleHeightAtZDepth(depth, camera);
    return height * camera.aspect;
  }

  private distance(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }
}
